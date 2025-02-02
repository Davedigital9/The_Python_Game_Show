let questions = [
    {
        numb: 1,
        question: "What is the print function in Python?",
        answer: "A function to output text to the screen",
        option: [
            "A function to add numbers",
            "A function to output text to the screen",
            "A function to ask for user input",
            "A function to perform arithmetic operations"
        ]
    },
    {
        numb: 2,
        question: "What is the correct file extension for Python files?",
        answer: ".py",
        option: [
            ".pt",
            ".py",
            ".python",
            ".pyt "
        ]
    },
    {
        numb: 3,
        question: "What is the output of the following code? [print(2 ** 3)]",
        answer: "8",
        option: [
            "5",
            "6",
            "8",
            "9"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is used to declare a variable in JavaScript?",
        answer: "let",
        option: [
            "var",
            "let",
            "define",
            "int"
        ]
    },
    {
        numb: 5,
        question: "What does '===' mean in JavaScript?",
        answer: "Strict equality check",
        option: [
            "Loose equality check",
            "Strict equality check",
            "Assignment operator",
            "Not equal to"
        ]
    },
    {
        numb: 6,
        question: "Which of these is NOT a valid JavaScript data type?",
        answer: "decimal",
        option: [
            "string",
            "number",
            "decimal",
            "boolean"
        ]
    },
    {
        numb: 7,
        question: "Which method is used to add a new element to the end of an array in JavaScript?",
        answer: "push()",
        option: [
            "add()",
            "insert()",
            "push()",
            "append()"
        ]
    },
    {
        numb: 8,
        question: "Which of the following functions can be used to read data from a file in Node.js?",
        answer: "fs.readFile()",
        option: [
            "fs.read()",
            "fs.open()",
            "fs.readFile()",
            "fs.load()"
        ]
    },
    {
        numb: 9,
        question: "Which HTML tag is used to define an internal stylesheet?",
        answer: "<style>",
        option: [
            "<css>",
            "<script>",
            "<style>",
            "<link>"
        ]
    },
    {
        numb: 10,
        question: "What does the following JavaScript code do? [console.log(typeof 42)]",
        answer: "Logs 'number' to the console",
        option: [
            "Logs 'undefined' to the console",
            "Logs 'number' to the console",
            "Logs 'object' to the console",
            "Logs 'boolean' to the console"
        ]
    },
    {
        numb: 11,
        question: "Which symbol is used for single-line comments in JavaScript?",
        answer: "//",
        option: [
            "#",
            "//",
            "/*",
            "--"
        ]
    },
    {
        numb: 12,
        question: "Which operator is used to concatenate strings in JavaScript?",
        answer: "+",
        option: [
            "&",
            "&&",
            "+",
            "~"
        ]
    },
    {
        numb: 13,
        question: "In Python, which keyword is used to define a function?",
        answer: "def",
        option: [
            "function",
            "def",
            "func",
            "method"
        ]
    },
    {
        numb: 14,
        question: "Which of the following is a valid way to create a list in Python?",
        answer: "[1, 2, 3]",
        option: [
            "(1, 2, 3)",
            "{1, 2, 3}",
            "[1, 2, 3]",
            "<1, 2, 3>"
        ]
    },
    {
        numb: 15,
        question: "Which of these Python functions is used to return the length of a string?",
        answer: "len()",
        option: [
            "length()",
            "count()",
            "len()",
            "size()"
        ]
    },
    {
        numb: 16,
        question: "Which JavaScript method is used to find the index of an element in an array?",
        answer: "indexOf()",
        option: [
            "findIndex()",
            "indexOf()",
            "getIndex()",
            "search()"
        ]
    },
    {
        numb: 17,
        question: "Which statement is used to terminate a loop in JavaScript?",
        answer: "break",
        option: [
            "continue",
            "break",
            "exit",
            "stop"
        ]
    },
    {
        numb: 18,
        question: "Which of the following is a correct way to declare a constant in JavaScript?",
        answer: "const",
        option: [
            "let",
            "var",
            "constant",
            "const"
        ]
    },
    {
        numb: 19,
        question: "What is the default value of a boolean variable in JavaScript?",
        answer: "false",
        option: [
            "null",
            "undefined",
            "false",
            "true"
        ]
    },
    {
        numb: 20,
        question: "Which of the following is a valid JavaScript array?",
        answer: "[1, 2, 3]",
        option: [
            "1, 2, 3",
            "(1, 2, 3)",
            "{1, 2, 3}",
            "[1, 2, 3]"
        ]
    },
    {
        numb: 21,
        question: "Which method is used to remove the first element from an array in JavaScript?",
        answer: "shift()",
        option: [
            "pop()",
            "shift()",
            "delete()",
            "remove()"
        ]
    },
    {
        numb: 22,
        question: "In Python, which of the following is used to handle exceptions?",
        answer: "try-except",
        option: [
            "try-catch",
            "try-except",
            "catch-finally",
            "except-try"
        ]
    },
    {
        numb: 23,
        question: "Which keyword is used to create a class in Python?",
        answer: "class",
        option: [
            "function",
            "class",
            "object",
            "def"
        ]
    },
    {
        numb: 24,
        question: "Which of these methods is used to remove an element from a set in Python?",
        answer: "remove()",
        option: [
            "delete()",
            "remove()",
            "discard()",
            "clear()"
        ]
    },
    {
        numb: 25,
        question: "Which of these is the correct syntax to create a dictionary in Python?",
        answer: "{key: value}",
        option: [
            "key: value",
            "[key: value]",
            "{key: value}",
            "(key: value)"
        ]
    },
    {
        numb: 26,
        question: "In which programming language is the 'ArrayList' data structure used?",
        answer: "Java",
        option: [
            "JavaScript",
            "Python",
            "Java",
            "C++"
        ]
    },
    {
        numb: 27,
        question: "Which of the following is an example of a primitive data type in Java?",
        answer: "int",
        option: [
            "ArrayList",
            "String",
            "int",
            "Object"
        ]
    },
    {
        numb: 28,
        question: "Which of the following is the correct way to import a module in JavaScript?",
        answer: "import module from 'module_name';",
        option: [
            "import 'module_name';",
            "require('module_name');",
            "import module from 'module_name';",
            "include 'module_name';"
        ]
    },
    {
        numb: 29,
        question: "What does the 'this' keyword refer to in JavaScript?",
        answer: "The current object",
        option: [
            "The global object",
            "The previous object",
            "The current object",
            "The constructor function"
        ]
    },
    {
        numb: 30,
        question: "Which of the following is used to create a new object in JavaScript?",
        answer: "new Object()",
        option: [
            "new Object()",
            "{}",
            "new Object",
            "object()"
        ]
    },
    {
        numb: 31,
        question: "Which of the following is a valid CSS selector?",
        answer: ".className",
        option: [
            "#className",
            ".className",
            "*className",
            "className"
        ]
    },
    {
        numb: 32,
        question: "What does the 'border' property in CSS do?",
        answer: "Defines the border style around an element",
        option: [
            "Defines padding inside an element",
            "Defines the border style around an element",
            "Defines margin outside an element",
            "Defines font size of an element"
        ]
    },
    {
        numb: 33,
        question: "Which HTML5 element is used to define navigation links?",
        answer: "<nav>",
        option: [
            "<footer>",
            "<header>",
            "<nav>",
            "<article>"
        ]
    },
    {
        numb: 34,
        question: "What does 'async' do in JavaScript?",
        answer: "Makes a function asynchronous",
        option: [
            "Makes a function synchronous",
            "Executes the function immediately",
            "Makes a function asynchronous",
            "Delays the function execution"
        ]
    },
    {
        numb: 35,
        question: "What is the correct syntax for a promise in JavaScript?",
        answer: "new Promise()",
        option: [
            "Promise.new()",
            "new Promise()",
            "Promise()",
            "new Promise{ }"
        ]
    },
    {
        numb: 36,
        question: "Which of the following is a valid SQL statement?",
        answer: "SELECT * FROM table_name;",
        option: [
            "SHOW * FROM table_name;",
            "SELECT * FROM table_name;",
            "GET * FROM table_name;",
            "FETCH * FROM table_name;"
        ]
    },
    {
        numb: 37,
        question: "What is the correct way to declare a variable in C++?",
        answer: "int varName;",
        option: [
            "var varName;",
            "let varName;",
            "int varName;",
            "declare varName;"
        ]
    },
    {
        numb: 38,
        question: "What does SQL's 'GROUP BY' clause do?",
        answer: "Groups rows that have the same values",
        option: [
            "Groups rows that have the same values",
            "Orders rows",
            "Selects rows with a specific condition",
            "Joins multiple tables"
        ]
    },
    {
        numb: 39,
        question: "Which keyword is used to declare a constant in JavaScript?",
        answer: "const",
        option: [
            "const",
            "let",
            "var",
            "final"
        ]
    },
    {
        numb: 40,
        question: "Which of these is used to define a method inside a class in Python?",
        answer: "def",
        option: [
            "func",
            "def",
            "function",
            "method"
        ]
    },
    {
        numb: 41,
        question: "What is the output of the following code in Python? [print('Hello' + 2)]",
        answer: "TypeError",
        option: [
            "Hello2",
            "TypeError",
            "None",
            "Hello"
        ]
    },
    {
        numb: 42,
        question: "Which of these is a correct regular expression to match a number in JavaScript?",
        answer: "/\d+/",
        option: [
            "/\d+/",
            "/\d*/",
            "/\d{1,}/",
            "/num/"
        ]
    },
    {
        numb: 43,
        question: "Which function is used to parse a JSON string in JavaScript?",
        answer: "JSON.parse()",
        option: [
            "parseJSON()",
            "JSON.stringify()",
            "JSON.parse()",
            "parse()"
        ]
    },
    {
        numb: 44,
        question: "In which of these programming languages is the 'forEach()' method used on arrays?",
        answer: "JavaScript",
        option: [
            "Java",
            "JavaScript",
            "Python",
            "C++"
        ]
    },
    {
        numb: 45,
        question: "What is the output of the following JavaScript code? [console.log(0.1 + 0.2 == 0.3)]",
        answer: "false",
        option: [
            "true",
            "false",
            "undefined",
            "NaN"
        ]
    },
    {
        numb: 46,
        question: "Which CSS property is used to change the font of an element?",
        answer: "font-family",
        option: [
            "font-style",
            "font-size",
            "font-family",
            "font-weight"
        ]
    },
    {
        numb: 47,
        question: "Which of these functions is used to parse a string into an integer in JavaScript?",
        answer: "parseInt()",
        option: [
            "parseInt()",
            "parseFloat()",
            "toInteger()",
            "parseString()"
        ]
    },
    {
        numb: 48,
        question: "Which tag is used to define an ordered list in HTML?",
        answer: "<ol>",
        option: [
            "<ul>",
            "<li>",
            "<ol>",
            "<list>"
        ]
    },
    {
        numb: 49,
        question: "In Java, what does the 'extends' keyword signify?",
        answer: "Inheritance",
        option: [
            "Encapsulation",
            "Polymorphism",
            "Inheritance",
            "Abstraction"
        ]
    },
    {
        numb: 50,
        question: "Which of the following is a valid way to define a class in Python?",
        answer: "class MyClass:",
        option: [
            "class MyClass[]:",
            "def MyClass:",
            "class MyClass:",
            "new MyClass:"
        ]
    }
];
