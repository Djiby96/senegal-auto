
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- CREATION DE LA BASE DE DONNEES
CREATE DATABASE senegal_auto CHARACTER SET utf8 COLLATE utf8_general_ci;
USE senegal_auto;

-- Structure de la table `administrateur`

DROP TABLE IF EXISTS `administrateur`;
CREATE TABLE IF NOT EXISTS `administrateur` (
  `nom_complet` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(65) NOT NULL,
  PRIMARY KEY (`password`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `administrateur`
--

INSERT INTO `administrateur` (`nom_complet`, `email`, `password`) VALUES
('Djiby Sarr', 'sarrdjiby20@gmail.com', 'senegal-auto2020');

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `nom_image` varchar(50) NOT NULL,
  `chemin_image` varchar(100) NOT NULL,
  `nombre_photos` tinyint(2) NOT NULL,
  `numero_voiture` int(5) NOT NULL,
  PRIMARY KEY (`nom_image`),
  KEY `numero_voiture` (`numero_voiture`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`nom_image`, `chemin_image`, `nombre_photos`, `numero_voiture`) VALUES
('02_04_2021_4033_1', '/our_vehicule/02_04_2021_4033_1.jpg', 5, 4033);

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id_message` int(10) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `telephone` int(9) NOT NULL,
  `email` varchar(75) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` text NOT NULL,
  PRIMARY KEY (`id_message`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `message`
--

INSERT INTO `message` (`id_message`, `prenom`, `nom`, `telephone`, `email`, `date`, `message`) VALUES
(23, 'Djiby', 'Sarr', 777781562, 'sarrdjiby20@gmail.com', '2021-03-23 12:16:00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\nAut, iste obcaecati eius repellat optio laudantium eaque\r\nconsequuntur facere eum dolor accusamus,\r\nminima totam tempora accusantium praesentium, nulla eveniet. Eveniet, esse.\r\nLorem ipsum dolor sit amet consectetur adipisicing elit.\r\nAut, iste obcaecati eius repellat optio laudantium eaque\r\nconsequuntur facere eum dolor accusamus,\r\nminima totam tempora accusantium praesentium, nulla eveniet. Eveniet, esse.\r\n');
--
-- Structure de la table `voiture`
--

DROP TABLE IF EXISTS `voiture`;
CREATE TABLE IF NOT EXISTS `voiture` (
  `numero_voiture` int(5) NOT NULL AUTO_INCREMENT,
  `modele` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `marque` varchar(50) CHARACTER SET utf8 NOT NULL,
  `annee` int(4) UNSIGNED DEFAULT NULL,
  `carburant` varchar(15) CHARACTER SET utf8 NOT NULL,
  `kilometrage` varchar(10) DEFAULT NULL,
  `boite_vitesse` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `couleur` varchar(50) CHARACTER SET utf8 NOT NULL,
  `prix` int(10) DEFAULT NULL,
  `description` text CHARACTER SET utf8 NOT NULL,
  `etat_voiture` varchar(8) CHARACTER SET utf8 NOT NULL,
  `date_publication` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`numero_voiture`)
) ENGINE=InnoDB AUTO_INCREMENT=6620 DEFAULT CHARSET=utf32;

--
-- Déchargement des données de la table `voiture`
--

INSERT INTO `voiture` (`numero_voiture`, `modele`, `marque`, `annee`, `carburant`, `kilometrage`, `boite_vitesse`, `couleur`, `prix`, `description`, `etat_voiture`, `date_publication`) VALUES
(4033, '208 GT', 'Alpine', 2021, 'Hybride', '100 000', 'Manuel', 'Orangered', 5000000, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, labore vitae. Modi voluptatum ullam repudiandae quidem consequuntur tenetur facere suscipit corrupti, Sapiente officiis soluta impedit dolore nobis autem veritatis asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, labore vitae. Modi voluptatum ullam repudiandae quidem consequuntur tenetur facere suscipit corrupti, sapiente officiis soluta impedit dolore nobis autem veritatis asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, labore vitae. Modi voluptatum ullam repudiandae quidem consequuntur tenetur facere suscipit corrupti, sapiente officiis soluta impedit dolore nobis autem veritatis asperiores.', 'Occasion', '2021-04-02 15:35:11');


--
-- Structure de la table `voiture_location`
--

DROP TABLE IF EXISTS `voiture_location`;
CREATE TABLE IF NOT EXISTS `voiture_location` (
  `numero_voiture` int(5) NOT NULL,
  `tarif_par_region` varchar(100) NOT NULL,
  KEY `numero_voiture` (`numero_voiture`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `voiture_location`
--

INSERT INTO `voiture_location` (`numero_voiture`, `tarif_par_region`) VALUES
(4033, '7000-5000-18000-9000-15000-0-20000-18000-0-20000-15000-15000-26000-0');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`numero_voiture`) REFERENCES `voiture` (`numero_voiture`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `voiture_location`
--
ALTER TABLE `voiture_location`
  ADD CONSTRAINT `voiture_location_ibfk_1` FOREIGN KEY (`numero_voiture`) REFERENCES `voiture` (`numero_voiture`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;


CREATE USER IF NOT EXISTS Djiby_Sarr_1996 IDENTIFIED BY 'djiby_sarr_1996';
GRANT ALL PRIVILEGES ON senegal_auto.* to Djiby_Sarr_1996;
