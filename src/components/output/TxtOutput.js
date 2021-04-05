import styled from '@emotion/styled';

import { regularLightTextStyle } from '../../styles/_typographies';

const TxtOutputContainer = styled.div`
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    padding-left: 10px;
    justify-content: left;
    display: flex;
    flex-direction: column;
    ${regularLightTextStyle};
`;

export default function TxtOutput({lines}){
    return (
        <TxtOutputContainer>
            {lines.map((line, index) => {
                return <div key={index}>{line}</div>
            })}
        </TxtOutputContainer>
    );
}
