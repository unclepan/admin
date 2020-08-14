import request from './basic';

export function login(data) {
  return request({
    url: '/api/users/login',
    method: 'POST',
    data,
  });
}

export function logout(data = {}) {
  return request({
    url: '/api/users/logout',
    method: 'POST',
    data,
  });
}

export function userInfo() {
  return request({
    url: '/api/users/login/info',
    method: 'GET',
  });
}
