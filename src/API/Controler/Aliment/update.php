<?php

header('Access-Control-Allow-Origin: * ');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    include_once "../../models/aliment.php";
    require_once "../../database/database.php";

    $database = new Database();
    $connexion = $database->GetConnection();

    $menu = new Aliment($connexion);

    $data = json_decode(file_get_contents("php://input"));

    $menu->id = isset($data->id) ? $data->id : null;
    $menu->nom = isset($data->nom) ? $data->nom : null;
   

    if ($menu->update()) {
        http_response_code(200);
        echo json_encode(["message" => "Saveurs mis à jour"]);
    } else {
        http_response_code(503);
        echo json_encode(["message" => "Impossible de mettre à jour les saveurs"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Impossible de mettre à jour les saveurs. Les données sont incomplètes"]);
}