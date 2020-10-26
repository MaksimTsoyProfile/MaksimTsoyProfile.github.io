import makeHtmlStructure from './makeHtml';

export default (dataPost, dataUser) => {
  const title = makeHtmlStructure('button', ['btn', 'btn-primary', 'list-group-item', 'list-group-item-action'], { 'data-toggle': 'modal', 'data-target': `#userTitle${dataPost.id}` }, `Title: "${dataPost.title}" `);

  const userName = makeHtmlStructure('span', ['btn', 'btn-outline-primary'], { type: 'button', 'data-target': `#userName${dataPost.id}` }, `${dataUser[dataPost.userId - 1].name}`);
  title.append(userName);
  return title;
};
