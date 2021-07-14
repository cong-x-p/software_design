// miniprogram/pages/canteenOrder/canteenOrder.js
Page({
    data: {
        account: '',
        password: '',
        identity: '',
        items: []
    },

    onLoad: function (options) {
        var that = this;
        if (options && options.userObj) {
            let userObj = decodeURIComponent(options.userObj);
            userObj = JSON.parse(userObj);
            this.setData({
                account: userObj.account,
                password: userObj.password,
                identity: userObj.identity
            });
        }
        wx.request({
            url: 'http://82.156.219.94:8000/shopOrder/',
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
        });
    },

    onClickLeft: function() {
        let userObj = {
            account: this.data.account,
            password: this.data.password,
            identity: this.data.identity
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../canteenManagerConsole/canteenManagerConsole?userObj=' + encodeURIComponent(userObj)
        });
    }
})