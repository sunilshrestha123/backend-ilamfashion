import bcrypt from 'bcrypt';

export const hashing = async string => {
  console.log('tein', string);
  try {
    return await bcrypt.hash(string, 11);
  } catch (e) {
    console.log('tet');
    console.log(e);
  }
};
