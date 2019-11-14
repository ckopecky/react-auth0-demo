import Auth0Lock from 'auth0-lock'
import logo from './cat-logo.svg'
require('dotenv').config()


const options = {
	theme: {
        primaryColor: "#4B0082",
    },
    
};
const domain = process.env.REACT_APP_DOMAIN
const clientID = process.env.REACT_APP_CLIENT_ID
const lock = new Auth0Lock(clientID, domain, options)


export default lock