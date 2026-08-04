// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from '../../auth/api-keys/api-keys';
import * as AccountUsersAPI from '../../identity/account-users/account-users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage customer accounts.
 */
export class NotificationRecipients extends APIResource {
  /**
   * Replaces the account users configured to receive order acknowledgement and
   * invoice emails on this customer's orders.
   *
   * The provided list is the complete set of recipients; any recipient not included
   * is removed. Only the order acknowledgement and invoice notification types can be
   * managed here — purchase-order submission preferences on the same relationship
   * are left untouched, and still appear in the returned recipients.
   *
   * This endpoint requires the permissions: `customers:update`, `suppliers:update`.
   *
   * @example
   * ```ts
   * const listOrderNotificationRecipient =
   *   await client.sales.customers.notificationRecipients.update(
   *     'ac_opnlh43ymyee',
   *     {
   *       recipients: [
   *         {
   *           account_user_id: 'acus_e5zu8bde0z3h',
   *           notification_types: [
   *             'order_acknowledgement',
   *             'invoice',
   *           ],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: NotificationRecipientUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ListOrderNotificationRecipient> {
    const { include, ...body } = params;
    return this._client.patch(path`/v1/sales/customers/${id}/notification-recipients`, {
      query: { include },
      body,
      ...options,
    });
  }

  /**
   * Returns the account users configured to receive email notifications on this
   * customer's orders, with the notification types each receives.
   *
   * These are defaults for order-entry clients to pre-fill on a new order; creating
   * a sales order does not apply them automatically. Recipients whose account user
   * has since been removed from the customer's account are omitted.
   *
   * This endpoint requires the permissions: `customers:read`, `suppliers:read`.
   *
   * @example
   * ```ts
   * const listOrderNotificationRecipient =
   *   await client.sales.customers.notificationRecipients.list(
   *     'ac_opnlh43ymyee',
   *   );
   * ```
   */
  list(
    id: string,
    query: NotificationRecipientListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListOrderNotificationRecipient> {
    return this._client.get(path`/v1/sales/customers/${id}/notification-recipients`, { query, ...options });
  }
}

/**
 * A single page of resources, together with the metadata needed to page through
 * the rest of the result set.
 */
export interface ListOrderNotificationRecipient {
  /**
   * Resources in this page.
   */
  data: Array<OrderNotificationRecipient>;

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
 * A notification recipient to configure for a customer.
 */
export interface NotificationRecipientInput {
  /**
   * ID of the account user to receive the notifications.
   *
   * Must be an account user on the customer's own account.
   */
  account_user_id: string;

  /**
   * Order notification types this recipient should receive.
   *
   * Only `order_acknowledgement` and `invoice` can be set here; any other type is
   * rejected.
   */
  notification_types: Array<'invoice' | 'order_acknowledgement' | 'purchase_order_submission'>;
}

/**
 * A default order-notification recipient for a customer.
 *
 * Each recipient pairs an account user on the customer's own account with the
 * notification types they receive for that customer's orders.
 */
export interface OrderNotificationRecipient {
  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  account_user: AccountUsersAPI.AccountUser | null;

  /**
   * Order notification types this recipient receives.
   *
   * - `order_acknowledgement`: the confirmation email sent when an order is placed
   *   for the customer.
   * - `invoice`: invoice emails for the customer's orders.
   * - `purchase_order_submission`: a copy of each purchase order you submit to this
   *   account as a supplier; those recipients are managed alongside the account's
   *   users and cannot be set through the customer notification-recipient endpoints.
   */
  notification_types: Array<'invoice' | 'order_acknowledgement' | 'purchase_order_submission'>;

  /**
   * Resource type identifier.
   */
  object: 'order_notification_recipient';
}

/**
 * Request to replace a customer's default order-notification recipients.
 */
export interface UpdateNotificationRecipientsRequest {
  /**
   * The complete desired set of default notification recipients.
   *
   * Any recipient not included is removed; send an empty list to remove them all.
   */
  recipients: Array<NotificationRecipientInput>;
}

export interface NotificationRecipientUpdateParams {
  /**
   * Body param: The complete desired set of default notification recipients.
   *
   * Any recipient not included is removed; send an empty list to remove them all.
   */
  recipients: Array<NotificationRecipientInput>;

  /**
   * Query param: Sub-objects to expand in the response. When omitted, sub-objects
   * are returned as `null`.
   */
  include?: Array<'account_user'>;
}

export interface NotificationRecipientListParams {
  /**
   * Sub-objects to expand in the response. When omitted, sub-objects are returned as
   * `null`.
   */
  include?: Array<'account_user'>;
}

export declare namespace NotificationRecipients {
  export {
    type ListOrderNotificationRecipient as ListOrderNotificationRecipient,
    type NotificationRecipientInput as NotificationRecipientInput,
    type OrderNotificationRecipient as OrderNotificationRecipient,
    type UpdateNotificationRecipientsRequest as UpdateNotificationRecipientsRequest,
    type NotificationRecipientUpdateParams as NotificationRecipientUpdateParams,
    type NotificationRecipientListParams as NotificationRecipientListParams,
  };
}
