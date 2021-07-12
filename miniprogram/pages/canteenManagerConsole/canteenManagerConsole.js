// miniprogram/pages/canteenManagerConsole/canteenManagerConsole.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    clickToUploadDishes: () => {
        wx.navigateTo({
          url: '../uploadDishes/uploadDishes',
        });
    }
})