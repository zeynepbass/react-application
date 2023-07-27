import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPlusMinus } from '@fortawesome/free-solid-svg-icons';
const Api = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [state, setState] = useState(0);
  const [ids, setIds] = useState([]);

  const handleButtonClick = (id) => {
    setState((prevState) => prevState + id);
    setIds((prevIds) => [...prevIds, id]);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      {status ? (
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Body</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>{post.userId}</td>
                  <Button variant="secondary" onClick={() => handleButtonClick(post.id)}>TIKLA</Button>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Button variant="link" onClick={() => setStatus(true)}>
          APİ GETİR
        </Button>
      )}
          <h1>toplanan veriler <FontAwesomeIcon icon={faPlusMinus} /></h1> : 
          
       <h1> {ids.join(",")}</h1>
      <h1> topla <FontAwesomeIcon icon={faPlus} />: {state}</h1>
    </div>
  );
};

export default Api;
