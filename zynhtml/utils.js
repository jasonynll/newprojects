/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-20 15:27:56
 * @version $Id$
 */
var Utils = {

	hasClass:function(ele,cls){

		var reg =new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
		return reg.test(ele.className);
	},

	singleAddClass:function(ele,cls){
		if(Utils.hasClss(ele,cls)){
			return;
		}else{
			ele.className=ele.className+' '+cls;
		}
	},

	singleRemoveClass:function(ele,cls){
		if(Utils.hasClass(ele,cls)){
			var reg1=new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
			ele.className =els.className.replace(reg1,'');
		}else{
			return
		}
	},

	addClass:function(els,cls){
		if(ele.length&&ele.lenght>0){
			for(var i=0; i<ele.length;i++){
				Utils.singleAddClass(ele[i],cls);
			}
		}else{
			Utils.singleAddClass(ele,cls);
		}
	},

	removeClass:function(ele,cls){
		if(ele.length&&ele.lenght>0){
			for(var i=0; i<ele.length;i++){
				Utils.singleRemoveClass(ele[i],cls);
			}
		}else{
			Utils.singleRemoveClass(ele,cls);
		}
	},

	indexOf:function(ele){
		var parent =ele.parentElement,
		    sibling = parent.children;
		for(var i=0;i<sibling.length;i++){
			if(ele===sibling[i]){
				return i;
			}
		}
		return -1;
	}
		
};
