(function(App){
  function extend(o1,o2){
    for(var i in o2){
      if(o1[i]==undefined)
        o1[i]=o2[i];
    }
  }
  var template=`<div class='m-slider'></div>`;
  function Slider(options){
    extend(this,options);
  }
  Slider.prototype.nav=function(index){
    if(this.index===index)return;
    this.last=this.index;//'this'增加了一个last属性，存放之前的索引位置
    this.index=index;
    this.fade();
    this.setCurrent();
  }
  App.Slider=Slider;
})(window.App);
