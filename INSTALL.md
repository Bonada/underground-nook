Installation:

These instructions will get you a copy of a Github project up and running on your local machine for development and testing purposes.

- Begin by cloning this repository with git.
    * 'git clone https://github.com/Bonada/underground-nook'
- Open up the Command Prompt and navigate to the "underground-nook" folder in the cloned repository. An example of how to navigate to the right folder:
    * cd itws4310/underground-nook
- Navigate to the build folder within the client folder (cd client/build) and type the following:
    * 'npm install'
    * 'npm run-script build'
    * 'npm start core --save'
- In a separate Command Prompt window navigate back to the original folder and enter the following commands:
    * 'npm install'
    * 'npm install npx' (To install Node.js 5.2)
    * 'npm install -g create-react-app' (To install React App)
    * 'npm i react-router-dom'
 - Navigate into the node_modules folder and enter the following:
     * npm install mongodb
- Navigate back to the original folder and type the following commands:
     * 'node server'
- In a browser go to 'https://localhost:3000/'
