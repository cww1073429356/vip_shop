<?php
header("Content-type: text/html; charset=UTF-8");
// $username = $_GET['username'];
// $password = $_GET['password'];
$json = json_decode(file_get_contents("php://input"));
$username = $json -> username;
$password = $json -> password;
 $coon=new mysqli("localhost","root","","shop","3306");
 $sql="INSERT INTO shop_name(name,password) Value('$username','$password')";
 $sql2="SELECT *FROM shop_name WHERE name='$username'";
 $res=$coon->query($sql2);
 $rows= $res -> fetch_assoc();
 //var_dump($res);
 if($rows) {
    // 数据已经存在
    $arr = array("msg" => 200, "data" => array("code" => "200", "msg" => "用户名称已经存在"));
} else {
    $res2=$coon->query($sql);
    //echo json_encode($res2);
    $arr = array("msg" => 200, "data" => array("code" => "100", "msg" => $res2));
}
echo json_encode($arr);

?>