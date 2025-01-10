import React, { useState } from 'react';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

const MainPage = () => {
    const [notes, setNotes] = useState([]);
    const addNote = (note) => {
        setNotes(prevValue => {
            return [...prevValue, note];
        });
        console.log(note);
    }
    const deleteNote = (id) => {
        setNotes(prevValue => {
            return prevValue.filter((note, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
            <CreateArea onAdd={addNote}/>
            {notes.map((note, index) => {
                return (
                <Note
                    id={index}
                    key={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
                );
            })}
        </div>
    );
};

export default MainPage;