import * as bcrypt from "bcrypt";
const rounds = 10;

export const passwordHash = (password: string) => {
  return bcrypt.hashSync(password, rounds);
};

export const passwordCompare = async (
  password: string,
  userPassword: string
) => {
  return await bcrypt.compare(password, userPassword);
};
