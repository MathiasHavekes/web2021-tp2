import axios from 'axios';

export async function signup(client) {
  await axios.post('/clients', {user : client} );
}

export async function signin(authentificator){
  await axios.post('/clients/signin', {authentificator : authentificator} );
}

export async function getcurrentinformation(emailAddress) {
  return (await axios.get('/clients'),{ emailAddress : emailAddress}).data;
}

export async function savenewinformation(information){
  await axios.post('/clients/account/save', {information : information} );
}