// miniprogram/pages/uploadDishes/uploadDishes.js
Page({
    data: {
        account: '',
        password: '',
        identity: '',
        canteenNum: '',
        title: '',
        description: '',
        price: '',
        check: false
    },

    onLoad: function (options) {
        if (options && options.userObj) {
            let userObj = decodeURIComponent(options.userObj);
            userObj = JSON.parse(userObj);
            this.setData({
                account: userObj.account,
                password: userObj.password,
                identity: userObj.identity
            });
        }
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
              Username: that.data.account,
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

    onClickLeft: function(option) {
        let userObj = {
            account: temp.data.account,
            password: temp.data.password,
            identity: temp.data.identity
          };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../canteenManagerConsole/canteenManagerConsole?userObj=' + encodeURIComponent(userObj)
        });
    }
})