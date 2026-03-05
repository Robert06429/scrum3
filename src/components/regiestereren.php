<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Author');
require('database.php');


function check($username, $email, $password) {
    if (empty($username) || empty($email) || empty($password)) {
        return true;
    }
    if (!(str_ends_with($email, '@noorderpoort.nl') || str_ends_with($email, '@st.noorderpoort.nl'))) {
        return true;
    }
    if (strlen($password) < 8) {
        return true;
    }
    if (strlen($username) < 3) {
        return true;
    }
    return false;
}

include_once 'db/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $email = $data->email;
    $password = $data->password;

    if (check($username, $email, $password)){
        $errorMessage = "error";
        echo json_encode($errorMessage);
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM users");
    $stmt->execute();
    $movie = $stmt->fetch(PDO::FETCH_ASSOC);

    $sql = 'INSERT INTO users (username, email, password) 
    VALUES(:username, :email, :password)';

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':password', $password, PDO::PARAM_STR);

    $stmt->execute();
    $errorMessage = 'gelukt';
    echo json_encode($errorMessage);
}

exit;
?>