<?php
session_start();

$servername = "localhost";
$usernameDB = "root";
$passwordDB = "";
$dbname = "registrationDB";

$conn = new mysqli($servername, $usernameDB, $passwordDB, $dbname);

if ($conn->connect_error) {
    die("Соединение не удалось: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            header("Location: index.html");
            exit;
        } else {
            echo "Неверный пароль!";
        }
    } else {
        echo "Пользователь с таким email не найден!";
    }

    $stmt->close();
    $conn->close();
}
?>