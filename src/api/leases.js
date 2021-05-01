import axios from 'axios';

export async function postNewLease() {
  axios.post('/leases');
}
