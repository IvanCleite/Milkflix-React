import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log('Salt: ', salt)
  console.log('Senha Hasheada: ', hash)
  return hash;
};

export const verificarSenha = async (password, hash) => {
  return await bcrypt.compare(password, hash);
}
