//alert("Hello, World!");

function validation(){
	var valid = true;
	var log_in = document.getElementById("log_in");
	var pwd = document.getElementById("pwd");
	var empty_login = document.getElementById("empty_login");
	var empty_pwd = document.getElementById("empty_pwd")
	if (log_in.value == ""){
		empty_login.className = "error";
        log_in.className += " color_change";
        valid = false;
	}else{
        empty_login.className = "no_error";
        log_in.className = "form-control";
    }
	if (pwd.value == ""){
		empty_pwd.className = "error";
        pwd.className += " color_change";
        valid = false;
	}else{
        empty_pwd.className = "no_error";
        pwd.className = "form-control";
    }
	console.log("Вы авторизованны!");
	return valid;
}