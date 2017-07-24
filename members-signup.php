<?php
include('connection.php');
include('functions.php');

// Encode to JSON
if (empty($_GET)) {
    echo "Fill in name or email";
   } else {
    $sql = "select count(*) as signups, year(joined_date) as year from members group by year(joined_date)";
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
