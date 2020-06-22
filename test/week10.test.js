const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("returns the sum of all digits of a given number", () => {
        expect(sumDigits(123)).toBe(6);
    });

    test("returns the sum of all digits of a given number", () => {
        expect(sumDigits(246)).toBe(12);
    });
});

describe("createRange", () => {
    test("returns a range of numbers as an array with a given start, an end and a step", () => {
        expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
    });
});

describe("getScreentimeAlertList", () => {
    test("returns an array of usernames of users who have used more than 100 minutes of screentime", () => {
        expect(getScreentimeAlertList(
        [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ], "2019-05-04"
        )).toStrictEqual(["beth_1234"]);
    });
});

describe("hexToRGB", () => {
    test("returns hex code into an RGB code in the format 'rgb(255,17,51)'", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
 
    });
});

describe("findWinner", () => {
    test("return 'X' if player X has won, '0 if the player 0 has won, and null if there is currently no winner", () => {
        expect(findWinner(
        [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
            )).toBe("X");
    });
    test("return 'X' if player X has won, '0 if the player 0 has won, and null if there is currently no winner", () => {
        expect(findWinner(
        [
            ["0", "0", "X"],
            ["X", "0", "0"],
            ["X", "X", "0"]
        ]
            )).toBe("0");
    });
    test("return 'X' if player X has won, '0 if the player 0 has won, and null if there is currently no winner", () => {
        expect(findWinner(
        [
            ["X", "0", null],
            [null, null, "0"],
            ["X", null, "0"]
        ]
            )).toBe(null);
    });
});