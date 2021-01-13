//index.js
const app = getApp()

Page({
  data: {
    funcationName_BasiceComponent:'基础组件',

  },

    go2ComponetMain:function(){
      console.log('点击进入组件页面')
        wx.navigateTo({
          url: '../basicComponent/main/main',
        })
    }

})
