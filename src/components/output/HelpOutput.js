import styled from '@emotion/styled';

import { regularLightTextStyle } from '../../styles/_typographies';

const HelpOutputContainer = styled.div`
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    padding-left: 10px;
    justify-content: left;
    display: flex;
    flex-direction: column;
    ${regularLightTextStyle};
`;

export default function HelpOutput({lines}){
    return (
        <HelpOutputContainer>
            {lines.map((line, index) => {
                return <div key={index}>
                    <i>{line.cmd}</i>: {line.desc}
                </div>
            })}
        </HelpOutputContainer>
    );
}