// * library: title, link, description, rating (1-5), expanded(default:false)

'use strict';

const library = (function() {
  
  // const createABookmark = function (id, title, url, desc) {
  //   return {
  //     id,
  //     title,
  //     url,
  //     desc,
  //     rating: null,
  //     detailedView: false,
  //   };
  // };

  const bookmarks = [];

  const filterRating = '';

  // const bookmarkCreation = false;

  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };

  
  const createHtml = function (bookmark) {

    return `
  <div>
    <li>
    <div class = 'bookmark-element js-bookmark-element' data-bookmark-id ='${bookmark.id}'></div>
    <h4>ID IS HERE</h4>
  </div>
    
  <div>
    <h3>${bookmark.title}</h3>
  </div>
  
  <div>
    <span>${bookmark.rating}</span>
  </div>

  <div>
   <a href=${bookmark.url}' target='_blank'>
   <p>Let's Go!</p>
   </a>
  </div>
  
  <div>
    <span>${bookmark.description}</span>
  </div>
  
  <div>
    <button id="js-delete-button" class="bookmark-delete js-bookmark-delete">
    <span class="button-label">delete</span>
    </button>
  </div>
    </li>`;
  };
  

  
  const generateBookmarkString = function (library) {
    const bookmarks = library.map((bookmark) => createHtml(bookmark));
    return bookmarks.join('');
  };

  const bookmarkRender = function () {
    let bookmarkRenderBookmarks = !bookmarks ? library.bookmarks : bookmarks;
    const bookmarkString = generateBookmarkString(bookmarkRenderBookmarks);
    $('.js-bookmark-list').html(bookmarkString);
  };
    // if (library.filterRating !== '') {
    //   bookmarkRenderBookmarks = library.bookmarks.filter(bookmark => {
    //   });
    // }

  const findId = function (id) {
    const bookmarks = library.bookmarks;
    return bookmarks.find(bookmark => bookmark.id === id);
  };
  
  const getId = function (bookmark) {
    console.log($(bookmark).closest('.js-bookmark-element'));
    return $(bookmark)
      .closest('.js-bookmark-element')
      .data('bookmark-id');
  };
    
  const findAndDelete = function (id) {
    library.bookmarks = library.bookmarks.filter(bookmark => bookmark.id !== id);
    console.log('finding id');
  };
  
  const handleBookmarkDelete = function () {
    $('.js-bookmark-list').on('click', '#js-delete-button', ((event) => {
      const id = getId(event.currentTarget);
      console.log('id is: ' + event.target);
      api.deleteBookmark(id, () => {
        library.findAndDelete(id);
        library.bookmarkRender();
      });
    }));
  };

  const handleBookmarkExpand = function () {
    $('.bookmark-list').on('click', '.click-to-expand', (event => {
      const id = getId(event.target);
      console.log('expanding!');
      library.findId(id).expanded = true;
      bookmarkRender();
    }));
  };
  

  const handleBookmarkCollapse = function () {
    $('.bookmark-list').on('click', '.click-to-collapse', (event => {
      console.log('collapsing!');
      const id = getId(event.target);
      library.findId(id).expanded = false;
      bookmarkRender();
    }));
  };

  // const handleNewBookmarkClick = function () {
  //   $('#new-bookmark').click((event => {
  //     $(event.target).closest('.container').find('.new-bookmark-form').toggleClass('hidden');
  //     library.bookmarkCreation = true;
  //     console.log('handle new click ran');
  //     // toggleAddButtonHide();
  //   }));
  // };

  const handleNewBookmarkMaker = function () {
    $('#js-make-new-bookmark').click(event => {
      event.preventDefault();
      console.log('I am trying to make a button');
      const bookmarkTitle = $('.js-bookmark-title-entry').val();
      const bookmarkRating = $('.js-bookmark-rating-entry').val();
      const bookmarkDescription = $('.js-bookmark-description-entry').val();
      const bookmarkWebLink = $('.js-bookmark-web-link-entry').val();
      api.addBookmark(bookmarkTitle, bookmarkRating, bookmarkDescription, bookmarkWebLink, (newBookmark => {
        library.addBookmark(newBookmark);
        console.log('bookmark added to store');
        bookmarkRender();
      }));
      console.log('handle new ran');
      // $(event.currentTarget).toggleClass('hidden');
      // toggleAddButtonHide();
      clearForm();
    });
  };

  const clearForm = function () {
    console.log('clearing form');
    const titleField = $('.js-bookmark-title-entry');
    const ratingField = $('.js-bookmark-rating-entry');
    const descField = $('.js-bookmark-description-entry');
    const webLinkField = $('.js-bookmark-web-link-entry');
    titleField.val('');
    ratingField.val('');
    descField.val('');
    webLinkField.val('');
    console.log('clear form ran');
  };

  // const handleBookmarkCancel = function () {
  //   $('#cancel-bookmark').click(event => {
  //     event.preventDefault();
  //     $(event.target).closest('container').find('.new-bookmark-form').toggleClass('hidden');
  //     // toggleAddButtonHide();
  //   });
  // };



  const handleFilterRatingClick = function () {
    $('#js-rating-dropdown').change((event => {
      const filterValue = ($('js-rating-dropdown').val());
      library.filterRating = filterValue;
      console.log(library.filterRating);
      bookmarkRender();
    }));
  };

  const bindEventListeners = function () {
    handleBookmarkExpand();
    handleBookmarkCollapse();
    // handleNewBookmarkClick();
    handleNewBookmarkMaker();
    // handleBookmarkCancel();
    handleBookmarkDelete();
    handleFilterRatingClick();
    console.log('hello world');
  };

  return {
    bindEventListeners,
    bookmarkRender,
    bookmarks,
    filterRating,
    // bookmarkCreation,
    createHtml,
    addBookmark,
    findId,
    getId,
    findAndDelete,
  };
}());

