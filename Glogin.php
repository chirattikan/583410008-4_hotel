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

$check = mysqli_query($conn,"SELECT * FROM user WHERE email = '$email' ");

if($check->num_rows == 0){
    $sql = "INSERT INTO user (name, email ) VALUES ('$name', '$email')";  
    if (mysqli_query($conn, $sql)) {
        echo "save id successfully";
    } else {
        echo "Error save id : " . mysqli_error($conn);
    }
}

?>