import React,{useRef,useEffect} from 'react'
import ReactStars from "react-rating-stars-component";
const Filter = (props) => {
    let {filterInput,filtredMovies,setFiltredMovies,star,setStar} = props
    let inputRef=useRef();
    
    let changeInput = () =>
    {
        filterInput(inputRef.current.value);
    }
    let handleStar = (nextValue) => {
        setStar({rating: nextValue});
        
    }
    useEffect(() => {
        let filterMv = filtredMovies.filter((movie)=>{
            return movie.rate >= star.rating && movie.name.includes(inputRef.current.value)
         });
         setFiltredMovies(filterMv)
    }, [star.rating])
    return (
        <div className="filter" style={{width: "350px",display: "flex"}}>
            <input type="text" ref={inputRef} onChange={changeInput} placeholder="search..." />
            <ReactStars 
                name="rate" 
                onChange={handleStar}
                starCount={5} 
                value={star.rating}
                size={20}
                color="#FFFFFF"                
            />
        </div>
    )
}

export default Filter
