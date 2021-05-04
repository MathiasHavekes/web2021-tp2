import axios from 'axios';

export async function signup(client) {
  return (await axios.post('/clients/signup', {user : client}));
}

export async function signin(credentials){
  return (await axios.post('/clients/signin', {credentials: credentials}));
}

export async function getUserInformation(userId) {
  return (await axios.get('/clients/account'), {userId : userId}).data;
}

export async function savenewinformation(information){
  await axios.post('/clients/account/save', {information : information} );
}