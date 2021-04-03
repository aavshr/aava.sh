export const margin = (side, x) => `margin-${side}: ${2 ** x * 0.25}rem;`;
export const padding = (side, x) => `padding-${side}: ${2 ** x * 0.25}rem;`;

export const scrollYcss = (props) => `
    scrollbar-color: ${props.theme.colors.opal} transparent; /* Firefox */
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px; /* For Chrome, Safari, and Opera */
    }
    &::-webkit-scrollbar-thumb {
        /* For Chrome, Safari, and Opera */
        border-radius: 1px;
        background-color: ${props.theme.colors.opal}};
    }
    &.::-webkit-scrollbar-track {
        /* For Chrome, Safari, and Opera */
        border-radius: 5px;
        background-color: transparent; 
    }
`;

export const scrollXcss = (props) => `
    scrollbar-color: ${props.theme.colors.opal} transparent; /* Firefox */
    overflow-x: auto;
    &::-webkit-scrollbar {
        height: 8px; /* For Chrome, Safari, and Opera */
    }
    &::-webkit-scrollbar-thumb {
        /* For Chrome, Safari, and Opera */
        border-radius: 1px;
        background-color: ${props.theme.colors.opal};
    }
    &.::-webkit-scrollbar-track {
        /* For Chrome, Safari, and Opera */
        border-radius: 5px;
        background-color: transparent; 
    }
`;