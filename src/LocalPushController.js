import PushNotification from 'react-native-push-notification'
import React, {useState} from 'react'
import { Fire } from '../config'



// activity
const showAdRejected = () => {
    PushNotification.localNotification({
        channelId: "dealer-id",
        title: 'Ups! Iklan yang kamu pasang tidak disetujui',
        message: 'pastikan data kendaraan telah sesuai',
    })
}

const showAdApproved = () => {
    PushNotification.localNotification({
        channelId: "dealer-id",
        title: 'Selamat! Iklan yang kamu pasang telah disetujui',
        message: 'Silakan cek daftar produk anda',
    })
}

// pesanan baru
const showOrderSucceed = ({custName, orderId}) => {
    PushNotification.localNotification({
        channelId: "dealer-id",
        title: `Pesanan dengan nama ${custName} berhasil diajukan`,
        message: `Order ID ${orderId}`,
    })
}

const showOrderApproved = () => {
    PushNotification.localNotification({
        channelId: "dealer-id",
        title: `Pesanan dengan nama '${name}' telah disetujui`,
        message: `Order ID '${ID}'`,
    })
}

const showOrderDenied = () => {
    PushNotification.localNotification({
        channelId: "dealer-id",
        title: `Pesanan dengan nama '${name}' tidak disetujui`,
        message: `Order ID '${ID}'`
    })
}

const showOrderPostponed = () => {
    PushNotification.localNotification({
        channelId: "dealer-id",
        title: `Pesanan dengan nama '${name}' ditunda`,
        message: `Order ID '${ID}'`,
    })
}

// const handleScheduleNotification = (title, message) => {
//     PushNotification.localNotificationSchedule({
//         title: title,
//         message: message,
//         date: new Date(Date.now() + 5 * 1000)
//     })
// }

// const handleCancel = () => {
//     PushNotification.cancelAllLocalNotifications
// }

export {
    showAdRejected,
    showAdApproved,
    showOrderSucceed,
    showOrderApproved,
    showOrderDenied,
    showOrderPostponed,
    // handleScheduleNotification, 
    // handleCancel,
}