$(".input-keyword").on("keyup", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=3192400b&i=tt3896198&s=" +
      $(".input-keyword").val(),
    success: function (response) {
      let movie = response.Search;
      let cards = "";
      movie.forEach(function (m) {
        cards += `<div class="col-md-4 my-2">
        <div class="card">
        <img src="${m.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-btn-detail" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid = ${m.imdbID} >Detail</a>
            </div>
        </div>
    </div>`;
      });
      $(".movie-container").html(cards);
      $(".modal-btn-detail").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=3192400b&i=" +
            $(this).data("imdbid"),
          success: function (data) {
            const movieDetail = `
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
              </div>`;
            $(".modal-body").html(movieDetail);
          },
          error: function (e) {
            alert(e.responseText);
          },
        });
      });
    },
    error: function (e) {
      alert(e.responseText);
    },
  });
});
$(".search-btn").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=3192400b&i=tt3896198&s=" +
      $(".input-keyword").val(),
    success: function (response) {
      let movie = response.Search;
      let cards = "";
      movie.forEach(function (m) {
        cards += `<div class="col-md-4 my-2">
          <div class="card">
          <img src="${m.Poster}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                  <a href="#" class="btn btn-primary modal-btn-detail" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid = ${m.imdbID} >Detail</a>
              </div>
          </div>
      </div>`;
      });
      $(".movie-container").html(cards);
      $(".modal-btn-detail").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=3192400b&i=" +
            $(this).data("imdbid"),
          success: function (data) {
            const movieDetail = `
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
                </div>`;
            $(".modal-body").html(movieDetail);
          },
          error: function (e) {
            alert(e.responseText);
          },
        });
      });
    },
    error: function (e) {
      alert(e.responseText);
    },
  });
});
