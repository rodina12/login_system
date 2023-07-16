//home
var items=[];
async function getmovie(){
    var myRespose = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b732ae2ea2d3b25f7586eccec33c600d`)
    var final = await myRespose.json()
    items=final.results
    console.log(items);
    display();
}
getmovie();

function display(){
  var  cartona =``;
  for (var i = 0; i < items.length; i++) {
    cartona+=` <div class="col-md-3">
    <div>
        <img src="https://image.tmdb.org/t/p/w500${items[i].poster_path}" class="w-100" alt="">
        <h2 >${items[i].title}</h2>
        <p style="color:gray;">${items[i].overview}</p>
    </div>
 </div>`
    
  }
  document.getElementById("movies").innerHTML=cartona
}
document.getElementById('userName').innerHTML = localStorage.getItem('userName');



document.getElementById('logBtn').addEventListener('click', function () {
    localStorage.removeItem('userName');
})