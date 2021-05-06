import axios from 'axios';

export async function signup(credentials) {
  return (await axios.post('/clients/signup', {user : credentials})).data;
}

export async function signin(credentials){
  return (await axios.post('/clients/signin', {credentials: credentials})).data;
}

export async function signout(){
  axios.post('/clients/signout');
}

export async function getUserInformation() {
  return (await axios.get('/clients/user/account')).data;
}

export async function savenewinformation(information){
  return (await axios.put('/clients/user/account/updateInfo', {information : information})).data;
}

export async function getUserLeases(){
  return (await axios.get('/clients/user/leases')).data;
}
