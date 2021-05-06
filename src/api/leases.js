import axios from 'axios';

export async function postNewLease(leaseInfo) {
  return (await axios.post('/leases/register/new', {leaseInfo: leaseInfo})).data;
}
