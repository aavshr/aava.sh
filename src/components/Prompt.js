import styled from '@emotion/styled';

import { regularTextStyle } from '../styles/_typographies';
import CommandBox from './CommandBox';

const UserHostDiv = styled.div`
    color: ${(props) => props.theme.colors.ruby};
`;

const DirDiv = styled.div`
    color: ${(props) => props.theme.colors.papayaWhip};
`;

const ShellPromptDiv = styled.div`
    color: ${(props) => props.theme.colors.white};
`;

const PromptDiv = styled.div`
    display: flex;
    height: 32px;  
    align-items: center;
    justify-content: left;
    margin-left: 10px;
    gap: 10px;
    ${regularTextStyle};
`;

function Prompt({user, dir}){
    return (
        <PromptDiv>
            <UserHostDiv>{user}@sif</UserHostDiv>
            <DirDiv>{dir}</DirDiv>
            <ShellPromptDiv>%</ShellPromptDiv>
            <CommandBox/>
        </PromptDiv>
    );
}

export default Prompt;