import styled from '@emotion/styled';

import { regularLightTextStyle } from '../../styles/_typographies';

const RegularOutputContainer = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    padding-left: 10px;
    align-items: center;
    ${regularLightTextStyle};
`;

export default function RegularOutput({output}){
    return (
        <RegularOutputContainer>
            {output}
        </RegularOutputContainer>
    )
}