// pages/firstPage/firstPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoImage: getApp().globalData.ALL_VIDEO_iMG,
    remoteUrl: getApp().globalData.REMOTE_URL,
    resourceUrl: getApp().globalData.RESOURCES_URL,
    fineCourseList:""
  }, bindtapdianhua(event){
    console.log('submit complete');
  },
  locationNavi(event) {
    wx.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function (res) {
        wx.openLocation({//​使用微信内置地图查看位置。
          latitude: 39.8998800000,//要去的纬度-地址
          longitude: 116.4913800000,//要去的经度-地址
          name: "北京暿艺东方文化传播有限公司",
          address: '东四环中路78号大成国际中心A2座1211'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this;

    wx.request({
      url: getApp().globalData.REMOTE_URL + 'weixin/sysCodeVideoList?typeid=sysset&id=fineCourse',
      data: "OK",
      method: 'POST',
      success: function (res) {
        //console.log('submit success');
        var fineCourseListLo = res.data;

        that.setData({ fineCourseList: fineCourseListLo });
      },
      fail: function (res) {
        //console.log('submit fail');
      },
      complete: function (res) {
        //console.log('submit complete');
      }
    });

    
    wx.request({
      url: getApp().globalData.REMOTE_URL +'weixin/sysCode?typeid=sysset&id=circlePic',
      data: "OK",
      method: 'POST',
      success: function (res) {
        //console.log('submit success');
        var sysCodeList = res.data;
        var splits = [];
        for (let i = 0; i < sysCodeList.length; i++) {
          splits[i] = getApp().globalData.RESOURCES_URL + '/' + sysCodeList[i].cVal;
        }
        that.setData({ imageUrls: splits })
      },
      fail: function (res) {
        //console.log('submit fail');
      },
      complete: function (res) {
        //console.log('submit complete');
      }
    })
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