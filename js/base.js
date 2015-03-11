/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    var slogan1=$("#slogan1");
    var slogan2=$("#slogan2");
    var slogan3=$("#slogan3");
    var slogan4=$("#slogan4");
    
    slogan1.slideDown(3000,function(){
        slogan1.animate({opacity:'0'},5000, function(){
             slogan2.slideDown(3000, function() {
                  slogan2.animate({opacity:'0'},5000, function(){
                       slogan3.slideDown(3000, function() {
                            slogan3.animate({opacity:'0'},5000, function(){
                                 slogan4.slideDown(3000, function() {
                                    slogan4.animate({opacity:'0'},5000);
                               });
                            });
                       });
                  });
             });
        });
    });

});
