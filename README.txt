This is a Simple Nodejs application.Created first Express application,it also tells how properly we can configure it.

Arranged the files and folders in an organized structure.This is an express controller, it shows how to call methods using Express routing Mechanism.

Connect Module is being used(middleware),which allows endless extension of application logic.

Ejs view is rendered,and it also tells about how to serve static files.

Expression session is being used to track user's behaviour.

This application also displays a logo, which is an image file.

This application connects to mongodb(local host).A mongoose schema(users),model has been created.A json file is created to define schema.A document has been posted through the command line.It will be updated in mongodb.You can check the users list using localhost:3000/users.

Command to post data:
curl -X POST -H "Content-Type: application/json" -d
'{"firstName":"First", "lastName":"Last","email":"user@example.com","user
name":"username","password":"password"}' localhost:3000/users


