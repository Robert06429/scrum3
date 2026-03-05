<?php
exit;
include_once 'database.php';

// Example user data
$email = 'test@test.com';
$username = 'tester';
$plainPassword = 'test'; // This will be hashed
$role = 'admin';

// Hash the password
$hashedPassword = password_hash($plainPassword, PASSWORD_DEFAULT);

// Prepare the INSERT statement
$stmt = $pdo->prepare("INSERT INTO users (email, username, password, role, created_at) VALUES (?, ?, ?, ?, NOW())");

// Execute the statement with the data
$stmt->execute([$email, $username, $hashedPassword, $role]);

echo "User inserted successfully!";

?>

