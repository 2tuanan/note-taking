import React, { useEffect, useState } from 'react';
import CreateArea from '../components/CreateArea';
import Note from '../components/Note';
import { useDispatch, useSelector } from 'react-redux';
import { get_notes } from '../../store/Reducers/noteReducer';

const MainPage = () => {
    const dispatch = useDispatch();
    const { notes } = useSelector(state => state.note);
    // const [notes, setNotes] = useState([]);
    useEffect(() => {
        console.log(notes);
        dispatch(get_notes())
    }, [dispatch])
    const deleteNote = (id) => {
        console.log('delete note', id);
    }
    return (
        <div>
            <CreateArea />
            {notes.map((note) => {
                return (
                <Note
                    id={note._id}
                    key={note._id}
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