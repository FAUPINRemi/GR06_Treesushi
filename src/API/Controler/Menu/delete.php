<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods:DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Pré-vol de requête. Répondre avec succès
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    include_once "../../models/menu.php";
    require_once "../../database/database.php";

    $database = new Database();
    $connexion = $database->GetConnection();

    $menu = new Menu($connexion);

    $data = json_decode(file_get_contents("php://input"));


    $menu->id = $data->id;

    if ($menu->delete()) {
        http_response_code(200);
        echo json_encode(["message" => "Menu supprimé"]);
    } else {
        http_response_code(503);
        echo json_encode(["message" => "Impossible de supprimer le menu"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Impossible de supprimer le menu. Les données sont incomplètes"]);
}
