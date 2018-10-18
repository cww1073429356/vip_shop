/*
Navicat MySQL Data Transfer

Source Server         : dome
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-10-18 11:15:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop_name
-- ----------------------------
DROP TABLE IF EXISTS `shop_name`;
CREATE TABLE `shop_name` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `mark` varchar(255) NOT NULL,
  PRIMARY KEY (`id`,`mark`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of shop_name
-- ----------------------------
INSERT INTO `shop_name` VALUES ('1', '123', 'xxx', '2');
INSERT INTO `shop_name` VALUES ('24', '1', '我是', '2');
INSERT INTO `shop_name` VALUES ('25', 'gggg', '你是谁', '2');
INSERT INTO `shop_name` VALUES ('26', '999', 'ni_hao_yi_ccccc', '2');
INSERT INTO `shop_name` VALUES ('27', '', '', '2');
INSERT INTO `shop_name` VALUES ('28', 'werwerwerwe', 'werwerwe', '2');
INSERT INTO `shop_name` VALUES ('29', 'dfsdfsdffdsfdsfd', '热污染无若', '2');
INSERT INTO `shop_name` VALUES ('30', 'dddddd', '反反复复付', '2');
INSERT INTO `shop_name` VALUES ('31', '543', 'yicheng76', '');
INSERT INTO `shop_name` VALUES ('32', '543', 'yicheng76', '');
INSERT INTO `shop_name` VALUES ('33', '543', 'yicheng76', '');
INSERT INTO `shop_name` VALUES ('34', '543', 'yicheng76', '');
INSERT INTO `shop_name` VALUES ('35', 'ooo', 'oop', '');
INSERT INTO `shop_name` VALUES ('36', 'ooo', 'oop', '');
INSERT INTO `shop_name` VALUES ('37', 'ooo', 'oop', '');
INSERT INTO `shop_name` VALUES ('38', 'ooo', 'oop', '');
INSERT INTO `shop_name` VALUES ('39', 'ddd', 'dddd', '');
INSERT INTO `shop_name` VALUES ('40', 'cccc', 'iiii', '');
INSERT INTO `shop_name` VALUES ('41', 'ttttt', 'tttt', '');
INSERT INTO `shop_name` VALUES ('42', 'uuu', 'uuu', '');
INSERT INTO `shop_name` VALUES ('43', 'qqqq', 'qqq', '');
INSERT INTO `shop_name` VALUES ('44', 'bbbbb', 'bbb', '');
INSERT INTO `shop_name` VALUES ('45', 'ttttt', 'yyyy', '');
INSERT INTO `shop_name` VALUES ('46', 'nihaoshijie', 'nihaoshijie', '');
INSERT INTO `shop_name` VALUES ('47', 'aaaaaaaaa', 'yicheng78', '');
INSERT INTO `shop_name` VALUES ('48', 'caocheng', 'yi_cheng_aaa', '');
