// miniprogram/pages/basicComponent/_scroll_view/_scroll_view.js
let viewId = 5

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"scrollView实践",
    left:0,
    scrollIntoViewId:''
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

  //滚动
  scrolltoPosition(){
    this.setData({
      left:100
    })
  },


  viewScrollToUpperEvent(e){
    console.log('测试scrolltoupper事件',e.detail);
    
  },

  // 移动到特定view
  scrollToView(){
  
    viewId += 2
    this.setData({
      scrollIntoViewId:'childview'+viewId
    })
    //console.log(this.data.scrollIntoViewId)
  },

  onScroll(e){
    console.log(e.detail)
  }

})