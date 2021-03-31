-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 31 mars 2021 à 13:22
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nationsounds`
--

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

DROP TABLE IF EXISTS `artiste`;
CREATE TABLE IF NOT EXISTS `artiste` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `artiste`
--

INSERT INTO `artiste` (`id`, `name`, `style`) VALUES
(1, 'Dua Lipa', 'Pop'),
(2, 'Nekfeu', 'Rap'),
(3, 'David Guetta', 'House'),
(4, 'Black Eyed Peas', 'Pop');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210127195454', '2021-01-27 19:55:01', 65),
('DoctrineMigrations\\Version20210209112731', '2021-02-09 11:27:49', 223),
('DoctrineMigrations\\Version20210225161950', '2021-03-16 17:33:01', 44),
('DoctrineMigrations\\Version20210314173039', '2021-03-16 17:33:01', 16),
('DoctrineMigrations\\Version20210314174456', '2021-03-16 17:33:01', 21),
('DoctrineMigrations\\Version20210316172221', '2021-03-16 17:33:01', 126),
('DoctrineMigrations\\Version20210316172340', '2021-03-16 17:33:01', 12),
('DoctrineMigrations\\Version20210324073755', '2021-03-24 07:38:04', 81),
('DoctrineMigrations\\Version20210326190456', '2021-03-26 19:05:09', 80),
('DoctrineMigrations\\Version20210327101518', '2021-03-27 10:15:24', 105),
('DoctrineMigrations\\Version20210327124034', '2021-03-29 06:03:53', 112),
('DoctrineMigrations\\Version20210327124050', '2021-03-29 06:03:53', 5),
('DoctrineMigrations\\Version20210327142559', '2021-03-29 06:03:53', 9),
('DoctrineMigrations\\Version20210327142602', '2021-03-29 06:03:53', 9),
('DoctrineMigrations\\Version20210328173648', '2021-03-29 06:03:53', 3),
('DoctrineMigrations\\Version20210329060346', '2021-03-29 06:03:53', 19),
('DoctrineMigrations\\Version20210329062138', '2021-03-29 06:21:43', 268),
('DoctrineMigrations\\Version20210329063109', '2021-03-29 06:31:16', 34),
('DoctrineMigrations\\Version20210331061203', '2021-03-31 06:12:29', 145);

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

DROP TABLE IF EXISTS `evenement`;
CREATE TABLE IF NOT EXISTS `evenement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `horaire_debut` time NOT NULL,
  `horaire_fin` time NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(555) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`id`, `nom`, `type`, `date`, `horaire_debut`, `horaire_fin`, `description`, `img`) VALUES
