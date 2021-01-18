// miniprogram/pages/basicComponent/richText/richText.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "富文本",
    nodes: [
      {
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height:20px;padding:30px;'
        },

        children: [
          {
            type: 'text',
            text: '原始node富文本'
          },
          {
            name: 'img',
            attrs: {
              src: 'https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/%E4%B8%8B%E8%BD%BD.jpg',
              style: 'width:100%',
              class:'img1'
            }
          },

          {
            name: 'img',
            attrs: {
              src: 'https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/%E4%B8%8B%E8%BD%BD.jpg',
              style: 'width:100%'
            }
          }
        ]

      },

      {
        type: 'text',
        text: '结束'
      },
    ],

    urls: [],
    tagStyle:{
      img:'font-size:0;display:block;'
    },
    html:"<div>小程序实践<span>message</span><img src='https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/%E4%B8%8B%E8%BD%BD%20%281%29.jpg' /><img src='https://ydb-pic1.oss-cn-shanghai.aliyuncs.com/%E4%B8%8B%E8%BD%BD%20%281%29.jpg' /></div>"



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

    function findUrl(nodes) {
      let urls = []
      nodes.forEach(item => {
        if (item.name == 'img' && item.attrs) {
          for (const key in item.attrs) {
            if (key == 'src') {
              urls.push(item.attrs[key])
            }
          }
        }
        if (item.children) {
          urls = urls.concat(findUrl(item.children))
        }
      })
      return urls
    }

    this._test()

    this.data.urls = this.findUrls(this.data.nodes)
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


  onTap(e) {
    let urls = this.data.urls
    wx.previewImage({
      urls: urls,
      current: urls[0]
    })
  },

  
  findUrls(nodes) {
    let urls = []
    nodes.forEach(item => {
      if (item.name == 'img' && item.attrs) {
        for (const key in item.attrs) {
          if (key == 'src') {
            urls.push(item.attrs[key])
          }
        }
      }
      if (item.children) {
        urls = urls.concat(this.findUrls(item.children))
      }
    })
    return urls
  },


  //私有方法
   _test(){
     console.log("测试1111")
   },


   //
   onTapImage(){
    console.log("Parser 使用解析html")
  }

})