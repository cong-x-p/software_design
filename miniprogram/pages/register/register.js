// miniprogram/pages/register/register.js
Page({
    data: {
        account: "",
        password: "",
        confirmPassword: "",
        identity: "",
        items: [
            {value: "student", name: "学生"},
            {value: "teacher", name: "教师"},
            {value: "canteenManager", name: "食堂档口管理人员"}
        ]
    },

    accountInput: function(event) {
        this.setData({
            account: event.detail.value
        });
    },

    passwordInput: function(event) {
        this.setData({
            password: event.detail.value
        });
    },

    confirmPasswordInput: function(event) {
        this.setData({
            confirmPassword: event.detail.value
        });
    },

    registerFucntion: function() {
        if (this.data.account.length == 0) {
            wx.showToast({
              title: '账号不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (this.data.password.length == 0) {
            wx.showToast({
              title: '密码项不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (this.data.confirmPassword.length == 0) {
            wx.showToast({
              title: '确认密码项不可为空',
              icon: 'none',
              duration: 1500
            });
        } else if (this.data.password != this.data.confirmPassword) {
            wx.showToast({
              title: '密码与确认密码不一致，请重新输入',
              icon: 'none',
              duration: 1500
            });
            this.setData({
                password: "",
                confirmPassword: ""
            });
        } else if (this.data.identity.length == 0) {
            wx.showToast({
              title: '您还未选择身份',
              icon: 'none',
              duration: 1500
            });
        } else {
            wx.request({
              url: 'http://82.156.219.94:8000/enroll/',
              data: {
                username: this.data.account,
                password: this.data.password,
                identity: this.data.identity
              },
              method: 'POST',
              header: {
                'Content-type': 'json'
              },
              success(res) {
                wx.showToast({
                  title: '注册成功',
                  icon: 'success',
                  duration: 1000
                });
                wx.navigateTo({
                  url: '../home/home'
                });
              }
            });
        }
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
    },

    returnToLoginFunction: function() {
        wx.navigateTo({
          url: '../home/home'
        })
    }
})