-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Out-2023 às 08:04
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projetoexpcriativa2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `id_pessoa` int(11) NOT NULL,
  `id_filme` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `favoritos`
--

INSERT INTO `favoritos` (`id`, `id_pessoa`, `id_filme`) VALUES
(44, 97, 8);

-- --------------------------------------------------------

--
-- Estrutura da tabela `favoritosseries`
--

CREATE TABLE `favoritosseries` (
  `id` int(11) NOT NULL,
  `id_pessoa` int(11) NOT NULL,
  `id_serie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `favoritosseries`
--

INSERT INTO `favoritosseries` (`id`, `id_pessoa`, `id_serie`) VALUES
(12, 97, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `filmes`
--

CREATE TABLE `filmes` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(25) NOT NULL,
  `ano` int(4) NOT NULL,
  `duracao` time NOT NULL,
  `relevancia` varchar(50) NOT NULL,
  `sinopse` varchar(250) NOT NULL,
  `trailer` varchar(250) NOT NULL,
  `imagem` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `filmes`
--

INSERT INTO `filmes` (`id`, `titulo`, `genero`, `ano`, `duracao`, `relevancia`, `sinopse`, `trailer`, `imagem`) VALUES
(1, 'Piratas do Caribe 2', 'Aventura', 2000, '02:30:10', 'top', 'Filme de piratas', 'https://www.youtube.com/embed/ZHZu8DHWO3Q', 'piratasCaribe2.jpg'),
(2, 'Perfume de Mulher', 'Aventura', 1995, '02:30:10', 'top', 'Filme de romance', 'https://www.youtube.com/embed/losLAzU9YCk', 'perfumeMulher.jpg'),
(3, 'Velozes e Furiosos', 'Aventura', 1995, '02:30:10', 'top', 'Filme de corrida', 'https://www.youtube.com/embed/4bEMXlQXiS0', 'velozesEFuriosos.jpg'),
(4, 'Star wars III', 'Ação', 2012, '02:00:00', 'top da balada', 'Filme de jedi', 'https://www.youtube.com/embed/5UnjrG_N8hU', '49a15c27279ebd688625e9050a1ee5b6.png'),
(5, 'Matrix', 'Sci-Fi', 1999, '02:30:00', 'Top demais', 'Filme de dominação de robo', 'https://www.youtube.com/embed/2KnZac176Hs', 'Matrix.png'),
(6, 'A bússola de ouro', 'Fantasia e Aventura', 2007, '01:54:00', 'top', 'A órfã Lyra Belacqua vive em um mundo paralelo... ', 'https://www.youtube.com/embed/Cmli_h3w3Dg', 'A bussola de ouro.png'),
(7, 'Homem-aranha (2002)', 'Super-herói', 2002, '02:00:00', '10', 'Filme de heroi com aranhas', 'https://www.youtube.com/embed/TYMMOjBUPMM', 'Spider-Man_jogo_2018_capa.png'),
(8, 'Resistência', 'Ação, Aventura, Ficção ci', 2023, '02:15:00', '87% Gostaram', 'Do escritor/realizador Gareth Edwards chega o thriller épico de ação e ficção científica, passado no meio de uma guerra futura entre a raça humana e as forças da inteligência artificial. Joshua (Washington), um ex-agente das forças especiais em luto ', 'https://www.youtube.com/embed/qhofqRs8ERg', 'resistencia.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoa`
--

CREATE TABLE `pessoa` (
  `id` int(11) NOT NULL,
  `nome_completo` varchar(50) NOT NULL,
  `data_nascimento` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `validacao_email` varchar(1) NOT NULL,
  `senha_hash_sha256` char(200) NOT NULL,
  `numero_cartao` varchar(30) NOT NULL,
  `validade_cartao` varchar(10) NOT NULL,
  `codigo_seguranca` int(5) NOT NULL,
  `nome_titular` varchar(50) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `token` varchar(100) NOT NULL,
  `token_red` varchar(50) NOT NULL,
  `token_car` varchar(50) NOT NULL,
  `adm` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pessoa`
--

INSERT INTO `pessoa` (`id`, `nome_completo`, `data_nascimento`, `email`, `validacao_email`, `senha_hash_sha256`, `numero_cartao`, `validade_cartao`, `codigo_seguranca`, `nome_titular`, `cpf`, `token`, `token_red`, `token_car`, `adm`) VALUES
(66, 'ooooo', '33/33/3333', 'ericnielsen.franca2@gmail.com', 's', '22ac3c5a5bf0b520d281c122d1490650', '4489 6548 5489 4989', '36/64', 785, 'O.O.', '225.484.647-59', '', '', '', 0),
(67, 'Port', '05/06/1111', 'eric.franca@pucpr.edu.br', 's', '698d51a19d8a121ce581499d7b701668', '8489 4848 4156 4646', '55/55', 747, 'P.', '748.778.479-49', '', '', '', 0),
(71, 'Fulano Ciclano', '02/04/2001', 'gefim65902@tlhao86.com', 's', '202cb962ac59075b964b07152d234b70', '8155 7574 8456 4894', '05/26', 444, 'FULANO C.', '748.987.498-49', '', '', '', 0),
(74, 'ffffff', '01/54/5555', 'mopicem536@684hh.com', 'n', '202cb962ac59075b964b07152d234b70', '5458 4584 8949 8489', '55/55', 444, 'FDJDFKFD', '464.646.498-48', '', '', '', 0),
(75, 'Oi', '22/22/2222', 'sihoc43203@zefara.com', 's', '934b535800b1cba8f96a5d72f72f1611', '4694 5549 4985 4984', '05/30', 555, 'eee', '498.498.498-49', '9ae72ab6793a', '', '', 0),
(83, '1111', '11/11/1111', 'mhassessoria.mh@gmail.com', 's', '47d1e990583c9c67424d369f3414728e', '2222 2222 2222 2222', '22/22', 222, '2222', '111.111.111-11', '13e072dee9b8a', 'a4d2bac4c6a6a', '86ba53366c5ba', 1),
(97, 'ERIC NIELSEN FRANÇA', '05/06/2002', 'ericnielsen.franca@yahoo.com.br', 's', 'e10adc3949ba59abbe56e057f20f883e', '5415 6461 5156 1651', '09/26', 256, 'Eric França', '064.656.399-80', '88bc313f4b9f4', '', '', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `ano` int(4) NOT NULL,
  `temporada` int(11) NOT NULL,
  `relevancia` varchar(50) NOT NULL,
  `sinopse` varchar(250) NOT NULL,
  `trailer` varchar(250) NOT NULL,
  `imagem` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `series`
--

INSERT INTO `series` (`id`, `titulo`, `genero`, `ano`, `temporada`, `relevancia`, `sinopse`, `trailer`, `imagem`) VALUES
(1, 'Peaky Blinders', 'Crime', 2013, 5, 'top', 'muito bom', 'https://www.youtube.com/embed/oVzVdvGIC7U', 'pb.jpg'),
(2, 'Suits', 'Drama', 2011, 9, 'Top', 'Muito legal', 'https://www.youtube.com/embed/B1OL4ZQf70c', 'Suits.jpg'),
(3, 'Falcão e o Soldado', 'Ação', 2021, 1, 'Top', 'Muito Louco', 'https://www.youtube.com/embed/ZHaokMTWgdY', 'falcon.jpg'),
(4, 'Elementary', 'Investigação', 2012, 1, 'top', 'Série do sherlock holmes', 'https://www.youtube.com/embed/Ku6v3ZVPyTk', '9426c5e7db2469e5cdd5021f40515389.png'),
(5, 'Vikings', 'Ação', 2014, 1, 'Nice', 'Série de vikings', 'https://www.youtube.com/embed/qgtlVWAJJlk', 'dd1be3095272863882f1c4e3f848de27.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `favoritosseries`
--
ALTER TABLE `favoritosseries`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `filmes`
--
ALTER TABLE `filmes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero_cartao` (`numero_cartao`);

--
-- Índices para tabela `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de tabela `favoritosseries`
--
ALTER TABLE `favoritosseries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `filmes`
--
ALTER TABLE `filmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `pessoa`
--
ALTER TABLE `pessoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT de tabela `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;