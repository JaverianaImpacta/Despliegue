USE JAVERIANA_IMPACTA;

SET NAMES utf8mb4;

SET CHARACTER SET utf8mb4;

-- Insertando datos en la tabla GENERO
INSERT INTO GENERO (SIGLA, DESCRIPCION) VALUES 
('M', 'Masculino'),
('F', 'Femenino'),
('O', 'Otro');

-- Insertando datos en la tabla PAIS
INSERT INTO PAIS (NOMBRE, NOMBRE_INTERNACIONAL, ISO2, ISO3, CODIGO_TELEFONICO) VALUES 
('Colombia', 'Colombia', 'CO', 'COL', 57),
('Estados Unidos','United States of America', 'US', 'USA', 1),
('España', 'Spain' ,'ES', 'ESP', 34);

-- Insertando datos en la tabla DEPARTAMENTO_POLITICO
INSERT INTO DEPARTAMENTO_POLITICO (NOMBRE, PAIS, ISO2) VALUES 
('Antioquia', 'CO', 'ANT'),
('New York', 'US', 'NY'),
('Madrid', 'ES', 'MD');

-- Insertando datos en la tabla MUNICIPIO
INSERT INTO MUNICIPIO (CODIGO_POSTAL, NOMBRE, DEPARTAMENTO) VALUES 
(5001, 'Medellín', 'ANT'),
(36061, 'New York City', 'NY'),
(28079, 'Madrid', 'MD');

-- Insertando datos en la tabla CIUDAD
INSERT INTO CIUDAD (CODIGO, NOMBRE, MUNICIPIO) VALUES 
(1, 'Medellín', 5001),
(2, 'New York City', 36061),
(3, 'Madrid', 28079);

-- Insertando datos en la tabla LOCALIDAD
INSERT INTO LOCALIDAD (CODIGO, DESCRIPCION, CIUDAD) VALUES 
(1, 'Poblado', 1),
(2, 'Harlem', 2),
(3, 'Salamanca', 3);

-- Insertando datos en la tabla BARRIO
INSERT INTO BARRIO (CODIGO, NOMBRE, LOCALIDAD) VALUES 
(101, 'El Tesoro', 1),
(102, 'Central Park', 2),
(103, 'Sol', 3);

-- Insertando datos en la tabla TIPO_DOCUMENTO
INSERT INTO TIPO_DOCUMENTO (TIPO, DESCRIPCION) VALUES 
('CC', 'Cédula de Ciudadanía'),
('CE', 'Cédula de Extranjería'),
('TI', 'Tarjeta de Identidad'),
('NI', 'Numero de Identificación Tributaria');

-- Insertando datos en la tabla EPS
INSERT INTO EPS (NOMBRE) VALUES 
('Sura'),
('Sanitas'),
('SaludTotal');


-- Insertando datos en la tabla PROGRAMA
INSERT INTO PROGRAMA (CODIGO, NOMBRE, FECHA_FUNDACION, CANTIDAD_CREDITOS, FACULTAD) VALUES 
(201, 'Ingeniería de Sistemas', '1990-05-20', 160, 101),
(202, 'Medicina General', '1980-10-15', 240, 102);


-- Insertando datos en la tabla DEPARTAMENTO
INSERT INTO DEPARTAMENTO (CODIGO, NOMBRE, FACULTAD, PROGRAMA) VALUES 
(301, 'Ciencias de la Computación', 101, 201),
(302, 'Anatomía', 102, 202);

-- Insertando datos en la tabla ASIGNATURA
INSERT INTO ASIGNATURA (ID, CODIGO, NOMBRE, CREDITOS, DEPARTAMENTO) VALUES 
(1, 401, 'Algoritmos', 4, 301),
(2, 402, 'Anatomía Humana', 5, 302),
(4, 5100, 'Proyecto social universitario', 2, 301),
(5, 33753, 'Proyecto CDIO Año 3-1', 2, 301),
(6, 35393, 'Sentido de mi Práctica', 0, 301);

-- Insertando datos en la tabla CLASE
INSERT INTO CLASE (CODIGO, ASIGNATURA, HORARIO) VALUES 
(501, 401, 'Lunes 8:00 - 10:00'),
(502, 402, 'Miércoles 10:00 - 12:00');

-- Insertando datos en la tabla SEMESTRE
INSERT INTO SEMESTRE (AÑO, PERIODO, FECHA_INICIO, FECHA_FINAL, CODIGO) VALUES 
(2023, 1, '2023-01-15', '2023-06-15', '2023-1'),
(2023, 2, '2023-07-15', '2023-12-15', '2023-2'),
(2024, 1, '2024-01-15', '2024-06-15', '2024-1');

