'use strict';

$(document).ready(function () {
  bookmarkList.bindEventListeners();
  api.getBookmarks(bookmarks => {
    library.bookmarks.forEach((bookmark) => library.addBookmark(bookmark));
    bookmarkList.render();
  });
});

api.createBookmark('Twitter', 'url is www.carrots.com', 'toooltime', 3, (newBookmark) => {
  api.getBookmarks((bookmarks) => {
    console.log(bookmarks);
  });
});

console.log(api.BASE_URL);