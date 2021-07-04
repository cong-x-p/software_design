// miniprogram/pages/foodSelection/foodSelection.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      items: [
        {quantity: 0, price: 3, title: "馒头"},
        {quantity: 0, price: 5, title: "米饭"}
      ],
      orderPrice: 0
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