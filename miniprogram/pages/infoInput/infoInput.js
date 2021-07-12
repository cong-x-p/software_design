// miniprogram/pages/infoInput/infoInput.js
Page({
    data: {
        account: '',
        name: '',
        studentNum: '',
        phoneNum: '',
        address: '',
        canteenNum: '',
        content: '',
        price: ''
    },

    onLoad: function(option) {
        var that = this;
        if (option && option.userObj) {
            let userObj = decodeURIComponent(option.userObj);
            userObj = JSON.parse(userObj);
            that.setData({
                account: userObj.account,
                canteenNum: userObj.canteenNum,
                price: userObj.price,
                content: userObj.content
            });
          }
    },

    clickToInputInfo() {
        wx.request({
          url: 'http://82.156.219.94:8000/Add_Order',
          method: 'POST',
          data: {
              Username: this.data.account,
              Name: this.data.name,
              Studentnum: this.data.studentNum,
              Phonenum: this.data.phoneNum,
              Total_price: this.data.price,
              Shop_id: this.data.canteenNum,
              Address: this.data.address,
              Detail: this.data.content
          },
          success(res) {
              wx.showToast({
                title: '下单成功',
                icon: 'success',
                duration: 1500
              });
              wx.navigateTo({
                url: '../studentConsole/studentConsole'
              });
          }
        });
    }
})