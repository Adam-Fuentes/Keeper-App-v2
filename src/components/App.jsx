import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes =>{
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((item, index) =>{
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
       />
       {
          notes.map((noteItem, index)=>
          <Note 
            key={index} 
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onChecked={deleteNote}
            />
          )
        }
      <Footer />
    </div>
  );
}

export default App;