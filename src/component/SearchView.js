import Hero from "./hero.js";
import { Link } from "react-router-dom";
import images from "./images.jpg";

const MovieCard=({movie})=>{
  
  let posterUrl =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
 if(posterUrl===`https://image.tmdb.org/t/p/w500null`)
 {
    posterUrl=images

 }


  const detailurl=`/movies/${movie.id}`
 

  return (
    <div className="col-lg-2 col-md-3 col-2">

    <div class="card" >
    
  <img src={posterUrl} class="card-img-top" alt={movie.original_title}/>
  <div class="card-body">
    <h5 class="card-title">{movie.original_title}</h5>
    
    <Link to={detailurl} class="btn btn-primary">Show details</Link>
  </div>
    </div>
</div>)
}

const SearchView = ({keyword,searchResults}) => {
    const title =`you are searching for ${keyword}`

    let resultshtml= searchResults.map((obj,i) => {
    return <MovieCard movie={obj} keys={i}/>
    
    })

    if (searchResults.length===0)
    {
      resultshtml= <h1>oops no search </h1>

    }
    
  return (
    <>
      <Hero text={title} />
    {resultshtml && 
    <div className="container">
      <div className="row">
        {resultshtml} 
      </div>
    </div>
    
    }
 
    </>
  );
};

export default SearchView;
