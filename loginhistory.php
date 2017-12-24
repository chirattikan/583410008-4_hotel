<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "phutawanhotel";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn,"utf8");
$name = $_POST['name'];
$email = $_POST['email'];
$date = $_POST['date'];
$time = $_POST['time'];

$sql = "INSERT INTO userlog (name, email , datelogin , timelogin ) VALUES ('$name', '$email', '$date' ,'$time')";  

if (mysqli_query($conn, $sql)) {
    echo "getHistory Login successfully";
} else {
    echo "Error getHistory Login: " . mysqli_error($conn);
}
?>