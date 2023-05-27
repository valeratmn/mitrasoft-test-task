import axios from "axios";

export const api = `https://jsonplaceholder.typicode.com`;

export const fetchUser = async (userId: any) =>
  await axios.get(`${api}/users/${userId}`);

export const fetchPosts = async () => await axios.get(`${api}/posts`);

export const fetchComments = async (id: number) =>
  await axios.get(`${api}/posts/${id}/comments`);
