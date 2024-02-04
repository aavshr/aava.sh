import TxtOutput from '../../components/output/TxtOutput';
import LsOutput from '../../components/output/LsOutput';
import HelpOutput from '../../components/output/HelpOutput';
import HTMLOutput from '../../components/output/HTMLOutput';
import { files } from '../../content/home.js'
import { fileType } from '../utils';
import MarkdownOutput from '../../components/output/MarkdownOutput';
import RegularOutput from '../../components/output/RegularOutput.js';

const needsArg = (cmd) => {
   return <TxtOutput lines={[`${cmd}: needs an argument`]}/>;
}

const noSuchFile = (file) => {
    return <TxtOutput lines={[`${file}: no such file or directory`]}/>;
}

const otherFileContent = (cmd, fileName, content) => {
    return <TxtOutput lines={[`${cmd}: ${fileName} ${content}`]}/>;
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
                return <TxtOutput lines={[`ls: takes a single argument`]}/> 
            }
            if (l === 2){
                dir = args[1];
            }
        } else {
            if (l > 1){
                return <TxtOutput lines={[`ls: takes a single argument`]}/> 
            }
            dir = args[0];
        }
        if (dir !== "."){
            if (files[dir]){
                return <LsOutput longOption={longOption} files={[files[dir]]}/>;
            }
            return <TxtOutput lines={[`No such file or directory: ${dir}`]}/>
        } 
    }
    return <LsOutput longOption={longOption} files={Object.values(files)}/>;
}

const cat = (args) => {
    if (!args || args.length === 0) {
        return needsArg("cat")
    } 
    const file = files[args[0]];
    if (file){
        if (file.type === fileType.markdown) {
            return <MarkdownOutput path={file.content}/>
        }
        if (file.type === fileType.regular) {
            return <RegularOutput output={file.content}/>
        }
        if (file.type === fileType.html) {
            return <HTMLOutput output={file.content}/>
        }
        return otherFileContent("cat", args[0], file.content);
    }
    return noSuchFile(args[0]);
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
        return <TxtOutput lines={[`${file} is not an executable.`]}/>
    }
    return files[file].run(args);
}

const help = (args) => {
    return <HelpOutput lines = {[
            {cmd: "ls", desc: "list directory contents"},
            {cmd: "cat", desc:"print files"},
            {cmd: "clear", desc: "clear output"}
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