<?php
session_start();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli("localhost", "root", "", "nox_store");
    
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(["message" => "Conexão falhou: " . $conn->connect_error]);
        exit;
    }

    $data = json_decode(file_get_contents("php://input"), true);
    $nome = $data['nome'];
    $email = $data['email'];
    $telefone = $data['telefone'];
    $endereco = $data['endereco'];
    $cpf = $data['cpf'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (nome, email, telefone, endereco, cpf, password) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $nome, $email, $telefone, $endereco, $cpf, $password);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode(["message" => "Novo registro criado com sucesso"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Erro: " . $conn->error]);
    }

    $stmt->close();
    $conn->close();
}

?>
