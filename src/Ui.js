import makeHtmlStructure from './makeHtml';
import makeContainer from './makeContainer';
import makeComments from './makeComments';
import {
  getBody, getComments, getUserPost,
} from './store';

export default async (users, allPosts, app) => {
  const container = document.querySelector('.list-group');
  const mainContainer = document.querySelector('.container');
  const makeAllPosts = async (posts, cont) => {
    posts.forEach(async (el) => {
      const title = makeContainer(el, users);
      const userName = title.lastChild;
      cont.append(title);
      title.addEventListener('click', async (e) => {
        e.preventDefault();
        const modalTitle = document.querySelector('.modal-title');
        const modalTitles = makeHtmlStructure('h3', ['modal-title'], { id: 'exampleModal3Label' }, `Title: "${el.title}"`);
        modalTitle.replaceWith(modalTitles);
        const modalFade = document.querySelector('.fade');
        modalFade.removeAttribute('id');
        modalFade.setAttribute('id', `userTitle${el.id}`);
        const responceBody = await getBody(el);
        const modalBody = document.querySelector('.body-text');
        const modalBodyH = makeHtmlStructure('h5', ['body-text'], {}, `${responceBody.body}`);
        modalBody.replaceWith(modalBodyH);
        const responceComments = await getComments(el);
        const bodyComments = document.querySelector('.body-comments');
        const bodyCommentsRe = makeHtmlStructure('h6', ['body-comments'], {}, 'Comments: ');
        bodyComments.replaceWith(bodyCommentsRe);
        makeComments(responceComments, bodyCommentsRe);
      });
      userName.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        cont.remove();
        const container2 = makeHtmlStructure('div', ['list-group'], {}, '');
        const link = makeHtmlStructure('a', ['btn', 'btn-primary'], { type: 'button' }, 'All Title');
        mainContainer.append(container2);
        container2.append(link);
        const responceUserPost = await getUserPost(el);
        await makeAllPosts(responceUserPost, container2);
        link.addEventListener('click', (eee) => {
          eee.preventDefault();
          container2.remove();
          const container3 = makeHtmlStructure('div', ['list-group'], {}, '');
          const link2 = makeHtmlStructure('a', ['btn', 'btn-primary'], { type: 'button' }, 'All Title');
          mainContainer.append(container3);
          container3.append(link2);
          app();
        });
      });
    });
  };
  makeAllPosts(allPosts, container);
};
