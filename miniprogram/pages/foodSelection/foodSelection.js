// miniprogram/pages/foodSelection/foodSelection.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      canteenNum: '',
      items: [],
      orderPrice: 0
    },

    onLoad: function(option) {
      var that = this;
      if (option && option.canteenNum) {
        let userObj = decodeURIComponent(option.canteenNum);
        userObj = JSON.parse(userObj);
        that.setData({
            canteenNum: userObj.canteenNum
        });
        console.log(that.data.canteenNum);
        // console.log(this.data.account);
        // console.log(this.data.password);
        // console.log(this.data.identity);
      }
      let temp = "http://82.156.219.94:8000/Shop_id/" + that.data.canteenNum.toString();
      wx.request({
        url: temp,
        method: 'GET',
        header: {
          'Content-type': 'json'
        },
        success: function(res) {
          that.setData({
            items: res.data.data
          });
          // console.log(res.data.data);
        }
      });
    },

    onClickLeft: function() {
      wx.navigateTo({
        url: '../canteenSelection/canteenSelection'
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
    }
})