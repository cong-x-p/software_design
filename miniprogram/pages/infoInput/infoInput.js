// miniprogram/pages/infoInput/infoInput.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        studentNum: '',
        phoneNum: '',
        address: '',
        canteenNum: ''
    },

    clickToInputInfo() {
        console.log(this.data);
    }
})