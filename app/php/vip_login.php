<?php
header("Content-type: text/html; charset=UTF-8");
// $username = $_GET['username'];
// $password = $_GET['password'];
$json = json_decode(file_get_contents("php://input"));
$username = $json -> username;
$password = $json -> password;
 $coon=new mysqli("localhost","root","","shop","3306");
 //$sql="INSERT INTO shop_name(name,password) Value('yicheng76','543')";
 $sql2="SELECT *FROM shop_name WHERE name='$username' and password='$password'";
 $res=$coon->query($sql2);
 $rows= $res -> fetch_assoc();
 //var_dump($rows);
 if($rows) {
    // 数据已经存在
    $arr = array("msg" => 200, "data" => array("code" => "100", "msg" => "用户名称已经存在"));
} else {
    $arr = array("msg" => 200, "data" => array("code" => "200", "msg" => "用户名称不存在"));
}
echo json_encode($arr);

?>