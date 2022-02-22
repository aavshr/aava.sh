import { fileType } from "../helpers/utils";
import execs from "../helpers/commands/execs";

const execContent = "is an executable file";

export const files = {
    "about.txt": {
        name: "about.txt",
        content: "markdown/about.md",
        type: fileType.regular,
        longView: 'r--',
    },
    "cowsay": {
        name: "cowsay",
        content: execContent,
        type: fileType.exec,
        run: execs['cowsay'],
        longView: 'r-x',
    },
    "do-not-run-me": {
        name: "do-not-run-me",
        content: execContent,
        type: fileType.exec,
        run: execs['rick-roll'],
        longView: 'r-x',
    },
}

// only file keys for faster access
// also because Object.Keys is newish
// need to get rid of this eventually
export const fileKeys = ["about.txt", "cowsay", "do-not-run-me"]