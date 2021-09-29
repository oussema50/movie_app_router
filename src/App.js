import MovieList from './component/MovieList';
import Nav from './component/Nav'
import React,{useState,useEffect} from 'react';
import AddMovie from './component/AddMovie'
import MovieTrailer from './component/MovieTrailer';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';

function App() {
  let [filterName,setFilterName]=useState("");
  let [movies,setMovies]=useState([
    {
    id:1,
    name:"jhon wick",
    imgMovie:"https://media.services.cinergy.ch/media/box1600/6b33514393fc8e6b2c9f05b955747f171730a165.jpg",
    rate:5,
    trailer:"https://www.youtube.com/watch?v=XGk2EfbD_Ps",
    description:"John Wick: Chapter 2 Trailer 1 (2017) Keanu Reeves Action Movie HD [Official Trailer]"
  },{
    id:2,
    name:"avangers",
    imgMovie:"https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg",
    rate:5,
    trailer:"https://www.youtube.com/watch?v=6ZfuNTqbHE8",
    description:"'There was an idea…' Avengers: Infinity War. In theaters April 27."
  },{
    id:3,
    name:"iron man",
    imgMovie:"https://i.tribune.com.pk/media/images/2135651-robert-1578822748/2135651-robert-1578822748.jpg",
    rate:4,
    trailer:"https://www.youtube.com/watch?v=8ugaeA-nMTc",
    description:"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
  },
  {
    id:4,
    name:"who am i",
    imgMovie:"https://fr.web.img4.acsta.net/pictures/14/05/27/11/29/215167.jpg",
    rate:3,
    trailer:"https://www.youtube.com/watch?v=5vnjheCqRIs",
    description:"Benjamin (Tom Schilling) is a nobody, an outsider. This changes when he meets the charismatic Max (Elyas M'Barek). The two of them couldn't be more different, but they share one mutual interest: hacking. "
  },{
    id:5,
    name:"black widow",
    imgMovie:"https://cps-static.rovicorp.com/2/Open/Disney_Media_Distribution/Program/37403911/_derived_jpg_q90_310x470_m0/Black_Widow_3x4_6_1628074323937_8.jpg",
    rate:2,
    trailer:"https://www.youtube.com/watch?v=Fp9pNPdNwjI",
    description:"'We have unfinished business.' See Marvel Studios’ “Black Widow” in theaters or on Disney+ with Premier Access on July 9. Additional fee required"
  },
  {
    id:6,
    name:"harry potter",
    imgMovie:"https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1630062156/amc-cdn/production/2/movies/67200/67232/Poster/321703R1.jpg",
    rate:5,
    trailer:"https://www.youtube.com/watch?v=VyHV0BRtdxo",
    description:"Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry."
  },
  {
    id:7,
    name:"war",
    imgMovie:"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/war-et00107162-14-10-2020-03-13-18.jpg",
    rate:1,
    trailer:"https://www.youtube.com/watch?v=tQ0mzXRk-oM",
    description:"L'agent secret indien Kabir (Hrithik Roshan) est à la tête de l’unité fantôme du R&AW, une petite bande élite des forces armées qu'il a personnellement formée et qui travaille avec lui sur diverses missions à haut risque de par le monde."
  }
  ]) ;

  const [filtredMovies, setFiltredMovies] = useState(movies);

  let [star,setStar] = useState({rating:0});

  const [show, setShow] = useState(false);
  

  useEffect(() => {
    let mv =  movies.filter((movie)=>{
      return movie.name.includes(filterName) && movie.rate >= star.rating
    })
    setFiltredMovies(mv);
    
  }, [filterName]);
 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Nav 
            filterInput = {setFilterName} 
            filtredMovies = {movies} 
            setFiltredMovies ={setFiltredMovies} 
            star={star} 
            setStar={setStar} 
            setShow={setShow} 
            />
            <section className="movie-list">
              <div className="container">
                <MovieList movies={filtredMovies}  />
              </div>
            </section>
            <AddMovie 
            setMovies = {setMovies} 
            filtredMovies={movies}
            setFiltredMovies={setFiltredMovies} 
            show={show}
            onHide={() => setShow(false)}
            />
          </Route>
          <Route path='/:id'  render={(props) => <MovieTrailer {...props} filtredMovies={filtredMovies} />}  />
            
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
