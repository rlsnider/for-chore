##This is a Tempory file for development purposes.

#.gitignore file
node_modules
.env
DS_Store

#.env file
NODE_ENV = development 
PORT = 3030
MONGO_URI =mongodb+srv://Ramona:abcde@cluster0.vuwcmdh.mongodb.net/todos?retryWrites=true&w=majority
JWT_SECRET= abc

#Depencencies:
npm i --save bcryptjs 
            cors
            dotenv
            express
            express-async-handler
            jsonwebtoken
            mongoose
            (optional is morgan and colors)
            colors is a dependency is found to "color code" your messages in the terminal. I like it.
            also, do a npm i -D nodemon (this makes nodemon run on Dev)

            In "scripts":
                "start": "node backend/server.js",
                "server": "nodemon backend/server.js"

##The scripts file like this enables use to be able to stay in the root folder while running both the back and frontend.

##Note: (NODE_ENV is set to development right now. This shows a lot more of the error messages than without this file set. Easier to de-bug. When we deploy, we will set this to Production)