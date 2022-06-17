
import * as S from './styled';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <S.Wrapper><p>copyright © {currentYear}</p></S.Wrapper>
    )
}

export default Footer;