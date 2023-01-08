
# JOBI

JOBI is the next generation of recruitment web app, built with the latest technologies (Spring boot/React js) and designed to streamline recruitment processes from sourcing to onboarding and beyond. Hire faster and funnel your recruitment channels into an intuitive platform. 


Note : To change city department number check the file:
"/Backend/src/main/java/com/spring/challenge/serviceimpl/JobImpl.java"  
line 122.




## Roadmap

- Tech stack.

- Insatllation.

- Demo using postman.

- Demo using browser.



## Tech Stack

**Client:** React, Html, css, Sass, Bootstrap.

**Server:** Spring boot, MySql.


## Installation
Note: For Apple Silicon users set "platform: linux/amd64" to mysql-db service in 
docker-compose.yml.

Using Docker 

```bash
  docker-compose up
```
Without Docker 

Backend:

```bash
  cd Backend
  mvn Install
  mvn run

```

Frontend:

```bash
  npm install
  react-scripts start

```


## Demo Using Postman

#### Add user with role company:

```http
  POST http://localhost:8089/SpringMVC/api/auth/signup
```

```http
{
    
    "username": "user 1",
    "email": "user1@gmail.com",
    "password": "azertyu",
    "role": "ROLE_COMPANY"

}
```


#### Add user with role seeker:

```http
   POST http://localhost:8089/SpringMVC/api/auth/signup
```

```http
{
    
    "username": "user 2",
    "email": "user2@gmail.com",
    "password": "azertyu",
    "role": "ROLE_SEEKER"

}
```

#### login with User 1 and add a job:

```http
   POST http://localhost:8089/SpringMVC/api/auth/signin
```

```http
{ 
     "username": "user 1",
     "password": "azertyu"
}
```


#### login with User 1 and add a job:
Note:Use your bearer Token from the login request.
```http
   POST http://localhost:8089/SpringMVC/job/add
```

```http
{
    "jobTitle": "work 1",
    "jobDescription": "Java developer",
    "location":"blon",
    "contarctType": "CDI"
}

```


#### login as User 2 and apply to job :
Note:Use your bearer Token from the login request.
```http
   POST http://localhost:8089/SpringMVC/job/applyToJob/1
```
```http
{
    "name": "Adam",
    "lastname": "khalfaoui",
    "cv":"cv 1"
    
}

```

#### Add views to Job :
Note:Use your bearer Token from the login request.
```http
   POST http://localhost:8089/SpringMVC/job/addview/&
```


## Demo using browser
After docker installation navigate to " http://localhost:3000/ ".



