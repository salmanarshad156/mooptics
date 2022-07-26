<?php
//$servername = "shareddb-z.hosting.stackcp.net";
//$username = "dentalcms-313635b869";
//$password = "bcu031iasp";
//$db="dentalcms-313635b869";

$servername = "db5009561217.hosting-data.io";
$username = "dbu2311324";
$password = "4D!TtW7iiRgJffj";
$db="dbs8107160";


// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";

$conn -> set_charset("utf8");