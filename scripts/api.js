/*global bookmark, api */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/briandudeyalt';
  
  const getBookmarks = function (callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  const addBookmark = function (title, rating, desc, url, callback) {
    const newBookmark = JSON.stringify({
      title: title, 
      rating: rating,
      desc: desc,
      url: url,
    });
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: callback
    });
  };

  const deleteBookmark = function (id, callback) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback,
    });
  };

  return {
    getBookmarks,
    addBookmark,
    deleteBookmark,
  };

}());