<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "phutawanhotel";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn,"utf8");

$idroom = $_POST['idroom'];
$changein = $_POST['cgin'];
$changeout = $_POST['cgout'];

$chin = "UPDATE history SET checkin = '$changein' WHERE id = $idroom";
$chout = "UPDATE history SET checkout = '$changeout' WHERE id = $idroom";

if (mysqli_query($conn, $chin)) {
    echo "checkin updated successfully";
} else {
    echo "Error updating checkin: " . mysqli_error($conn);
}

if (mysqli_query($conn, $chout)) {
    echo "checkout updated successfully";
} else {
    echo "Error updating checkout: " . mysqli_error($conn);
}

?>