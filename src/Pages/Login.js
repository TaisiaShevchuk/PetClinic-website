import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
  return (
 
        <Container>
           
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Login;

/*import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function Login() {  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    async function handleSubmit(event) {
    event.preventDefault();

try {
// Call the backend login endpoint with the email and password
const response = await fetch("/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ email, password }),
});

// Check if the response is successful
if (response.ok) {
// Get the user role from the response data
const data = await response.json();
const role = data.role;

// Navigate to the appropriate page based on the user role
if (role === "doctor") {
navigate("/doctor");
} else if (role === "owner") {
navigate("/owner");
} else {
// Handle the error
throw new Error("Invalid user role");
}
} else {
// Handle the error
throw new Error("Login failed");
}
} catch (error) {
// Handle the error
console.error(error);
}
}

// Return the JSX for the Login component
return (
<Container>
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control
type="email"
placeholder="Enter email"
value={email}
onChange={(event) => setEmail(event.target.value)}
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control
type="password"
placeholder="Password"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>
</Form.Group>

<Button variant="primary" type="submit">
Submit
</Button>
</Form>
</Container>
);
}

// Import axios
const axios = require('axios');

// Set the baseURL
axios.defaults.baseURL = 'http://localhost:4000/';

// Log in with email and password
axios.post('/login', {
email: 'owner1@test.com',
password: 'qwerty'
})
.then(response => {
// Get the access token and id from the response
const access_token = response.data.access_token;
const id = response.data.id;

// Set the authorization header
axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

// Get the list of pets
axios.get('/pets')
.then(response => {
// Print the list of pets
console.log(response.data);
})
.catch(error => {
// Handle the error
console.error(error);
});
})
.catch(error => {
// Handle the error
console.error(error);
});

export default Login;*/