"use strict";

//alert("Hello world!");

function news_adding(){
    var valid = true;
    var news_header = document.getElementById("news_header");
    var news_content = document.getElementById("news_content");
    var news_author = document.getElementById("news_author");
    var empty_header = document.getElementById("empty_header");
    var empty_content = document.getElementById("empty_content");
    var empty_author = document.getElementById("empty_author");


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
    if (news_author.value == ""){
         console.log("Не введено имя автора!");
         empty_author.className = "error";
         news_author.className += " color_change";
         valid = false;
    }else{
         empty_author.className = "no_error";
         news_author.className = "form-control";
    }
    if(valid==true)console.log("Новость добавлена!");
    return valid;
}