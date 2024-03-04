
<?php

header('Access-Control-Allow-Origin: * ');
header('Content-Type: application/json');

header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if($_SERVER["REQUEST_METHOD"] == "GET"){
    include_once "../../models/menu.php";
    require_once "../../database/database.php";

    $database = new Database(); 
    $connexion = $database->GetConnection();

    $menu = new Menu($connexion);
    $stmt = $menu->read();
    $num = $stmt->rowCount();

    if($num > 0){
        $menu_arr = [];
        $menu_arr["Menus"] = [];

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $menu_item = [
                "id" => $id,
                "nom" => $nom,
                "pieces" => $pieces,
                "prix" => $prix,
                "image" => $image
            ];
            array_push($menu_arr["Menus"], $menu_item);
        }
        http_response_code(200);
        echo json_encode($menu_arr);
    } else {
        http_response_code(404);
        echo json_encode(["message" => "Aucun menu trouvé"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "La méthode n'est pas autorisée"]);
}

