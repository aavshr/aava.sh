import { v4 } from 'uuid';

export const keys = {
    KEY_RETURN : 13,
    KEY_UP : 38, 
    KEY_DOWN: 40,
    KEY_ESC: 27
};

export const genUuid = v4;

export const fileType = {
    regular: 0, 
    exec: 1,
    dir: 2,
}