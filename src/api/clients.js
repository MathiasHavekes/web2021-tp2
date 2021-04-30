import axios from 'axios';

export async function signup(client) {
  await axios.post('/clients', {user : client} );
}