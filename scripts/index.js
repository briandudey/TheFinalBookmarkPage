/* global bookmarkList, api, library */
'use strict';

$(document).ready(function () {
  library.bindEventListeners();
  library.bookmarkRender();

  api.getBookmarks((bookmarks => {
    bookmarks.forEach((bookmark) => library.addBookmark(bookmark));
    library.bookmarkRender();
  }));
});
