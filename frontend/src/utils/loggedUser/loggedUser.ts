import { jwtDecode } from "jwt-decode";
import { getLocalStorage } from "../localStorage/localStorage";

const loggedUser = () => {
  const token = getLocalStorage("accessToken");
  if (token) {
    return jwtDecode(token);
  }
};
export default loggedUser;