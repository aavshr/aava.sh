import styled from '@emotion/styled';
import { useState } from 'react';

import { regularTextStyle } from '../styles/_typographies';
import { keys, longestCommonPrefix } from '../helpers/utils';
import parseCommand from '../helpers/commands/parser';
import tabCompletion from '../helpers/commands/tab_completion';

const CommandInput = styled.input`
    flex: 1;
    border: none;
    display: flex;
    align-items: center;
    caret-color: ${(props) => props.theme.colors.opal};
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props)=> props.theme.colors.white};
    &:focus {
        outline: none;
    }
    ${regularTextStyle};
`;

function CommandBox({setCmd, setTabCompletionOptions}) {
    const [disabled, setDisabled] = useState(false); 
    const [commandValue, setCommandValue] = useState('');

    const onChange = e => {
        if(commandValue !== e.target.value){
            setCommandValue(e.target.value);
        }
    };

    const onKeyDown = e => {
        const key = e.which || e.keyCode;
        if (key === keys.KEY_RETURN) {
            setCmd(parseCommand(commandValue));
            setDisabled(true);
        } 
        
        if (key === keys.KEY_TAB){
            // prevent default tab key behavior
            e.preventDefault();

            const { normal, sliced }= tabCompletion(commandValue);
            if (normal.length === 1){
                setCommandValue(commandValue+sliced[0]);
            }
            if (normal.length > 1){
                // set common prefix if present
                const commonPrefix = longestCommonPrefix(normal);
                if (commonPrefix !== commandValue){
                    setCommandValue(commandValue+commonPrefix);
                }
                setTabCompletionOptions(normal);
            }
        }
    };

    const onBlur = e => {
        setTimeout(() => {
            e.target.focus()
        }, 5);
    };

    return (
        <CommandInput 
            autoFocus 
            spellCheck={false}
            autoComplete="off"
            value={commandValue}
            disabled={disabled} 
            onChange={onChange} 
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    )
}

export default CommandBox;