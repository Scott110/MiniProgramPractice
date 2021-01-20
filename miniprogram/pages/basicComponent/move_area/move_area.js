// miniprogram/pages/basicComponent/move_area/move_area.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'可移动容器',
    x:0,
    y:0,
    slideButton:[
      {
      text:"收藏",
      src:"../../../imags/icon_love.svg"
    },
    {
      text:"喜欢",
      //修改样式
      extClass:"start",
      src:"../../../imags/icon_star.svg",
      //传递参数对象
      data:"{a:34,b:56}"
    },
    {
      text:"删除",
      type:"warn",
      src:"../../../imags/icon_del.svg"
    },
  ]
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

    onMoveChange(e){
      console.log("change",e.detail)
    },

    //动态改变
  tap(e){
    let kind=parseInt(e.currentTarget.dataset.kind)
    if(!kind){
      this.setData({
        x:30,
        y:30
      })
    }else{
      this.setData({
        x:0,
        y:0
      })
    }
  },

  slideButton(e){
    console.log("----wx&ui----"+e.detail.data)
  }

  

})