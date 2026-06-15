export const ROLES = {
  ADMIN: "admin",
  STAFF: "staff",
};

const AUTH_ROLE_KEY = "authRole";
const USER_EMAIL_KEY = "userEmail";

export function setAuthSession({ role, email, userName }) {
  localStorage.setItem(AUTH_ROLE_KEY, role);
  localStorage.setItem(USER_EMAIL_KEY, email);
  localStorage.setItem("UserName", userName || email);
  localStorage.setItem("productType", JSON.stringify(role));
}

export function getAuthRole() {
  return localStorage.getItem(AUTH_ROLE_KEY);
}

export function getAuthEmail() {
  return localStorage.getItem(USER_EMAIL_KEY);
}

export function clearAuthStorage() {
  localStorage.removeItem(AUTH_ROLE_KEY);
  localStorage.removeItem(USER_EMAIL_KEY);
  localStorage.removeItem("UserName");
  localStorage.removeItem("productType");
}

export function getHomePathForRole(role) {
  if (role === ROLES.ADMIN) return "/admin";
  if (role === ROLES.STAFF) return "/staff";
  return "/";
}
