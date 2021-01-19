// miniprogram/pages/basicComponent/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'基础组件',
      compont_icon_btn_str:'icon实例',
      compont_progress_btn_str:'progress实例',
      compont_rich_text_btn_str:'富文本实例',
      compont_view_btn_str:'view实例',
      compont_moveable_view_str:'可移动view实例'
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

  /*
  * 进入icon 测试页
  */
  go2ComponetIcon:function(){
    console.log('点击进入icon页面')
      wx.navigateTo({
        url: '../icon1/icon',
      })
  },

   /*
  * 进入progress 测试页
  */
 go2ComponetProgress:function(){
  console.log('点击进入progress页面')
    wx.navigateTo({
      url: '../progress/progress',
    })
},

  /*
  * 进入富文本 测试页
  */
 go2ComponetRichText:function(){
  console.log('点击进入富文本页面')
    wx.navigateTo({
      url: '../richText/richText',
    })
},


  /*
  * 进入view测试页
  */
 go2ComponetView:function(){
  console.log('点击进入View实践页面')
    wx.navigateTo({
      url: '../_view/_view',
    })
},

/*
  * 进入可移动 测试页
  */
 go2ComponetMoveableView:function(){
  console.log('点击进入View实践页面')
    wx.navigateTo({
      url: '../move_area/move_area'
    })
},

})


