import { v4 } from 'uuid';

export const keys = {
    KEY_RETURN : 13,
    KEY_UP : 38, 
    KEY_DOWN: 40,
    KEY_ESC: 27,
    KEY_TAB: 9
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