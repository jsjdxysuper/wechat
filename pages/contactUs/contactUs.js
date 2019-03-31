// pages/contactUs/contactUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobilePhone:'18540255183',
    cellPhone:'18540255183',
    wechat:'18540255183'
  },
  makeCall:function(event){
    wx.makePhoneCall({
      phoneNumber: this.data.cellPhone,
    });
  },
  copyWechat: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.wechat,
      success: function (res) {
        // console.log(self.data.wechat);
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              // console.log('确定')
            } else if (res.cancel) {
              // console.log('取消')
            }
          }
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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