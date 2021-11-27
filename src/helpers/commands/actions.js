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
    // TODO: have proper parsing
    // hideous right now
    const l = args.length;
    let longOption = false;
    if (l > 0){
        let dir = ".";
        if (args[0] === "-l"){
            longOption = true;
            if (l > 2){
                return <TxtOutput lines={[`'ls' takes a single argument.`]}/> 
            }
            if (l === 2){
                dir = args[1];
            }
        } else {
            if (l > 1){
                return <TxtOutput lines={[`'ls' takes a single argument.`]}/> 
            }
            dir = args[0];
        }
        if (dir !== "."){
            if (files[dir]){
                return <LsOutput longOption={longOption} files={[files[dir]]}/>;
            }
            return <TxtOutput lines={[`No such file or directory: '${dir}'`]}/>
        } 
    }
    return <LsOutput longOption={longOption} files={Object.values(files)}/>;
}

const cat = (args) => {
    if (!args || args.length === 0) {
        return needsArg("cat")
    } 
    const file = args[0];
    if (files[file]){
        return <TxtOutput lines={files[file].content}/>;
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
            "ls [-l]: list directory contents",
            "cat: print files",
            "clear: clear output",
            "sh: run an executable file",
        ]}
    />
}

// clear does nothing
// handled by the prompt
const clear = (args) => {
    return;
}

const actions = {
    'ls': ls,
    'cat': cat,
    'help': help,
    'sh': sh,
    'clear': clear,
}

export default actions;