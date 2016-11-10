export default function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?(([^\/]*)[^\/]*\/)?([@\_a-zA-Z0-9\.]*)','i');
  const username = url.match(re)[5];
  if (username.indexOf('@') == 0) {
    return username;
  }
  return '@' + username;
}
