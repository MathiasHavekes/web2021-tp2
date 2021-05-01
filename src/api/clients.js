import axios from 'axios';

export async function signup(client) {
  await axios.post('/clients', {user : client} );
}

export async function signin(authentificator){
  await axios.post('/clients', {authentificator : authentificator} );
}