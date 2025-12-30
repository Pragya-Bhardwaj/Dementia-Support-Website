export function checkAuthState() {
  const lastActive = localStorage.getItem("lastActiveDate");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("userRole");

  if (!lastActive || !isLoggedIn || !role) {
    return { state: "AUTH_REQUIRED" };
  }

  const daysInactive =
    (Date.now() - Number(lastActive)) / (1000 * 60 * 60 * 24);

  if (daysInactive >= 30) {
    return { state: "AUTH_REQUIRED" };
  }

  return { state: "LOGGED_IN", role };
}
