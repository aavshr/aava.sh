const parseCommand = (cmd) => {
    const parts = cmd.toLowerCase().trim().replace(/ +/g, ' ').split(' '); 
    let command = parts[0];
    let args = [];

    if (parts.length > 1){
        args = parts.slice(1, parts.length);
    }

    if (command.startsWith("./")){
        command = "sh";
        const dotSlashArgs = parts[0].slice(2)
        if (dotSlashArgs.length > 1){
            args.unshift(dotSlashArgs)
        }
        return {
            command: command,
            args: args,
        }
    } 

    return {
        command: command, 
        args: args,
    }
};

export default parseCommand;