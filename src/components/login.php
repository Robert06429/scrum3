<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');
session_start();

// Handle preflight requests
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

include_once 'database.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $password = $data->password;
    if (!$password || !$email) {
        echo json_encode(['message' => 'Password and email are required']);
        exit();
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user && $password === $user['password']) { // password_verify($password, $user['password']) for hashed passwords
        echo json_encode(['message' => 'Login successful']);
        $_SESSION["user_id"] = $user['id'];
        $_SESSION["username"] = $user['name'];
    } else {
        echo json_encode(['message' => 'Invalid credentials: ' . $password . ' vs ' . $user['password']]);
    }
} else {
    echo json_encode(['message' => 'Invalid request method']);
}

exit;
?>