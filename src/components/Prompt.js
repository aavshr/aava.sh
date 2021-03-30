import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { regularLightTextStyle, regularTextStyle } from '../styles/_typographies';
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

const OutputContainer = styled.div`
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    margin-left: 10px;
    justify-content: left;
    display: flex;
    flex-direction: column;
    ${regularLightTextStyle};
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
    const [cmd, setCmd] = useState({});
    const [outputs, setOutputs] = useState([]);

    useEffect(() => {
        if (cmd.command === 'ls'){
            // TODO: move commands logic elsewhere
            const o = "test.txt";
            setOutputs(outputs.concat(o))
        }
    }, [cmd]);

    return (
        <>
        <PromptDiv>
            <UserHostDiv>{user}@sif</UserHostDiv>
            <DirDiv>{dir}</DirDiv>
            <ShellPromptDiv>%</ShellPromptDiv>
            <CommandBox setCmd={setCmd}/>
        </PromptDiv>
        <OutputContainer>
            {outputs.map((output) => {
                return <div key={outputs.length}>{output}</div>
            })}
        </OutputContainer>
        </>
    );
}

export default Prompt;