const demo = require("./demo")

// miniprogram/pages/basicComponent/_canvas/_canvas.js
var{wxml,style}=require('./demo')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title:'视图生成海报',
    src:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取自定义子控件
    this.widget=this.selectComponent(".widget")
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

  /** 
   * 视图渲染到画布
  */
  renderToCanvas(){
    const _cv=this.widget.renderToCanvas({wxml,style})
    _cv.then((res)=>{
      console.log('container', res.layoutBox)
      this.container=res
    })
  },

  /**
   * 导出图片
   */
  extraImage() {
    const _contain=this.widget.canvasToTempFilePath()
    _contain.then((res)=>{
      this.setData({
        src: res.tempFilePath,
        width: this.container.layoutBox.width,
        height: this.container.layoutBox.height
      })
    })
  },

  /**
   * 保存图片
   * @param {*} e 
   */
  onTapSaveBtn(e){
    wx.saveImageToPhotosAlbum({
      filePath:this.data.src,
      complete(res) { 
        console.log(res)
      }
    })
  },

})