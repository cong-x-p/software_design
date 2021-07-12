// miniprogram/pages/home/home.js
Page({
  data: {
    account: "",
    password: "",
    identity: "",
    items: [
      {value: "student", name: "学生"},
      {value: "teacher", name: "教师"},
      {value: "canteenManager", name: "食堂档口管理人员"}
    ],
    requestAccount: "",
    requestPassword: "",
    requestIdentity: ""
  },

  accountInput(event) {
    this.setData({
      account: event.detail.value
    });
  },

  passwordInput(event) {
    this.setData({
      password: event.detail.value
    });
  },

  loginFunction: function(option) {
    const temp = this;
    if (this.data.account.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号密码不可为空',
        icon: 'none',
        duration: 1500
      });
    }
    if (this.data.account.length != 0 && this.data.password.length != 0) {
      wx.request({
        url: 'http://82.156.219.94:8000/Login/',
        method: 'POST',
        data: {
          username: this.data.account,
          password: this.data.password,
          identity: this.data.identity
        },
        success(res) {
          temp.setData({
            requestPassword: res.data.password,
            requestAccount: res.data.username.toString(),
            requestIdentity: res.data.identity
          });
          if (temp.data.account === temp.data.requestAccount && temp.data.password === temp.data.requestPassword && temp.data.identity === temp.data.requestIdentity) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1500
            });
            let userObj = {
              account: temp.data.account,
              password: temp.data.password,
              identity: temp.data.identity
            };
            userObj = JSON.stringify(userObj);
            if (temp.data.identity === "student") {
              wx.navigateTo({
                url: '../studentConsole/studentConsole?user=' + encodeURIComponent(userObj)
              });
            } else if (temp.data.identity === "teacher") {
              wx.navigateTo({
                url: '../teacherConsole/teacherConsole?user=' + encodeURIComponent(userObj)
              });
            } else if (temp.data.identity == "canteenManager") {
              wx.navigateTo({
                url: '../canteenManagerConsole/canteenManagerConsole?user=' + encodeURIComponent(userObj)
              });
            }
          } else {
            wx.showToast({
              title: '登录失败',
              icon: 'none',
              duration: 1500
            });
          }
        }
      });
    }
  },

  setDataAsync: function(data) {
    this.setData({
      requestPassword: data
    });
  },

  registerSwitch: function(option) {
    wx.navigateTo({
      url: '../register/register'
    });
  },

  identitySelection: function(event) {
    const items = this.data.items;
    const len = items.length;
    for (let i = 0; i < len; i++) {
      items[i].checked = items[i].value === event.detail.value;
    }

    this.setData({
      items,
      identity: event.detail.value
    });
  }
});