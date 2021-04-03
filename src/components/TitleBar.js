import styled from '@emotion/styled';
import { regularTextStyle} from '../styles/_typographies'

const TitleBarDiv = styled.div`
    height: 32px; 
    display: flex;
    align-items: center;
    padding: 0px;
    background-color: ${(props) => props.theme.colors.papayaWhip};
    justify-content: center;
`;

const ButtonsDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 10px;
`;

const TitleDiv = styled.div`
    ${regularTextStyle};
`;

const LinksDiv = styled.div`
    flex: 1;
`;

const CloseButton = styled.button`
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.theme.colors.ruby};
    color: ${(props) => props.theme.colors.ruby};
    &:hover {
        color: ${(props) => props.theme.colors.white};
        cursor: pointer;
    }
`;

function TitleBar() {
    const closeWindow = () => {
        window.close();
    }

    return (
        <TitleBarDiv>
            <ButtonsDiv>
                <CloseButton onClick={closeWindow}>X</CloseButton>
            </ButtonsDiv>
            <TitleDiv>
                aava.sh
            </TitleDiv>
            <LinksDiv/>
        </TitleBarDiv>
    );
}

export default TitleBar;
