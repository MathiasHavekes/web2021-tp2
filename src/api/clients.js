import axios from 'axios';

export async function signup(client) {
  await axios.post('/clients/signup', {user : client});
}

export async function signin(credentials){
  await axios.post('/clients/signin', {credentials: credentials}).then(res => console.log(res));
}

export async function getUserInformation(userId) {
  return (await axios.get('/clients/compte'), {_id : userId}).data;
}

export async function savenewinformation(information){
  await axios.post('/clients/account/save', {information : information} );
}