<?php
header("Content-Type: application/json; charset=UTF-8");
require_once('includes/connect.php');

//get form fields
$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$email = $_POST['email'];
$msg = $_POST['message'];

$f_name = trim($f_name);
$f_name = trim($l_name);
$email = trim($email);
$msg = trim($msg);

$query ="INSERT INTO c (f_name, l_name, email, message) VALUES (?, ?, ?, ?)";

$stmt = $connect->prepare($query);

$stmt->bindParam(1, $f_name, PDO::PARAM_STR);
$stmt->bindParam(2, $l_name, PDO::PARAM_STR);
$stmt->bindParam(3, $email, PDO::PARAM_STR);
$stmt->bindParam(4, $msg, PDO::PARAM_STR);

$stmt->execute();