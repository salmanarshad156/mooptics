<?php
$servername = "134.209.190.154";
$username = "akjdnzcrng";
$password = "qASjzW2UdR";
$db="akjdnzcrng";

// $servername = "localhost";
// $username = "root";
// $password = "";
// $db="ordermanagementsystem";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

$conn -> set_charset("utf8");