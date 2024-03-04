<?php
header('Access-Control-Allow-Origin: * ');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if($_SERVER["REQUEST_METHOD"] == "DELETE"){
    include_once "../../models/menu_aliment_saveur.php";
    require_once "../../database/database.php";

    $database = new Database(); 
    $connexion = $database->GetConnection();

    $menu = new MenuAlimentSaveur($connexion);

    $data = json_decode(file_get_contents("php://input"));
    

    $menu->id_menu = $data->id_menu;

    if($menu->delete($menu->id_menu)){
        http_response_code(200);
        echo json_encode(["message" => "Menu supprimé"]);
    } else {
        http_response_code(503);
        echo json_encode(["message" => "Impossible de supprimer le menu"]);
    }
}
