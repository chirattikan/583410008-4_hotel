<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "phutawanhotel";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn,"utf8");

$idroom = $_POST['idroom'];

$del = "DELETE FROM history  WHERE id = $idroom";

if (mysqli_query($conn, $del)) {
    echo "delete successfully";
} else {
    echo "Error delete idroom: " . mysqli_error($conn);
}


?>