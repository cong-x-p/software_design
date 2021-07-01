// miniprogram/pages/home/home.js
const app = getApp();
Page({
  data: {
    account: "",
    password: "",
    identity: "",
    identityItems: [
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
        title: 'Account and Password cannot be empty',
        icon: 'none',
        duration: 1500
      });
    } else {
      wx.showToast({
        title: 'Success',
        icon: 'success',
        duration: 1500
      });
    }
  },

  identitySelection: function(event) {
    const identityItems = this.data.identityItems;
    const len = identityItems.length;
    for (let i = 0; i < len; i++) {
      identityItems[i].checked = identityItems[i].value === event.detail.value;
    }

    this.setData({
      identityItems
    });
  }
});