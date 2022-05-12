import axios from 'axios';
import { User } from '../model/User';
let localHost: string = 'http://localhost:8080';

class AuthController {
  login(email: string, password: string) {
    return axios.post(`${localHost}/login`, { email, password }).then((res) => {
      return res.data;
    });
  }
  addNewUser(user: User) {
    return axios.post(`${localHost}/user`, user).then((res) => {
      return res.data;
    });
  }
  register(user: User) {
    return axios.post(`${localHost}/register`, user).then((res) => {
      return res.data;
    });
  }
  getListUser() {
    return axios.get(`${localHost}/users`).then((res) => {
      return res.data as User[];
    });
  }

  editUser(user: User) {
    return axios.put(`${localHost}/user/${user.idUser}`, user);
  }
  deleteCourseById(idUser: Number) {
    return axios.delete(`${localHost}/user/${idUser}`);
  }
}
export const authController = new AuthController();
