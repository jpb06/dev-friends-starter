# DevFriends bootstrapper

Here is a project based on nextjs and material-ui to toy a bit with react.

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/dev-friends-starter)
![Last commit](https://img.shields.io/github/last-commit/jpb06/dev-friends-starter?logo=git)

## ⚡ So what is this about?

Your new boss comes at your desk today. He says there is a lot of devs in the team right now, and each one of them is assigned to a squad. But he cannot keep up with who is in which squad.

He wants you to make an app allowing him to see developers and filter them by squad. Then, once you're done, he may come back to ask you for something extra: the ability to move a dev to another squad.

## ⚡ Alright, where's the data, boss?

You can take a look at this [small backend](https://workshop-react-back.herokuapp.com). A swagger is exposed, but let's check quickly the routes availables:

| Route                      | Description                                        |
| -------------------------- | -------------------------------------------------- |
| 🔸 GET /squads             | Retrieves all the squads                           |
| 🔸 GET /squads/{id}/devs   | Gets the developers belonging to a squad           |
| 🔸 GET /devs               | Retrieves all the developers                       |
| 🔹 POST /devs/change-squad | Moves a developer to another squad                 |
| 🔹 POST /devs/by-squads    | Gets developers belonging to one or several squads |

## ⚡ Stack documentation

| Package                 | Description       | Documentation                                        |
| ----------------------- | ----------------- | ---------------------------------------------------- |
| ⚛️ React                | front library     | <https://reactjs.org/docs/getting-started.html>      |
| ⚛️ nextjs               | react framework   | <https://nextjs.org/docs/getting-started>            |
| :heartpulse: typescript | JS superset       | <https://www.typescriptlang.org/docs/>               |
| :iphone: Material UI    | UI framework      | <https://material-ui.com/>                           |
| :pencil2: eslint        | linter            | <https://eslint.org/docs/user-guide/getting-started> |
| :boom: Jest             | Testing framework | <https://jestjs.io/docs/en/getting-started>          |
