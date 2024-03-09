<?php
class Database
{
<<<<<<< HEAD
    private $serveur = "185.27.134.143";
    private $utilisateur = "if0_36130759";
    private $mot_de_passe  = "8d0uUnRMLj";
    private $base_de_donnees = "if0_36130759_apitreesushi";
=======
    private $serveur = "localhost";
    private $utilisateur = "id21969745_treesushiapi";
    private $mot_de_passe  = "TreesushiAPI1234?";
    private $base_de_donnees = "id21969745_testapi3";
>>>>>>> c24addce2482e40326e2d3c3f4b158c1da8804b7
    public $connexion;



    public function GetConnection()
    {
        $this->connexion = null;

        try {
            $this->connexion = new PDO("mysql:host=" . $this->serveur . ";dbname=" . $this->base_de_donnees, $this->utilisateur, $this->mot_de_passe);
            $this->connexion->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Erreur de connexion : " . $exception->getMessage();
        }

        return $this->connexion;
    }

    public function close()
    {
        $this->connexion->close();
    }

    public function query($sql)
    {
        return $this->connexion->query($sql);
    }

    public function real_escape_string($string)
    {
        return $this->connexion->real_escape_string($string);
    }
}