-- Insertando datos en la tabla PERSONA
INSERT INTO PERSONA (TIPO_DOCUMENTO, CEDULA, PRIMER_NOMBRE, PRIMER_APELLIDO, CORREO_ELECTRONICO, FECHA_NACIMIENTO, SEXO, EPS, DIRECCION, NUMERO_CELULAR) VALUES 
('CC', 111111111, 'Pedro', 'Ramírez', 'pedro.ramirez@example.com', '1992-03-15', 'M', 'Sura', 'Calle 789', 11111111),
('CC', 222222222, 'Ana', 'García', 'ana.garcia@example.com', '1985-08-25', 'F', 'Sanitas', 'Carrera 012', 22222222),
('CC', 333333333, 'David', 'Rodríguez', 'david.rodriguez@example.com', '1990-12-10', 'M', 'SaludTotal', 'Avenida 345', 33333333),
('CC', 444444444, 'Laura', 'Martínez', 'laura.martinez@example.com', '1988-05-20', 'F', 'Sura', 'Calle 678', 44444444),
('CC', 555555555, 'Carlos', 'Hernández', 'carlos.hernandez@example.com', '1993-11-30', 'M', 'Sanitas', 'Carrera 901', 55555555),
('CC', 666666666, 'María', 'Gómez', 'maria.gomez@example.com', '1986-04-12', 'F', 'SaludTotal', 'Avenida 234', 66666666),
('CC', 777777777, 'José', 'López', 'jose.lopez@example.com', '1991-10-05', 'M', 'Sura', 'Calle 567', 77777777),
('CC', 888888888, 'Sofía', 'Pérez', 'sofia.perez@example.com', '1987-07-22', 'F', 'Sanitas', 'Carrera 890', 88888888),
('CC', 999999999, 'Andrés', 'Martín', 'andres.martin@example.com', '1989-02-18', 'M', 'SaludTotal', 'Avenida 123', 99999999),
('CC', 123456789, 'Juan', 'Pérez', 'juan.perez@example.com', '1995-06-20', 'M', 'Sura', 'Carrera 456', 12345678),
('CC', 987654321, 'María', 'López', 'maria.lopez@example.com', '1994-09-12', 'F', 'Sanitas', 'Avenida 678', 98765432),
('CC', 456789123, 'Carlos', 'Gómez', 'carlos.gomez@example.com', '1996-12-03', 'M', 'SaludTotal', 'Calle 901', 45678901);

-- Insertando datos en la tabla PROFESOR
INSERT INTO PROFESOR (ID_INSTITUCIONAL, CEDULA, CORREO_INSTITUCIONAL) VALUES 
(3004, 111111111, 'pedro.ramirez@universidad.edu'),
(3005, 222222222, 'ana.garcia@universidad.edu'),
(3006, 333333333, 'david.rodriguez@universidad.edu'),
(3007, 444444444, 'laura.martinez@universidad.edu');

-- Insertando datos en la tabla DIRECTIVO
INSERT INTO DIRECTIVO (ID_INSTITUCIONAL, CEDULA, CORREO_INSTITUCIONAL) VALUES 
(1001, 555555555, 'carlos.hernandez@universidad.edu'),
(1002, 666666666, 'maria.gomez@universidad.edu'),
(1003, 777777777, 'jose.lopez@universidad.edu');

-- Insertando datos en la tabla ESTUDIANTE
INSERT INTO ESTUDIANTE (ID_INSTITUCIONAL, CEDULA, CORREO_INSTITUCIONAL, SEMESTRE, SENTIDO_MI_PRACTICA, ARL) VALUES 
(2001, 123456789, 'juan.perez@universidad.edu', 2024, 1, 0),
(2002, 987654321, 'maria.lopez@universidad.edu', 2023, 0, 0),
(2003, 456789123, 'carlos.gomez@universidad.edu', 2024, 1, 0);

-- Insertando datos en la tabla MATRICULA
INSERT INTO MATRICULA (ESTUDIANTE, PROGRAMA, SEMESTRE) VALUES 
(123456789, 201, '2023-1'),
(987654321, 202, '2023-2');

-- Insertando datos en la tabla ROL
INSERT INTO ROL (DESCRIPCION) VALUES 
('Profesor'),
('Administrativo'),
('Decano'),
('Estudiante');

-- Insertando datos en la tabla ROLXPERSONA
INSERT INTO ROLXPERSONA (ROL, CEDULA) VALUES
('Estudiante', 123456789),
('Profesor', 111111111),
('Administrativo', 555555555),
('Decano', 777777777);

-- Insertando datos en la tabla POBLACION_OBJETIVO
INSERT INTO POBLACION_OBJETIVO (DESCRIPCION) VALUES 
('Niños en situación de riesgo'),
('Personas mayores en situación de abandono'),
('Mujeres cabeza de familia');

-- Insertando datos en la tabla ENTIDAD
INSERT INTO ENTIDAD (DOCUMENTO, NIT, RAZON_SOCIAL, CONVENIO, CEDULA_REP, ACTIVIDAD_ECONOMICA, TELEFONO, CORREO) VALUES 
('NI', 45245454, 'Entidad 1', 1001, 888888888, '0510', 31153847, 'entidad1@example.com'),
('NI', 85745844, 'Entidad 2', 1002, 999999999, '0210', 32047513, 'entidad2@example.com'),
('NI', 45412144, 'Entidad 3', 1003, 456789123, '0510', 589547821, 'entidad3@example.com');

