import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { regularLightTextStyle, regularTextStyle } from '../styles/_typographies';
import CommandBox from './CommandBox';
import actions from '../helpers/commands/actions';
import { genUuid } from '../helpers/utils'

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
    padding-left: 10px;
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
    padding-left: 10px;
    gap: 10px;
    ${regularTextStyle};
`;

const PromptsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

function Prompt({user, dir, setUser, setDir, setClear, setRenderNext}){
    const [cmd, setCmd] = useState({});
    const [outputs, setOutputs] = useState([]);

    useEffect(() => {
        if (cmd.command){
            // clear command
            if (cmd.command === 'clear'){
                setClear(true);
                setRenderNext(true);
                return;
            }
            if (actions[cmd.command]){
                const action = actions[cmd.command];
                setOutputs(outputs.concat(action(cmd.args)));
            } else {
                const o = `Command not found : '${cmd.command}'. Type 'help' for available commands.`
                setOutputs(outputs.concat(o))
            }
            setRenderNext(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {outputs.map((output, index) => {
                return <div key={index}>{output}</div>
            })}
        </OutputContainer>
        </>
    );
}

function Prompts(){
    const [renderNext, setRenderNext] = useState(false);
    const [clear, setClear] = useState(false);
    const [user, setUser] = useState('guest');
    const [dir, setDir] = useState('~');
    
    const p = {
        key: genUuid(),
        user: user,
        dir: dir,
    }
    const [prompts, setPrompts] = useState([p]);

    useEffect(()=> {
        if (renderNext){
            setRenderNext(false)
            if (clear){
                setClear(false);
                // hacky
                setPrompts([{
                    key: genUuid(),
                    user: user,
                    dir: dir,
                }]);
                return;
            }
            setPrompts(prompts.concat(p));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [renderNext])

    return (
        <PromptsContainer>
            {prompts.map((prompt)=> {
                return <Prompt 
                    key={prompt.key} 
                    user={prompt.user} 
                    dir={prompt.dir}
                    setUser={setUser}
                    setDir={setDir}
                    setClear = {setClear}
                    setRenderNext={setRenderNext}
                />
            })}
        </PromptsContainer>
    )
}

export default Prompts;