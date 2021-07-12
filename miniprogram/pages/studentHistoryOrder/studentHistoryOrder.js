// miniprogram/pages/studentHistoryOrder/studentHistoryOrder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        account: '',
        password: '',
        identity: '',
        items: []
    },

    onLoad: function(option) {
        var that = this;
        if (option && option.userObj) {
            let userObj = decodeURIComponent(option.userObj);
            userObj = JSON.parse(userObj);
            that.setData({
                account: userObj.account,
                password: userObj.password,
                identity: userObj.identity
            });
            console.log(this.data.account);
        }
        wx.request({
            url: 'http://82.156.219.94:8000/Student_Query/',
            method: 'POST',
            data: {
                username: that.data.account
            },
            header: {
                'Content-type': 'json'
            },
            success: function(res) {
                that.setData({
                  items: res.data.data
                });
            }
        })
    },

    onClickLeft: function() {
        let userObj = {
            account: this.data.account,
            password: this.data.password,
            identity: this.data.identity
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
            url: '../studentConsole/studentConsole?userObj=' + encodeURIComponent(userObj)
        });
    }
})