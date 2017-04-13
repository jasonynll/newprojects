var a;                               变量a的声明提前；
                                     
function fn(){                       声明一个函数fn（）；
    var b;                                    
    var c;                           fn（）内定义局部变量b和c；
    function fn2(){                  声明函数fn2（），其内部求a和c的值并打印；
        console.log(a);
        console.log(c);
    }
    b = 2;                           将2赋值给b；
    fn2();                           求fn2；
    c = 3;                           赋值3给c；
}
a = 1;                               1被赋值给变量a；
fn()                                 求fn（）；
