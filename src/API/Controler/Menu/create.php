<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods:POST, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Pré-vol de requête. Répondre avec succès
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include_once "../../models/menu.php";
    require_once "../../database/database.php";

    $database = new Database();
    $connexion = $database->GetConnection();

    $menu = new Menu($connexion);

    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['nom'], $data['pieces'], $data['prix'], $data['img'], $data['aliments'], $data['saveurs'])) {
        http_response_code(400);
        echo json_encode(["message" => "Impossible de créer le menu. Les données sont incomplètes"]);
        exit();
    }

    if ($menu->create($data)) {
        http_response_code(201);
        echo json_encode(["message" => "Menu créé"]);
    } else {
        http_response_code(503);
        echo json_encode(["message" => "Impossible de créer le menu"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Méthode non autorisée"]);
}
