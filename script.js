function favColor() {
    const name = prompt(`What is your name?`);
    console.log(name);

    let color = prompt(`What is your favorite color?`);
    console.log(color);

    if ((color != "red") && (color != "turquoise") && (color != "teal")) {
        let message = `Sorry, ${name}, ${color} is not my favorite color. Unfortunately we're not compatible.`;
        alert(message);
        console.log(message);

    } else {
        let message = `Wow, ${name}, ${color} is my favorite color too!`;   
        alert(message);
        console.log(message);
    }
}
