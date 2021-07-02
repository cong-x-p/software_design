// miniprogram/pages/home/home.js
const app = getApp();
Page({
  data: {
    account: "",
    password: "",
    identity: "",
    items: [
      {value: "student", name: "学生"},
      {value: "teacher", name: "教师"},
      {value: "canteenManager", name: "食堂档口管理人员"}
    ]
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

  loginFunction: function() {
    if (this.data.account.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号密码不可为空',
        icon: 'none',
        duration: 1500
      });
    } else {
      wx.showToast({
        title: 'Success',
        icon: 'success',
        duration: 1500
      });
      console.log(this.data.account);
      console.log(this.data.password);
      console.log(this.data.identity);
    }
  },

  registerSwitch: function(option) {
    wx.navigateTo({
      url: '../register/register',
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