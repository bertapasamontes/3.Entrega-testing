// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(pelicula => pelicula.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let peliculasDelDirector = array.filter(pelicula => pelicula.director === director);
  return peliculasDelDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let pelisDelDire = array.filter(pelicula => pelicula.director === director);
  
  let nota = pelisDelDire.reduce((notaMedia, pelicula) => notaMedia+= pelicula.score,0);

  const promedioNotas = pelisDelDire.length >0? nota/pelisDelDire.length : 0;

  console.log(pelisDelDire);
  return parseFloat(promedioNotas.toFixed(2));
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulosPelis = array.map(pelicula => pelicula.title);
  let pelisOrdenadas = titulosPelis.toSorted();
  if(array.length < 20){
    console.log("menos de 20 pelis");
    return pelisOrdenadas;
  }
  return pelisOrdenadas.slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let pelisPorAño = array.toSorted(function(peli1,peli2){
    if(peli1.year === peli2.year){
      console.log("mismo peli");
      if(peli1.title < peli2.title)
      return -1;
    }
    return peli1.year - peli2.year;
  });
  console.log(pelisPorAño);
  return pelisPorAño;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genero) {

  let peliculasDelGenero = array.filter(peli => peli.genre.includes(genero));
  
  console.log(peliculasDelGenero);

  let nota = peliculasDelGenero.reduce((notaMedia, pelicula) => notaMedia+= pelicula.score,0);

  const promedioNotas = peliculasDelGenero.length >0? nota/peliculasDelGenero.length : 0;

  console.log(peliculasDelGenero);
  return parseFloat(promedioNotas.toFixed(2));

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
