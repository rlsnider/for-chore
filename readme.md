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
                

##The scripts file like this enables use to be able to stay in the root folder while running both the back and frontend. You can keep your terminal in the "for-chore" root and run the frontend(client) or backend.

##Note: (NODE_ENV is set to development right now. This shows a lot more of the error messages than without this file set. Easier to de-bug. When we deploy, we will set this to Production)

##CREATE THE FRONT END
npx create-react-app frontend --template redux

if you get error that tells you to uninstall react for your computer, not to worry, just add this fix(no need to uninstall)
npx create-react-app@latest  frontend --template redux

The --template redux adds the redux at the same time.

There are now 2 package-lock.json and package.json. (its ok--supposed to be that way)

In the root folder (For-chore) there is one and in the frontend there is another.
go into the the package.json in the for-chore folder.

Change your scripts to look like this:
 "scripts": {
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend"
  },
  Now while still in your for-chore directory, go to terminal and run "npm run client" and your react/redux will start
  #Follow these steps:
  ##1. delete App.css, and logo.css
  ##2> In App.js, Delete all dependencies. Clear out file leave one div. remove className="App".
  go to src/app/store.js
  delete line 2 about couter.
  delete lines in reducer: {

  }

  ##3. go to index.css wipe it clean.
  I added some css that should work well. imported some fonts, made a spinner etc.

##4. Delete the Counter folder in the features folder.

##5. Create pages= views/Dashboard, Login, Register

#Note: with the latest react update, you no longer need to import react at the top of the views

##6. cd into frontend, run "npm i react-router-dom"

##7. App.js file: import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
on the line after the return, wrap code(inbetweet return()) with empty fragment<></>, then inside fragment wrap with <Router></Router>

##Install react icons 

