// miniprogram/pages/foodSelection/foodSelection.js
Page({
    data: {
      account: '',
      password: '',
      identity: '',
      canteenNum: '',
      items: [],
      orderPrice: 0
    },

    onLoad: function(option) {
      var that = this;
      if (option && option.userObj) {
        let userObj = decodeURIComponent(option.userObj);
        userObj = JSON.parse(userObj);
        // console.log(userObj);
        that.setData({
            canteenNum: userObj.canteenNum,
            account: userObj.account,
            password: userObj.password,
            identity: userObj.identity
        });
        // console.log(that.data.canteenNum);
        // console.log(this.data.account);
        // console.log(this.data.password);
        // console.log(this.data.identity);
      }
      wx.request({
        url: 'http://82.156.219.94:8000/StudentMenu/',
        method: 'POST',
        data: {
          Shop_id: this.data.canteenNum
        },
        header: {
          'Content-type': 'json'
        },
        success: function(res) {
          // console.log(res.data);
          that.setData({
            items: res.data.data
          });
        }
      });
    },

    onClickLeft: function() {
      let userObj = {
        account: this.data.account,
        password: this.data.password,
        identity: this.data.identity
      };
      userObj = JSON.stringify(userObj);
      wx.navigateTo({
        url: '../canteenSelection/canteenSelection?userObj=' + encodeURIComponent(userObj)
      });
    },

    onChangePlus: function(event) {
      var index = event.currentTarget.dataset.index;
      var quantityData = "items[" + index + "].quantity";
      this.setData({
        [quantityData]: this.data.items[index].quantity + 1
      });
      var orderPrice = 0;
      for (const item of this.data.items) {
        orderPrice += item.quantity * item.price;
      }
      orderPrice = orderPrice * 100;
      this.setData({
        orderPrice: orderPrice
      });
    },

    onChangeMinus: function(event) {
      var index = event.currentTarget.dataset.index;
      var quantityData = "items[" + index + "].quantity";
      this.setData({
        [quantityData]: this.data.items[index].quantity - 1
      });
      var orderPrice = 0;
      for (const item of this.data.items) {
        orderPrice += item.quantity * item.price;
      }
      orderPrice = orderPrice * 100;
      this.setData({
        orderPrice: orderPrice
      });
    },

    onSubmit: function(option) {
      let content = '';
      var sum = 0;
      for (const item of this.data.items) {
        sum += item.quantity;
      }
      for (const item of this.data.items) {
        if (item.quantity !== 0) {
          content += item.title + '*' + item.quantity.toString();
        }
      }
      if (sum === 0) {
        wx.showToast({
          title: '??????????????????',
          icon: 'none',
          duration: 1500
        });
      } else {
        let userObj = {
          account: this.data.account,
          canteenNum: this.data.canteenNum,
          content: content,
          price: this.data.orderPrice,
          password: this.data.password,
          identity: this.data.identity
        }
        userObj = JSON.stringify(userObj);
        wx.navigateTo({
          url: '../infoInput/infoInput?userObj=' + encodeURIComponent(userObj)
        });
      }
    }
})