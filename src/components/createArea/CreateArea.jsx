import React, { useState } from 'react';
import * as S from './styled';

const CreateArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const { name, value} = event.target;

        setNote(previewsNote => {
            return {
                ...previewsNote, 
                [name]: value
            };
        });
    }

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <S.Wrapper>
                <input 
                    name="title" 
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder='Title' 
                />
                <textarea 
                    name="content" 
                    onChange={handleChange} 
                    value={note.content} 
                    placeholder='Take a note...' 
                    rows="3" 
                />
                <button onClick={submitNote}>Add</button>
        </S.Wrapper>
    )
}

export default CreateArea;