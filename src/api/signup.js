import axios from 'axios';

export async function signup() {
  return (await axios.post('/signup'));
}