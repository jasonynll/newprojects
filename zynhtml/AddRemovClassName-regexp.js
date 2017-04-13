/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-01-19 18:19:35
 * @version $Id$
 */
function hasClass(el ,cls)
{
	var reg= new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
	return reg.test(el.className);
}

function addClass(el,cls)
{
	var reg= new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
	if(!reg.test(el.className))
	{
		el.className=el.className+' '+cls;
	}
}
function removeClass(el,cls)
{
	var reg= new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
	if(reg.test(el.className))
	{
		el.className=el.className.replace(reg,' ').replace(/\s{2,}/g,' ');
	}
}