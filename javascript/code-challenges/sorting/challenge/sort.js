function sortYear(movies) {
  return movies.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    } else if (a.year > b.year) {
      return -1;
    } else {
      return a.title === b.title ? 0 : (a.title < b.title ? 1 : -1);
    }
  });
}

function sortTitle(movies) {
  return movies.sort((a, b) => {
    let atitle = a.title.split(' ');
    if (atitle[0] === 'The') {
      atitle = atitle[1];
    } else {
      atitle = atitle[0]
    }

    let btitle = b.title.split(' ');
    if (btitle[0] === 'The') {
      btitle = btitle[1];
    } else {
      btitle = btitle[0]
    }

    return atitle.localeCompare(btitle);
  });
}

module.exports = {
  sortYear,
  sortTitle,
};
