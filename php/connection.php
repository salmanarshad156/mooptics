<?php
$servername = "db5009561217.hosting-data.io";
$username = "dbu2311324";
$password = "4D!TtW7iiRgJffj";
$db="dbs8107160";

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