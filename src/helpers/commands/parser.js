const parseCommand = (cmd) => {
    const parts = cmd.toLowerCase().trim().replace(/ +/g, ' ').split(' '); 
    const command = parts[0];
    let args = [];
    if (parts.length > 1){
        args = parts.slice(1, parts.length);
    }
    return {
        command: command, 
        args: args,
    }
};

export default parseCommand;