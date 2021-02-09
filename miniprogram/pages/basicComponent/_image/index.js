// miniprogram/pages/basicComponent/_image/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"测试Image",
    urls:[],

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
    var _urls=[];
    _urls.push("https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/209172240666163861.jpg");
    _urls.push("https://yhttps://ydb-pic1.oss-cn-shanghai.aliyuncs.com/309070497084387740.jpg");
    _urls.push("https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/389598013008438337.jpg");
    _urls.push("https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/605991190394477777.jpg");
    _urls.push("https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/MVVM_sequence%20.png");
    _urls.push("https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/RecyclerView%20%282%29.png");
    _urls.push("https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/View%20%E7%BB%93%E6%9E%84%E5%9B%BE.png");
      this.setData({
        urls:_urls
      })
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

  //图片加载错误
  imgeBindErro(e){
    console.log('---------加载失败-------'+e.currentTargent)
  }
  
})