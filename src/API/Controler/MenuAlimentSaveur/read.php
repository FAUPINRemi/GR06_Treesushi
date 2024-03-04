<?php

header('Access-Control-Allow-Origin: * ');
header('Content-Type: application/json');

header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if($_SERVER["REQUEST_METHOD"] == "GET"){
    include_once "../../models/menu_aliment_saveur.php";
    require_once "../../database/database.php";

    $database = new Database(); 
    $connexion = $database->GetConnection();

    $menu = new MenuAlimentSaveur($connexion);
    $stmt = $menu->read();
    $num = $stmt->rowCount();

    if($num > 0){
        $menu_arr = [];
        $menu_arr["Menus"] = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);  
            $aliment = [
                "aliment_nom"=> $aliment_nom,
                "Quantité" => 0
            ];

            $saveur = [
                "saveur_nom"=> $saveur_nom,
            ];

            // If the menu is not in the array yet, add it
            if (!isset($menu_arr["Menus"][$id_menu])) {
                $menu_arr["Menus"][$id_menu] = [
                    // Assumin
                    "id"=> $id_menu,
                    "menu"=> $menu_nom,
                    "image" => $row['image'],
                    "pieces" => $row['pieces'],
                    "prix" => $row['prix'],
                    "aliments"=> [],
                    "saveurs"=> [],
                ];
            }

            // Add the aliment to the menu
            if (!isset($menu_arr["Menus"][$id_menu]["aliments"][$aliment_nom])) {
                $menu_arr["Menus"][$id_menu]["aliments"][$aliment_nom] = $aliment;
            }
            $menu_arr["Menus"][$id_menu]["aliments"][$aliment_nom]["Quantité"]++;

            // Add the saveur to the menu
            if (!isset($menu_arr["Menus"][$id_menu]["saveurs"][$saveur_nom])) {
                $menu_arr["Menus"][$id_menu]["saveurs"][$saveur_nom] = $saveur;
            }
        }

        // Re-index the array to remove the menu IDs as keys
        $menu_arr["Menus"] = array_values($menu_arr["Menus"]);

        // Re-index the aliments and saveurs arrays to remove the aliment and saveur names as keys
        foreach ($menu_arr["Menus"] as &$menu) {
            $menu["aliments"] = array_values($menu["aliments"]);
            $menu["saveurs"] = array_values($menu["saveurs"]);
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