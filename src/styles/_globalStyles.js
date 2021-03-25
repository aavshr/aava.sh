import { css } from '@emotion/react';

export const globalCss = (props) => css`
    body {
        background-color: ${props.theme.colors.backgroundColor};
    }
`;