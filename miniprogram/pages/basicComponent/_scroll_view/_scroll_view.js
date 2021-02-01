// miniprogram/pages/basicComponent/_scroll_view/_scroll_view.js
let viewId = 5

const createRlvContext=require('miniprogram-recycle-view')

function rpx2px(rpx){
  return (rpx/750)*wx.getSystemInfoSync().windowWidth

}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"scrollView实践",
    left:0,
    scrollIntoViewId:'',
    pullMsg:'下拉刷新',//下拉刷新提示语(下拉刷新，释放刷新，刷新中)
    //垂直滚动条位置
    scrollTop:0,
    //当前下拉刷新状态
    refresherTrigger:false,
    arr: [1,2,3,4],

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
    var cxt=createRlvContext({
      id:'recycleId',
      dataKey:'recycleList',
      page:this,
      itemSize:{
        width: rpx2px(650),
        height: rpx2px(100)
      }
    })

    let newList=[]

    for(let i=0;i<20;i++){
      newList.push({
        id: i,
    name: `标题${i + 1}`
      })
    }
    cxt.append(newList)

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

  //滚动时触发
  onScroll(e){
    console.log(e.detail)
  },

  //刷新完成
  onRefreshComplete(){
    console.log('更新中')
    let intervalId = setInterval(()=>{
      let pullingMessage = this.data.pullMsg
      console.log(pullingMessage,pullingMessage == '更新中')
      if (pullingMessage.length < 7){
        pullingMessage += '.'
      }else{
        pullingMessage = '更新中'
      }
      this.setData({
        pullMsg:pullingMessage
      })
    },500)
    setTimeout(()=>{
      console.log('更新完成了')
      clearInterval(intervalId)
      this.setData({
        pullMsg:"已刷新",
        refresherTrigger:false,
      })
    },2000)
  },

  //向上滚动时触发
  scrollTop(e){
    console.log(e.detail)
  },




})