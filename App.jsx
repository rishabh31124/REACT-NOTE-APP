import React, { useState } from 'react';
import Home from './Home';
import Note from './Note';
import About from './About';
import { Card, Container, Row, Col } from 'reactstrap';
import Contact from './Contact';
import AddNote from './AddNote';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import { BrowserRouter, Route } from 'react-router-dom';


export default function App() {
    const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
    
    return (
          <div>
            <BrowserRouter>
                <Container fluid>
                    <Row>
                        <Header />
                        <Col md = {4}>
                            <SideMenu />   
                        </Col>
                        <Col md = {8}>
                          <Route path = "/home">
                            <Home />
                          </Route>
                          <Route path = "/contact">
                            <Contact />
                          </Route>
                          <Route path = "/about">
                            <About />
                          </Route>
                         <Route path = "/add-note">
                         
                            <AddNote onAdd={addNote} />
                                    <div className = "text-center">
                                      <h2>List of all notes</h2>
                                          {
                                              notes.length > 0 ? notes.map((noteItem, index) => {
                                                return (
                                                    <Note
                                                        key={index}
                                                        id={index}
                                                        title={noteItem.title}
                                                        content={noteItem.content}
                                                        onDelete={deleteNote}
                                                    />
                                                );
                                            }) : "no notes are available"
                                          }
                                    </div>
                          </Route>
                        </Col>
                        
                    </Row>
                </Container> 
              </BrowserRouter>                      
              <Footer /> 
        </div>
      );
    }
