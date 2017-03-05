-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2017 at 11:49 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_island`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gallery`
--

CREATE TABLE `tbl_gallery` (
  `gallery_id` tinyint(4) NOT NULL,
  `gallery_thumb` varchar(50) NOT NULL,
  `gallery_img` varchar(150) NOT NULL,
  `gallery_desc` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_gallery`
--

INSERT INTO `tbl_gallery` (`gallery_id`, `gallery_thumb`, `gallery_img`, `gallery_desc`) VALUES
(1, 'thumb1.jpg', 'image1.jpg', 'Aerial view of Chantry Island. Photo by Karen Smith.'),
(2, 'thumb2.jpg', 'image2.jpg', 'Aerial view of Chantry Island and the Saugeen River mouth in Southhampton, Ontario. Photo by Karen Smith.'),
(3, 'thumb3.jpg', 'image3.jpg', 'Chantry Island Lighthouse. Photo by Carol Walberg.'),
(4, 'thumb4.jpg', 'image4.jpg', 'Chantry Island Lighthouse. Photo by Donna Savoy.'),
(5, 'thumb5.jpg', 'image5.jpg', 'Aerial view of Chantry Island and the Saugeen River mouth in Southhampton, Ontario. Photo by Karen Smith.'),
(6, 'thumb6.jpg', 'image6.jpg', 'Aerial views of Chantry Island and the Saugeen River mouth in Southampton, Ontario. A photo by James Swartz.'),
(7, 'thumb7.jpg', 'image7.jpg', 'Inside Light Keeper\'s Cottage. Photo by George Plant.'),
(8, 'thumb8.jpg', 'image8.jpg', 'Chantry Island Bird. Photo by Nancy Calder'),
(9, 'thumb9.jpg', 'image9.jpg', 'Chantry Island Birds. Photo by Nancy Calder'),
(10, 'thumb10.jpg', 'image10.jpg', 'Chantry Island Bird\'s Eggs. Photo by Nancy Calder.'),
(11, 'thumb11.jpg', 'image11.jpg', 'Chantry Island Gardens. Photo by Donna Savoy'),
(12, 'thumb12.jpg', 'image12.jpg', 'Inside Light Keeper\'s Cottage.Photo by George Plant.'),
(13, 'thumb13.jpg', 'image13.jpg', 'Inside Light Keeper\'s Cottage. Photo by George Plant.'),
(14, 'thumb14.jpg', 'image14.jpg', 'Chantry Island Lighthouse. Photo by Carol Walberg.'),
(15, 'thumb15.jpg', 'image15.jpg', 'Chantry Island Gardens. Photo by Donna Savoy'),
(16, 'thumb16.jpg', 'image16.jpg', 'Winter Scenes. Chantry Island. Photo by Vicki Tomori.'),
(17, 'thumb17.jpg', 'image17.jpg', 'Chantry Island Gardens. Photo by Donna Savoy.'),
(18, 'thumb18.jpg', 'image18.jpg', 'Winter Scenes. Saugeen Front Range Light. Photo by Vicki Tomori.'),
(19, 'thumb19.jpg', 'image19.jpg', 'The New Tour Boat. Photo by Wayne MacDonald'),
(20, 'thumb20.jpg', 'image20.jpg', 'Chantry Island Lighthouse. Photo by Carol Walberg.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  MODIFY `gallery_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
