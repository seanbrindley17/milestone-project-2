beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game works correctly upon clicking play", () => {
    beforeAll(() => {
        game.score = 5
        game.computerCardSelection = [""]
    })
})