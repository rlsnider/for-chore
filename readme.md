#This readme file is for information purposes while writing this program.

##.env = 
NODE_ENV = development
PORT = 3030
MONGO_URI = mongodb+srv://Ramona:abcde@cluster0.vuwcmdh.mongodb.net/todos?retryWrites=true&w=majority
JWT_SECRET=ben

##.gitignore = 
node_modules
.env

##Dependencies installed in backend:
npm init (first) be sure to set your main folder to server.js 

##in For-Chore directory(for back end) =
npm i express dotenv mongoose colors 
npm i -D nodemon
npm i express-async-handler
npm i bcryptjs
npm i jsonwebtoken
npm i -D concurrently

#FrontEnd=
in for-Chore Directory:
npx create-react-app frontend --template redux
(if you get error message, try: npx create-react-app@latest --template redux)
go to package.json in for-chore directory scripts should look like:
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend"
    }
add proxy to package.json in frontend dir- add line after "version" and before "private" 
(about line 4)
"proxy": "http://localhost:3030", 

#in dir frontend
    npm i react-router-dom
    npm i react-icons
    npm i axios react-toastify