<?php
session_start();
header("Content-Type:text/html;charset=utf-8");
?>
<html>

<head>
	<meta charset="utf-8">
	<title>登录</title>
	<link href="C.css" rel="stylesheet" type="text/css" />
	<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>

</head>

<body>
	<div class="box">
		<h2>登录</h2>
		<form action="check.php" method="post" enctype="multipart/form-data">
			<div class="inputBox">
				<input type="text" name="name" value="" required="required" placeholder="           请输入您的用户名" pattern="[a-zA-Z0-9_-]{4,16}" title="4到16位（字母，数字，下划线，减号）"><label>用户名</label>
			</div>
			<div class="inputBox">
				<input type="password" name="password" value="" required="required" placeholder="           请输入您的密码"><label>密码</label>
			</div>

			<input type="submit" name="submit" value="登录">
			<input type="button" onclick="window.location.href='register.php'" name="submit" value="注册">

		</form>
	</div>
</body>

</html>