-- Insertando datos en la tabla INTERLOCUTOR
INSERT INTO INTERLOCUTOR (CEDULA, CARGO) VALUES 
(888888888, 'Gerente'),
(999999999, 'Director Financiero'),
(456789123, 'Jefe de Producción');

-- Insertando datos en la tabla TEMATICA_CENTRAL
INSERT INTO TEMATICA_CENTRAL (DESCRIPCION) VALUES 
('Educación'),
('Salud'),
('Medio ambiente');

-- Insertando datos en la tabla PROYECTO
INSERT INTO PROYECTO (CODIGO, NOMBRE, DESCRIPCION, OBJETIVO, ENTIDAD, LIDER, UBICACION, TEMATICA, APROBACION, ACTIVO) VALUES 
(10001, 'Proyecto 1', 'Descripción del Proyecto 1', 'Niños en situación de riesgo', 45245454, 888888888, 101, 'Educación', TRUE, TRUE),
(10002, 'Proyecto 2', 'Descripción del Proyecto 2', 'Personas mayores en situación de abandono', 85745844, 999999999, 102, 'Salud', FALSE, TRUE),
(10003, 'Proyecto 3', 'Descripción del Proyecto 3', 'Mujeres cabeza de familia', 45412144, 456789123, 103, 'Medio ambiente', TRUE, FALSE);

-- Insertando datos en la tabla RECURSO
INSERT INTO RECURSO (DESCRIPCION) VALUES 
('Equipos de cómputo'),
('Material quirúrgico'),
('Vehículos de transporte');

-- Insertando datos en la tabla ASIGNACION_RECURSO
INSERT INTO ASIGNACION_RECURSO (PROYECTO, RECURSO, CANTIDAD) VALUES 
(10001, 'Equipos de cómputo', 10),
(10002, 'Material quirúrgico', 100),
(10003, 'Vehículos de transporte', 5);

-- Insertando datos en la tabla TIPO_PROYECTO
INSERT INTO TIPO_PROYECTO (DESCRIPCION) VALUES 
('Investigación'),
('Desarrollo'),
('Social');

-- Insertando datos en la tabla PROYECTOXTIPO_PROYECTO
INSERT INTO PROYECTOXTIPO_PROYECTO (PROYECTO, TIPO) VALUES 
(10001, 'Investigación'),
(10002, 'Desarrollo'),
(10003, 'Social');

-- Insertando datos en la tabla TIPO_VINCULACION
INSERT INTO TIPO_VINCULACION (ID, CODIGO, ASIGNATURA, DESCRIPCION) VALUES 
(1, 1, 401, 'Práctica'),
(2, 2, 402, 'Investigación'),
(3, 3, 5100, 'Practica Social - PSU'),
(4, 4, 33753, 'Componente social CDIO-3');

-- Insertando datos en la tabla VINCULACION
INSERT INTO VINCULACION (CODIGO, ESTUDIANTE, PROYECTO, SEMESTRE, TIPO_VINCULACION, CERTIFICADO) VALUES 
(20001, 123456789, 10001, '2023-1', 1, TRUE),
(20002, 987654321, 10002, '2023-2', 2, FALSE);

-- Insertando datos en la tabla PERMISO
INSERT INTO PERMISO (CODIGO, DESCRIPCION) VALUES 
(1, 'Acceso a bases de datos'),
(2, 'Permiso de administrador'),
(3, 'Permiso de edición');

-- Insertando datos en la tabla CREDENCIAL
INSERT INTO CREDENCIAL (CODIGO, PERMISO, ROL) VALUES 
(1001, 1, 'Administrativo'),
(1002, 2, 'Decano'),
(1003, 3, 'Profesor'),
(1004, 3, 'Estudiante');

-- Insertando datos en la tabla ACTIVIDADXVINCULACION
INSERT INTO ACTIVIDADXVINCULACION (ACTIVIDAD, VINCULACION) VALUES 
('Charla informativa', 20001),
('Taller de sensibilización', 20002);

-- Insertando datos en la tabla DECANATURA
INSERT INTO DECANATURA (FACULTAD, DECANO, FECHA_INICIO, FECHA_FINAL) VALUES 
(101, 555555555, '2020-01-01', NULL),
(102, 555555555, '2018-01-01', NULL);

-- Insertando datos en la tabla DIRECCION_PROGRAMA
INSERT INTO DIRECCION_PROGRAMA (PROGRAMA, DIRECTOR, FECHA_INICIO, FECHA_FINAL) VALUES 
(201, 555555555, '2019-01-01', NULL),
(202, 555555555, '2017-01-01', NULL);

-- Insertando datos en la tabla DIRECCION_DEPARTAMENTO
INSERT INTO DIRECCION_DEPARTAMENTO (DEPARTAMENTO, DIRECTOR, FECHA_INICIO, FECHA_FINAL) VALUES 
(301, 555555555, '2018-01-01', NULL),
(302, 555555555, '2016-01-01', NULL);

-- Insertando datos en la tabla INSCRIPCION
INSERT INTO INSCRIPCION (ACTIVA, ESTUDIANTE, CLASE) VALUES 
(TRUE, 123456789, 501),
(TRUE, 987654321, 502);