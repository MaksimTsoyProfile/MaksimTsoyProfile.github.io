export default (responceComments, bodyCommentsRe) => {
  responceComments.forEach((item) => {
    const modalCommentsHead = document.createElement('h6');
    const modalCommentsBody = document.createElement('p');
    const textCommentsHead = document.createTextNode(`${item.name}(${item.email})`);
    const textCommentsBody = document.createTextNode(`${item.body}`);
    bodyCommentsRe.append(modalCommentsHead);
    bodyCommentsRe.append(modalCommentsBody);
    modalCommentsHead.append(textCommentsHead);
    modalCommentsBody.append(textCommentsBody);
  });
};
