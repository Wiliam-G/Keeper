import { useState } from 'react';
import CreateArea from './components/createArea/CreateArea';
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';
import Note from './components/Note/Index';


function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(previewNotes => {
      return [...previewNotes, newNote];
    });
  }

  const deleteNote = (id) => {
    setNotes(previewNotes => {
      return previewNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => 
         <Note 
          key={index}
          id={index}
          title={noteItem.title} 
          content={noteItem.content}
          onDelete={deleteNote}
          />
      )}
      <Footer />
    </div>
  );
}

export default App;
