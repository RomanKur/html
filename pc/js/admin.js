"use strict";

function news_adding(){
    var valid = true;
    var news_header = document.getElementById("news_header");
    var news_content = document.getElementById("news_content");
    var news_img = document.getElementById("news_img");
    var empty_header = document.getElementById("empty_header");
    var empty_content = document.getElementById("empty_content");
    var empty_img = document.getElementById("empty_img");
    var hardware_sel = document.getElementById("hardware_sel");
    var hard = "hard";
    var per = "per";
    var xhr = new XMLHttpRequest();


    if (news_header.value == "" ){
        console.log("Не введён заголовок!");
        empty_header.className = "error";
        news_header.className += " color_change";
        valid = false;
    }else{
        empty_header.className = "no_error";
        news_header.className = "form-control";
    }
    if (news_content.value == ""){
         console.log("Не введён текст новости!");
         empty_content.className = "error";
         news_content.className += " color_change";
         valid = false;
    }else{
         empty_content.className = "no_error";
         news_content.className = "form-control";

    }
    if (news_img.value == ""){
         console.log("Не добавлена картинка!");
         empty_img.className = "error";
         news_img.className += " color_change";
         valid = false;
    }else{
         empty_img.className = "no_error";
         news_img.className = "form-control";
    }
    if(valid==true)console.log("Новость добавлена!");

    return valid;
}