-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-05-2020 a las 17:07:09
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT 0;

SET time_zone "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app_buscar_casadb`
--
CREATE DATABASE app_casas_database;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditdata`
--

CREATE TABLE creditdata (
  id int(200) NOT NULL,
  user_id int(110) NOT NULL,
municipio varchar(30) NOT NULL,
  monto int(15) NOT NULL,
  subcuanta int(15) NOT NULL,
  total int(15) NOT NULL,
  efectivo int(15) NOT NULL,
  numero2 int(15) NOT NULL
)  ;

--
-- Volcado de datos para la tabla `creditdata`
--
INSERT INTO creditdata (id, user_id, municipio, monto, subcuanta, total, efectivo, numero2) VALUES
(11111, 0, 'garcia', 345145, 124522, 124869, 0, 0),
(11112, 4, 'eghsdfg', 22522, 2222222, 1114514, 0, 12241441);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE users (
  id int (200) NOT NULL,
  id_credito int(200) NOT NULL,
  user_name varchar (50) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  phone int(50) NOT NULL,
  opcion varchar(50) DEFAULT NULL
) ;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO users (id, id_credito, user_name, email, password, phone, opcion) VALUES
(1, 11111, 'raul garces ', 'laMeraVena@MeLaPelas.com', '*01FCE2F5038C99FABC6940D81ADF2325339D803F', 255455, '1'),
(4, 11112, 'lokicho', 'asdasd@asdas.com', '12345654', 123456789, '1');

--


-- Filtros para la tabla `user`
--
ALTER TABLE users
  ADD CONSTRAINT user_credito FOREIGN KEY (id_credito) REFERENCES creditdata(id);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
