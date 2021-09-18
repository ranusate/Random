<?php
$servername = "localhost";
$username = "root";
$password = "root";

// Create connection
$conn = new mysqli($servername, $username, $password, 'blog_sumbas');

// Check connection
if ($conn->connect_error) {
  exit("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

