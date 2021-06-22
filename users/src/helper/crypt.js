import bcrypt from 'bcryptjs';

export const hasPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));
export const comparePasswordHash = (providedPassword,userPassword) => bcrypt.compareSync(providedPassword, userPassword)