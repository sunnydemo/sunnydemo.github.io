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
    setTimeout(function(){
        slogan1.fadeIn("5000")
    },1000);
    setTimeout(function(){
        slogan2.fadeIn("5000")
    },2000);
    setTimeout(function(){
       slogan3.fadeIn("5000")
    },3000);
    setTimeout(function(){
        slogan4.fadeIn("5000")
    },4000);
});
