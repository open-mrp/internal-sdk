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
   * Lists the caller's messageable contacts.
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
   * Returns the calling customer's portal support case (`audience=customer`),
   * creating it on first contact.
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
   */
  last_message: Message | null;

  /**
   * When the most recent message was sent.
   *
   * `null` when the conversation has no messages yet.
   */
  last_message_at: string | null;

  /**
   * Whether the conversation is under legal hold.
   *
   * Exempts the conversation from retention purging and redaction.
   */
  legal_hold: 'released' | 'held';

  /**
   * Resource type identifier.
   */
  object: 'conversation';

  /**
   * List represents a paginated list of resources.
   */
  participants: ListConversationParticipant | null;

  /**
   * The caller's effective status.
   *
   * - `hidden` when the caller has hidden the conversation
   * - otherwise the account-level lifecycle state
   */
  status: 'active' | 'archived' | 'hidden';

  /**
   * The display title of a group conversation.
   *
   * `null` for direct messages, where the client derives a title from the
   * participants.
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
   * Only set for customer-audience conversations.
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
   * For agent participants with a keyword/mention policy, the keywords that trigger
   * it.
   */
  agent_trigger_keywords: Array<string>;

  /**
   * For agent participants, when the agent is invoked in response to messages.
   *
   * `null` for non-agent participants.
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
   */
  membership: 'active' | 'left' | 'removed' | 'hidden';

  /**
   * The participant's notification preference for the conversation.
   *
   * - `unmuted`: receives normal notifications.
   * - `muted`: notifications are suppressed (mentions may still pierce the mute).
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A chat message within a conversation.
 */
export interface Message {
  /**
   * Message ID.
   */
  id: string;

  /**
   * Machine-readable error code for a failed agent reply (e.g.
   * `agent_spending_cap_reached`).
   *
   * `null` when the reply did not fail or carried no specific code.
   */
  agent_error_code: string | null;

  /**
   * A single execution of an agent, from trigger through completion.
   */
  agent_run: RunsAPI.AgentRun | null;

  /**
   * Whether this message is an agent reply that resolved a failed run.
   */
  agent_run_failed: boolean;

  /**
   * List represents a paginated list of resources.
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
   * `null` for templated or deleted messages.
   */
  body: string | null;

  /**
   * How the message was delivered (or, for a draft, how it will be on approve).
   *
   * - `message`: delivered as an in-conversation chat message.
   * - `email`: delivered as email through the conversation's bridged inbox.
   */
  channel: 'message' | 'email';

  /**
   * The client-supplied dedupe key echoed back for optimistic-UI reconciliation.
   *
   * `null` for server-generated messages.
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
   * When the message was deleted (tombstone).
   */
  deleted_at: string | null;

  /**
   * When the message was last edited.
   */
  edited_at: string | null;

  /**
   * The kind of message.
   *
   * - `chat`: a user-authored chat message.
   * - `system_event`: a system-generated event message.
   * - `agent`: a message authored by an AI agent participant.
   * - `scheduled`: a message materialized from a scheduled send.
   * - `alert`: a system or producer alert rendered as a message.
   * - `email`: an inbound email materialized into the conversation by the email
   *   bridge.
   */
  kind: 'chat' | 'system_event' | 'agent' | 'scheduled' | 'alert' | 'email';

  /**
   * Resource type identifier.
   */
  object: 'chat_message';

  /**
   * A chat message within a conversation.
   */
  reply_to: Message | null;

  /**
   * Entity is a polymorphic reference to any resource in the system.
   */
  resource: CoreAPI.Entity | null;

  /**
   * When a `scheduled` message is due to be delivered.
   */
  scheduled_at: string | null;

  /**
   * Reference to an actor — the user, API key, agent, or group identity associated
   * with an action.
   */
  sender: RequestLogsAPI.Actor | null;

  /**
   * Monotonic per-conversation ordering sequence.
   */
  sequence: number;

  /**
   * The lifecycle state of the message.
   *
   * - `draft`: an editable customer-reply draft awaiting approval; not in the
   *   timeline.
   * - `scheduled`: queued for delivery at a future time; not yet in the timeline.
   * - `sent`: a delivered timeline message; only `sent` messages carry a `sequence`.
   * - `canceled`: a scheduled message canceled before delivery.
   * - `rejected`: a draft discarded without sending.
   * - `failed`: a scheduled message that exhausted delivery attempts.
   * - `superseded`: a draft replaced by a newer one for the same source thread.
   */
  status: 'draft' | 'scheduled' | 'sent' | 'canceled' | 'rejected' | 'failed' | 'superseded';

  /**
   * The streaming state of a reply.
   *
   * `streaming` while the body is still being generated (it fills in via realtime
   * updates); `complete` once finalized.
   *
   * `null` for ordinary messages.
   */
  streaming_state: string | null;

  /**
   * The email subject line
   *
   * On an email-bridged case, the original subject of an inbound email, or the
   * subject a customer-reply `draft`/outbound message is sent with.
   */
  subject: string | null;

  /**
   * Last update timestamp.
   */
  updated_at: string;

  /**
   * Who can see this message.
   *
   * - `internal`: a team-only note.
   * - `external`: sent to or received from an external party (e.g. the customer on a
   *   support case).
   * - `system`: an event shown to both the team and the customer.
   *
   * On a customer-facing conversation, customer payloads only ever carry `external`
   * and `system` messages.
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
   * The MIME content type for uploaded attachments.
   *
   * `null` for link/resource attachments.
   */
  content_type: string | null;

  /**
   * Creation timestamp.
   */
  created_at: string;

  /**
   * The original filename for uploaded attachments.
   *
   * `null` for link/resource attachments.
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
   * The size in bytes for uploaded attachments.
   *
   * `null` when unknown or for link/resource attachments.
   */
  size_bytes: number | null;

  /**
   * A time-limited download URL for uploaded (file/image) attachments, or the link
   * URL.
   *
   * `null` for resource attachments.
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
   * List represents a paginated list of resources.
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
   * Membership ID (used to remove the member from the roster).
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
   *
   * `null` if they have not read any message yet.
   */
  message_id: string | null;

  /**
   * Resource type identifier.
   */
  object: 'read_cursor';

  /**
   * When the participant last advanced their read cursor.
   *
   * `null` if they have not read any message yet.
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
 * Whether the calling customer can currently contact support.
 *
 * `available` is true only when the vendor has configured a support route that
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
