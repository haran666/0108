$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="李雨晴" &&  pwd=="0108"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="1.html";},2000);
		}
	else{
		alert("密码是我最爱的小李子的生日哦!（4位数）");
	}
});
