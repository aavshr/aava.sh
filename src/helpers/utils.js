import { v4 } from 'uuid';

export const keys = {
    KEY_RETURN : 13,
    KEY_UP : 38, 
    KEY_DOWN: 40,
    KEY_ESC: 27,
    KEY_TAB: 9,
    KEY_CTRL: 17,
    KEY_L: 76,
};

export const genUuid = v4;

export const fileType = {
    regular: 0, 
    exec: 1,
    dir: 2,
}

export const getCommandParts = (cmd) => {
    return cmd.toLowerCase().trim().replace(/ +/g, ' ').split(' '); 
}

export const longestCommonPrefix = (words) => {
    let prefix = "";
    if(!words) {
        return prefix;
    }

    for (let i=0; i < words[0].length; i++){ 
        const char = words[0][i];

        for (let j = 1; j < words.length; j++){ 
            if(words[j][i] !== char) {
                return prefix;
            }
        }
        prefix = prefix + char;
    }
    return prefix;
}