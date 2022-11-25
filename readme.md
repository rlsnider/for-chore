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

##Note: (NODE_ENV is set to development right now. This shows a lot more of the error messages than without this file set. Easier to de-bug. When we deploy, we will set this to Production)