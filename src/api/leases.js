import axios from 'axios';

export async function postNewLease() {
  return (await axios.post('/leases/register/new')).data;
}
