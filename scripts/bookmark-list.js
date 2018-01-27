'use strict';

// eslint-disable-next-line no-unused-vars
const bookmarkList = (function () {

  function generateBookmarkElement(bookmark) {
    let bookmarkTitle = `<span class="bookmark-title">${bookmark.title}</span>`;
    let bookmarkRating = `<span class="bookmark-rating">${bookmark.rating}</span>`;
    let bookmarkDescription = `<span class="bookmark-description">${bookmark.description}</span>`;
    let bookmarkWebAddress = `<span class="bookmark-web-address">${bookmark.webAddress}</span>`;
    return `
      <li class="js-bookmark-element" data-bookmark-id="${bookmark.id}">
        ${bookmarkTitle}
        ${bookmarkRating}
        ${bookmarkDescription}
        ${bookmarkWebAddress}
      <li class="js-bookmark-element" 
        <div class="bookmark-controls">
          <button class="bookmark-toggle js-bookmark-toggle">
            <span class="button-label">Expanded View</span>            
          </button>
          <button class="bookmark-delete js-bookmark-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
  }


  function generateBookmarkString(bookmarkList) {
    const bookmarks = bookmarkList.map((bookmark) => generateBookmarkElement(bookmark));
    return bookmarks.join('');
  }


  function render() {
    let bookmarks = library.bookmarks;
    const bookmarkString = generateBookmarkString(bookmarks);
    $('.js-bookmark-list').html(bookmarkString);
  }


  function handleNewBookmarkSubmit() {
    $('#js-bookmark-list-form').submit(function (event) {
      event.preventDefault();
      const newBookmarkTitle = $('.js-bookmark-title-entry').val();
      $('.js-bookmark-list-entry').val('');
      const newBookmarkRating = $('.js-bookmark-rating-entry').val();
      $('.js-bookmark-rating-entry').val('');
      const newBookmarkDescription = $('.js-bookmark-description-entry').val();
      $('.js-bookmark-description-entry').val('');
      const newBookmarkWebAddress = $('.js-bookmark-web-address-entry').val();
      $('.js-bookmark-web-address-entry').val('');
      api.createBookmark(newBookmarkTitle, newBookmarkRating, newBookmarkDescription, newBookmarkWebAddress, (newBookmark) => {
        library.addBookmark(newBookmark);
        render();
      });
    });
  }

  function getBookmarkIdFromElement(bookmark) {
    return $(bookmark)
      .closest('.js-bookmark-element')
      .data('bookmark-id');
  }

  function handleDeletebookmarkClicked() {
    $('.js-bookmark-list').on('click', '.js-bookmark-delete', event => {
      const id = getBookmarkIdFromElement(event.currentTarget);
      api.deletebookmark(id, (callback) => {
        console.log('hello delete from bookmark-list');
        library.findAndDelete(id);
      });
      render();
    });
  }

  // function handleEditBookmarkSubmit() {
  //   $('.js-bookmark-list').on('submit', '#js-edit-bookmark', event => {
  //     event.preventDefault();
  //     const id = getBookmarkIdFromElement(event.currentTarget);
  //     const newBookmarkName = $(event.currentTarget).find('.bookmark-bookmark').val();
  //     const newBookmarkRating = $(event.currentTarget).find('.bookmark-bookmark').val();
  //     const newBookmarkDescription = $(event.currentTarget).find('.bookmark-bookmark').val();
  //     const newBookmarkWebAddress = $(event.currentTarget).find('.bookmark-bookmark').val();
  //     api.updatebookmark(id, { name: newBookmarkName }, () => {
  //       library.findAndUpdate(id, { name: newBookmarkName });
  //       render();
  //     });
  //   });
  // }

  function bindEventListeners() {
    handleNewBookmarkSubmit();
    handleDeletebookmarkClicked();
    // handleEditBookmarkSubmit();
  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };
}());
