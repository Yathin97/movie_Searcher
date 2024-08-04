let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch data from api
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

//if input field is empty
if(movieName.length<=0){
    result.innerHTML = `<h4 class = "msg"> Please Enter a movie name </h4>`;
}
//if not empty
else{
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=> { 

        if (data.Response == 'True'){
        console.log(data);
        result.innerHTML=`<div class = "info"> 
                            <img src=${data.Poster} class = "poster">
                            <div>
                                <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="Gold_Star.svg">
                                 <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div> <div>")}
                                </div>
                            </div>     
                          </div>
                        </div>
                          <h5>Plot: </h5>
                          <p>${data.Plot}</p>
                          <h5>Cast: </h5>
                          <p>${data.Actors}</p>
                          `;
        }
        else{
            result.innerHTML=`<h3 class='msg'>${data.Error}</h3>`;
        }
        })
        .catch(()=>{
            result.innerHTML = `<h3 class='msg'>Error Occured</h3>`;
        });
    
    }
};

searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
