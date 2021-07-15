// miniprogram/pages/passwordReset/passwordReset.js
Page({
    data: {
        account: "",
        password: "",
        confirmPassword: "",
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

    resetFunction: function() {
        var that = this;
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
        } else {
            wx.request({
              url: 'http://82.156.219.94:8000/Change/',
              method: 'POST',
              header: {
                'Content-type': 'json'
              },
              data: {
                  username: this.data.account,
                  new_password: this.data.password
              },
              success(res) {
                  console.log(res.data.username);
                  if (res.data.username === '' || res.data.password === '') {
                      wx.showToast({
                        title: '用户名不存在，请先注册',
                        icon: 'none',
                        duration: 1500
                      });
                  } else {
                      wx.showToast({
                        title: '重置成功',
                        icon: 'success',
                        duration: 1500
                      });
                  }
              }
            })
        }
    },

    returnToLoginFunction: function() {
        wx.navigateTo({
          url: '../home/home'
        })
    }
})