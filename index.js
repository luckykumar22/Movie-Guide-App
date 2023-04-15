let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
  let movieName = movieNameRef.ariaValueMax;
  let url = `http://www.omdbapi.com/?i=${movieName}&apikey=40144cab`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class='msg'>Please enter a movie name < /h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == "True") {
          result.innerHTML`
                    <div className="info">
                        <img src=${data.poster} className='poster' />
                        <div>
                            <h2>${data.title}</h2>
                            <div className="rating">
                                <img src="star-icon.svg" />
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div className="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runttime}</span>
                            </div>
                            <div className="genre">
                                <div>${data.genre
                                  .split(",")
                                  .join("<div><div>")}</div>
                            </div>
                        </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                        <h3>Cast:</h3>
                        <p>${data.Actors}</p>
                `;
        }
      });
  }
};
