--
-- Table structure for table `mapas`
--

DROP TABLE IF EXISTS `mapas`;

CREATE TABLE `mapas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `nomeCurto` text NOT NULL,
  `nomeVector` text NOT NULL,
  `svg` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mapas`
--

INSERT INTO `mapas` VALUES
(1,'Nova Flora de Portugal','Nova Flora','novaFlora','mapas/novaFlora.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'),
(2,'Regiões de Portugal (NUTS2)','Regiões (NUTS2)','regioes2N','mapas/regioes2N.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'),
(3,'Distritos de Portugal','Distritos','distritos','mapas/distritos.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'),
(4,'Arquipelagos','Arquipelagos','arquipelagos','mapas/arquipelagos.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'),
(5,'Regiões de Portugal (NUTS3)','Regiões (NUTS3)','regioes3N','mapas/regioes3N.svg''2019-06-13 10:00:00','2019-06-13 10:00:00'),
(6,'Áreas Protegidas de Portugal','Áreas Protegidas','areasProtegidas','mapas/areasProtegidas.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'),
(7,'Concelhos Portugal Continental','Concelhos','concelhos','mapas/concelhos.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'),
(8,'Arquipélagos (Ilhas) ','Arquipelagos (Ilhas)','arquipelagosIlhas','mapas/arquipelagosIlhas.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'),
(9,'Portugal Continental ','Portugal Continental','portugalContinental','mapas/portugalContinental.svg','2019-06-13 10:00:00','2019-06-13 10:00:00'));