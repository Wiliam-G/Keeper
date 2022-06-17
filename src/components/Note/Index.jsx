import * as S from './styled';

const Note = (props) => {
    return (
        <S.Wrapper>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </S.Wrapper>
    )
}

export default Note;