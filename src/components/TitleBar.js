import styled from '@emotion/styled';
import { regularTextStyle} from '../styles/_typographies'

const TitleBarDiv = styled.div`
    height: 22px; 
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.papayaWhip};
    ${regularTextStyle};
`;

const CloseButtonDiv = styled.button`
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: ${(props) => props.theme.colors.ruby};
`;

function TitleBar() {
    return (
        <TitleBarDiv>
            aava.sh
        </TitleBarDiv>
    );
}

export default TitleBar;
