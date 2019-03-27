// pages/artTroupe/briefIntroduction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_list: [],
    titleImage: {}
  },
  //图片点击事件
  imgYu: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    // var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: this.data.image_list // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: getApp().globalData.REMOTE_URL + 'weixin/sysCode?typeid=sysset&id=artTroupeTitlePic',
      data: "OK",
      method: 'POST',
      success: function (res) {
        //console.log('submit success');
        var titleImage = getApp().globalData.RESOURCES_URL + res.data[0].cVal;

        that.setData({ titleImage: titleImage });
      },
      fail: function (res) {
        //console.log('submit fail');
      },
      complete: function (res) {
        //console.log('submit complete');
      }
    });

    wx.request({
      url: getApp().globalData.REMOTE_URL + 'weixin/sysCode?typeid=sysset&id=artTroupePic',
      data: "OK",
      method: 'POST',
      success: function (res) {
        //console.log('submit success');
        var imageList = [];
        var sysCodeList = res.data;

        for (let i = 0; i < sysCodeList.length; i++) {
          imageList[i] = getApp().globalData.RESOURCES_URL + '/' + sysCodeList[i].cVal;
        }
        that.setData({ image_list: imageList });
      },
      fail: function (res) {
        //console.log('submit fail');
      },
      complete: function (res) {
        //console.log('submit complete');
      }
    });



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})