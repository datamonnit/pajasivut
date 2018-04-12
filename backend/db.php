<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'ossi_db';

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";