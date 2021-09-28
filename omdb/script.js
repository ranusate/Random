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
const keyword = document.querySelector(".input-keyword");
const btnSearch = document.querySelector(".search-btn");
keyword.addEventListener("keyup", async function (event) {
  if (event.keyCode === 13) {
    if (keyword.value == "") {
      alert("Please input");
    } else {
      event.preventDefault();
      let content = document.querySelector(".movie-container");
      content.innerHTML = showloading();
      try {
        let movies = await getMovies(keyword.value);
        updateUI(movies);
      } catch (error) {
        let content = document.querySelector(".movie-container");
        content.innerHTML = showAlert(error);
      }
    }
  }
});

btnSearch.addEventListener("click", async function () {
  if (keyword.value == "") {
    alert("Please input");
  } else {
    try {
      let content = document.querySelector(".movie-container");
      content.innerHTML = showloading();
      let movies = await getMovies(keyword.value);
      updateUI(movies);
    } catch (error) {
      let content = document.querySelector(".movie-container");
      content.innerHTML = showAlert(error);
    }
  }
});
function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=3192400b&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => {
    cards += showCards(m);
  });
  let content = document.querySelector(".movie-container");
  content.innerHTML = cards;
}

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-btn-detail")) {
    getDetailMovie(e.target.dataset.imdbid);
  }
});

function getDetailMovie(movieId) {
  return fetch("http://www.omdbapi.com/?apikey=3192400b&i=" + movieId)
    .then((response) => response.json())
    .then((response) => {
      const modalBody = document.querySelector(".modal-body");
      modalBody.innerHTML = showDetailModal(response);
    });
}
function showCards(m) {
  return `<div class="col-md-4 my-2">
          <div class="card">
          <img src="${m.Poster}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                  <a href="#" class="btn btn-primary modal-btn-detail" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid = ${m.imdbID} >Detail</a>
              </div>
          </div>
      </div>`;
}

function showDetailModal(data) {
  return `
              <div class="container-fluid">
              <div class="row">
              <div class="col-md-3">
              <img src="${data.Poster}" alt="${data.Title}"  class="img-fluid">
              </div>
              <div class="col-md">
              <ul class="list-group">
              <li class="list-group-item">
              <H4>${data.Title} (${data.Year})</H4>
              </li>
              <li class="list-group-item"><strong>Director: </strong> ${data.Director} </li>
              <li class="list-group-item"><strong>Actors: </strong> ${data.Actors} </li>
              <li class="list-group-item"><strong>Write : </strong>${data.Writer}</li>
              <li class="list-group-item"><strong>Plot : </strong><br> ${data.Plot}</li>
              </ul>
              </div>
              </div>
              </div>
              
              `;
}

function showAlert(error) {
  return ` <div class="row d-flex justify-content-center">
  <div class="col-md-8">
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>${error}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  </div>
</div>`;
}

function showloading() {
  return `<div class="d-flex justify-content-center">
  <div class="spinner-border text-primary mt-5"  style="width: 3rem; height: 3rem;" role="status">
  </div>  
</div>`;
}
