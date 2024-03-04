<?php
class MenuAlimentSaveur {
    private $table = 'menu_aliment_saveur';
    private $menu_table = 'menu'; // Table des menus

    public $id_menu;
    public $menu_nom;
    public $id_aliment;
    public $aliment_nom;
    public $id_saveur;
    public $saveur_nom;
    public $prix;
    public $image;
    public $pieces;

    private $connexion;

    function __construct($connexion)
    {
        $this->connexion = $connexion;
    }

    
   


    // Create
    public function create() {
        $sql = "INSERT INTO menu_aliment_saveur (id_menu, id_aliment, id_saveur) VALUES (:id_menu, :id_aliment, :id_saveur)";
        $stmt = $this->connexion->prepare($sql);
    
        // bind values
        $stmt->bindParam(':id_menu', $this->id_menu);
        $stmt->bindParam(':id_aliment', $this->id_aliment);
        $stmt->bindParam(':id_saveur', $this->id_saveur);
    
        return $stmt->execute();
    }

    //Read
    public function read() {
        $sql = "SELECT 
                    ma.id_menu,
                    m.nom AS menu_nom,
                    m.image as image,
                    m.pieces as pieces,
                    m.prix,
                    ma.id_aliment,
                    a.nom AS aliment_nom,
                    ma.id_saveur,
                    s.nom AS saveur_nom
                FROM 
                    {$this->table} ma
                INNER JOIN 
                    {$this->menu_table} m ON ma.id_menu = m.id
                INNER JOIN 
                    aliment a ON ma.id_aliment = a.id
                INNER JOIN 
                    saveur s ON ma.id_saveur = s.id";
        
        $stmt = $this->connexion->prepare($sql);
        $stmt->execute();
        return $stmt;
    }

   

    // Update
    public function update($data) {
        $sql = "UPDATE {$this->table} SET menu_nom = :menu_nom, aliment_nom = :aliment_nom, saveur_nom = :saveur_nom WHERE id_menu = :id_menu";
        $stmt = $this->connexion->prepare($sql);
        $stmt->bindParam(':id_menu', $data->id_menu);
        $stmt->bindParam(':menu_nom', $data->menu_nom);
        $stmt->bindParam(':aliment_nom', $data->aliment_nom);
        $stmt->bindParam(':saveur_nom', $data->saveur_nom);
    
        return $stmt->execute();
    }

    // Delete
    public function delete($id) {
        $sql = "DELETE FROM {$this->table} WHERE id_menu = ?";
        $stmt = $this->connexion->prepare($sql);
        return $stmt->execute([$id]);
    }
}
?>