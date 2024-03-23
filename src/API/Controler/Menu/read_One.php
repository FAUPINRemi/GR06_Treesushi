<?php

header('Access-Control-Allow-Origin: * ');
header('Content-Type: application/json');

header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "../../database/database.php";
require_once "../../models/menu.php";


$database = new Database();
$connexion = $database->GetConnection();


$menu = new Menu($connexion);

if (isset($_GET['id'])) {
    $menu->id = $_GET['id'];
} else {
    die(json_encode(['message' => 'No ID provided']));
}


$stmt = $menu->readOne();


$saveur = [];
$saveur_tab = [];
while ($row = $stmt[0]->fetch(PDO::FETCH_ASSOC)) {
    foreach ($row as $key => $value) {
        $saveur[$key] = $value;
    }
    array_push($saveur_tab, $saveur);
}


$aliment = [];
$aliment_tab = [];
while ($row = $stmt[1]->fetch(PDO::FETCH_ASSOC)) {
    foreach ($row as $key => $value) {
        $aliment[$key] = $value;
    }
    array_push($aliment_tab, $aliment);
}


$menu = [];
while ($row = $stmt[2]->fetch(PDO::FETCH_ASSOC)) {
    foreach ($row as $key => $value) {
        $menu[$key] = $value;
    }
}

$menu['aliment'] = $aliment_tab;
$menu['saveur'] = $saveur_tab;
http_response_code(200);
echo json_encode($menu);
