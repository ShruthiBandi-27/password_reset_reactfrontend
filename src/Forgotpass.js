import React from "react";
import { useState } from "react";
import "./style.css";
import { Container, Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "./global";

export default function Forgotpass() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/users/forgotpass`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email: email})
        })
        .then((data) => data.json())
        .then((res) => {
            if(res.message !== 'Invalid EmailId')
              nav("/emailmsg");
            else{
             console.log("Invaild emailId!!!");
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
        setEmail(e.target.value);
    }
  return (
    <Container className="mt-8" style={{ border: "1px solid black", marginTop: "50px", width: "60%", padding:"20px"}}>
    <ToastContainer />
    <h3 className="text-center">Forgot Password</h3>
      <Form>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
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
          {" "}
          <Col md={2}></Col>
          <Col md={8}>
            <FormGroup>
              <Button
                color="primary"
                block
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
