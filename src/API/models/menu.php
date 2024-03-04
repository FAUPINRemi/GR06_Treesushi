<?php
  
  class Menu 
    {
        public $id;
        public $nom;
        public $pieces;
        public $prix;
        public $image;
    
        private $connexion;
    
        private $table = __CLASS__;
    
        function __construct($connexion)
        {
            $this->connexion = $connexion;
        }
    
        /**
         * Méthode serveur:POST
         */
        public function create()  // Méthode pour ajouter un menu
        {
            $sql = "INSERT INTO $this->table (nom, pieces, prix, image) VALUES (:nom, :pieces, :prix, :image)";
            $stmt = $this->connexion->prepare($sql);
            $stmt->bindParam(':nom', $this->nom);
            $stmt->bindParam(':pieces', $this->pieces);
            $stmt->bindParam(':prix', $this->prix);
            $stmt->bindParam(':image', $this->image);
            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }
        }
    
        /**
         * Méthode serveur:GET
         */
        public function read() // Méthode pour lire tous les menus
        {
            $sql = "SELECT * FROM $this->table";
            $stmt = $this->connexion->prepare($sql);
            $stmt->execute();
            return $stmt;
        }
    
        public function readOne() // Méthode pour lire un menu
        {
            $sql = "SELECT * FROM $this->table WHERE id = :id";
            $stmt = $this->connexion->prepare($sql);
            $stmt->bindParam(':id', $this->id);
            $stmt->execute();
            return $stmt;
        }
    
        public function readByNom() // Méthode pour lire un menu par son nom
        {
            $sql = "SELECT * FROM $this->table WHERE nom = :nom";
            $stmt = $this->connexion->prepare($sql);
            $stmt->bindParam(':nom', $this->nom);
            $stmt->execute();
            return $stmt;
        }
      
    
        /**
         * Méthode serveur:PUT
         */
        public function update()
        {
            $sql = "UPDATE $this->table SET nom = :nom, pieces = :pieces, prix = :prix, image = :image WHERE id = :id";
            $stmt = $this->connexion->prepare($sql);
            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':nom', $this->nom);
            $stmt->bindParam(':pieces', $this->pieces);
            $stmt->bindParam(':prix', $this->prix);
            $stmt->bindParam(':image', $this->image);
            $stmt->execute();
            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }
        }
        public function delete() // Méthode pour supprimer un menu
        {
            $sql = "DELETE FROM $this->table WHERE id = :id";
            $stmt = $this->connexion->prepare($sql);
            $stmt->bindParam(':id', $this->id);
            $stmt->execute();
        }
    }



  /*
   * CREATE TABLE IF NOT EXISTS `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `pieces` int DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
   
   */