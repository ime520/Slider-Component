(function(App){
  function extend(o1,o2){
    for(var i in o2){
      if(o1[i]==undefined)
        o1[i]=o2[i];
    }
  }
  function html2node(html){
    var container=document.createElement('div');
    container.innerHTML=html;
    return container.children[0];//html只能有一个根节点
  }
  var template=`<div class='m-slider'></div>`;
  function Slider(options){
    extend(this,options);//this增加属性：images-存放图片位置的数组，interval-自动播放的时间，container-要将轮播图插入到哪个dom元素
    this.slider=html2node(template);
    this.imgLength=this.images.length;
    this.init();
  }
  Slider.prototype.nav=function(index){
    if(this.index===index)return;
    this.last=this.index;//this增加了一个last属性，存放之前的索引位置
    this.index=index;
    this.fade();
    this.setCurrent();
  }
  App.Slider=Slider;
})(window.App);
