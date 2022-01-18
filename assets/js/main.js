
// lev1_1

function intro() {
    let a = 1 + 3;
    console.log("Hello World");
    console.log(a += a);
}

intro();

// lev1_2

function intro2(paramName) {
    let varName = "superCoder";
    console.log("Hi " + varName + ". Mein Name ist " + paramName + ".");
}

intro2("kc17m");

// lev1_3

function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin schon " + alter + " Jahre alt. Ich komme aus " + stadt + ".");
}

intro3("kc17m", "Detroit City", 99);

// lev1_5

function math(a, b) {
    console.log(a * b);
    console.log(a / b);
}

math(10, 2);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);