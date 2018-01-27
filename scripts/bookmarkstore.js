'use strict';

// eslint-disable-next-line no-unused-vars
const library = (function () {
  const addBookmark = function (bookmark) {
    this.bookmarks.push(bookmark);
  };

  const findById = function (id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };

  const findAndDelete = function (id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };

  const findAndUpdate = function (id, newData) {
    const bookmark = this.findById(id);
    Object.assign(bookmark, newData);
  };

  return {
    bookmarks: [],
    findAndUpdate,
    addBookmark,
    findById,
    findAndDelete,
  };

}());