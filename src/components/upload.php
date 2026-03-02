<?php

require('database.php');

$error = "";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? null;
    $descriptie = $_POST['descriptie'] ?? null;
    $image = $_POST['image'] ?? null;
    $tag = $_POST['tag'] ?? null;

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

        if (!empty($title) && !empty($descriptie) && !empty($image)) {
            $sql = 'INSERT INTO ' . $tag . ' (title, descriptie, image)
            VALUES(:title, :descriptie, :image)';

            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':title', $title, PDO::PARAM_STR);
            $stmt->bindParam(':descriptie', $descriptie, PDO::PARAM_STR);
            $stmt->bindParam(':image', $image, PDO::PARAM_STR);
            $stmt->execute();
        } else {
            $error = "Not all fields filled in!";
        }
    }
}


//nog niet klaar