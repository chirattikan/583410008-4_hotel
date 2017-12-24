<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "phutawanhotel";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn,"utf8");

$roomname = $_POST['roomname'];
$datein = $_POST['datein'];
$dateout = $_POST['dateout'];

$sqlinsert = "INSERT INTO history (name, checkin , checkout ) VALUES ('$roomname', '$datein' , '$dateout')";  
mysqli_query($conn,$sqlinsert);

echo  "add data success";
?>