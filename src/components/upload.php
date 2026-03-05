<?php

require('database.php');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Author');
session_start();

$error = "";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? null;
    $body = $_POST['body'] ?? null;
    $image = $_POST['image'] ?? null;
    $tag = $_POST['tag'] ?? null;
    $category = $_POST['category'] ?? null;
    $user_id = $_SESSION['user_id'] ?? null;

    switch ($tag) {
        case 'film':
        case 'game':
        case 'serie':
            insert($tag, $pdo);
            break;
        default:
            # Error: de tag bestaat
            break;
    }

    function insert($tag, $pdo)
    {


        if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
            $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
            $extension = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));

            if (!in_array($extension, $allowed)) {
                $error = "Invalid file type.";
            } else {
                move_uploaded_file(...);
            }

            $uploadDir = 'uploads/';
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }

            $filename = basename($_FILES['image']['name']);
            $targetPath = $uploadDir . $filename;

            if (move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)) {
                $image = $targetPath;
            } else {
                $error = "Error uploading image.";
            }
        }

        if (!empty($title) && !empty($body) && !empty($image) && !empty($category) && !empty($user_id)) {
            $sql = 'INSERT INTO ' . $tag . ' (title, body, image, category, user_id)
            VALUES(:title, :body, :image, :category, :user_id)';

            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':title', $title, PDO::PARAM_STR);
            $stmt->bindParam(':body', $body, PDO::PARAM_STR);
            $stmt->bindParam(':image', $image, PDO::PARAM_STR);
            $stmt->bindParam(':category', $category, PDO::PARAM_STR);
            $stmt->bindParam(':user_id', $user_id, PDO::PARAM_STR);
            $stmt->execute();
        } else {
            $error = "Not all fields filled in!";
        }
    }
}
exit;
?>