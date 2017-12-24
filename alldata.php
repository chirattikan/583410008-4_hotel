<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "phutawanhotel";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn,"utf8");

$arrA = array();
$sql = "SELECT * FROM history";
$his = mysqli_query($conn,$sql);

while($row=mysqli_fetch_array($his)){
    {
        $arrA[] = $row;
    }
}

echo json_encode($arrA);
?>

