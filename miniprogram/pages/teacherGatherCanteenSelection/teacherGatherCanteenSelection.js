// miniprogram/pages/teacherGatherCanteenSelection/teacherGatherCanteenSelection.js
Page({

    /**
     * 页面的初始数据
     */
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

    clickToFoodSelection_1: function(option) {
        let userObj = {
          canteenNum: 1,
          account: this.data.account,
          password: this.data.password,
          identity: this.data.identity,
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../teacherGatherFoodSelection/teacherGatherFoodSelection?userObj=' + encodeURIComponent(userObj)
        });
    },

    clickToFoodSelection_2: function(option) {
      let userObj = {
        canteenNum: 2,
        account: this.data.account,
        password: this.data.password,
        identity: this.data.identity,
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../teacherGatherFoodSelection/teacherGatherFoodSelection?userObj=' + encodeURIComponent(userObj)
      });
    },

    clickToFoodSelection_3: function(option) {
      let userObj = {
        canteenNum: 3,
        account: this.data.account,
        password: this.data.password,
        identity: this.data.identity,
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../teacherGatherFoodSelection/teacherGatherFoodSelection?userObj=' + encodeURIComponent(userObj)
      });
    },

    clickToFoodSelection_4: function(option) {
      let userObj = {
        canteenNum: 4,
        account: this.data.account,
        password: this.data.password,
        identity: this.data.identity,
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../teacherGatherFoodSelection/teacherGatherFoodSelection?userObj=' + encodeURIComponent(userObj)
      });
    },

    clickToFoodSelection_5: function(option) {
      let userObj = {
        canteenNum: 5,
        account: this.data.account,
        password: this.data.password,
        identity: this.data.identity,
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../teacherGatherFoodSelection/teacherGatherFoodSelection?userObj=' + encodeURIComponent(userObj)
      });
    },

    onClickLeft: function(option) {
        let userObj = {
          account: this.data.account,
          password: this.data.password,
          identity: this.data.identity
        };
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
            url: '../teacherConsole/teacherConsole?userObj=' + encodeURIComponent(userObj)
        });
    }

    
})