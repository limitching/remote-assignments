-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `assignment`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `assignment` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `assignment`;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `authorID` int DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `authorID` (`authorID`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`authorID`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Hello World!','My first program!',1,'2023-02-01 17:17:13'),(2,'Hello AppWorks!','My awesome bootcamp!',2,'2023-02-01 17:17:52'),(3,'Blablabla','I don\'t know what to say~~~',3,'2023-02-01 17:21:48'),(4,'Programer','A machine that turns coffee into code.',3,'2023-02-01 17:24:12'),(5,'Issues','How many programmers does it take to change a light bulb? None, that’s a hardware problem.',4,'2023-02-01 17:26:00'),(6,'C++','An octopus made by nailing extra legs onto a dog.',1,'2023-02-01 17:35:34'),(7,'C programmers','C programmers never die. They are just cast into void.',1,'2023-02-01 17:35:34'),(8,'Question','Q: How different are C and C++? A: 1. Because C — C++ = 1.',4,'2023-02-01 17:35:34'),(9,'Knock knock','Knock, knock … Who’s there? … *very long pause* … Java.',1,'2023-02-01 17:35:34'),(10,'Two bytes meet','The first byte asks, ‘Are you ill?’ The second byte replies, ‘No, just feeling a bit off.',2,'2023-02-01 17:35:34'),(11,'UNIX is simple','UNIX is simple. It just takes a genius to understand its simplicity.',2,'2023-02-01 17:35:34'),(12,'Why programmers like UNIX','Why programmers like UNIX: unzip, strip, touch, finger, grep, mount, fsck, more, yes, fsck, fsck, fsck, umount, sleep.',2,'2023-02-01 17:35:34'),(13,'Two problems','A system administrator has two problems: 1. Dumb users. 2. Smart users.',4,'2023-02-01 17:35:34'),(14,'vi','vi vi vi — the editor of the beast.',3,'2023-02-01 17:35:34'),(15,'.NET','.NET is called .NET so that it wouldn’t show up in a UNIX directory listing.',2,'2023-02-01 17:35:34'),(36,'No computer','When we had no computers, we had no programming problems either.',5,'2023-02-03 02:11:54'),(37,'Easy way and a hard way','There is an easy way and a hard way. The hard part is finding the easy way.',6,'2023-02-03 02:11:54'),(38,'Ctrl-Z','There is no Ctrl-Z in life.',5,'2023-02-03 02:11:54'),(39,'Whitespace','Whitespace is never white.',5,'2023-02-03 02:11:54'),(40,'Fails','When all else fails … reboot.',6,'2023-02-03 02:11:54'),(41,'Bug','It’s not a bug — it’s an undocumented feature.',2,'2023-02-03 02:11:54'),(42,'A room','In a room full of top software designers, if two agree on the same thing, that’s a majority.',3,'2023-02-03 02:11:54'),(43,'Demonstrations','Demonstrations always crash.',3,'2023-02-03 02:11:54'),(44,'A program','A program is never less than 90% complete and never more than 95% complete.',1,'2023-02-03 02:11:54'),(45,'Walking on water','Walking on water and developing software from a specification are easy if both are frozen.',5,'2023-02-03 02:11:54'),(46,'GC','If Java had true garbage collection, most programs would delete themselves upon execution.',4,'2023-02-03 02:11:54'),(47,'SQL','A SQL query goes into a bar, walks up to two tables, and asks, ‘Can I join you?',3,'2023-02-03 02:11:54'),(48,'People in the world','There are 10 kinds of people in the world: Those who know binary and those who don’t.',6,'2023-02-03 02:11:54'),(49,'Two hard things','There are only two hard things in computer science: cache invalidation and naming things.',2,'2023-02-03 02:11:54'),(50,'Box','f the box says, ‘This software requires Windows XP or better,’ does that mean it’ll run on Linux?',4,'2023-02-03 02:11:54'),(51,'localhost','There’s no place like 127.0.0.1.',2,'2023-02-03 02:11:54'),(52,'I have not failed','I have not failed. I’ve just found 10,000 ways that won’t work.',5,'2023-02-03 02:11:54'),(53,'Glass','Q: Is the glass half-full or half-empty? A: The glass is twice as big as it needs to be.',3,'2023-02-03 02:11:54'),(54,'theory and practice','In theory, there ought to be no difference between theory and practice. In practice, there is.',1,'2023-02-03 02:11:54'),(55,'Programming is like sex','Programming is like sex: One mistake and you have to support it for the rest of your life.',6,'2023-02-03 02:11:54');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'appworks@school.appworks.tw','iloveappworks','2023-01-28 16:53:23'),(2,'root@school.appworks.tw','sudosudo123','2023-01-28 16:53:23'),(3,'root@linux.tw','rmrfisawesome','2023-01-28 16:53:23'),(4,'test@test.tw','test','2023-01-29 07:03:11'),(5,'hi@hello.tw','hello','2023-01-29 09:53:17'),(6,'backend@appworks.tw','awesome','2023-01-29 14:31:18');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-03 10:37:49
