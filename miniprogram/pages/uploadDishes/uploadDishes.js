// miniprogram/pages/uploadDishes/uploadDishes.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canteenNum: '',
        title: '',
        description: '',
        price: ''
    },

    clickToUploadDish() {
        const that = this;
        console.log(this.data.title);
        console.log(this.data.description);
        console.log(this.data.price);
        wx.request({
          url: 'http://82.156.219.94:8000/Add_Menu/',
          data: {
              Shop_id: this.data.canteenNum,
              Menu_name: this.data.title,
              Menu_des: this.data.description,
              price: this.data.price
          },
          method: 'POST',
          header: {
              'Content-type': 'json'
          },
          success(res) {
              that.setData({
                  canteenNum: '',
                  title: '',
                  description: '',
                  price: ''
              });
          }
        });
    },

    onClickLeft: () => {
        wx.navigateTo({
          url: '../canteenManagerConsole/canteenManagerConsole'
        });
    }
})