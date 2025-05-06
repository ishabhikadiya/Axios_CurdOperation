import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
});

export const getPost = () =>{
    return api.get("/posts");
    // "https://jsonplaceholder.typicode.com/post"

}

export const deletePost = (id) =>{
    return api.delete(`/posts/${id}`);
    // "https://jsonplaceholder.typicode.com/post"

}

export const addPost = (post) =>{
    return api.post(`/posts`,post);
    // "https://jsonplaceholder.typicode.com/post"

}

