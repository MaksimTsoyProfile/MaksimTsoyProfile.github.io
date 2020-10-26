export const getAllPosts = async () => {
  const preloader = document.getElementById('page-preloader');
  const allPosts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    preloader.classList.add('done');
    return response.json();
  });
  return allPosts;
};

export const getUsers = async () => {
  const preloader = document.getElementById('page-preloader');
  preloader.classList.remove('done');
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    preloader.classList.add('done');
    return response.json();
  });
  return users;
};

export const getBody = async (el) => {
  const preloader = document.getElementById('page-preloader');
  preloader.classList.remove('done');
  const responceBody = await fetch(`https://jsonplaceholder.typicode.com/posts/${el.id}`).then((response) => {
    preloader.classList.add('done');
    return response.json();
  });
  return responceBody;
};

export const getComments = async (el) => {
  const preloader = document.getElementById('page-preloader');
  preloader.classList.remove('done');
  const responceComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${el.id}`).then((response) => {
    preloader.classList.add('done');
    return response.json();
  });
  return responceComments;
};

export const getUserPost = async (el) => {
  const preloader = document.getElementById('page-preloader');
  preloader.classList.remove('done');
  const responceUserPost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${el.userId}`).then((response) => {
    preloader.classList.add('done');
    return response.json();
  });
  return responceUserPost;
};