<?php

$dsn = "mysql:host=localhost;dbname=my_portfolio_db;charset=utf8mb4";

try {
    $connect = new PDO($dsn, 'root', '');
    } catch (Exception $e) {
        error_log($e->getmessage());
        exit('unable to connect');
    }