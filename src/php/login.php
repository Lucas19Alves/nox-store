<?php

session_start();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $conn = new mysqli('localhost','root','','nox_store');
    
    if($conn->connect_error) {
        http_response_code(500);
        echo json_encode(["message" => "Conexão falhou: " . $conn->connect_error]);
        exit();
    }

    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'];
    $password = $data['password'];

    $sql = 'SELECT id, password FROM usuarios WHERE email = ?';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        http_response_code(200);
        echo json_encode(['message'=> 'Login bem-sucedido', "user_id" => $user["id"]]);
    } else {
        http_response_code(401);
        echo json_encode(["message"=> "Email ou senha incorretos"]);
    }
    
    $stmt->close();
    $conn->close();
}

?>