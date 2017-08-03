


define(['jquery'],function($){
    var Lazy =(function(){
     function Exposure($target,callback,isOnce){
     this.$target = $target;
     this.callback = callback;
     this.isOnce = isOnce;
     this.hasShow = false;
     this.bind();
     this.check();

 }

 Exposure.prototype.showImg = function($node){

     var imgUrl = $node.attr('data-src');
                 $node.attr('src',imgUrl);

 }
 Exposure.prototype.bind = function(){
     var _this = this;
     $(window).on('scroll', function(){
         _this.check();
     })

 }
 Exposure.prototype.check = function(){
      
      if(this.isOnce){
          if(this.isShow() && !this.hasShow){
              this.callback(this.$target)
              this.hasShow = true;
          }
      }else {
           if(this.isShow()){
              this.callback(this.$target)
              
          }

      }
       
    
            

 }
 Exposure.prototype.isShow = function(){
      
 var windowHeight = $(window).height(),
                scrollTop = $(window).scrollTop(),
                offsetTop = this.$target.offset().top,
                nodeHeight = this.$target.height();
            if(windowHeight+scrollTop>offsetTop && scrollTop< offsetTop+nodeHeight){
                return true;
            }else{
                return false;
            }  
 }  
  
            


    return {
        init :function($targets,callback){
            $targets.each(function(idx,target){
                new Exposure($(target),callback)
            })

        },
        one:function($target,callback){
            $target.each(function(idx,target){
                new Exposure($(target),callback,true)
            })
        }
    }
})()

   return lazy;



})


     