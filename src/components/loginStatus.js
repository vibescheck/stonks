export default function loginStatus() {
  return sessionStorage.getItem('token');
}
