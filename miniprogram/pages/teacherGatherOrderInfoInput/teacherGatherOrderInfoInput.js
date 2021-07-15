// miniprogram/pages/teacherGatherOrderInfoInput/teacherGatherOrderInfoInput.js
Page({
    data: {
        account: '',
        password: '',
        identity: '',
        name: '',
        teacherNum: '',
        phoneNum: '',
        address: '',
        canteenNum: '',
        content: '',
        price: '',
        bookTime: ''
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
        var myreg2 = /^\d{4}[/]([0][1-9]|(1[0-2]))[/]([1-9]|([012]\d)|(3[01]))([ \t\n\x0B\f\r])(([0-1]{1}[0-9]{1})|([2]{1}[0-4]{1}))([:])(([0-5]{1}[0-9]{1}|[6]{1}[0]{1}))([:])((([0-5]{1}[0-9]{1}|[6]{1}[0]{1})))$/;
        if (that.data.name.length === 0) {
            wx.showToast({
              title: '姓名不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (that.data.teacherNum.length === 0) {
            wx.showToast({
              title: '工号不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (that.data.phoneNum.length === 0) {
            wx.showToast({
              title: '手机号不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (that.data.address.length === 0) {
            wx.showToast({
              title: '地址不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (that.data.bookTime.length === 0) {
            wx.showToast({
              title: '配送时间不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (!myreg.test(that.data.phoneNum)) {
            wx.showToast({
              title: '手机号格式有误',
              icon: 'none',
              duration: 1500
            });
        } else if (!myreg2.test(that.data.bookTime)) {
            wx.showToast({
              title: '时间格式输入有误',
              icon: 'none',
              duration: 1500
            });
        } else {
            wx.request({
                url: 'http://82.156.219.94:8000/Add_Order_Teacher',
                method: 'POST',
                data: {
                    Username: this.data.account,
                    Name: this.data.name,
                    Studentnum: this.data.teacherNum,
                    Phonenum: this.data.phoneNum,
                    Total_price: this.data.price,
                    Shop_id: this.data.canteenNum,
                    Address: this.data.address,
                    Detail: this.data.content,
                    Time: this.data.bookTime
                },
                success(res) {
                    wx.showToast({
                        title: '下单成功',
                        icon: 'success',
                        duration: 1500
                    });
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
            });
        }
    }
})