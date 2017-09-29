export default {
    orderStatusTranslate(orderStatus) {
        switch (orderStatus) {
            case 1:
                return 'Menunggu pembayaran' //等待付款
            case 2:
                return 'Dibatalkan' //取消
            case 3:
                return 'Dalam proses pengeluaran tiket' //出票中
            case 4:
                return 'Selesai' //完成
            case 5:
                return 'Menunggu pengembalian uang' //等待退款
            case 6: //这个状态码的时候跳到去退款
                return 'Dalam proses pengembalian uang' //处理退款中
            case 7:
                return 'Uang sudah dikembalikan' //退款已经成功退回
            case 8:
                return 'Pengembalian uang gagal' //退款失败
        }
    }
}