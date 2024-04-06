# Quiz App
 simple quiz application using Node.js

### Steps to run application locally
- Git clone this repository.
- Intialize the directory as NodeJS project by typing `npm init --y` command in terminal.
- Install all dependencies using `npm i express nodemon path dotenv` command.
- Set up environment by making a `.env` file and in it write `PORT = <your usable port number>`.
- Go to "package.json" file and in "scripts" add ` "start": "nodemon server.js" `
- Start server using `npm start` command.
- Go to chrome and follow link `http://localhost:<your port number>/quiz`