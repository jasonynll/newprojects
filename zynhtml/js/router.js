/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-13 17:48:11
 * @version $Id$
 */
app.get('/loadMore',function(req,res){

	var num = req.query.start;
	var len = req.query.length;
	var json = [];

	for (var i = 0 ; i<len;i++){
		json.push('新闻'+(parseInt(num)+i))
	}
	
	setTimeout(function(){
		res.send(json);

	},4000)
})
