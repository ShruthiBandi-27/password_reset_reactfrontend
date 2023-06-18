import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "./global";

export default function Login({setUser}) {
  const nav = useNavigate();
  //const API = process.env.API;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are not empty
    if (!formData.email || !formData.password) {
      toast.error("Please fill all required fields");
      return;
    }

    fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message === "Login Successful") {
          console.log(res);
          toast.success("Login Successful", {
            onClose: () => {
              console.log("closed");
              setTimeout(function () {
                //nav("/welcome", {token: res.token});
                setUser(formData.email)
                 nav(`/welcome/${res.token}`);
                // nav(`/welcome?token=${res.token}`);
              }, 1000);
            },
          });
        } else {
          console.log(`${res.message}`);
          toast.error(`${res.message}`, {
            onClose: () => {
              console.log("closed");
              setTimeout(() => {
                nav("/");
              }, 2000);
            },
          });
        }
      });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Container
      className="mt-8"
      style={{
        // border: "1px solid black",
        marginTop: "120px",
        width: "50%",
        padding: "20px",
        backgroundColor: "white"
      }}
    >
      <ToastContainer />
      <h3 className="text-center">Login Form</h3>
      <Form>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter your Email Id"
                type="email"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <FormGroup>
              <Label>Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={5}></Col>
          <Col md={2}></Col>
          <Col md={4}>
            <a href="/forgotpass">Forgot password?</a>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col md={2}></Col>
          <Col md={8}>
            <FormGroup>
              <Button style={{backgroundColor:"orange"}} block onClick={handleSubmit}>
                Login
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
