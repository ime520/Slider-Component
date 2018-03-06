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
  App.Slider=Slider;
})(window.App);
