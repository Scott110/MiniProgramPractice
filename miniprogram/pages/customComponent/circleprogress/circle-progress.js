// pages/basicComponent/circle-progress.js
Component({
  runTimerId:0,
  /**
   * 组件的属性列表s
   */
  properties: {
    percent:{
      type:Number,
      value:0,
      observer: function (newVal, oldVal) {//观察属性改变
        this.draw(newVal);
      }
    }


  },

  /**
   * 组件的初始数据
   */
  data: {
    percentage:'',//百分比
    animTime:''//动画时长
  },


  //生命周期
  lifetimes:{
    attached:function(){},
    detached:function(){}

  },

ready() {
  console.log("------ready-----"+this.data.percent)
  if (this.data.percent) this.draw(this.data.percent);
},

  /**
   * 组件的方法列表
   */
  methods: {

    draw(p){
      const id='runCanvas'
      const aTime='500'
      if(p>100)return
      //创建CanvasContext 对象
      if(!this.ctx2){
        const ctx2=wx.createCanvasContext(id,this)
        this.ctx2=ctx2
      }

      let olodPercentage=this.data.percentage

      this.setData({
        percentage:p,
        animTime:aTime
      })

      var time=this.data.animTime/(this.data.percentage-olodPercentage)
      const query=wx.createSelectorQuery().in(this)
      //添加节点的布局位置的查询请求。相对于显示区域
      query.select('#' + id).boundingClientRect((res)=>{
        var w = parseInt(res.width / 2);
        var h = parseInt(res.height / 2);
        if (this.runTimerid) clearTimeout(this.runTimerid)
         this.canvaseTap(olodPercentage, p, time, w, h)
      }).exec()

    },

    //实现动画效果
    canvaseTap(start,end,time,w,h){
      let that=this;
      start++;
      if(start>end){
        return false;
      }
      that.run(start, w, h);
      this.runTimerId=setTimeout(() => {
        that.canvaseTap(start,end,time,w,h);
      }, time);
    },

    // 绘制圆形进度条方法
    run(c, w, h) {
      let that = this;
      var num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
      that.ctx2.arc(w, h, w - 8, -0.5 * Math.PI, num)
      that.ctx2.setStrokeStyle("#09bb07");//绿色
      that.ctx2.setLineWidth("16");
      that.ctx2.setLineCap("butt");
      that.ctx2.stroke();

      that.ctx2.beginPath();
      that.ctx2.setFontSize(40); //注意不要加引号
      that.ctx2.setFillStyle("#b2b2b2");//浅灰色字体
      that.ctx2.setTextAlign("center");
      that.ctx2.setTextBaseline("middle");
      that.ctx2.fillText(c + "%", w, h);
      that.ctx2.draw();
    },

    //私有方法可以这样写
    _propertyChange :function(newVal,oldVal){
       
    }

  }
})
