
interface UserNotification {
  email: boolean;
  sms: boolean;
  push: boolean;
  phone: boolean;
  house: boolean;
}

// Utility Types
// Partial<T>

const notifications: UserNotification = {
  email: true,
  sms: true,
  push: true,
  phone: true,
  house: true,
}

console.table(notifications)


// All properties are optional
const partialNotifications: Partial<UserNotification> = {
  email: true,
}

type UserNotificationExceptPhone = Omit<UserNotification, 'phone'>

// All notifications except phone
const allNotificationsExceptPhone: UserNotificationExceptPhone = {
  email: false,
  sms: false,
  house: true,
  push: true,
}

type EmailOnyNotification = Pick<UserNotification, 'email'>

// Email only notification
const emailOnlyNotification: EmailOnyNotification = {
  email: true,
}

type NotificationNames = "email-ony" | "sms-only" | "house-only";
 
const notificationWithSpecificNames: Record<NotificationNames, boolean> = {
  'email-ony': false,
  'sms-only': true,
  'house-only': false,
};

console.table(partialNotifications)

