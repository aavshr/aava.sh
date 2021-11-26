import { getCommandParts } from '../utils'
import actions from './actions'
import { files } from '../../content/home.js'

const tabCompletion = (cmd) => {
    let results = [];

    if (!cmd) {
        return results;
    }

    const parts = getCommandParts(cmd);
    const action = parts[0];

    // case for {action \t or ./}
    if (cmd.endsWith(' ')){
        return Object.keys(files);
    }

    // only searching through actions
    if (parts.length === 1) {
        // case for ./
        if (action.startsWith('./')){
            const prefix = action.replace('./', '');
            if (prefix === ""){
                return Object.keys(files);
            }
            for(const file in files){
                if (file.startsWith(prefix)){
                    results.push(file);
                }
            }
            return results;
        }

        for (const act in actions){
            if (act.startsWith(action)){
                results.push(act);
            }
        }
        return results;
    }

    // handle other cases
    for (const file in files){
        const arg = parts[parts.length-1]
        if (file.startsWith(arg)){
            results.push(file);
        }
    }
    return results;
}

export default tabCompletion;