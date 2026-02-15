# colors-lamp
Assignment 1 for COP4331

# Colors Web App Lab

## Application Description

The following web app was developed as part of the lab for COP4331 at UCF.  Web users can login with name/password (after signing up from the homepage) and add colors into their personal database.  The user can search their database (based on partial matches) for colors that they have added.

## Technologies Use

The colors lab utilized a LAMP stack.  The web server stores all the files associated with the web app and uses a mysql database to store users' information and colors added by users.  


## High-Level Setup Instructions

1. Register with a service that offer a LAMP stack.
2. Store html, api, js, css, and image files on /var/html/www directory of web server.
3. Server configuration including password should be stored in a .env file
4. Create database with Users table and Colors table.  Users table should have fields FirstName, LastName, Login, and Password).  Colors table should have fields ColorName and UserID)

## How to Run and Access the Application

Application was accessible at the domain name in the js code.  From that domain name, the user can signup then login from the homepage.  Once logged in, the user can search and add colors to their colors table.

## Assumptions, Limitations, AI Usage

No AI was used by the student for the completion of this lab.

---

