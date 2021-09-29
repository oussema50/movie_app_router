import React,{useRef,useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const AddMovie = (props) => {
    let {setFiltredMovies,filtredMovies,setMovies,show,onHide} = props;
    let inputImg = useRef();
    let inputName = useRef();
    let inputRate = useRef();
    let [addMovie,setAddMovie] = useState({});

    let funAddMovie = ()=>{
        setAddMovie(
            {
                id:Math.random(),
                imgMovie:inputImg.current.value,
                name:inputName.current.value,
                rate:+inputRate.current.value
            }
        );   
    }
    let addMv = ()=>{
        if(inputImg.current.value == "")
        {
            alert("the movie image input is empty");
        }else if(inputName.current.value == "")
        {
            alert("the movie name input is empty");
        }else if(inputRate.current.value == "")
        {
            alert("the movie rate input is empty");
        }else if(inputRate.current.value > 5 || inputRate.current.value < 0 ){
            alert("the movie rate between 1 to 5")
        }else
        {
            inputImg.current.value = "";
            inputName.current.value = "";
            inputRate.current.value = "";
            setMovies([...filtredMovies,addMovie]);
            setFiltredMovies([...filtredMovies,addMovie])
        }
        
    }
    
    return (
      
        
        <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Add Your Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "48%",
            margin: "auto",
          }}
        >
          <h6>Movie Image</h6>
          <input
            ref={inputImg}
            onChange={funAddMovie}
            placeholder="Enter the movie cover here..."
          />
          <br />
          <h6>Movie Name</h6>
          <input
            ref={inputName}
            onChange={funAddMovie}
            placeholder="Enter the movie name here..."
          />
          <br />
          <h6>Movie Rating</h6>
          <input
            ref={inputRate}
            type="number"
            onChange={funAddMovie}
            placeholder="Enter the movie rating here..."
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
          <Button onClick={addMv}>Add</Button>
        </Modal.Footer>
      </Modal>
        
        
    )
}

export default AddMovie
