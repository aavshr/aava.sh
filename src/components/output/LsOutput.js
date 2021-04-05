import styled from '@emotion/styled';

import { regularTextStyle } from '../../styles/_typographies';
import { fileType } from '../../helpers/utils';

const LsOutputContainer = styled.div`
    width: 100%;
    padding-left: 10px;
    justify-content: left;
    gap: 30px;
    display: flex;
    ${regularTextStyle};
`;

const LsItemDiv = styled.div`
    color: ${({itemType, ...props}) => {
        if (itemType === fileType.dir) {
            return props.theme.colors.papayaWhip;
        } else if(itemType === fileType.exec) {
            return props.theme.colors.fireOpal;
        }
        return props.theme.colors.white;
    }};
`;

export default function LsOutput({files}){
    return (
        <LsOutputContainer>
            {files.map((file, index) => {
                return (
                    <LsItemDiv key={index} itemType={file.type}>
                        {file.name}
                    </LsItemDiv>
                )
            })}
        </LsOutputContainer>
    ) 
}