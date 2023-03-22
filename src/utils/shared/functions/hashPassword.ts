import { genSaltSync, hashSync } from 'bcrypt';

export function encryptPassword(password: string) {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  return hash;
}
