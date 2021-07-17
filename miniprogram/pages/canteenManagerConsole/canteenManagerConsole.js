// miniprogram/pages/canteenManagerConsole/canteenManagerConsole.js
Page({
    data: {
      account: '',
      password: '',
      identity: ''
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

    clickToUploadDishes: function(option) {
      var temp = this;
      let userObj = {
        account: temp.data.account,
        password: temp.data.password,
        identity: temp.data.identity
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../uploadDishes/uploadDishes?userObj=' + encodeURIComponent(userObj)
      });
    },

    clickToDeleteDishes: function(res) {
      var temp = this;
      let userObj = {
        account: temp.data.account,
        password: temp.data.password,
        identity: temp.data.identity
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../deleteDishes/deleteDishes?userObj=' + encodeURIComponent(userObj)
      });
    },

    clickToViewCurrentOrder: function(res) {
      var temp = this;
      let userObj = {
        account: temp.data.account,
        password: temp.data.password,
        identity: temp.data.identity
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../canteenOrder/canteenOrder?userObj=' + encodeURIComponent(userObj)
      });
    },

    onClickLeft: function(option) {
      wx.navigateTo({
        url: '../home/home'
      });
    }
})