import { Container,Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Filter from './Filter';
import React from 'react'
const Nav = (props) => {
  let {filterInput,filtredMovies,setFiltredMovies,star,setStar,setShow} = props
    return (
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="navbar-Content" style={{display: "flex",width: "100%",justifyContent:"space-between",alignItems:"center", color:"white"}}>
            <Navbar.Brand href="#home">
              MOVIE APP
            </Navbar.Brand>
            <div>
              <Filter
                filterInput={filterInput}
                filtredMovies = {filtredMovies} 
                setFiltredMovies ={setFiltredMovies} 
                star={star} 
                setStar={setStar} 
              />
            </div>
            <div>
              <Button variant="primary" onClick={()=>{setShow(true)}} >Add Movie</Button>
            </div>
          </div>
        </Container>
      </Navbar>
      
    )
}

export default Nav
