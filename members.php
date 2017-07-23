<?php
include('connection.php');
include('functions.php');

// Encode to JSON
$firstname = $_GET['fname'];
$surname = $_GET['sname'];
$email = $_GET['email'];
  $firstname = htmlspecialchars($firstname);
  $surname = htmlspecialchars($surname);
  $email = htmlspecialchars($email);
    // collect value of input field
    // echo $firstname;
    // echo $surname;
    // echo $email;
if (empty($_GET)) {
    echo "Fill in name or email";
   } else {
    $sql = "SELECT firstname, surname, email from members where firstname = '$firstname' or surname = '$surname' or email = '$email'";
    $result = mysqli_query($db, $sql);
    if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $return_val[] = $row;
    }
        header('Content-Type: application/json');
        echo json_encode($return_val);
    } else {
        echo "0 results";
        }
    }

