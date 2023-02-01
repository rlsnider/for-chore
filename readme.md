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


###users DataBase
Name: String,
Email: String,
Password: String,
Timestamp: true





#Features
These include multiple users on a single task list, encryption and authorization for privacy and protection for each users list of Chores. Customized CSS was added to the project and illustrations created on Canva with icons from Font Awesome.

#Credits

Thank you to Brad Travesy from Udomy for great advice and learning materials for code. Font Awesome for great icons, Canva for really cute homepage illustration.
