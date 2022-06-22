import * as S from './styled';

const Note = (props) => {

    const handleClick = () => {
        props.onDelete(props.id)
    }

    return (
        <S.Wrapper>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </S.Wrapper>
    )
}

export default Note;