<?php 
/**
* 登录验证
*/

$dbhost = "47.113.228.161";
$charset = 'utf8';
$dbname = "test";	//数据库名称
$dbuser = "root";		//数据库用户名
$dbpass = "a233994e4f01d7ae";	//数据库密码
$tbname = '2048_users'; 	//表格名
$name=$_POST['name'];  
$password=$_POST['password'];  

try
{
	$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
	// $conn = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=$charset", $dbuser, $dbpass);
	$sql = "SELECT * FROM 2048_users where userName='$name'and userPassword='$password'";
	if ( $query = $conn->query($sql) ) 
	{
		if($query->num_rows <= 0)	//如果数据库中找不到对应数据
		{
			echo"<script type='text/javascript'>alert('账号或密码错误'); location='index.php';</script>";  
		}
		else
		{	
	//增加密码错误后错误次数和锁定功能
	//登录成功后错误次数归零，跳转到对应页面
			$reset="UPDATE test.2048_users SET userLogtimes=0 WHERE userName = '$name'";
			$row = mysqli_fetch_assoc($query);
			$stmt = $conn->prepare($reset);
			$count = $stmt->execute();//执行预处理语句x
			Session_Start();
			$_SESSION["userName"]=$name;
			$_SESSION["userPassword"]=$password;

			// $localBest = "<script>document.write(localStorage.getItem('email'));</script>";
			echo"<script type='text/javascript'>localStorage.userName='$name';</script>";  
			echo"<script type='text/javascript'>localStorage.lastTime=Date.now();</script>";   
			echo"<script type='text/javascript'>alert('登陆成功');location='game.php';</script>";
			
		}
	}
	else
	{
		echo "Query failed\n";
	}
	$conn = null; // 关闭连接
}
catch(PDOException $e)
{
	echo $e->getMessage();
}
