import React from 'react'
import { useState } from "react";
import "./style.css";
import { Container, Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "./global";

export default function ResetPassword() {
    const [newpass, setNewpass] = useState("");
    const { token } = useParams();

    const nav = useNavigate();
    console.log(`token: ${token}`);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API}/users/resetpass/` + token, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({newpass: newpass})
        })
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          if(res.message !== "Invalid Token or Token expired") {
          toast.success("Password reset successfull, please Login", {
              onClose: () => {
                setTimeout(function () {
                  nav("/login");
                }, 2000);
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
        setNewpass(e.target.value);
    }

  return (
    <Container className="mt-8">
      <ToastContainer autoClose={2000} />
    <h3 className="text-center">Reset Password</h3>
      <Form>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <FormGroup>
              <Label>New Password</Label>
              <Input
                id="password"
                name="newpass"
                placeholder="Enter new password"
                type="password"
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
                Reset
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
