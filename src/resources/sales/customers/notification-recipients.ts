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
   * is removed. Notification types must be order acknowledgement or invoice.
   *
   * This endpoint requires the permissions: `customers:update`, `suppliers:update`.
   *
   * @example
   * ```ts
   * const listOrderNotificationRecipient =
   *   await client.sales.customers.notificationRecipients.update(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
   *     {
   *       recipients: [
   *         {
   *           account_user_id:
   *             'acus_01ea9983ddb41dacc44ecf997c',
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
   * Returns the account users configured to receive order acknowledgement and
   * invoice emails on this customer's orders, with the notification types each
   * receives.
   *
   * These are the defaults used to pre-populate notification recipients when a new
   * order is placed for the customer.
   *
   * This endpoint requires the permissions: `customers:read`, `suppliers:read`.
   *
   * @example
   * ```ts
   * const listOrderNotificationRecipient =
   *   await client.sales.customers.notificationRecipients.list(
   *     'ac_0170df1ac58e4d24c66fc89f5f',
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
 * List represents a paginated list of resources.
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
   * PageInfo contains URL-based pagination metadata.
   */
  page_info: APIKeysAPI.PageInfo;
}

/**
 * A notification recipient to configure for a customer.
 */
export interface NotificationRecipientInput {
  /**
   * ID of the account user to receive the notifications. Must belong to the
   * customer's account.
   */
  account_user_id: string;

  /**
   * Order notification types this recipient should receive.
   */
  notification_types: Array<'invoice' | 'order_acknowledgement' | 'purchase_order_submission'>;
}

/**
 * A default order-notification recipient for a customer: an account user on the
 * customer's account and the order notification types they receive on that
 * customer's orders.
 */
export interface OrderNotificationRecipient {
  /**
   * A user's membership in an account, carrying the account-specific status, role,
   * and department.
   *
   * Profile fields (name, email, username, image URL) live on the expandable `user`
   * sub-resource, which is shared across every account the user belongs to.
   */
  account_user: AccountUsersAPI.AccountUser | null;

  /**
   * Order notification types this recipient receives.
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
   * The complete desired set of default notification recipients. Any recipient not
   * included is removed.
   */
  recipients: Array<NotificationRecipientInput>;
}

export interface NotificationRecipientUpdateParams {
  /**
   * Body param: The complete desired set of default notification recipients. Any
   * recipient not included is removed.
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
