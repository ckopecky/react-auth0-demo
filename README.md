# react-auth0-demo

Steps for basic Oauth popup

1. Sign up for an account on auth0.com
2. Create a new tenant for your team
3. Click on "Applications" to the left
4. Go into settings
5. Create a .env file at root folder
6. save domain and client ID in .env file
7. yarn add auth0-lock and dotenv 
8. create Authentication file within src folder
9. import Auth0Lock from 'auth0-lock'
10. import dotenv by requiring it 'require('dotenv').config()'
11. create variables for client ID and domain
12. create an instance of Auth0Lock with client ID and domain as arguments
13. import lock into index.js and set as a prop on App
14. you can now pass it around to whichever component will handle login/signup
15. invoke the pop up using lock.show()

Additional customization options
create an options variable within your authentication file and pass it into Auth0Lock. From there, you can customize the color of the popup, change the logo etc.

https://auth0.com/docs/libraries/lock/v11/configuration