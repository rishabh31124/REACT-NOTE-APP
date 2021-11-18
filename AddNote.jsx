import React, { useState } from 'react';
import './style.css';
// import Note from './Note'; 
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button, Container } from 'reactstrap';
// import { toast, ToastContainer } from 'react-toastify';

export default function AddNote(props) {
    const [note, setNote]=useState({
        title:"",
        content:""
      })
    //   function notify () {
    //       toast("A new Note has been added");
    //   }
      function handleChange(event){

        const {name, value}=event.target;
    
        setNote( preValue =>{
          return {
            ...preValue,
            [name]: value
          };
        })
    }
    function submitNote(event){

        props.onAdd(note);
        setNote({
          title:"",
          content:""
        })
        event.preventDefault()
      };

    return (
        <div>
            <Form>
                <div className = "fff">
                    <FormGroup>
                        <div className = "ff">
                            <Label for = "title">Title</Label>
                            <Input value = { note.title } onChange = { handleChange } type="text" name="title" id="title" placeholder="Enter the title of your Note" />
                        </div>      
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <div className = "ff">
                            <Label for="content">Content</Label>
                            <Input value = { note.content } onChange = { handleChange } type="textarea" name="content" id="content" placeholder="Type your content please!." />
                        </div>     
                    </FormGroup>
                    <hr />
                    <Container className = "text-center">
                        <Button onClick = { submitNote  } outline color = "warning my -3 ">Add</Button>
                        {/* <ToastContainer /> */}
                    </Container>
                    </div>
            </Form>        
        </div>
    )
};
