// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnnouncementsAPI from './announcements/announcements';
import {
  Announcement,
  AnnouncementListParams,
  Announcements,
  ListAnnouncement,
} from './announcements/announcements';
import * as NotificationsAPI from './notifications/notifications';
import {
  ListNotification,
  Notification,
  NotificationCreateParams,
  NotificationListParams,
  NotificationSendResult,
  NotificationTargetInput,
  NotificationUnreadCount,
  NotificationUnreadSummary,
  NotificationUnreadSummaryAccount,
  Notifications,
  SendNotificationRequest,
  Sender,
} from './notifications/notifications';

export class Messaging extends APIResource {
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  announcements: AnnouncementsAPI.Announcements = new AnnouncementsAPI.Announcements(this._client);
}

Messaging.Notifications = Notifications;
Messaging.Announcements = Announcements;

export declare namespace Messaging {
  export {
    Notifications as Notifications,
    type ListNotification as ListNotification,
    type Notification as Notification,
    type NotificationSendResult as NotificationSendResult,
    type NotificationTargetInput as NotificationTargetInput,
    type NotificationUnreadCount as NotificationUnreadCount,
    type NotificationUnreadSummary as NotificationUnreadSummary,
    type NotificationUnreadSummaryAccount as NotificationUnreadSummaryAccount,
    type SendNotificationRequest as SendNotificationRequest,
    type Sender as Sender,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationListParams as NotificationListParams,
  };

  export {
    Announcements as Announcements,
    type Announcement as Announcement,
    type ListAnnouncement as ListAnnouncement,
    type AnnouncementListParams as AnnouncementListParams,
  };
}
