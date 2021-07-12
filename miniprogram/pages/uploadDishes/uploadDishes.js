// miniprogram/pages/uploadDishes/uploadDishes.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canteenNum: '',
        title: '',
        description: '',
        price: '',
        check: false
    },

    judgeOnChange(event) {
        this.setData({
            check: event.detail
        });
    },

    clickToUploadDish() {
        const that = this;
        wx.request({
          url: 'http://82.156.219.94:8000/Add_Menu/',
          data: {
              Shop_id: that.data.canteenNum,
              Menu_name: that.data.title,
              Menu_des: that.data.description,
              price: that.data.price,
              Package: that.data.check
          },
          method: 'POST',
          header: {
              'Content-type': 'json'
          },
          success(res) {
              that.setData({
                  canteenNum: '',
                  title: '',
                  description: '',
                  price: ''
              });
          }
        });
    },

    onClickLeft: () => {
        wx.navigateTo({
          url: '../canteenManagerConsole/canteenManagerConsole'
        });
    }
})