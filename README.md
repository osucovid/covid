# covid

Quick guide to for initial set up

1) create a folder you'd like to work in
2) within that folder, "git init"
3) then, "git remote add origin https://github.com/osucovid/covid.git"
4) no need to run "npm init" because the repo contains previously generated package.json file
5) run, "npm i express cors mongodb" (cors for preventing cross origin resource sharing chrome error)
6) run, "npm i -D nodemon"
7) run, "npm i -g @vue/cli" to install latest version of cli (i think ver.2)
8) vue/cli client folder is already included in repo
9) the git repo also contains .gitignore to prevent pushing modules to repo
10) to run the express server locally (http://localhost:5000), run "npm start"
11) to run the vue dev server locally (http://localhost:8080), "cd client" and "npm run serve" in a separate terminal
12) build for production (pushes directly to github and github with deploy to heroku), within /client, run "npm run build"

*current build is live at https://cryptic-harbor-17003.herokuapp.com/
-you can add a post
-delete a post by double clicking on it
-api for post can be viewed at https://cryptic-harbor-17003.herokuapp.com/api/posts


