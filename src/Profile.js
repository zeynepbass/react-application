import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [one, setOne] = useState(2);
  const [count, setCount] = useState(0);
  const [error, setErrors] = useState(false);
  function userhandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  }

  return (
    <>
      {loggedIn ? <h1>welcome</h1> : <h6>bye</h6>}
      {one == 1 ? (
        <h1>welcome user 1</h1>
      ) : one == 2 ? (
        <h6>welcome user 2</h6>
      ) : (
        <h6>welcome user 3</h6>
      )}
      <input type="text" palceholder="enter name" onChange={userhandler} />
      {error ? <span>user not valid</span> : ""}
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Primary
      </Button>{" "}
      <p>{count === 0 ? <h1>sıfır</h1> : <h1>bir arttır {count}</h1>}</p>
    </>
  );
};

export default Profile;
