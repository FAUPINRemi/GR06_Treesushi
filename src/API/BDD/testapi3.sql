-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 21 mars 2024 à 11:23
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `testapi3`
--

-- --------------------------------------------------------

--
-- Structure de la table `aliment`
--

DROP TABLE IF EXISTS `aliment`;
CREATE TABLE IF NOT EXISTS `aliment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` text NOT NULL,
  `quantite` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7723 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `aliment`
--

INSERT INTO `aliment` (`id`, `nom`, `quantite`) VALUES
(1, 'California Saumon Avocat', 5),
(2, 'Sushi Saumon', 5),
(3, 'Spring Avocat Cheese', 5),
(4, 'California pacific', 5),
(5, 'Edamame/Salade de chou', 5),
(6, 'Maki Salmon Roll', 5),
(7, 'Spring Saumon Avocat', 5),
(8, 'Maki Cheese Avocat', 5),
(9, 'California Thon Cuit Avocat', 5),
(10, 'Sushi Thon', 5),
(11, 'California Thon Avocat', 5),
(12, 'Sando Chicken Katsu', 5),
(13, 'Sando Salmon Aburi', 5),
(14, 'Maki Salmon', 5),
(15, 'California Crevette', 5),
(16, 'California Chicken Katsu', 5),
(18, 'Spring tataki Saumon', 5),
(19, 'Signature Dragon Roll', 5),
(20, 'California French Touch', 5),
(21, 'California French salmon', 5),
(22, 'California Yellowtail Ponzu', 5),
(23, 'Signature Rock\'n Roll', 5),
(24, 'Sushi Salmon', 5),
(25, 'Sushi Saumon Tsukudani', 5);

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

