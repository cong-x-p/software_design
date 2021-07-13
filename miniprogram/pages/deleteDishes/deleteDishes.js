// miniprogram/pages/deleteDishes/deleteDishes.js
Page({
    data: {
        account: '',
        password: '',
        identity: '',
        items: []
    },

    onLoad: function(options) {
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
            url: 'http://82.156.219.94:8000/managerMenu/',
            method: 'POST',
            data: {
                userName: this.data.account
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

    deleteDish: function(event) {
        var that = this;
        var index = event.currentTarget.dataset.index;
        let userObj = {
            account: that.data.account,
            password: that.data.password,
            identity: that.data.identity
        };
        wx.request({
            url: 'http://82.156.219.94:8000/Delete_Menu',
            method: 'POST',
            data: {
                userName: that.data.account,
                menuName: that.data.items[index].name,
            },
            success: function(res) {
                userObj = JSON.stringify(userObj);
                wx.navigateTo({
                    url: '../deleteDishes/deleteDishes?userObj=' + encodeURIComponent(userObj)
                });
            }
        })
    },

    onClickLeft: function(option) {
        var temp = this;
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