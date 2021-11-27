import { fileType } from "../helpers/utils";
import execs from "../helpers/commands/execs";

const execContent = "Error: can not print an executable file.";

export const files = {
    "about.txt": {
        name: "about.txt",
        content: [
            "Hello, I am Aavash. I currently work as a software engineer at Deta (https://deta.sh).",
            "-----",
            "Deta gifted me this '.sh' domain which gave me the idea of writing a shell as my personal website.",
            "I thought it would be fun and something unique.",
            "------", 
            "If you experience any bugs, please file an issue in the github repo (https://github.com/aavshr/aava.sh)."
        ],
        type: fileType.regular,
        longView: 'r--',
    },
    "cowsay": {
        name: "cowsay",
        content: [execContent],
        type: fileType.exec,
        run: execs['cowsay'],
        longView: 'r-x',
    },
    "do-not-run-me": {
        name: "do-not-run-me",
        content: [execContent],
        type: fileType.exec,
        run: execs['rick-roll'],
        longView: 'r-x',
    },
}

// only file keys for faster access
// also because Object.Keys is newish
// need to get rid of this eventually
export const fileKeys = ["about.txt", "cowsay", "do-not-run-me"]