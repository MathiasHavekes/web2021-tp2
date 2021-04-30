import axios from 'axios';

export async function getFacilities() {
  return (await axios.get('/facilities')).data;
}
