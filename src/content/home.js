import { fileType } from "../helpers/utils";

const execContent = "Error: file is an executable";

export const files = {
    "about.txt": {
        name: "about.txt",
        content: [
            "Hello, I am Aavash. I currently work as a software engineer at Deta (https://web.deta.sh).",
            "-----",
            "Deta gifted me this '.sh' domain which gave me an idea, what if I wrote a shell as my personal website.",
            "I thought it would be fun and something unique.",
            "------", 
            "If you experience any bugs, please file an issue in the github repo (https://github.com/aavshr/aava.sh)."
        ],
        type: fileType.regular
    },
    "do-not-run-me": {
        name: "do-not-run-me",
        content: [execContent],
        type: fileType.exec
    }
}