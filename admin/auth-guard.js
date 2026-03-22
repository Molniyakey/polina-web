/**
 * Auth guard for admin pages.
 * Hides page content until session is verified.
 * Redirects to login.html if no valid session exists.
 *
 * Default credentials: admin / admin123
 * Password stored as SHA-256 hex hash.
 */
(function () {
  var AUTH_KEY = "admin_auth_token";
  var AUTH_TS = "admin_auth_ts";
  var SESSION_TTL = 8 * 60 * 60 * 1000; // 8 hours

  function isAuthenticated() {
    var token = sessionStorage.getItem(AUTH_KEY);
    var ts = parseInt(sessionStorage.getItem(AUTH_TS) || "0", 10);
    if (!token || !ts) return false;
    if (Date.now() - ts > SESSION_TTL) {
      sessionStorage.removeItem(AUTH_KEY);
      sessionStorage.removeItem(AUTH_TS);
      return false;
    }
    return true;
  }

  if (!isAuthenticated()) {
    document.documentElement.style.visibility = "hidden";
    window.location.replace("login.html");
    return;
  }

  document.documentElement.style.visibility = "";
})();
