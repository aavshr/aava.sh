import styled from '@emotion/styled';

import { regularTextStyle } from '../../styles/_typographies';

const HTMLOutputContainer = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    padding-left: 10px;
    align-items: center;
    ${regularTextStyle};
`;

export default function HTMLOutput({output}){
    return (
        <HTMLOutputContainer>
            <div dangerouslySetInnerHTML={{ __html: output }} />
        </HTMLOutputContainer>
    )
}