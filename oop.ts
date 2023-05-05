import inquire from "inquirer";
import chalk from "chalk";


class Person {
    private personality: string;

    constructor() {
        this.personality = "";
    }

    public AskQuestion = async () => {
        let que = await inquire.prompt({
            type: "number",
            name: "input",
            message: chalk.blue("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself:"),
        });

        const { input } = que;

        if (que.input === 1) {
            this.personality = "Extravert";
        } else if (que.input === 2) {
            this.personality = "You are an Introvert";
        } else {
            console.log('You are still a Mystery');
        }

        console.log(chalk.red( this.personality));
    }
}

class Student extends Person {
    private _name: string;
    private _age: number;

    constructor() {
        super();
        this._name = "Eman";
        this._age = 18;
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get age() {
        return this._age;
    }

    public set age(age: number) {
        this._age = age;
    };
}

const startApp = async () => {
    const answers: any = await inquire.prompt([
        {
            type: "input",
            name: "name",
            message:chalk.greenBright( "What is your name?"),
        },
        {
            type: "number",
            name: "age",
            message:chalk.greenBright( "What is your age?"),
        }
    ]);

    const student = new Student();
    student.name = answers.name;
    student.age = answers.age;

    console.log(chalk.magenta( `Student name is ${student.name} and his/her age is ${student.age}.`));
    student.AskQuestion();
};

startApp();