DROP TABLE IF EXISTS `commande`;
CREATE TABLE IF NOT EXISTS `commande` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prix_total` decimal(15,3) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `commander`
--

DROP TABLE IF EXISTS `commander`;
CREATE TABLE IF NOT EXISTS `commander` (
  `id_saveur` int NOT NULL,
  `id_menu` int NOT NULL,
  PRIMARY KEY (`id_saveur`,`id_menu`),
  KEY `commander_menu0_FK` (`id_menu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commander`
--

INSERT INTO `commander` (`id_saveur`, `id_menu`) VALUES
(1, 1),
(2, 1),
(3, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(1, 3),
(2, 3),
(1, 4),
(2, 4),
(4, 4),
(1, 5),
(1, 6),
(2, 6),
(5, 6),
(1, 7),
(2, 7),
(3, 7),
(5, 7),
(1, 8),
(2, 8),
(3, 8),
(6, 8),
(1, 9),
(2, 9),
(5, 9),
(1, 10),
(2, 10),
(5, 10),
(1, 11),
(2, 11),
(5, 11),
(6, 11),
(7, 11),
(8, 11),
(1, 12),
(2, 12),
(4, 12),
(6, 12),
(8, 12),
(9, 12),
(1, 13),
(2, 13),
(3, 13),
(5, 13),
(8, 13),
(1, 58),
(2, 58);

-- --------------------------------------------------------

--
-- Structure de la table `contenir`
--

DROP TABLE IF EXISTS `contenir`;
CREATE TABLE IF NOT EXISTS `contenir` (
  `id_aliment` int NOT NULL,
  `id_menu` int NOT NULL,
  PRIMARY KEY (`id_aliment`,`id_menu`),
  KEY `contenir_menu0_FK` (`id_menu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contenir`
--

INSERT INTO `contenir` (`id_aliment`, `id_menu`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(1, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(1, 3),
(2, 3),
(5, 3),
(1, 4),
(2, 4),
(5, 4),
(7, 4),
(2, 5),
(5, 5),
(1, 6),
(2, 6),
(5, 6),
(10, 6),
(11, 6),
(1, 7),
(5, 7),
(6, 7),
(9, 7),
(1, 8),
(5, 8),
(6, 8),
(9, 8),
(12, 8),
(1, 9),
(5, 9),
(9, 9),
(13, 9),
(1, 10),
(5, 10),
(6, 10),
(7, 10),
(14, 10),
(1, 11),
(5, 11),
(9, 11),
(15, 11),
(16, 11),
(5, 12),
(18, 12),
(19, 12),
(20, 12),
(21, 12),
(22, 12),
(4, 13),
(5, 13),
(6, 13),
(23, 13),
(24, 13),
(25, 13),
(1, 58),
(2, 58);

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `pieces` int NOT NULL,
  `prix` decimal(15,3) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `menu`
--

INSERT INTO `menu` (`id`, `nom`, `pieces`, `prix`, `img`) VALUES
(1, 'Tasty Blend', 12, '12.000', 'https://treesushi-api.000webhostapp.com/images/tasty-blend.jpg'),
(2, 'Amateur Mix', 18, '15.900', 'https://treesushi-api.000webhostapp.com/images/amateur-mix.jpg'),
(3, 'Saumon Original', 11, '12.500', 'https://treesushi-api.000webhostapp.com/images/salmon-original.jpg'),
(4, 'Salmon Lovers', 18, '15.900', 'https://treesushi-api.000webhostapp.com/images/salmon-lovers.jpg'),
(5, 'Salmon Classic', 10, '15.900', 'https://treesushi-api.000webhostapp.com/images/salmon-classic.jpg'),
(6, 'Master Mix', 12, '15.900', 'https://treesushi-api.000webhostapp.com/images/master-mix.jpg'),
(7, 'Sunrise', 18, '15.900', 'https://treesushi-api.000webhostapp.com/images/master-mix.jpg'),
(8, 'Sando Box Chicken Katsu', 13, '15.900', 'https://treesushi-api.000webhostapp.com/images/sando-box-chicken-katsu.jpg'),
(9, 'Sando Box Salmon Aburi', 13, '15.900', 'https://treesushi-api.000webhostapp.com/images/sando-box-salmon-aburi.jpg'),
(10, 'Super Salmon', 24, '19.900', 'https://treesushi-api.000webhostapp.com/images/super-salmon.jpg'),
(11, 'California Dream', 24, '19.900', 'https://treesushi-api.000webhostapp.com/images/california-dream.jpg'),
(12, 'Gourmet Mix', 22, '24.500', 'https://treesushi-api.000webhostapp.com/images/gourmet-mix.jpg'),
(13, 'Fresh Mix', 22, '24.500', 'https://treesushi-api.000webhostapp.com/images/fresh-mix.jpg'),
(56, 'testmenu 2222222222', 12, '12.500', 'tasty-.jpg'),
(58, 'menu teest ', 12, '12.500', 'https://treesushi-api.000webhostapp.com/images/fresh-mix.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `saveur`
--

DROP TABLE IF EXISTS `saveur`;
CREATE TABLE IF NOT EXISTS `saveur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` text NOT NULL,
  `quantite` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `saveur`
--

INSERT INTO `saveur` (`id`, `nom`, `quantite`) VALUES
(1, 'saumon', 0),
(2, 'avocat', 0),
(3, 'cheese', 0),
(4, 'coriandre', 0),
(5, 'thon', 0),
(6, 'viande', 0),
(7, 'crevette', 0),
(8, 'spicy', 0),
(9, 'seriole lalandi', 0),
(28, 'Tasty Blend', 0);

-- --------------------------------------------------------

--
-- Structure de la table `_contenir`
--

DROP TABLE IF EXISTS `_contenir`;
CREATE TABLE IF NOT EXISTS `_contenir` (
  `id_menu` int NOT NULL,
  `id_commande` int NOT NULL,
  PRIMARY KEY (`id_menu`,`id_commande`),
  KEY `_contenir_commande0_FK` (`id_commande`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commander`
--
ALTER TABLE `commander`
  ADD CONSTRAINT `commander_menu0_FK` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id`),
  ADD CONSTRAINT `commander_saveur_FK` FOREIGN KEY (`id_saveur`) REFERENCES `saveur` (`id`);

--
-- Contraintes pour la table `contenir`
--
ALTER TABLE `contenir`
  ADD CONSTRAINT `contenir_ibfk_1` FOREIGN KEY (`id_aliment`) REFERENCES `aliment` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `contenir_menu0_FK` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id`);

--
-- Contraintes pour la table `_contenir`
--
ALTER TABLE `_contenir`
  ADD CONSTRAINT `_contenir_commande0_FK` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`),
  ADD CONSTRAINT `_contenir_menu_FK` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
