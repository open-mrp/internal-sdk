// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoreAPI from '../core/core';
import * as RequestLogsAPI from '../core/request-logs';
import * as BlocksAPI from './blocks';
import {
  BlockCreateParams,
  BlockDeleteResponse,
  BlockListParams,
  BlockRequest,
  Blocks,
  ListMessagingBlock,
  MessagingBlock,
} from './blocks';
import * as EmailInboxesAPI from './email-inboxes';
import {
  CreateEmailInboxRequest,
  EmailInbox,
  EmailInboxCreateParams,
  EmailInboxDeleteResponse,
  EmailInboxListParams,
  EmailInboxRetrieveParams,
  EmailInboxUpdateParams,
  EmailInboxes,
  ListEmailInbox,
  UpdateEmailInboxRequest,
} from './email-inboxes';
import * as PreferencesAPI from './preferences';
import {
  ListNotificationPreference,
  NotificationPreference,
  PreferenceUpdateParams,
  Preferences,
  UpsertNotificationPreferenceRequest,
} from './preferences';
import * as RunsAPI from '../ai/runs/runs';
import * as APIKeysAPI from '../auth/api-keys/api-keys';
import * as AnnouncementsAPI from './announcements/announcements';
import {
  Announcement,
  AnnouncementListParams,
  AnnouncementRetrieveParams,
  Announcements,
  ListAnnouncement,
} from './announcements/announcements';
import * as ConversationsAPI from './conversations/conversations';
import {
  ConversationCreateParams,
  ConversationListParams,
  ConversationRetrieveParams,
  ConversationUpdateParams,
  Conversations,
  CreateConversationRequest,
  ListConversation,
  UpdateConversationRequest,
} from './conversations/conversations';
import * as EmailDomainsAPI from './email-domains/email-domains';
import {
  CreateEmailDomainRequest,
  EmailDomain,
  EmailDomainCreateParams,
  EmailDomainDeleteResponse,
  EmailDomains,
  ListEmailDomain,
} from './email-domains/email-domains';
import * as GroupsAPI from './groups/groups';
import {
  CreateMessagingGroupRequest,
  GroupCreateParams,
  GroupDeleteResponse,
  GroupUpdateParams,
  Groups,
  ListMessagingGroup,
  UpdateMessagingGroupRequest,
} from './groups/groups';
import * as MessagesAPI from './messages/messages';
import { MessageUpdateParams, Messages, UpdateDraftRequest } from './messages/messages';
import * as NotificationsAPI from './notifications/notifications';
import {
  ListNotification,
  ListNotificationUnreadSummaryAccount,
  Notification,
  NotificationCreateParams,
  NotificationListParams,
  NotificationRetrieveParams,
  NotificationSendResult,
  NotificationTargetInput,
  NotificationUnreadCount,
  NotificationUnreadSummary,
  NotificationUnreadSummaryAccount,
  Notifications,
  SendNotificationRequest,
} from './notifications/notifications';
import * as SupportRoutesAPI from './support-routes/support-routes';
import { SupportRoute, SupportRouteListParams, SupportRoutes } from './support-routes/support-routes';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Messaging extends APIResource {
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  announcements: AnnouncementsAPI.Announcements = new AnnouncementsAPI.Announcements(this._client);
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);
  emailDomains: EmailDomainsAPI.EmailDomains = new EmailDomainsAPI.EmailDomains(this._client);
  emailInboxes: EmailInboxesAPI.EmailInboxes = new EmailInboxesAPI.EmailInboxes(this._client);
  supportRoutes: SupportRoutesAPI.SupportRoutes = new SupportRoutesAPI.SupportRoutes(this._client);

  /**
   * Lists the people the caller can start a conversation with.
   *
   * For a member of the account, this is everyone active in that account, including
   * themselves — messaging yourself is allowed. A customer signed in to the portal
   * instead gets one shared "Customer Service" contact rather than the individual
   * staff of the account they are dealing with; messages to it are routed by the
   * account's support routes.
   *
   * Blocking is not applied to the directory: someone you have blocked, or who has
   * blocked you, is still listed even though a direct message with them cannot be
   * opened.
   *
   * The directory is returned as a single unpaginated page capped at 100 names, so
   * narrow it with `q` in an account with many people.
   *
   * This endpoint requires the permission: `messaging:read`.
   *
   * @example
   * ```ts
   * const listActor = await client.messaging.retrieveContacts();
   * ```
   */
  retrieveContacts(
    query: MessagingRetrieveContactsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListActor> {
    return this._client.get('/v1/messaging/contacts', { query, ...options });
  }

  /**
   * Reports whether the calling customer can contact support.
   *
   * `available` is true only when the vendor has configured a support route with at
   * least one recipient. The customer portal gates the contact-support feature on
   * this so customers never open a thread no one is set up to receive.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const supportAvailability =
   *   await client.messaging.retrieveSupportAvailability();
   * ```
   */
  retrieveSupportAvailability(options?: RequestOptions): APIPromise<SupportAvailability> {
    return this._client.get('/v1/messaging/support-availability', options);
  }

  /**
   * Returns the calling customer's support case with the vendor, opening it on first
   * contact.
   *
   * A customer has exactly one support case, so repeat calls return the same thread
   * rather than opening another. Opening the first case is refused when the vendor
   * has not configured a support route with at least one recipient — check Support
   * Availability before offering the feature. Once the case exists, the vendor's
   * designated support staff are seated in it so the customer's first message
   * reaches someone.
   *
   * This endpoint requires the permission: `messaging:create`.
   *
   * @example
   * ```ts
   * const conversation = await client.messaging.support();
   * ```
   */
  support(
    params: MessagingSupportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Conversation> {
    const { include } = params ?? {};
    return this._client.post('/v1/messaging/support', { query: { include }, ...options });
  }
}

/**
 * A conversation thread the caller participates in.
 */
export interface Conversation {
  /**
   * Conversation ID.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  assignee: RequestLogsAPI.Actor | null;

  /**
   * Whether this is a team-only conversation (`internal`) or a customer-facing case
   * (`customer`).
   *
   * A customer never sees an `internal` conversation, even one that is about them;
   * within a `customer` case they see only the messages that were sent to them, not
   * the team's internal notes on the case.
   */
  audience: 'internal' | 'customer';

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A reusable roster: a named set of members (users and/or agents) that seeds new
   * conversations.
   *
   * Starting a conversation from a group snapshots its current members into that
   * conversation, so the same group can back many conversations (each with its own
   * title); later edits to the group never change conversations already created from
   * it.
   */
  group: MessagingGroup | null;

  /**
   * A chat message within a conversation.
   *
   * One resource covers every stage of a message's life: a delivered timeline
   * message, a message queued for a future send, and a customer-reply draft awaiting
   * approval. Read `status` to tell them apart.
   */
  last_message: Message | null;

  /**
   * When the most recent message was sent.
   */
  last_message_at: string | null;

  /**
   * Whether the conversation is under legal hold.
   *
   * While held, the conversation is exempt from automatic retention purging and from
   * redaction until the hold is released.
   */
  legal_hold: 'released' | 'held';

  /**
   * Resource type identifier.
   */
  object: 'conversation';

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  participants: ListConversationParticipant | null;

  /**
   * The conversation's state from the caller's point of view.
   *
   * - `active`: a normal, visible conversation.
   * - `archived`: archived for the whole account.
   * - `hidden`: the caller dismissed the conversation from their own list while
   *   everyone else still sees it, which takes precedence over an account-level
   *   archive.
   */
  status: 'active' | 'archived' | 'hidden';

  /**
   * The display title of a group conversation.
   *
   * Direct messages carry no stored title; clients derive one from the participants.
   */
  title: string | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  topic: CoreAPI.Entity | null;

  /**
   * What kind of conversation this is.
   *
   * - `direct_message`: a 1:1 thread between two users.
   * - `group`: a named thread with multiple user or agent members (including
   *   customer-facing support cases).
   * - `system`: a system channel that delivers automated account alerts.
   */
  type: 'direct_message' | 'group' | 'system';

  /**
   * Number of messages the caller has not yet read.
   */
  unread: number;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * The triage lane of a customer-facing case.
   *
   * Only conversations with a `customer` audience have a triage lane. It drives the
   * support inbox and is independent of `status`, which is about visibility rather
   * than progress.
   *
   * - `new`: opened but not yet triaged.
   * - `open`: actively being worked.
   * - `waiting_internal`: blocked on the internal team.
   * - `waiting_external`: blocked on an external reply.
   * - `needs_approval`: a drafted reply is awaiting human approval.
   * - `resolved`: closed out.
   */
  workflow_status:
    | 'new'
    | 'open'
    | 'waiting_internal'
    | 'waiting_external'
    | 'needs_approval'
    | 'resolved'
    | null;
}

/**
 * A participant (membership) in a conversation.
 */
export interface ConversationParticipant {
  /**
   * Participant ID.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * For agent participants with a keyword or mention policy, the keywords that
   * trigger it.
   *
   * Matching is case-insensitive and looks anywhere in the message body: under
   * `keyword` the bare word is matched, under `mention` it must appear as
   * `@keyword`. Replying directly to one of the agent's own messages always reaches
   * it, so an agent with no keywords still answers replies but nothing else.
   */
  agent_trigger_keywords: Array<string>;

  /**
   * For agent participants, when the agent is invoked in response to messages.
   *
   * - `mention`: only when the agent is @mentioned.
   * - `keyword`: when a message contains one of the agent's trigger keywords.
   * - `always`: on every human message in the conversation.
   */
  agent_trigger_policy: 'mention' | 'keyword' | 'always' | null;

  /**
   * The participant's membership in the conversation.
   *
   * - `active`: currently a member.
   * - `left`: voluntarily left the conversation.
   * - `removed`: removed by an admin.
   * - `hidden`: still a member but has hidden the conversation from their own list.
   *
   * Membership records are kept rather than deleted, so re-adding someone who left
   * or was removed reactivates their original record and their earlier messages stay
   * attributed to them.
   */
  membership: 'active' | 'left' | 'removed' | 'hidden';

  /**
   * The participant's notification preference for the conversation.
   *
   * - `unmuted`: receives notifications for new messages.
   * - `muted`: new-message notifications are suppressed, though a direct @mention
   *   still raises an in-app alert (never an email), and the conversation still
   *   counts toward the unread total.
   */
  notifications: 'unmuted' | 'muted';

  /**
   * Resource type identifier.
   */
  object: 'conversation_participant';

  /**
   * A participant's read position in a conversation — the basis for read receipts
   * ("who has seen this").
   */
  read_cursor: ReadCursor;

  /**
   * The participant's permission level in the conversation.
   *
   * - `owner`: can rename or delete the conversation and manage its members and
   *   their roles.
   * - `admin`: can add or remove members and rename the conversation.
   * - `member`: can post, react, mute, and leave.
   * - `viewer`: read-only access.
   */
  role: 'owner' | 'admin' | 'member' | 'viewer';

  /**
   * The kind of participant.
   *
   * - `user`: an account user (a teammate).
   * - `agent`: an AI agent.
   * - `system`: the system itself, which posts automated messages.
   * - `customer`: an external customer in a support case.
   */
  type: 'user' | 'agent' | 'system' | 'customer';
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListActor {
  /**
   * Resources in this page.
   */
  data: Array<RequestLogsAPI.Actor>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListConversationParticipant {
  /**
   * Resources in this page.
   */
  data: Array<ConversationParticipant>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListMessageAttachment {
  /**
   * Resources in this page.
   */
  data: Array<MessageAttachment>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListMessagingGroupMember {
  /**
   * Resources in this page.
   */
  data: Array<MessagingGroupMember>;

  /**
   * Resource type identifier.
   */
  object: 'list';

  /**
   * PageInfo describes where the current page sits within a paginated result set and
   * how to move to the adjacent pages.
   *
   * Page a list by following the URLs below rather than assembling cursors yourself.
   * For a top-level list endpoint the URL repeats the original request's query
   * string with only the cursor swapped, so following it preserves the same filters,
   * search term, and page size.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A chat message within a conversation.
 *
 * One resource covers every stage of a message's life: a delivered timeline
 * message, a message queued for a future send, and a customer-reply draft awaiting
 * approval. Read `status` to tell them apart.
 */
export interface Message {
  /**
   * Message ID.
   */
  id: string;

  /**
   * Machine-readable reason an agent reply failed.
   *
   * A client can react to the specific code rather than just showing the body —
   * `agent_spending_cap_reached`, for example, is a cue to offer raising the agent
   * spending limit.
   */
  agent_error_code: string | null;

  /**
   * A single execution of an agent, from trigger through completion.
   */
  agent_run: RunsAPI.AgentRun | null;

  /**
   * Whether this message is an agent reply reporting that the agent's run failed.
   *
   * The body explains the failure to the reader rather than answering the request.
   */
  agent_run_failed: boolean;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  attachments: ListMessageAttachment | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  author: RequestLogsAPI.Actor | null;

  /**
   * Message body.
   *
   * A message made up of nothing but attachments or a linked record carries no body,
   * and a deleted message has its body cleared.
   */
  body: string | null;

  /**
   * How the message reached its audience, or how a draft will be sent once it is
   * approved.
   *
   * - `message`: appears in the conversation itself.
   * - `email`: goes out as email on the thread of the inbox the case is bridged to.
   */
  channel: 'message' | 'email';

  /**
   * The dedupe key the client supplied when sending, echoed back so an optimistic
   * local copy can be matched to the stored message.
   */
  client_message_id: string | null;

  /**
   * A conversation thread the caller participates in.
   */
  conversation: Conversation | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * When the message was deleted.
   *
   * A deleted message keeps its place in the timeline with its body cleared, so
   * surrounding ordering and replies stay intact.
   */
  deleted_at: string | null;

  /**
   * When the message was last edited.
   */
  edited_at: string | null;

  /**
   * What this message represents.
   *
   * - `chat`: written by a person.
   * - `system_event`: a record of something that happened in the conversation, such
   *   as someone joining or a record being linked.
   * - `agent`: written by an AI agent taking part in the conversation.
   * - `scheduled`: came from a send queued ahead of time.
   * - `alert`: an automated alert surfaced in the conversation.
   * - `email`: a message carried over the case's bridged email thread, either one
   *   that arrived from the customer or a reply sent back out to them.
   */
  kind: 'chat' | 'system_event' | 'agent' | 'scheduled' | 'alert' | 'email';

  /**
   * Resource type identifier.
   */
  object: 'chat_message';

  /**
   * A chat message within a conversation.
   *
   * One resource covers every stage of a message's life: a delivered timeline
   * message, a message queued for a future send, and a customer-reply draft awaiting
   * approval. Read `status` to tell them apart.
   */
  reply_to: Message | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: CoreAPI.Entity | null;

  /**
   * When a message queued for a future send is due to go out.
   */
  scheduled_at: string | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  sender: RequestLogsAPI.Actor | null;

  /**
   * The message's position in the conversation timeline, counting up from the first
   * message.
   *
   * A sequence is assigned only when a message is delivered, so a draft or a
   * not-yet-sent scheduled message reports `0`. Listing a conversation's messages
   * pages backwards through this ordering.
   */
  sequence: number;

  /**
   * Where the message stands in its life.
   *
   * - `draft`: a proposed reply to the customer, still editable and waiting for
   *   approval before anyone outside sees it.
   * - `scheduled`: queued to go out at a future time.
   * - `sent`: delivered, and part of the conversation everyone reads.
   * - `canceled`: a scheduled message stopped before it went out.
   * - `rejected`: a draft discarded instead of being sent.
   * - `failed`: a scheduled message that could not be delivered.
   * - `superseded`: a draft replaced by a newer one for the same thread.
   *
   * Only a `sent` message occupies a place in the conversation; the others are
   * records of messages that never reached it.
   */
  status: 'draft' | 'scheduled' | 'sent' | 'canceled' | 'rejected' | 'failed' | 'superseded';

  /**
   * The streaming state of an agent reply.
   *
   * `streaming` means the body is still being generated and keeps growing as
   * realtime updates arrive; `complete` means it is final.
   */
  streaming_state: string | null;

  /**
   * The email subject line.
   *
   * On an email-bridged case, this is the subject of the inbound email, or the
   * subject a customer reply is sent out with.
   */
  subject: string | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Who can see this message.
   *
   * - `internal`: a note only your team can see.
   * - `external`: sent to or received from an outside party, such as the customer on
   *   a support case, and part of the official record of that exchange.
   * - `system`: an event both your team and the customer see.
   *
   * A customer reading their own case is never served `internal` messages.
   */
  visibility: 'internal' | 'external' | 'system';
}

/**
 * A file, image, link, or resource attached to a message.
 */
export interface MessageAttachment {
  /**
   * Attachment ID.
   */
  id: string;

  /**
   * The MIME type of the uploaded content.
   *
   * Carried only by `file` and `image` attachments.
   */
  content_type: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * The filename the attachment was uploaded under.
   *
   * Carried only by `file` and `image` attachments.
   */
  filename: string | null;

  /**
   * The kind of attachment, which determines how it is stored and which of the
   * fields below are populated.
   *
   * - `file`: an uploaded non-image file.
   * - `image`: an uploaded image.
   * - `link`: an external URL reference, with no stored file.
   * - `resource`: a reference to an in-app resource, such as an order.
   */
  kind: 'file' | 'image' | 'link' | 'resource';

  /**
   * Resource type identifier.
   */
  object: 'message_attachment';

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: CoreAPI.Entity | null;

  /**
   * The size of the uploaded content in bytes.
   *
   * Carried only by `file` and `image` attachments, and only when the sender
   * supplied it with the message.
   */
  size_bytes: number | null;

  /**
   * Where to fetch the attachment: a signed download URL for `file` and `image`
   * attachments, or the target address for `link` attachments.
   *
   * Download URLs are signed for one hour and regenerated each time the message is
   * read, so follow the URL promptly instead of persisting it. `resource`
   * attachments have no URL — use `resource` to resolve them.
   */
  url: string | null;
}

/**
 * A reusable roster: a named set of members (users and/or agents) that seeds new
 * conversations.
 *
 * Starting a conversation from a group snapshots its current members into that
 * conversation, so the same group can back many conversations (each with its own
 * title); later edits to the group never change conversations already created from
 * it.
 */
export interface MessagingGroup {
  /**
   * Messaging group ID.
   */
  id: string;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * A single page of resources, together with the metadata needed to page through
   * the rest of the result set.
   */
  members: ListMessagingGroupMember | null;

  /**
   * The roster's display name.
   */
  name: string;

  /**
   * Resource type identifier.
   */
  object: 'messaging_group';

  /**
   * Last updated timestamp.
   */
  updated_at: string;
}

/**
 * A member of a reusable roster: either a user or an agent, represented by its
 * actor.
 */
export interface MessagingGroupMember {
  /**
   * Membership ID.
   *
   * This identifies the member's place on the roster, not the user or agent
   * themselves; it is the id to pass when removing them from the roster.
   */
  id: string;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  actor: RequestLogsAPI.Actor | null;

  /**
   * Resource type identifier.
   */
  object: 'messaging_group_member';
}

/**
 * A participant's read position in a conversation — the basis for read receipts
 * ("who has seen this").
 */
export interface ReadCursor {
  /**
   * The id of the last message the participant has read.
   */
  message_id: string | null;

  /**
   * Resource type identifier.
   */
  object: 'read_cursor';

  /**
   * When the participant last advanced their read cursor.
   */
  read_at: string | null;

  /**
   * The sequence number of the last message the participant has read in the
   * conversation.
   *
   * A message is "seen" by this participant when its `sequence` is `<=` this value.
   * `0` means they have not read any message in the conversation yet.
   */
  sequence: number;
}

/**
 * Whether the calling customer can contact support.
 *
 * Support is available only when the vendor has configured a support route that
 * resolves to at least one recipient. The customer portal gates its
 * contact-support feature on this so customers never open a support thread no one
 * is set up to receive.
 */
export interface SupportAvailability {
  /**
   * Whether support can be contacted.
   */
  available: boolean;

  /**
   * Resource type identifier.
   */
  object: 'support_availability';
}

export interface MessagingRetrieveContactsParams {
  /**
   * Opaque cursor token identifying where the page of results starts.
   *
   * Use the `cursor` value embedded in a previous response's `next_page_url` or
   * `previous_page_url` to fetch the adjacent page. Omit to start from the first
   * page.
   */
  cursor?: string;

  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'role'>;

  /**
   * Maximum number of results to return in a single page.
   */
  limit?: number;

  /**
   * Free-text search term used to filter results.
   *
   * Which fields are matched against the term varies by endpoint.
   */
  q?: string;
}

export interface MessagingSupportParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<
    | 'assignee'
    | 'group'
    | 'participants'
    | 'topic'
    | 'last_message'
    | 'last_message.sender'
    | 'last_message.author'
    | 'last_message.resource'
    | 'last_message.attachments'
    | 'last_message.attachments.resource'
  >;
}

Messaging.Notifications = Notifications;
Messaging.Announcements = Announcements;
Messaging.Conversations = Conversations;
Messaging.Messages = Messages;
Messaging.Groups = Groups;
Messaging.Blocks = Blocks;
Messaging.Preferences = Preferences;
Messaging.EmailDomains = EmailDomains;
Messaging.EmailInboxes = EmailInboxes;
Messaging.SupportRoutes = SupportRoutes;

export declare namespace Messaging {
  export {
    type Conversation as Conversation,
    type ConversationParticipant as ConversationParticipant,
    type ListActor as ListActor,
    type ListConversationParticipant as ListConversationParticipant,
    type ListMessageAttachment as ListMessageAttachment,
    type ListMessagingGroupMember as ListMessagingGroupMember,
    type Message as Message,
    type MessageAttachment as MessageAttachment,
    type MessagingGroup as MessagingGroup,
    type MessagingGroupMember as MessagingGroupMember,
    type ReadCursor as ReadCursor,
    type SupportAvailability as SupportAvailability,
    type MessagingRetrieveContactsParams as MessagingRetrieveContactsParams,
    type MessagingSupportParams as MessagingSupportParams,
  };

  export {
    Notifications as Notifications,
    type ListNotification as ListNotification,
    type ListNotificationUnreadSummaryAccount as ListNotificationUnreadSummaryAccount,
    type Notification as Notification,
    type NotificationSendResult as NotificationSendResult,
    type NotificationTargetInput as NotificationTargetInput,
    type NotificationUnreadCount as NotificationUnreadCount,
    type NotificationUnreadSummary as NotificationUnreadSummary,
    type NotificationUnreadSummaryAccount as NotificationUnreadSummaryAccount,
    type SendNotificationRequest as SendNotificationRequest,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationListParams as NotificationListParams,
  };

  export {
    Announcements as Announcements,
    type Announcement as Announcement,
    type ListAnnouncement as ListAnnouncement,
    type AnnouncementRetrieveParams as AnnouncementRetrieveParams,
    type AnnouncementListParams as AnnouncementListParams,
  };

  export {
    Conversations as Conversations,
    type CreateConversationRequest as CreateConversationRequest,
    type ListConversation as ListConversation,
    type UpdateConversationRequest as UpdateConversationRequest,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationRetrieveParams as ConversationRetrieveParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Messages as Messages,
    type UpdateDraftRequest as UpdateDraftRequest,
    type MessageUpdateParams as MessageUpdateParams,
  };

  export {
    Groups as Groups,
    type CreateMessagingGroupRequest as CreateMessagingGroupRequest,
    type ListMessagingGroup as ListMessagingGroup,
    type UpdateMessagingGroupRequest as UpdateMessagingGroupRequest,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
  };

  export {
    Blocks as Blocks,
    type BlockRequest as BlockRequest,
    type ListMessagingBlock as ListMessagingBlock,
    type MessagingBlock as MessagingBlock,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockListParams as BlockListParams,
  };

  export {
    Preferences as Preferences,
    type ListNotificationPreference as ListNotificationPreference,
    type NotificationPreference as NotificationPreference,
    type UpsertNotificationPreferenceRequest as UpsertNotificationPreferenceRequest,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };

  export {
    EmailDomains as EmailDomains,
    type CreateEmailDomainRequest as CreateEmailDomainRequest,
    type EmailDomain as EmailDomain,
    type ListEmailDomain as ListEmailDomain,
    type EmailDomainDeleteResponse as EmailDomainDeleteResponse,
    type EmailDomainCreateParams as EmailDomainCreateParams,
  };

  export {
    EmailInboxes as EmailInboxes,
    type CreateEmailInboxRequest as CreateEmailInboxRequest,
    type EmailInbox as EmailInbox,
    type ListEmailInbox as ListEmailInbox,
    type UpdateEmailInboxRequest as UpdateEmailInboxRequest,
    type EmailInboxDeleteResponse as EmailInboxDeleteResponse,
    type EmailInboxCreateParams as EmailInboxCreateParams,
    type EmailInboxRetrieveParams as EmailInboxRetrieveParams,
    type EmailInboxUpdateParams as EmailInboxUpdateParams,
    type EmailInboxListParams as EmailInboxListParams,
  };

  export {
    SupportRoutes as SupportRoutes,
    type SupportRoute as SupportRoute,
    type SupportRouteListParams as SupportRouteListParams,
  };
}
