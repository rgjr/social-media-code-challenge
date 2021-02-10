-- MariaDB dump 10.17  Distrib 10.4.15-MariaDB, for Linux (x86_64)
--
-- Host: mysql.hostinger.ro    Database: u574849695_21
-- ------------------------------------------------------
-- Server version	10.4.15-MariaDB-cll-lve

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(11) DEFAULT NULL,
  `last_name` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Stuart','Cruickshank'),(2,'Scot','Keeling'),(3,'Addie','Schumm'),(4,'John','Cummings'),(5,'Aurelia','Kuphal'),(6,'Scotty','Konopelski'),(7,'Yolanda','Will'),(8,'Jerod','Strosin'),(9,'Clovis','Thompson'),(10,'Shania','Bayer'),(11,'Madisen','Raynor'),(12,'Esperanza','Barton'),(13,'Samir','Brown'),(14,'Diamond','Kerluke'),(15,'Annalise','Rodriguez'),(16,'Earlene','Stroman'),(17,'Eloy','Kub'),(18,'Selmer','Schuppe'),(19,'Kaley','Borer'),(20,'Haylee','Walsh'),(21,'Idella','Zulauf'),(22,'Clarissa','Christianse'),(23,'Rosalind','Toy'),(24,'Ashtyn','Swift'),(25,'Jewel','Johnston'),(26,'Nathan','Gaylord'),(27,'Percy','Torp'),(28,'Natasha','Marquardt'),(29,'Judd','Hickle'),(30,'Zula','Krajcik'),(31,'Alena','Eichmann'),(32,'Bernie','Bahringer'),(33,'Philip','Lebsack'),(34,'Rosemary','Mills'),(35,'Hilda','Balistreri'),(36,'Cornelius','Koch'),(37,'Gage','Parisian'),(38,'Jacynthe','Kshlerin'),(39,'Franco','Ondricka'),(40,'Dawn','Kuhn'),(41,'Elinor','Towne'),(42,'Maureen','Lubowitz'),(43,'Jedediah','Rempel'),(44,'Leora','Connelly'),(45,'Demario','Schuppe'),(46,'Jeff','Shields'),(47,'Johnson','Durgan'),(48,'Jaime','Cormier'),(49,'Aisha','Zemlak'),(50,'Johnathon','Davis'),(51,'Jamal','Aufderhar'),(52,'Leonor','Gusikowski'),(53,'Tillman','Bradtke'),(54,'Kristy','Pacocha'),(55,'Lia','Williamson'),(56,'Ken','Klein'),(57,'Columbus','Casper'),(58,'Kavon','Hyatt'),(59,'Gerda','Toy'),(60,'Nathaniel','Cassin'),(61,'Milford','Adams'),(62,'Samara','Champlin'),(63,'Beverly','Stamm'),(64,'Ed','Schulist'),(65,'Carey','Toy'),(66,'Noble','Wintheiser'),(67,'Kira','McCullough'),(68,'Pedro','Lueilwitz'),(69,'Sierra','Ryan'),(70,'Sandrine','Kautzer'),(71,'Alfonso','Kassulke'),(72,'Velma','Howe'),(73,'Rebekah','Sanford'),(74,'Catharine','Howell'),(75,'Tito','Osinski'),(76,'Marion','McGlynn'),(77,'Destany','Reinger'),(78,'Ivory','Trantow'),(79,'Gail','Hickle'),(80,'Javonte','Windler'),(81,'Ona','Kemmer'),(82,'Prince','Turner'),(83,'Kiarra','Dietrich'),(84,'Jana','West'),(85,'Shana','Keeling'),(86,'Shany','White'),(87,'Melba','Kunde'),(88,'Maymie','Witting'),(89,'Bradley','O\'Conner'),(90,'Camille','Brakus'),(91,'Gregoria','Crona'),(92,'Briana','Waelchi'),(93,'Casey','Larkin'),(94,'Palma','O\'Connell'),(95,'Niko','Dietrich'),(96,'Mariana','Cruickshank'),(97,'Gladyce','Leannon'),(98,'Jeramie','Berge'),(99,'Hiram','Brekke'),(100,'Leann','Effertz');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

--
-- TABLE STRUCTURE FOR: friends
--

DROP TABLE IF EXISTS `friends`;

CREATE TABLE `friends` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4;

INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (1, 66, 22);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (2, 27, 43);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (3, 64, 77);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (4, 78, 27);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (5, 100, 46);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (6, 94, 7);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (7, 34, 55);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (8, 31, 23);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (9, 2, 33);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (10, 66, 28);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (11, 41, 63);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (12, 53, 53);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (13, 30, 47);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (14, 84, 29);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (15, 39, 45);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (16, 98, 51);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (17, 62, 82);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (18, 33, 89);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (19, 60, 71);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (20, 28, 2);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (21, 92, 34);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (22, 87, 26);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (23, 1, 84);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (24, 48, 59);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (25, 18, 13);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (26, 64, 77);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (27, 25, 34);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (28, 64, 93);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (29, 6, 41);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (30, 100, 32);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (31, 60, 64);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (32, 23, 17);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (33, 61, 39);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (34, 2, 47);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (35, 52, 74);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (36, 76, 64);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (37, 51, 36);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (38, 95, 92);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (39, 27, 1);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (40, 87, 2);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (41, 13, 94);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (42, 58, 75);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (43, 60, 66);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (44, 38, 99);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (45, 72, 63);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (46, 59, 22);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (47, 53, 30);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (48, 97, 1);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (49, 52, 11);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (50, 57, 9);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (51, 62, 10);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (52, 80, 68);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (53, 40, 56);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (54, 4, 53);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (55, 63, 5);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (56, 97, 20);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (57, 87, 50);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (58, 25, 76);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (59, 53, 21);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (60, 35, 64);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (61, 44, 55);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (62, 13, 14);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (63, 35, 35);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (64, 40, 48);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (65, 72, 62);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (66, 13, 88);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (67, 97, 98);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (68, 93, 50);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (69, 88, 65);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (70, 88, 58);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (71, 13, 58);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (72, 75, 91);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (73, 44, 73);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (74, 23, 41);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (75, 83, 33);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (76, 85, 8);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (77, 93, 16);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (78, 84, 39);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (79, 46, 13);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (80, 21, 46);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (81, 31, 56);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (82, 67, 73);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (83, 66, 36);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (84, 65, 18);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (85, 69, 55);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (86, 68, 74);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (87, 89, 86);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (88, 50, 83);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (89, 14, 45);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (90, 90, 51);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (91, 49, 81);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (92, 81, 3);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (93, 90, 8);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (94, 100, 85);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (95, 20, 81);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (96, 23, 20);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (97, 98, 97);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (98, 44, 32);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (99, 4, 82);
INSERT INTO `friends` (`id`, `user_id`, `friend_id`) VALUES (100, 27, 3);