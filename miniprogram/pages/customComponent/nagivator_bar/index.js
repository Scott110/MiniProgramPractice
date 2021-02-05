// pages/customComponent/nagivator_bar/index.js
var app = getApp();
Component({

  options: {
    //多插槽支持
    multipleSlots: true
  },


  /**
   * 组件的属性列表
   */
  properties: {
    //添加在组件内部结构的class，可用于修改组件内部的样式
    'ext-class': {
      type: String,
      value: ''
    },

    'loading':{
      type: Boolean,
      value: false
    },

    'active':{
      type: Boolean,
      value: false
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    //双击返回顶部
    doubleClick(e){
      if(this.timeStamp&&e.timeStamp-this.timeStamp<300){
        this.timeStamp = 0
        wx.pageScrollTo({
          scrollTop:0,
          duration: 300,
        })
      }else{
        //事件产生的时间
        this.timeStamp = e.timeStamp
    
      }
    }

  },

  lifetimes:{
    attached:function attached(){
      var _this=this;
      //双！！将对象转化为Boolean
      var isSupport=!!wx.getMenuButtonBoundingClientRect();//获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
      var rect=wx.getMenuButtonBoundingClientRect() ? wx.getMenuButtonBoundingClientRect() :null;
      //获取系统信息
      wx.getSystemInfo({
        success: (result) => {
          //是否是ios 系统
          var ios=!!(result.system.toLocaleLowerCase().search('ios')+1);
          //状态栏高度
          var statusBarHeight=result.statusBarHeight;
          //ios,android 默认导航栏不同
          var iosNavHeight=44;
          var andNavHeight=48;
          //导航栏+状态栏高度
          var topHeight=ios ? statusBarHeight+iosNavHeight : statusBarHeight+andNavHeight;
        
          _this.setData({
            ios:ios,
            topBarHeight:topHeight,
            statusBarHeight:statusBarHeight,
            innerWidth:isSupport ? 'width:'+rect.left+'px' :'',
            innerPaddingRight:isSupport ? 'padding-right:'+(result.windowWidth- rect.left)+'px' :'',
            leftWidth:isSupport ? 'width:'+(result.windowWidth- rect.left)+'px' :'',
          });
        
        },
      });

      //处理返回键
      var pages=getCurrentPages
      if(pages.length>1){
        this.setData({showBack:true})
      }

    
    }
  }
})
