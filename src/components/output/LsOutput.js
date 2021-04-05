import styled from '@emotion/styled';

import { regularLightTextStyle, regularTextStyle } from '../../styles/_typographies';
import { fileType } from '../../helpers/utils';

const LsOutputContainer = styled.div`
    width: 100%;
    padding-left: 10px;
    justify-content: left;
    display: flex;
    flex-direction: ${({longOption}) => {
        return longOption ? 'column': 'row';
    }};
    gap: ${({longOption}) => {
        return longOption ? '5px': '30px';
    }};
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
    display: flex;
    flex-direction: row;
    gap: 30px;
    ${regularTextStyle};
`;

const PermsInfoDiv = styled.div`
    color: ${(props) => props.theme.colors.opal};
    ${regularLightTextStyle};
`;

export default function LsOutput({files, longOption}){
    return (
        <LsOutputContainer longOption={longOption}>
            {longOption ? <LsItemDiv> total {files.length} </LsItemDiv> : null}
            {files.map((file, index) => {
                return (
                    <div key={index}>
                        <LsItemDiv itemType={file.type}>
                            {longOption ? <PermsInfoDiv>{file.longView}</PermsInfoDiv> : null}
                            {file.name}
                        </LsItemDiv>
                    </div>
                )
            })}
        </LsOutputContainer>
    ) 
}