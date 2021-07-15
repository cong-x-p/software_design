// miniprogram/pages/infoInput/infoInput.js
Page({
    data: {
        account: '',
        password: '',
        identity: '',
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
                content: userObj.content,
                password: userObj.password,
                identity: userObj.identity
            });
        }
    },

    clickToInputInfo() {
        var that = this;
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if (that.data.name.length === 0) {
          wx.showToast({
            title: '姓名不可为空',
            icon: 'none',
            duration: 1500
          });
        } else if (that.data.studentNum.length === 0) {
          wx.showToast({
            title: '学号与工号不可为空',
            icon: 'none',
            duration: 1500
          });
        } else if (that.data.address.length === 0) {
          wx.showToast({
            title: '地址不可为空',
            icon: 'none',
            duration: 1500
          });
        } else if (that.data.phoneNum.length === 0) {
          wx.showToast({
            title: '手机号不可为空',
            icon: 'none',
            duration: 1500
          });
        } else if (!myreg.test(that.data.phoneNum)) {
          wx.showToast({
            title: '手机号格式有误',
            icon: 'none',
            duration: 1500
          });
        } else {
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
              if (that.data.identity === 'student') {
                let userObj = {
                  account: that.data.account,
                  password: that.data.password,
                  identity: that.data.identity
                };
                userObj = JSON.stringify(userObj);
                wx.navigateTo({
                  url: '../studentConsole/studentConsole?userObj=' + encodeURIComponent(userObj)
                });
              } else if (that.data.identity === 'teacher') {
                let userObj = {
                  account: that.data.account,
                  password: that.data.password,
                  identity: that.data.identity
                };
                userObj = JSON.stringify(userObj);
                wx.navigateTo({
                  url: '../teacherConsole/teacherConsole?userObj=' + encodeURIComponent(userObj)
                });
              }
            }
          });
        }
    },

    onClickLeft: function() {
      let userObj = {
        canteenNum: this.data.canteenNum,
        account: this.data.account,
        password: this.data.password,
        identity: this.data.identity
      }
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../foodSelection/foodSelection?userObj=' + encodeURIComponent(userObj)
      });
    }
})