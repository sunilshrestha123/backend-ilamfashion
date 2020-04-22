import Contactus from '../model/contactus';
export async function getAllContactus() {
  return await Contactus.getAllContactus();
}

export async function addContactus(data) {
  return await Contactus.addContactus(data);
}

export async function getContactusById(id) {
  return await Contactus.getContactusById(id);
}
