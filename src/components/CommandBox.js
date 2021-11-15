import styled from '@emotion/styled';
import { useState } from 'react';

import { regularTextStyle } from '../styles/_typographies';
import { keys } from '../helpers/utils';
import parseCommand from '../helpers/commands/parser';

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

function CommandBox({setCmd}) {
    const [disabled, setDisabled] = useState(false); 
    const [commandValue, setCommandValue] = useState('');

    const onChange = e => {
        setCommandValue(e.target.value);
    };

    const onKeyDown = e => {
        const key = e.which || e.keyCode;
        if (key === keys.KEY_RETURN) {
            setCmd(parseCommand(commandValue));
            setDisabled(true);
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
            disabled={disabled} 
            onChange={onChange} 
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    )
}

export default CommandBox;