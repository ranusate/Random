"use strict";

// $(".input-keyword").on("keyup", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=3192400b&i=tt3896198&s=" +
//        
//     success: function (response) {
//       let movie = response.Search;
//       let cards = "";
//       movie.forEach(function (m) {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);
//       $(".modal-btn-detail").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=3192400b&i=" +
//             $(this).data("imdbid"),
//           success: function (data) {
//             const movieDetail = `
//               <div class="container-fluid">
//               <div class="row">
//               <div class="col-md-3">
//               <img src="${data.Poster}" alt="${data.Title}"  class="img-fluid">
//               </div>
//               <div class="col-md">
//               <ul class="list-group">
//               <li class="list-group-item">
//               <H4>${data.Title} (${data.Year})</H4>
//               </li>
//               <li class="list-group-item"><strong>Director: </strong> ${data.Director} </li>
//               <li class="list-group-item"><strong>Actors: </strong> ${data.Actors} </li>
//               <li class="list-group-item"><strong>Write : </strong>${data.Writer}</li>
//               <li class="list-group-item"><strong>Plot : </strong><br> ${data.Plot}</li>
//               </ul>
//               </div>
//               </div>
//               </div>`;
//             $(".modal-body").html(movieDetail);
//           },
//           error: function (e) {
//             alert(e.responseText);
//           },
//         });
//       });
//     },
//     error: function (e) {
//       alert(e.responseText);
//     },
//   });
// });
// const seacBtn = document.querySelector(".input-keyword");
// seacBtn.addEventListener("keyup", function () {
//   const keyword = document.querySelector(".input-keyword");
//   fetch(
//     "http://www.omdbapi.com/?apikey=3192400b&i=tt3896198&s=" + keyword.value
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       let cards = "";
//       response.Search.forEach((m) => {
//         cards += showCards(m);
//       });
//       let content = document.querySelector(".movie-container");
//       content.innerHTML = cards;
//     })
//     .then(() => {
//       const btnDetail = document.querySelectorAll(".modal-btn-detail");
//       btnDetail.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const idMovie = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=3192400b&i=" + idMovie)
//             .then((response) => response.json())
//             .then((response) => {
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = showDetailModal(response);
//             });
//         });
//       });
//     });
// });
var keyword = document.querySelector(".input-keyword");
var btnSearch = document.querySelector(".search-btn");
keyword.addEventListener("keyup", function _callee(event) {
  var content, movies, _content;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(event.keyCode === 13)) {
            _context.next = 19;
            break;
          }

          if (!(keyword.value == "")) {
            _context.next = 5;
            break;
          }

          alert("Please input");
          _context.next = 19;
          break;

        case 5:
          event.preventDefault();
          content = document.querySelector(".movie-container");
          content.innerHTML = showloading();
          _context.prev = 8;
          _context.next = 11;
          return regeneratorRuntime.awrap(getMovies(keyword.value));

        case 11:
          movies = _context.sent;
          updateUI(movies);
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](8);
          _content = document.querySelector(".movie-container");
          _content.innerHTML = showAlert(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 15]]);
});
btnSearch.addEventListener("click", function _callee2() {
  var content, movies, _content2;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(keyword.value == "")) {
            _context2.next = 4;
            break;
          }

          alert("Please input");
          _context2.next = 17;
          break;

        case 4:
          _context2.prev = 4;
          content = document.querySelector(".movie-container");
          content.innerHTML = showloading();
          _context2.next = 9;
          return regeneratorRuntime.awrap(getMovies(keyword.value));

        case 9:
          movies = _context2.sent;
          updateUI(movies);
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](4);
          _content2 = document.querySelector(".movie-container");
          _content2.innerHTML = showAlert(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 13]]);
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=3192400b&s=" + keyword).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }).then(function (response) {
    if (response.Response === "False") {
      throw new Error(response.Error);
    }

    return response.Search;
  });
}

function updateUI(movies) {
  var cards = "";
  movies.forEach(function (m) {
    cards += showCards(m);
  });
  var content = document.querySelector(".movie-container");
  content.innerHTML = cards;
}

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-btn-detail")) {
    getDetailMovie(e.target.dataset.imdbid);
  }
});

function getDetailMovie(movieId) {
  return fetch("http://www.omdbapi.com/?apikey=3192400b&i=" + movieId).then(function (response) {
    return response.json();
  }).then(function (response) {
    var modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = showDetailModal(response);
  });
}

function showCards(m) {
  return "<div class=\"col-md-4 my-2\">\n          <div class=\"card\">\n          <img src=\"".concat(m.Poster, "\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">").concat(m.Title, "</h5>\n                  <h6 class=\"card-subtitle mb-2 text-muted\">").concat(m.Year, "</h6>\n                  <a href=\"#\" class=\"btn btn-primary modal-btn-detail\" data-bs-toggle=\"modal\" data-bs-target=\"#movieDetailModal\" data-imdbid = ").concat(m.imdbID, " >Detail</a>\n              </div>\n          </div>\n      </div>");
}

function showDetailModal(data) {
  return "\n              <div class=\"container-fluid\">\n              <div class=\"row\">\n              <div class=\"col-md-3\">\n              <img src=\"".concat(data.Poster, "\" alt=\"").concat(data.Title, "\"  class=\"img-fluid\">\n              </div>\n              <div class=\"col-md\">\n              <ul class=\"list-group\">\n              <li class=\"list-group-item\">\n              <H4>").concat(data.Title, " (").concat(data.Year, ")</H4>\n              </li>\n              <li class=\"list-group-item\"><strong>Director: </strong> ").concat(data.Director, " </li>\n              <li class=\"list-group-item\"><strong>Actors: </strong> ").concat(data.Actors, " </li>\n              <li class=\"list-group-item\"><strong>Write : </strong>").concat(data.Writer, "</li>\n              <li class=\"list-group-item\"><strong>Plot : </strong><br> ").concat(data.Plot, "</li>\n              </ul>\n              </div>\n              </div>\n              </div>\n              \n              ");
}

function showAlert(error) {
  return " <div class=\"row d-flex justify-content-center\">\n  <div class=\"col-md-8\">\n      <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n          <strong>".concat(error, "</strong>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n        </div>\n  </div>\n</div>");
}

function showloading() {
  return "<div class=\"d-flex justify-content-center\">\n  <div class=\"spinner-border text-primary mt-5\"  style=\"width: 3rem; height: 3rem;\" role=\"status\">\n  </div>  \n</div>";
}