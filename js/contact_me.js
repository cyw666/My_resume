$('#contactForm .btn').click(function(){
	var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();
	var data={name:name,email:email,message:message};
	if(vailName()&vailEmail()&vailMessage()){
		$.post('contact_me.php',data,function(txt){
			//console.log(txt);
			if(txt==1){
				$('div#success').html('发送成功！');
				$('div#success').css('display','block');
				$("input#name").val('');
				$("input#email").val('');
				$("textarea#message").val('');
			}else{
				$('div#success').html('发送失败！');
				$('div#success').css('display','block');
			}
		});
	}else{
		$('div#success').html('发送失败！');
		$('div#success').css('display','block');
		$("input#name")[0].focus();
	}
});
/************表单验证***************/
$("input#name").blur(vailName);
function vailName(){
	var name = $("input#name").val();
	var reg=/^(\s*)$/;
	if(reg.test(name)){
		$('#v1').html('姓名不能为空!');
		return false;
	}else{
		$('#v1').html('');
		return true;
	}
}
$("input#email").blur(vailEmail);
function vailEmail(){
	var email = $("input#email").val();
	var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})+$/;
	
	//console.log(reg.test(email));
	if(reg.test(email)){
		$('#v2').html('');
		return true;
	}else{
		$('#v2').html('邮箱格式有误!');
		return false;
	}
}
$("textarea#message").blur(vailMessage);
function vailMessage(){
	var message = $("textarea#message").val();
	var reg=/^(\s*)$/;
	if(reg.test(message)){
		$('#v3').html('留言不能为空!');
		return false;
	}else{
		$('#v3').html('');
		return true;
	}
}

