import { files } from '../../content/home.js'

const ls = (args) => {
    let o = ""
    for (const file of Object.keys(files)){
        o = o.concat(`${file}\t`);
    }
    return o;
}

const cat = (args) => {
    if (!args || args.length === 0) {
        return "cat needs an argument";
    } 
    const file = args[0];
    if (files[file]){
        return files[file];
    }
    return `No such file: '${file}'`;
}

const help = (args) => {
    return [
        "ls: list directory contents",
        "cat: print files",
        "clear: clear output",
    ]
}

const actions = {
    'ls': ls,
    'cat': cat,
    'help': help,
}

export default actions;