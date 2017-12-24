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
$num = $his->num_rows;

while($row=mysqli_fetch_array($his)){
    // $item1 = array(
    //     "checkin"=>$row['checkin']
    // );
    // $item2 = array(
    //     "checkout"=>$row['checkout']
    // );
    // $item3 = array(
    //     "name"=>$row['name']
    // );
    {
        $arrA[] = $row;
    }
    // array_push($arr1,$item1);
}

echo json_encode($arrA);




// if ($intadult + ($intkids / 2) <= 3) {
//     $nothing = 0;
//     $checkadd1 = true;
//     $checkadd2 = true;

//     for ($i = $num - 1; $i >= 0; $i--) {
//         if(($arr[i]->name).equals("SuiteRoom")){
//             if( !($dateout < history.checkin[i]) ){
//                 checkadd1 = false;
//             }
//             if( !($datein > history.checkout[i])){
//                 checkadd2 = false;
//             }
//             if( ( ($dateout > history.checkin[i]) && (datein < history.checkout[i]) ) || ( (datein < history.checkout[i]) && (dateout > history.checkin[i]) ) ){
//                 nothing += 1;
//             }
//         }
//     }
//     if(checkadd1 || checkadd2){
//         add data
//     }
//     elseif(nothing <= 3){
//         add data
//     }
//     else{
//         echo "What???";
//     }
    
// }
?>
