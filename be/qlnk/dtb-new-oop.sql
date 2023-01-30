-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for oop
DROP DATABASE IF EXISTS `oop`;
CREATE DATABASE IF NOT EXISTS `oop` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `oop`;

-- Dumping structure for table oop.ho_khau
DROP TABLE IF EXISTS `ho_khau`;
CREATE TABLE IF NOT EXISTS `ho_khau` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ma_ho_khau` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_chu_ho` int(11) DEFAULT NULL,
  `dia_chi` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `score` int(11) NOT NULL DEFAULT 0,
  `is_active` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `chu-ho` (`id_chu_ho`),
  CONSTRAINT `chu-ho` FOREIGN KEY (`id_chu_ho`) REFERENCES `nhan_khau` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Dumping data for table oop.ho_khau: ~5 rows (approximately)
DELETE FROM `ho_khau`;
INSERT INTO `ho_khau` (`ID`, `ma_ho_khau`, `id_chu_ho`, `dia_chi`, `score`, `is_active`) VALUES
	(13, 'ABC\r\n', 27, 'acd', 0, 0),
	(14, 'AV', 26, 'ab', 0, 1),
	(15, 'ASD', 28, 'vcs', 0, 0),
	(16, 'ASD', 30, 'f2', 0, 1),
	(17, 'ABgsgn', 27, 'b', 0, 1),
	(18, 'fà', 31, NULL, 0, 1);

-- Dumping structure for table oop.nhan_khau
DROP TABLE IF EXISTS `nhan_khau`;
CREATE TABLE IF NOT EXISTS `nhan_khau` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ma_ho_khau` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ho_ten` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ngay_sinh` date DEFAULT NULL,
  `gioi_tinh` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `socmnd` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `dia_chi_hien_nay` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `quan_he_voi_chu_ho` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `sdt` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Dumping data for table oop.nhan_khau: ~14 rows (approximately)
DELETE FROM `nhan_khau`;
INSERT INTO `nhan_khau` (`ID`, `ma_ho_khau`, `ho_ten`, `ngay_sinh`, `gioi_tinh`, `socmnd`, `dia_chi_hien_nay`, `quan_he_voi_chu_ho`, `sdt`, `is_active`) VALUES
	(26, 'ad', 'aa', NULL, NULL, NULL, NULL, NULL, NULL, 0),
	(27, 'a', 'vbbx', NULL, NULL, NULL, NULL, NULL, '3020', 1),
	(28, 'ada', 'af', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(29, 'a', 'bx', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(30, 'ad', 'xcvb', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(31, 'a', 'asf', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(32, 'bbgf', 'xcvb', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(33, 'fg', 'zf', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(34, 'sg', 'ag', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(35, 'eg', 'bzb', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(36, 'sg', 'zxcb', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(37, 'asff', 'qt', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(38, 'af', 'qt', NULL, NULL, NULL, NULL, NULL, NULL, 1),
	(39, 'a', 'vbbx', NULL, NULL, NULL, NULL, NULL, '303020', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
