<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
include_once 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $date = $_GET['date'] ?? null;
    switch ($date) {
        case 'altijd':
            $stmt = $pdo->prepare("
                SELECT media.*, users.id, users.username, AVG(rating.rating) AS like_count
                FROM media
                INNER JOIN rating ON media.id = rating.media_id
                INNER JOIN users ON media.user_id = users.id
                GROUP BY media.id
                ORDER BY like_count DESC
                LIMIT 10
            ");
            $stmt->execute();
            $media = $stmt->fetchAll(PDO::FETCH_ASSOC);
            break;

        case 'week':
            $sevenDaysAgo = date('Y-m-d', strtotime('-7 days'));
            $stmt = $pdo->prepare("
                SELECT media.*, users.id, users.username, AVG(rating.rating) AS like_count
                FROM media
                INNER JOIN rating ON media.id = rating.media_id
                INNER JOIN users ON media.user_id = users.id
                WHERE rating.created_at >= :sevenDaysAgo
                GROUP BY media.id
                ORDER BY like_count DESC
                LIMIT 10
            ");
            $stmt->execute(['sevenDaysAgo' => $sevenDaysAgo]);
            $media = $stmt->fetchAll(PDO::FETCH_ASSOC);
            break;

        case 'maand':
            $dertigDaysAgo = date('Y-m-d', strtotime('-30 days'));
            $stmt = $pdo->prepare("
                SELECT media.*, users.id, users.username, AVG(rating.rating) AS like_count
                FROM media
                INNER JOIN rating ON media.id = rating.media_id
                INNER JOIN users ON media.user_id = users.id
                WHERE rating.created_at >= :dertigDaysAgo
                GROUP BY media.id
                ORDER BY like_count DESC
                LIMIT 10
            ");
            $stmt->execute(['dertigDaysAgo' => $dertigDaysAgo]);
            $media = $stmt->fetchAll(PDO::FETCH_ASSOC);
            break;

        default:
            $media = 'error 404';
            break;
    }

    echo json_encode($media);
}

exit;
?>