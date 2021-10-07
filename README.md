# Currency-converter

### Fullstack web app done with Spring Boot and React

### Main functionality

Main function of the app is to convert one currency from another with specified amount of money. List of currencies and rates are fetched from European Central Bank website.
After user is logged in the app, he can choose the amount of money he wants to convert, source currency and target currency. After that currencies are fetched from the database
and the result is shown on the screen. Also, all currency conversions are saved in the history tab, which user can see pressing the 'Show History' button.

### Technologies used: 

### Front end

* React 17.
* Node 14
* Bootstrap 5
* Axios
* Moment.js

### Backend

* Java 11
* Spring Boot 2
* Hibernate
* Postgres 12
* Docker

## Starting the application

1. Clone git repository `https://github.com/Kirjanq4/currency-converter.git`
2. Go to database directory, open terminal and execute 2 commands: `docker build -t my-postgres-image .` and `docker run -d --name my_postgres -v my_dbdata:/var/lib/postgresql/data -p 54320:5432 -e POSTGRES_PASSWORD=my_password postgres:12`
3. Go to currency directory and execute: `mvn spring-boot:run`
4. Go to currency-ui directory and execute 2 commands: `npm install` and `npm start`
5. Login in the app with this credentials: username: `admin`, password: `admin`
