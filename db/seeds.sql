Use test_DB

INSERT INTO department (name) VALUES
('Sales'),
('Marketing'),
('Finance');


INSERT INTO role (title, salary, department_id) VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 2),
('Lawyer', 190000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Monkey', 'Luffy', 1, NULL),
('Nami', 'Chan', 2, 1),
('Levi', 'Ackerman', 3, 1),
('Megumi', 'Fushiguro', 3, 2),
('Papa', 'John', 1, 2),
('Ronald', 'MacDonald', 2, 3),
('Burger', 'King', 1, 3),
('Bill', 'Clinton', 2, 2);
