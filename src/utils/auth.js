import { SignJWT, jwtVerify } from "jose";

const secretKey = new TextEncoder().encode("leonanSeiLa");

export const login = async (username, password) => {
  if (username === 'admin' && password === 'password') {
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(secretKey);
    localStorage.setItem(TOKEN_KEY, token);
    return true;
  }
  return false;
};

export const checkAuth = async () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return false;

  try {
    await jwtVerify(token, secretKey);
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
