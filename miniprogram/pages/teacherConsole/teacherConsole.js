// miniprogram/pages/teacherConsole/teacherConsole.js
Page({
    data: {
        account: '',
        password: '',
        identity: ''
    },

    onLoad: function(option) {
        if (option && option.userObj) {
            let userObj = decodeURIComponent(option.userObj);
            userObj = JSON.parse(userObj);
            this.setData({
                account: userObj.account,
                password: userObj.password,
                identity: userObj.identity
            });
        }
    },

    clickToCanteenSelection: function(option) {
        let userObj = {
            account: this.data.account,
            password: this.data.password,
            identity: this.data.identity
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../canteenSelection/canteenSelection?userObj=' + encodeURIComponent(userObj)
        });
        // console.log(this.data.account);
        // console.log(this.data.password);
        // console.log(this.data.identity);
    },

    clickToViewHistoryOrder: function(option) {
        let userObj = {
            account: this.data.account,
            password: this.data.password,
            identity: this.data.identity
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../studentHistoryOrder/studentHistoryOrder?userObj=' + encodeURIComponent(userObj)
        });
    },

    clickToGatherCanteenSelection: function(option) {
        let userObj = {
            account: this.data.account,
            password: this.data.password,
            identity: this.data.identity
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../teacherGatherCanteenSelection/teacherGatherCanteenSelection?userObj=' + encodeURIComponent(userObj)
        });
    },

    onClickLeft: function(option) {
        wx.navigateTo({
          url: '../home/home'
        });
    }
})