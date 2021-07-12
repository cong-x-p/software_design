// miniprogram/pages/studentConsole/studentConsole.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        account: '',
        password: '',
        identity: ''
    },

    onLoad: function(option) {
        if (option && option.user) {
            let userObj = decodeURIComponent(option.user);
            userObj = JSON.parse(userObj);
            this.setData({
                account: userObj.account,
                password: userObj.password,
                identity: userObj.identity
            });
            // console.log(this.data.account);
            // console.log(this.data.password);
            // console.log(this.data.identity);
        }
    },

    clickToCanteenSelection: function(option) {
        let userObj = {
            account: this.data.account
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../canteenSelection/canteenSelection?userObj=' + encodeURIComponent(userObj)
        });
    },

    onClickLeft: function(option) {
        wx.navigateTo({
          url: '../home/home'
        })
    }
})