/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-19 18:12:06
 * @version $Id$
 */
function addClass(obj,val){

	var arr=obj.className.split(' ');
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]====val){
			return;
		}
	}
	arr.push(val);
	obj.className=arr.join(' ');
};
function removeClass(obj,val)
{
	var arr=obj.className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]===val){
			arr.splice(i,1);
			obj.className = arr.join(' ');
		}
	}
	return;
}
