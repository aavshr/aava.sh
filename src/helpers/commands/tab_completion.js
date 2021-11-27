import { getCommandParts } from '../utils'
import actions from './actions'
import { fileKeys, files } from '../../content/home.js'

const results = (normal, sliced) => {
    return {
        normal: normal,
        sliced: sliced,
    }
}

const tabCompletion = (cmd) => {
    let normal = [];
    let sliced = []; // results with matching prefix sliced

    if (!cmd || cmd.replace(/\s/g, '') === "") {
        return results(normal, normal);
    }

    const parts = getCommandParts(cmd);
    const action = parts[0];

    // case for {action \t or ./}
    if (cmd.endsWith(' ')){
        return results(fileKeys,fileKeys);
    }

    // only searching through actions
    if (parts.length === 1) {
        // case for ./
        if (action.startsWith('./')){
            const prefix = action.replace('./', '');
            if (prefix === ""){
                return results(fileKeys, fileKeys);
            }
            for(const file in files){
                if (file.startsWith(prefix)){
                    normal.push(file);
                    sliced.push(file.slice(prefix.length));
                }
            }
            return results(normal, sliced);
        }

        for (const act in actions){
            if (act.startsWith(action)){
                normal.push(act);
                sliced.push(act.slice(action.length));
            }
        }
        return results(normal, sliced);
    }

    // handle other cases
    for (const file in files){
        const arg = parts[parts.length-1]
        if (file.startsWith(arg)){
           normal.push(file);
           sliced.push(file.slice(arg.length));
        }
    }
    return results(normal, sliced);
}

export default tabCompletion;