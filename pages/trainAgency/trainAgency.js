// pages/briefIntroduction/briefIntroduction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_list:[],
    image_object_list:{}
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
    var imageList = new Array();
    var resourcesUrl = getApp().globalData.RESOURCES_URL;
    var imageObjectList = new Object();
    
    imageObjectList['childrenDancePeacock'] = resourcesUrl + 'briefIntroduction/mmexport1536242704780.jpg';
    imageObjectList['companyTag'] = resourcesUrl + 'briefIntroduction/mmexport1536242478730.jpg';
    
    imageObjectList['fourGirlKneeDance'] = resourcesUrl + 'briefIntroduction/mmexport1536242673952.jpg';
    imageObjectList['circleDance'] = resourcesUrl + 'briefIntroduction/mmexport1536242746175.jpg';
    imageObjectList['teacherCommunication'] = resourcesUrl + 'briefIntroduction/mmexport1536242509056.jpg';
    
    imageObjectList['groupPhoto'] = resourcesUrl + 'briefIntroduction/mmexport1536242811011.jpg';
    imageObjectList['wiredDance'] = resourcesUrl + 'briefIntroduction/mmexport1536242727203.jpg';
    
    imageObjectList['pepaGirl'] = resourcesUrl + 'briefIntroduction/mmexport1536242826201.jpg';

    
    
    var i = 0;
    var x;

    imageList[0] = imageObjectList['childrenDancePeacock'];
    // imageList[1] = imageObjectList['companyTag'];
    imageList[1] = imageObjectList['fourGirlKneeDance'];
    imageList[2] = imageObjectList['circleDance'];
    imageList[3] = imageObjectList['teacherCommunication'];
    imageList[4] = imageObjectList['groupPhoto'];
    imageList[5] = imageObjectList['wiredDance'];
    imageList[6] = imageObjectList['pepaGirl'];

    this.setData({ image_list:imageList});
    this.setData({ image_object_list: imageObjectList });
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