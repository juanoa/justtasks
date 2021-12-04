<div align="center">
  <img alt="Logo" src="./resources/just-tasks-logo-red.png" width="400" />
</div>
<h1 align="center">
  JustTasks
</h1>
<p align="center">
  Simple tasks manager. No projects, no labels, no priorities, no teams, only tasks.
</p>

## How JustTasks works? ⚙️

JustTasks has a simple and easy to use user interface. We can move between 
the different days using the two top buttons. We can always go back to today 
by pressing the top middle button : “Today”.

To create a task, we place ourselves in the column of the day where we want 
to create it and click on the “New task” button. Write the title of the task 
and press enter to add it. Tasks can be moved between days by dragging them 
between the different columns. To delete them, simply drag them to the button 
with the trash icon.

## Motivation 🏋️‍♂️

The reason I created JustTasks is simple: I needed a task application where 
only I could add tasks. Applications like Todoist or Microsoft Todo have a 
lot of features that I don’t use and end up overloading me when I just need 
to get to the important stuff.

## Start development service 🚀

### Getting started
1. Install Docker and Docker Composer
2. Install Node.JS and npm
    - Node.JS v14.0.0
    - npm v8.1.2

To start MongoDB cluster:
```
docker-compose up
```

To start API, web application and web:
```
npm run start
```

### Hosts
API
```
localhost:3031/v1
```
App
```
localhost:3000
```
Web
```
localhost:8000
```

### Dev Auth

Go to

```
localhost:3000/login
```
You can use one of this mail/password:

|  | EMAIL | PASSWORD |
|---|---|---|
| PREMIUM | premium@justtasks.com | 123456 |
| BASIC | basic@justtasks.com | 1234566 |

You can also register a new account, but you won't be a premium user.