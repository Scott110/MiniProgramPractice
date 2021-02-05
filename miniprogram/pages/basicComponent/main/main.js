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
      compont_moveable_view_str:'可移动view实例',
      compont_canvas_str:'view生成海报',
      compont_scroll_view_str:'进入scroll_view',
      compont_picker_view_str:'进入时间选择器',
      compont_nav_bar_str:'进入自定义导航栏',
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
  console.log('点击进入moveable页面')
    wx.navigateTo({
      url: '../move_area/move_area'
    })
},


/*
  * 进入视图生成海报页
  */
 go2_Canvas:function(){
  console.log('点击进入视图进入海报也页面')
    wx.navigateTo({
      url: '../_canvas/_canvas'
    })
},

/*
  * 进入scrollview页
  */
 go2_scrollview:function(){
  console.log('点击进入scrollview页面')
    wx.navigateTo({
      url: '../_scroll_view/_scroll_view'
    })
},

/*
  * 进入选择器页
  */
 go2_pickerview:function(){
  console.log('点击进入选择器页面')
    wx.navigateTo({
      url: '../pickerview/_pickerview'
    })
},

/*
  * 进入自定义导航
  */
 go2_Nav_bar:function(){
  console.log('点击进入自定义导航页面')
    wx.navigateTo({
      url: '../nav_bar/index'
    })
},


})


