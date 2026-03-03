<?php

header('Content-Type: application/json');
include_once 'db/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $username = $_POST['username'] ?? null;
    $email = $_POST['email'] ?? null;
    $password = $_POST['password'] ?? null;

    $stmt = $pdo->prepare("SELECT * FROM users");
    $stmt->execute();
    $movie = $stmt->fetch(PDO::FETCH_ASSOC);

    $sql = 'INSERT INTO madia (username, email, password) 
    VALUES(:username, :email, :password)';

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_INT);
    $stmt->bindParam(':password', $password, PDO::PARAM_STR);

    $stmt->execute();

}