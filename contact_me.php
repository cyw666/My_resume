<?php
header('Content-Type:text/plain');
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];

$conn=mysqli_connect('127.0.0.1','root','','contact',3306);
mysqli_query($conn,'SET NAMES UTF8');
$sql = "INSERT INTO contact VALUES(NULL,'$name','$email','$message')";
$result = mysqli_query($conn, $sql);

if($result===TRUE){
	echo '1'; 
}else {
	echo '0';	
}
