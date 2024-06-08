<?php
session_start();
session_destroy(); // Уничтожение сессии
header("Location: index.html"); // Перенаправление на главную страницу
exit;