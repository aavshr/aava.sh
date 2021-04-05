import TxtOutput from '../../components/output/TxtOutput';
import LsOutput from '../../components/output/LsOutput';
import { files } from '../../content/home.js'
import { fileType } from '../utils';

const needsArg = (cmd) => {
   return <TxtOutput lines={[`'${cmd}' needs an argument.`]}/>;
}

const noSuchFile = (file) => {
    return <TxtOutput lines={[`No such file: '${file}'.`]}/>;
}

const ls = (args) => {
    return <LsOutput files={Object.values(files)}/>;
}

const cat = (args) => {
    if (!args || args.length === 0) {
        return needsArg("cat")
    } 
    const file = args[0];
    if (files[file]){
        return <TxtOutput lines={files.file.content}/>;
    }
    return noSuchFile(file);
}

const sh = (args) => {
    if (!args || args.length === 0) {
        return needsArg("sh")
    }
    const file = args[0];
    if (!files[file]){
        return noSuchFile(file);
    }
    if (files[file].type !== fileType.exec){
        return <TxtOutput lines={[`'${file}' is not an executable file.`]}/>
    }
    return files[file].run(args);
}

const help = (args) => {
    return <TxtOutput lines = {[
            "ls: list directory contents",
            "cat: print files",
            "clear: clear output",
            "sh: run an executable file",
        ]}
    />
}

const actions = {
    'ls': ls,
    'cat': cat,
    'help': help,
    'sh': sh,
}

export default actions;