(1, 'Concert David Guetta', 'concert', '2021-07-09 18:30:00', '18:30:00', '20:30:00', NULL, 'https://www.francetvinfo.fr/pictures/1ckFwvBEjGUpe-8lgteqiqdxe5M/752x423/2020/12/30/phpwUu3WJ.jpg'),
(2, 'Concert Nekfeu', 'concert', '2021-07-09 18:30:00', '20:45:00', '22:45:00', NULL, 'https://img.20mn.fr/vmv6LIy_QWO8Qx-mYP_Oyg/830x532_nekfeu-rappeurs-crew-cut-killer-giorgio-dinos-participeront-concert-hip-hop-convict-20-fevrier-2018.jpg'),
(3, 'Concert Black Eyed Peas', 'concert', '2021-07-10 15:08:03', '22:00:00', '00:00:00', NULL, 'https://static.lexpress.fr/medias_1434/w_640,h_358,c_fill,g_center/v1375968534/les-black-eyed-peas-de-g-a-d-fergie-apl-de-ap-taboo-et-will-i-am-sur-la-scene-du-stade-de-france-le-22-juin-2011_734262.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `evenement_artiste`
--

DROP TABLE IF EXISTS `evenement_artiste`;
CREATE TABLE IF NOT EXISTS `evenement_artiste` (
  `evenement_id` int(11) NOT NULL,
  `artiste_id` int(11) NOT NULL,
  PRIMARY KEY (`evenement_id`,`artiste_id`),
  KEY `IDX_9F022293FD02F13` (`evenement_id`),
  KEY `IDX_9F02229321D25844` (`artiste_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `evenement_artiste`
--

INSERT INTO `evenement_artiste` (`evenement_id`, `artiste_id`) VALUES
(1, 3),
(2, 3),
(3, 4);

-- --------------------------------------------------------

--
-- Structure de la table `faq`
--

DROP TABLE IF EXISTS `faq`;
CREATE TABLE IF NOT EXISTS `faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reponse` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `faq`
--

INSERT INTO `faq` (`id`, `question`, `reponse`) VALUES
(1, 'Peut-on se restaurer sur place ?', 'Oui, des points de restauration sont à votre disposition, mais vous pouvez aussi ramener votre propre repas.\r\nAttendtion, il est interdit d\'entrer avec des boissons alcoolisées.'),
(2, 'Quels sont les dispositifs à disposition pour les personnes à mobilités réduites ?', 'Pour falicité l\'accès aux PMR, des places de parking, des fauteuils roulant, sont mises à disposition sur présentation de la carte d\'invalidité. Ainsi que des proches de la scène en hauteur afin d\'assurer votre sécurité.'),
(3, 'Est-il possible de stocker ses affaires sur place ?', 'Des casiers sont mises à votre disposition pour deux euros la journée.\r\n\r\n');

-- --------------------------------------------------------

--
-- Structure de la table `info`
--

DROP TABLE IF EXISTS `info`;
CREATE TABLE IF NOT EXISTS `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `info`
--

INSERT INTO `info` (`id`, `titre`, `description`, `type`) VALUES
(1, 'Jeu du sosie', 'Un jeu du sosie est organisé par notre partenaire coca-cola, tentez de gagner un autographe signé et une photo avec Dua Lipa.', 'generale'),
(2, 'Météo estivale', 'De grosses températures sont attendues ce week-end, pensez à vous protéger et à boire régulièrement.', 'urgente'),
(3, 'Objet perdu', 'Si vous avez perdu ou trouver un objet, rendez-vous dans les points de collecte affichés sur votre carte.', 'urgente'),
(4, 'Invité surprise', 'Nekfeu va bientôt monter sur scène, mais il a un invité surprise à vous présenter. Ne ratez pas ce moment !', 'generale');

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

DROP TABLE IF EXISTS `notification`;
CREATE TABLE IF NOT EXISTS `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `notification`
--

INSERT INTO `notification` (`id`, `date`, `type`, `titre`) VALUES
(1, '2021-03-29', 'general', 'info1111'),
(2, '2021-03-17', 'urgente', 'Attention il y a de la pluie');

-- --------------------------------------------------------

--
-- Structure de la table `partenaire`
--

DROP TABLE IF EXISTS `partenaire`;
CREATE TABLE IF NOT EXISTS `partenaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` longtext COLLATE utf8mb4_unicode_ci,
  `lien` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `partenaire`
--

INSERT INTO `partenaire` (`id`, `nom`, `image`, `lien`) VALUES
(1, 'Coca cola', 'https://www.coca-cola-france.fr/content/dam/one/fr/fr/lead/le-logo-coca-cola-huit-lettres-un-trait-dunion.jpg', NULL),
(2, 'Fun radio', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Logo_fun_new_transparent.jpg', NULL),
(3, 'UNICEF', 'https://cdn.1min30.com/wp-content/uploads/2018/03/Couleur-logo-UNICEF.jpg', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `reseau`
--

DROP TABLE IF EXISTS `reseau`;
CREATE TABLE IF NOT EXISTS `reseau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icone` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `lieb` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'admin@gmail.com', '[\"ROLE_ADMIN\"]', '$argon2id$v=19$m=65536,t=4,p=1$azZ1QVNDUkVuQWlLUXVQcg$gWtrq1lwKU9xL1kaUcsVgw9O8FAqBiZHdWHq2vLPBH8'),
(2, 'user0@gmail.com', '[]', '$argon2id$v=19$m=65536,t=4,p=1$QjNjWEZWNmJCYUl4M3lkeQ$mYU/cDNFsrO/uwRn4sblgDrVsHdh/FntVpDVs3WDwm8');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `evenement_artiste`
--
ALTER TABLE `evenement_artiste`
  ADD CONSTRAINT `FK_9F02229321D25844` FOREIGN KEY (`artiste_id`) REFERENCES `artiste` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_9F022293FD02F13` FOREIGN KEY (`evenement_id`) REFERENCES `evenement` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
