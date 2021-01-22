import PushNotification from 'react-native-push-notification'

const showNotification = (title, message) => {
    PushNotification.localNotification({
        channelId: "channel-id",
        title: title,
        message: message,
    })
    console.log(message + title)
}

const handleScheduleNotification = (title, message) => {
    PushNotification.localNotificationSchedule({
        title: title,
        message: message,
        date: new Date(Date.now() + 5 * 1000)
    })
}

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications
}

export {showNotification, handleScheduleNotification, handleCancel}