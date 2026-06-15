import { ROLES } from "../utils/authStorage.js";

export const DEMO_ACCOUNTS = [
  {
    email: "admin@gmail.com",
    password: "admin123",
    role: ROLES.ADMIN,
    userName: "Shyamal Patel",
    homePath: "/admin",
  },
  {
    email: "staff@gmail.com",
    password: "staff123",
    role: ROLES.STAFF,
    userName: "Staff",
    homePath: "/staff",
  },
];

export function authenticate(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  return (
    DEMO_ACCOUNTS.find(
      (account) =>
        account.email === normalizedEmail && account.password === password
    ) ?? null
  );
}
