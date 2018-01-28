// 'use strict';

// // eslint-disable-next-line no-unused-vars



// const bookmarkList = (function () {



//   const handleBookmarkExpand = function () {
//     $('.bookmark-list').on('click', '.click-to-expand', (event => {
//       const id = getIdFromElement(event.target);
//       console.log('expanding!');
//       library.findById(id).expanded = true;
//       bookmarkRender();
//     }));
//   };

//   const handleBookmarkCollapse = function () {
//     $('.bookmark-list').on('click', '.click-to-collapse', (event => {
//       console.log('collapsing!');
//       const id = getIdFromElement(event.target);
//       library.findById(id).expanded = false;
//       bookmarkRender();
//     }));
//   };

//   const handleNewBookmarkClick = function () {
//     $('#new-bookmark').click((event => {
//       $(event.target).closest('.container').find('.new-bookmark-form').toggleClass('hidden');
//       library.bookmarkCreation = true;
//       console.log('handle new click ran');
//       toggleAddButtonHide();
//     }));
//   };

//   const handleNewBookmarkMaker = function () {
//     $('.new-bookmark-formm').submit(event => {
//       event.preventDefault();
//       const bookmarkTitle = $('.js-bookmark-title-entry').val();
//       const bookmarkRating = $('.js-bookmark-rating-entry').val();
//       const bookmarkDescription = $('.js-bookmark-description-entry').val();
//       const bookmarkWebLink = $('.js-bookmark-web-address-entry').val();
//       api.addBookmark(bookmarkTitle, bookmarkRating, bookmarkDescription, bookmarkWebLink, (newItem => {
//         library.addBookmark(newItem);
//         console.log('item added to store');
//         bookmarkRender();
//       }));
//       console.log('handle new ran');
//       $(event.currentTarget).toggleClass('hidden');
//       toggleAddButtonHide();
//       clearForm();
//     });
//   };

//   const toggleAddButtonHide = function() {
//     if (library.bookmarkCreation === true) {
//       $('#new-bookmark').toggleClass('hidden');
//       console.log('toggle Add Button ran');
//     }
//   };

//   const clearForm = function () {
//     console.log('clearing form');
//     const titleField = $('.js-bookmark-title-entry');
//     const ratingField = $('.js-bookmark-rating-entry');
//     const descField = $('.js-bookmark-description-entry');
//     const webLinkField = $('.js-bookmark-web-link-entry');
//     titleField.val('');
//     ratingField.val('');
//     descField.val('');
//     webLinkField.val('');
//     console.log('clear form ran');
//   };

//   const handleBookmarkCancel = function () {
//     $('#cancel-bookmark').click(event => {
//       event.preventDefault();
//       $(event.target).closest('container').find('.new-bookmark-form').toggleClass('hidden');
//       toggleAddButtonHide();
//     });
//   };
  

//   const handleBookmarkDelete = function () {
//     $('.js-bookmark-list').on('click', '#js-delete-button', (event => {
//       const bookmarkId = getIdFromElement(event.target);
//       api.deleteBookmark(bookmarkId, (item => {
//         library.deleteItem(bookmarkId);
//         bookmarkRender();
//       }));
//     }));
//   };

//   const handleFilterRatingClick = function () {
//     $('#js-rating-dropdown').change((event => {
//       const filterValue = ($('js-rating-dropdown').val());
//       library.filterRating = filterValue;
//       console.log(library.filterRating);
//       bookmarkRender();
//     }));
//   };

  
//   const getIdFromElement = function (item) {
//     return $(item).closest('.js-bookmark-element').data('bookmark-id');
//   };

//   const bindEventListeners =function () {
//     handleBookmarkExpand();
//     handleBookmarkCollapse();
//     handleNewBookmarkClick();
//     handleNewBookmarkMaker();
//     handleBookmarkCancel();
//     handleBookmarkDelete();
//     handleFilterRatingClick();
//     console.log('hello world');
//   };

//   return {
//     bindEventListeners,
//     bookmarkRender,
//   };
// }());
