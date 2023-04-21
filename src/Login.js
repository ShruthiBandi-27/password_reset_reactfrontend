import React from 'react';
import { Container, Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "./global";

export default function Login(){
    const nav = useNavigate();
    //const API = process.env.API;
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/users/login`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((data) => data.json())
        .then((res) => {
            if(res.message === 'Login Successful'){
            console.log(res);
            toast.success("Login Successful", {
                onClose: () => {
                  console.log("closed");
                  setTimeout(function () {
                    nav("/welcome");
                  }, 1000);
                },
              });
            }
            else{
                console.log(`${res.message}`);
                toast.error(`${res.message}`, {
                    onClose: () => {
                        console.log("closed");
                        setTimeout(()=>{
                            nav("/");
                        },2000);
                        
                    },
                });
            }
        })
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  return (
    <Container className="mt-8" style={{ border: "1px solid black", marginTop: "50px", width: "60%", padding:"20px"}}>
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
          <Col md={6}></Col>
          <Col md={2}></Col>
          <Col md={4}>
          <a href='/forgotpass'>Forgot password?</a>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col md={2}></Col>
          <Col md={8}>
            <FormGroup>
              <Button
                color="primary"
                block
                onClick={handleSubmit}
              >
                Login
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

