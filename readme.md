<!-- #This readme file is for information purposes while writing this program.

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
    npm i axios react-toastify -->


#ForChore

##Description
You will see a simple to do list for Chores. It has been created as a collaborated effort in order to practice teamwork in creating a project using Express, MongoDB, React/Redux and Redux/toolkit to create CRUD operations and styling. Jsonwebtoken and bcryptjs were used for password authentication and encryption.

The project has been deployed on Hiroku. 

#Routes

##Routes on task list
| **Route Name** | **Route** | **Action** |
|----------------|-----------|------------|
| Add Chore      | '/'       | POST       |
| Search Chores  | '/'       | GET        |
| Edit Chore     | '/:id'    | PUT        |
| Remove Chore   | '/:id'    | DELETE     |

##Routes on User list
| **Route Name** | **Route** | **Action** |
|----------------|-----------|------------|
| Add User       | '/'       | POST       |
| Search Users   | '/'       | GET        |
| Edit User      | '/:id'    | PUT        |
| Remove User    | '/:id'    | DELETE     |

#Models DataBase
###Todos Model
User: as ref to Users Model
Text: String (text for user)
Timestamp: true


###users Model
Name: String,
Email: String,
Password: String,
Timestamp: true





#Features
These include multiple users on a single task list, encryption and authorization for privacy and protection for each users list of Chores. Customized CSS was added to the project and illustrations created on Canva with icons from Font Awesome.

#Credits

Thank you to Brad Travesy from Udomy for great advice and learning materials for code. Font Awesome for great icons, Canva for really cute homepage illustration.    