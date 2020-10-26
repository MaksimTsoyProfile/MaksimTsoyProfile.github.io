import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js';
import { getAllPosts, getUsers } from './store';
import makeAppUi from './Ui';

const app = async () => {
  const allPosts = await getAllPosts();
  const users = await getUsers();
  await makeAppUi(users, allPosts, app);
};

app();
