$(document).ready(function(){
            $(window).scroll(function(){
                scroll = $(window).scrollTop();
                if(scroll > 100){
                    $(".menu").css({"position":"fixed"});
                    $(".menu").css({"width":"100%"});
                    $(".menu").css({"top":"0"});
                    $(".menu").css({"background":"white"});
                    $(".menu a").css({"color":"black"});
                    $(".logo ").css({"color":"black"});
                    $(".menu ").css({"box-shadow":"rgba(0, 0, 0, 0.19) 2px 2px 2px"});
                    $(".menu ").css({"z-index":"100"});// Valor para superponerse sobre otros elementos
                }
                else{ 
                    //cuando no hay scroll
                    $(".menu").css({"position":"relative"});
                    $(".menu").css({"background":"transparent"});
                    $(".menu ").css({"box-shadow":"0 0 0"});
                    $(".menu a").css({"color":"white"});
                    $(".logo ").css({"color":"white"});
                }
            })
            $(".menu-icon").click(function(){
                $("header nav").slideToggle();
            })
        })