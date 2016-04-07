## README

### Beginner React Project

- This project was initiated with the intent of using GraphQL, Relay, MongoDB and the Flux framework.
- I decided to limit the scope of it to be a "barebones" React project and not use any formal framework since there was limited functionality.
- MongoDB / more server-side functionality will be the next addition.
 
#### Instructions
*Node Version:* 4.3
- *First*: `npm install`
- *Run*: `npm start`
- *Needs*: A mongo process running. If you have it locally you can run `mongod`. It will look on the default port **27017**.
  - *Actually I have turned off MongoDB by default since the calls to the database were not yet built out.*
  - *MongoDB can be turned on again by setting the variable to true, atop the __server.js__ file but all it does is initialize the database.*
- *Development*: Run `webpack -w -d --display-error-details` to see your updated changes.
- That should be it.

#### Components

##### *Home*
This component contains most of the state of the application.
Re-renders are triggered from the home component and all of the other components are nested within the home component.

##### *LoginForm*
Flexible component for both doctor and patient login. Contains some state (for username and password).

##### *DoctorPortal*
Contains all relevant information for a doctor user.
- Patient Name, Address, DOB
- Patient Visit History

##### *PatientPortal*
Contains all relevant information for a patient user.
- Patient's Name, Address, DOB
- Upload Form

**Not yet done**: Backend calls, form/file upload (will probably use whatfg-fetch or node-fetch)
