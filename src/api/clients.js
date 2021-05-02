import axios from 'axios';

export async function signup(client) {
  await axios.post('/clients/signup', {user : client} );
}

export async function signin(credentials){
  await axios.post('/clients/signin', {credentials: credentials} ).then(res => console.log(res));
}