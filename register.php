<?php
header("Content-Type:text/html;charset=utf-8");
?>
<html>
	<head>
		<meta charset="utf-8">
		<title>注册</title>
		<link href="C.css" rel="stylesheet" type="text/css" />
	</head>
 <body>
		<div class="box"> 
		<h2>注册</h2>
		<!--将用户输入的user,和pass提交到login.php-->
		<form action="checkregister.php" method="post" enctype="multipart/form-data">
			<div class="inputBox"><input type="text" name="user" value="" required="required"
				placeholder=   "            请输入用户名" pattern="[a-zA-Z0-9_-]{4,16}" title="4到16位（字母，数字，下划线，减号）"><label>用户名</label></div>
			<div class="inputBox"><input type="password" name="pass" value=""required="required"
				placeholder="            请输入您的密码"><label>密码</label></div>
			<div class="inputBox"><input type="password" name="confirm" value=""required="required"
				placeholder="            请重复您的密码"><label>确认密码</label></div>
			<div class="inputBox"><input type="text" value="" name="codeNum" required="required"
				placeholder="            请输入验证码" pattern="[0-9]{4}"  title="验证码为4个数字"><label>验证码</label></div>
			<input type="submit" name="submit" value="确认注册">
			<input type="button" onclick="window.location.href='index.php'" value="返回登陆">
			<img src="vericode.php" style="width:100px;height:25px;" id="code"/>
		</form>
		</div>
	</body>
</html>