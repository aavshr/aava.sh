import styled from '@emotion/styled';
import { regularTextStyle} from '../styles/_typographies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 

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
    display: flex;
    font-size: 20px;
    padding-top: 5px;
    padding-right: 10px;
    justify-content: flex-end;
    a:hover {
        text-decoration: none;
        transform: scale(1.1);
    }
    > * + * {
        margin-left: 10px
    }
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
                <a href='https://github.com/aavshr/aava.sh'>aava.sh</a>
            </TitleDiv>
            <LinksDiv>
                <a href="https://github.com/aavshr">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://twitter.com/aav_shr">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://linkedin.com/in/aavshr">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="mailto:aavshr@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
            </LinksDiv>
        </TitleBarDiv>
    );
}

export default TitleBar;
