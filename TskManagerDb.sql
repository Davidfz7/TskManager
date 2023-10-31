DROP DATABASE IF EXISTS TskManagerDb;

CREATE database TskManagerDb;

use TskManagerDb;

CREATE TABLE Users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Birthday DATE,
    Password VARCHAR(255)

)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


CREATE TABLE Projects (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectName VARCHAR(100),
    Status VARCHAR(50),
    Description TEXT
)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;



INSERT INTO Users (FirstName, LastName, Birthday, Password)
VALUES
    ('John', 'Doe', '1990-05-15', 'password1'),
    ('Jane', 'Smith', '1985-12-10', 'password2'),
    ('Michael', 'Johnson', '1995-08-20', 'password3'),
    ('Emily', 'Brown', '1988-04-25', 'password4'),
    ('David', 'Lee', '1992-10-30', 'password5');
    
INSERT INTO Projects (ProjectName, Status, Description)
VALUES
    ('Proyecto A', 'En progreso', 'Descripción del proyecto A'),
    ('Proyecto B', 'Completado', 'Descripción del proyecto B'),
    ('Proyecto C', 'Pendiente', 'Descripción del proyecto C'),
    ('Proyecto D', 'En progreso', 'Descripción del proyecto D'),
    ('Proyecto E', 'Completado', 'Descripción del proyecto E');




