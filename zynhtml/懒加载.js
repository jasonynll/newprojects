
check();

$(window).on('scroll',check)

function check(){

    $('.container img').not('load').each(function(){
        if(isShow($(this))){
            show($(this))
        }
    })
}




function show($imgs){
    $imgs.each(function(){
        var imgUrl = $(this).attr('data-url');
        $(this).attr('src',imgUrl)
    })
}


function isShow($node){
    var windowHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        offsetTop = $node.offset().top,
        nodeHeight = $node.outerHeight();
        if(windowHeight+scrollTop>offsetTop && scrollTop<offsetTop+nodeHeight){
            return true
        }else{
            return false;
        }
}