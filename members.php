<?php
include('connection.php');
include('functions.php');

// Encode to JSON
$firstname = htmlspecialchars($_GET['fname']);
$surname = htmlspecialchars($_GET['sname']);
$email = htmlspecialchars($_GET['email']);

if (empty($_GET)) {
    echo "Fill in name or email";
   } else {
    $sql = "select firstname, surname, email from members where firstname = '$firstname' or surname = '$surname' or email = '$email'";
    $result = mysqli_query($db, $sql);
    if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $return_val[] = $row;
    }
        header('Content-Type: application/json');
        echo json_encode($return_val);
    } else {
        echo "No results";
        }
    }

