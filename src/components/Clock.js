import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { smallRegularLightTextStyle } from '../styles/_typographies';

const ClockDiv = styled.div`
    display: flex;
    height: 28px;
    width: 100%;
    padding-left: 10px;
    justify-content: left;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    ${smallRegularLightTextStyle}
`;

function Clock(){
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        var id = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(id);
        };
    });

    return (
        <ClockDiv>
            <p> {date.toLocaleDateString('en-US',{
                day: 'numeric',
                weekday: 'short',
                month: 'short',
            }) + ' ' + date.toLocaleTimeString()
            } </p>
        </ClockDiv>
    );
}

export default Clock;
