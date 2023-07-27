import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const Film = () => {
  const [movie, setMovie] = useState([]);
  const [dizi, setDizi] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      )
      .then((response) => {
        setMovie(response.data);
      });
  });
  const handleButtonClick=(year)=>{
    setDizi((prevIds)=>[...prevIds,year]);
  }
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {movie.map((movies) => {
            return (
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{movies.title}</Card.Title>
                  <Card.Title>{movies.Year}</Card.Title>
                  <Card.Text>{movies.Runtime}</Card.Text>
                  <img
                    src={movies.Poster}
                    style={{ width: "100%" }}
                    alt=""
                  ></img>
          
                  <Button variant="primary" className="mt-3" onClick={()=> handleButtonClick(movies.Title) }
                >Bilet Al</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <div className="col-md-6 bg-danger">
          <h1 style={{color:"white"}}>
          {dizi.join(",")}
          </h1>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
       <div className="col-md-6">
        <h1>ssdfsadfsd</h1>
       </div>
       <div className="col-md-6">
       <h1>asfda</h1>
       </div>
      </div>
      <div className="col-md-12">
        <ul>
          <li>sdfcsdf</li>
          <li>dfsfsdf</li>
          <li>sdfsdfsdf</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Film;
