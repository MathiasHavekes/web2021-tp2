import axios from 'axios';

export async function getCars() {
  return (await axios.get('/cars')).data;
}
