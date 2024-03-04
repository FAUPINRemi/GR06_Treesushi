<?php

header('Access-Control-Allow-Origin: * ');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    include_once "../../models/menu_aliment_saveur.php";
    require_once "../../database/database.php";
    $database = new Database();
    $connexion = $database->GetConnection();

    $menu = new MenuAlimentSaveur($connexion);

    $data = json_decode(file_get_contents("php://input"));

    $menu->id_menu = isset($data->id_menu) ? $data->id_menu : null;
    $menu->menu_nom = isset($data->menu_nom) ? $data->menu_nom : null;
    $menu->id_aliment = isset($data->id_aliment) ? $data->id_aliment : null;
    $menu->aliment_nom = isset($data->aliment_nom) ? $data->aliment_nom : null;
    $menu->id_saveur = isset($data->id_saveur) ? $data->id_saveur : null;
    $menu->saveur_nom = isset($data->saveur_nom) ? $data->saveur_nom : null;

    if ($menu->update($data)) {
        http_response_code(200);
        echo json_encode(["message" => "Menu mis à jour"]);
    } else {
        http_response_code(503);
        echo json_encode(["message" => "Impossible de mettre à jour le menu"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Impossible de mettre à jour le menu. Les données sont incomplètes"]);
}