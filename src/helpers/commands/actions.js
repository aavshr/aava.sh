import TxtOutput from '../../components/output/TxtOutput';
import LsOutput from '../../components/output/LsOutput';
import { files } from '../../content/home.js'

const ls = (args) => {
    console.log(Object.values(files));
    return <LsOutput files={Object.values(files)}/>;
}

const cat = (args) => {
    if (!args || args.length === 0) {
        return <TxtOutput lines={["cat needs an argument"]}/>;
    } 
    const file = args[0];
    if (files.file){
        return <TxtOutput lines={files.file.content}/>;
    }
    return <TxtOutput lines={[`No such file: '${file}'`]}/>;
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