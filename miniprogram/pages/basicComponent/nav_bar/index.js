// miniprogram/pages/basicComponent/nav_bar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    active:true

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

  },


onPageScroll(res){
  if (res.scrollTop > 400) {
    if (!this.data.active) {
      this.setData({
        active: true
      })
    }
  } else {
    if (this.data.active) {
      this.setData({
        active: false
      })
    }
  }
},

 //点击back事件处理
 goBack: function () {
  wx.navigateBack();
  this.triggerEvent('back');
},
//返回首页
goHome:function(){
  wx.reLaunch({
    url: '../../index/index'
  })
},

})