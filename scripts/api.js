'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/briandudeyalt';

  return {
    getBookmarks: function (callback) {
      $.getJSON(`${BASE_URL}/bookmarks`, callback);
    },

    createBookmark: function (title, rating, description, webAddress, callback) {
      const newBookmark = JSON.stringify({
        title: title,
        url: webAddress,
        desc: description,
        rating: rating,
      });
      // $.ajax({
      //   url: `${BASE_URL}/bookmarks`,
      //   method: 'POST',
      //   contentType: 'application/json',
      //   data: newBookmark,
      //   success: callback
      // });
    },

    updateBookmark: function (id, updateData, callback) {
      $.ajax({
        url: `${BASE_URL}/bookmarks/${id}`,
        method: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(updateData),
        success: callback,
      });
    },

    deleteBookmark: function (id, callback) {
      $.ajax({
        url: `${BASE_URL}/bookmarks/${id}`,
        method: 'DELETE',
        success: (log) => {
          console.log('delete successful!');
          callback();
        }


      });
    }


  };

}

());