import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


export default function LoginModal(props) {
  return (
    <>
      <Modal isOpen={props.isLoginModalOpen} toggle={props.toggleLoginModal}>
        <ModalHeader toggle={props.toggleLoginModal}>Login Modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="emailForLogin"
              placeholder="Email"
              type="email"
              onChange={props.onValueChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="passwordForLogin"
              placeholder="A strong password"
              type="password"
              onChange={props.onValueChange}
            />
          </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onLoginSubmit}>
            Login
          </Button>{' '}
          <Button color="secondary" onClick={props.toggleLoginModal}>
            Cancel
          </Button>
        </ModalFooter>
        </Modal>
    </>
  )
}
