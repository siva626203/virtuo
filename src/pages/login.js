import { Fragment,useState } from "react";
import {Button,Form,Modal} from "react-bootstrap";
import axios from "axios";
function Login() {

  const [data, setData] = useState({
    userid: "",
    pass: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userid: data.userid,
      pass: data.pass
    };
    axios.post("https://mentors2009.com/loginapi.php", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
  };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Fragment>
            <div className="log-btn"><center>
            <Button className='login-btn' variant="success" onClick={handleShow}>
             Login
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title> Login Page</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div>
        <Form className="form-r" onSubmit={handleSubmit}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Userid</Form.Label>
    <Form.Control             
            type="text"
            name="userid"
            value={data.userid}
            onChange={handleChange}
             placeholder="C-89499" />
    <Form.Text className="text-muted">
      We'll never share your ID with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter Your Password</Form.Label>
    <Form.Control value={data.pass} onChange={handleChange}
            name="pass" type="password" placeholder="1234.." />
  </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleClose}>
    Submit
  </Button>
</Form>
</div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
</Modal.Footer>
</Modal>
</center>
</div>
</Fragment>
);
}
export default Login;