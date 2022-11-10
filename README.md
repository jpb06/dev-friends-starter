# DevFriends bootstrapper

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/dev-friends-starter)
![Last commit](https://img.shields.io/github/last-commit/jpb06/dev-friends-starter?logo=git)

Here is a project based on nextjs and material-ui to toy a bit with react.

<!-- readme-package-icons start -->

<p align="left"><a href="https://www.typescriptlang.org/docs/" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></a>&nbsp;<a href="https://nodejs.org/en/docs/" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></a>&nbsp;<a href="https://yarnpkg.com/api/" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" /></a>&nbsp;<a href="https://babeljs.io/docs/en/" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" /></a>&nbsp;<a href="https://emotion.sh/docs/introduction" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/emotion.png" /></a>&nbsp;<a href="https://eslint.org/docs/latest/" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" /></a>&nbsp;<a href="https://jestjs.io/docs/getting-started" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" /></a>&nbsp;<a href="https://mui.com/material-ui/getting-started/overview/" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" /></a>&nbsp;<a href="https://nextjs.org/docs/getting-started" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /></a>&nbsp;<a href="https://prettier.io/docs/en/index.html" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/prettier.png" /></a>&nbsp;<a href="https://reactjs.org/docs/getting-started.html" target="_blank"><img height="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>&nbsp;<a href="https://testing-library.com/docs/" target="_blank"><img height="70" src="https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/testing-library.png" /></a></p>

<!-- readme-package-icons end -->

## ⚡ Advices

- Do not hesitate to use react ecosystem to answer our needs. There is no limitation.
- Our application is using [material-ui](https://mui.com/material-ui/getting-started/overview/). Take advantage of the documentation to get working code from examples.

## ⚡ Case study

Your new boss comes at your desk today. He says there is a lot of devs in the team right now, and each one of them is assigned to a squad. But he cannot keep up with who is in which squad.

He wants you to make an app allowing him to see developers and filter them by squad. Then, once you're done, he may come back to ask you for something extra: the ability to move a dev to another squad.

### 🔶 Step 1 : Displaying developers

We can begin by getting developers from our backend and display them. Remember there is no restriction on what we may use in the react ecosystem!

### 🔶 Step 2 : Adding a filter to display only the developers of one or several squads

The next step is to add a filter component. This could be checkboxes or a multiselect for example.

### 🔶 Step 3 : Change the squad of a developer

Finally, we need to give a way to change the squad of a developer. This could be done on a new page or in a modal, for example.

## ⚡ Data model

Our backend is plugged to a database with the following schema:

![Datamodel](./assets/dev-friends-model.png)

## ⚡ Exposed routes

Our backend exposes a swagger found [here](https://devfriends-backend.fly.dev). Let's summarizes the routes exposed:

| Route                 | Verb    | Description                                                             |
| --------------------- | ------- | ----------------------------------------------------------------------- |
| 💥 /squads            | 🔹 GET  | Retrieves all squads                                                    |
| 💥 /squads/{id}/devs  | 🔹 GET  | Retrieves all devs belonging to a squad                                 |
| 💥 /devs              | 🔹 GET  | Retrieves all devs                                                      |
| 💥 /devs/by-squad     | 🔸 POST | Retrieves devs belonging to a list of squads passed in the request body |
| 💥 /devs/change-squad | 🔸 POST | Moves a developer to another squad                                      |
