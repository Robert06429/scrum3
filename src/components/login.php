<?php

include_once 'db/database.php';
session_start();

require('database.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $_SESSION["email"] = $email;
}

$stmt = $pdo->prepare("SELECT * FROM users WHERE email =:email");
$stmt->bindParam(':email', $email, PDO::PARAM_STR);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

$errorMessage = '';

if ($user) {
    if ($password === $user['password']) {
        header("Location: home.php");
        exit;
    } else {
        $errorMessage = "Password is wrong";
    }
} else {
    $errorMessage = "email does not exist";
}