// miniprogram/pages/basicComponent/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'progress实践',
    progressValue:40
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
,

  onProgressTap: function() {
    this.setData({
      progressValue:0
    })
  },

  //动画完成事件
  onProgressActiveEnd: function() {
   console.log("progress 结束")
  },


  //重新设置进度条
  onProgressReload: function() {
    this.setData({
      progressValue:0
    })

    this.setData({
      progressValue:50
    })
  },

  onProgressReload1: function() {
    this.setData({
      progressValue:0
    })
    //是否可用
   if(wx.canIUse('nextTick')){
      wx.nextTick(()=>{
        this.setData({
          progressValue:100
        })
      });
    }else{
      setTimeout(() => {
        this.setData({
          progressValue:100
        })
      }, 17);
    }
  },
  
})