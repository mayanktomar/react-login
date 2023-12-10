import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


export default function RegisterModal(props) {

  return (
    <>
      <Modal isOpen={props.isRegisterModalOpen} toggle={props.toggleRegisterModal}>
      <ModalHeader toggle={props.toggleRegisterModal}>Register Modal</ModalHeader>
      <ModalBody>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Name
          </Label>
          <Input
            id="exampleEmail"
            name="nameForRegister"
            placeholder="Your good name :)"
            type="text"
            onChange={props.onValueChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="emailForRegister"
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
            name="passwordForRegister"
            placeholder="A strong password"
            type="password"
            onChange={props.onValueChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Gender
          </Label>
          <Input
            id="exampleEmail"
            name="genderForRegister"
            placeholder="Gender"
            type="text"
            onChange={props.onValueChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">
            Age
          </Label>
          <Input
            id="exampleEmail"
            name="ageForRegister"
            placeholder="Age"
            type="number"
            onChange={props.onValueChange}
          />
        </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.onRegisterSubmit}>
          Register
        </Button>{' '}
        <Button color="secondary" onClick={props.toggleRegisterModal}>
          Cancel
        </Button>
      </ModalFooter>
      </Modal>
    </>
  )
}
