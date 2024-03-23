<?php

class Aliment
{
    public $id;
    public $nom;

    private $connexion;

    private $table = __CLASS__;

    function __construct($connexion)
    {
        $this->connexion = $connexion;
    }

    
    public function create()  
    {
        $sql = "INSERT INTO $this->table (nom) VALUES (:nom)";
        $stmt = $this->connexion->prepare($sql);
        $stmt->bindParam(':nom', $this->nom);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

   
    public function read() 
    {
        $sql = "SELECT * FROM $this->table";
        $stmt = $this->connexion->prepare($sql);
        $stmt->execute();
        return $stmt;
    }

    public function readOne() 
    {
        $sql = "SELECT * FROM $this->table WHERE id = :id";
        $stmt = $this->connexion->prepare($sql);
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        return $stmt;
    }

    public function readByNom() 
    {
        $sql = "SELECT * FROM $this->table WHERE nom = :nom";
        $stmt = $this->connexion->prepare($sql);
        $stmt->bindParam(':nom', $this->nom);
        $stmt->execute();
        return $stmt;
    }

   
    public function update() 
    {
        $sql = "UPDATE $this->table SET nom = :nom WHERE id = :id";
        $stmt = $this->connexion->prepare($sql);
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':nom', $this->nom);
        $stmt->execute();
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

   
    public function delete() 
    {
        $sql = "DELETE FROM $this->table WHERE id = :id";
        $stmt = $this->connexion->prepare($sql);
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}
