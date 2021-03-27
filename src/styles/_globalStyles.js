import { css } from '@emotion/react';

export const globalCss = (props) => css`
    html, body {
        margin: 0px;
        background-color: ${props.colors.backgroundColor};
    }

    * {
        box-sizing: border-box;
    }
`;