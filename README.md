# CODING CHALLENGE

This project consists of creating a simple fullstack project, where the React frontend communicates with the server running on Node.js + Express. 
The assignment is to build a UI that allows users to type in a country to receive information about it, via the node server and the [REST Countries](https://restcountries.com/) api.

## Project overview
![project overview](https://i.imgur.com/4cXhwpE.png)
- I used **TypeScript** throughout the project, this to avoid/prevent typeError which, on React in particular, causes quite a few development delays; another good reason why I chose ts is to have a more simplified refactoring.
- I decided to create an **additional endpoint**, not asked in the delivery, that returns an array of all the common names of the world's nations, again via REST Countries. 
I did this to improve the UX by being able to show hints to the user as they type in a country.
I did not simply save the data to a variable in React to prevent the case in which, although unlikely, the name of some nation was changed or new ones were born; doing so ***resulted in a system that did not require maintenance*** to update this data.
- For testing, on the backend I used [**Jest**](https://jestjs.io/) to test the correct behavior of the endpoints.

## Prerequisites

- You have to install [**node**](https://nodejs.org/en) on your machine, the version I used is 18 LTS.
- (Optional) you can install [**yarn**](https://yarnpkg.com/), or instead use **npm** (provided by installing node):

    ```sh
    npm install -g yarn
    ```
- You also need typescript:

    ```sh
    npm install -g typescript | yarn global add typescript
    npm install --save @types/react @types/react-dom | yarn add @types/react @types/react-dom
    ```
## Installation and set-up
Install the dependencies for both backend and frontend, then you can start the project.

_install frontend dependencies_
```sh
cd frontend
npm i | yarn
cd --
```
_install backend dependencies_
```sh
cd backend
npm i | yarn
cd ..
```
_launch project_
```sh
npm run start | yarn start
```

## Testing
For testing the backend just launch the command:
```sh
cd backend
npm run test | yarn test
```

### Enjoy! 😁