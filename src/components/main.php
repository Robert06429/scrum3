<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'get') {
    $date = $_GET['date'] ?? null;
    switch ($date) {
        case 'altijd':

            $stmt = $pdo->prepare("SELECT * FROM media INNER JOIN likes ON media.id = likes.media_id ORDER BY COUNT(likes.media_id) LIMIT 10 JOIN users ON media.user_id = users.id");
            $stmt->execute();
            $media = $stmt->fetchAll(PDO::FETCH_ASSOC);
            break;

        case 'week':
            $sevenDaysAgo = date('Y-m-d', strtotime('-7 days'));
            $stmt = $pdo->prepare("SELECT * FROM media INNER JOIN likes ON media.id = likes.media_id ORDER BY COUNT(likes.media_id) LIMIT 10 JOIN users ON media.user_id = users.id WHERE likes.created_at >= :sevenDaysAgo");
            $stmt->execute();
            $media = $stmt->fetchAll(PDO::FETCH_ASSOC);
            break;

        case 'maand':
            $dertigDaysAgo = date('Y-m-d', strtotime('-30 days'));
            $stmt = $pdo->prepare("SELECT * FROM media INNER JOIN likes ON media.id = likes.media_id ORDER BY COUNT(likes.media_id) LIMIT 10 JOIN users ON media.user_id = users.id WHERE likes.created_at >= :dertigDaysAgo");
            $stmt->execute();
            $media = $stmt->fetchAll(PDO::FETCH_ASSOC);
            break;

        default:
            $media = 'error 404';
            break;
    }

    echo json_encode($media);
}
