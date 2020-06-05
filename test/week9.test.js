const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("Return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([5, 15, 7, 8, 1, 10])).toBe(30);
        expect(sumMultiples([1, 2, 3, 4, 5, 12, 40, 19])).toBe(60);
    });
});

describe("isValidDNA", () => {
    test("Verify if this is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("GTACCATG")).toBe(true);
    });
    test("Verify if this is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("GTAVI")).toBe(false);
    });   
    test("Verify if this is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("ACGT")).toBe(true);
    });
    test("Verify if this is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("ASDGTACVISD")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("Return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of 'ACTG' would have a complementary DNA string of 'TGAC'.", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        });
    });

describe("isItPrime", () => {
    test("Return true/false depending on whether it is a prime number or not.", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(1)).toBe(false);

    });
});

describe("createMatrix", () => {
    test("Return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays.", () => {
        expect(createMatrix(3, "foo")).toStrictEqual([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
            ]);
    });
});

describe("areWeCovered", () => {
    test("Return true/false depending on whether there are enough staff scheduled for the given day.", () => {
        expect(areWeCovered([
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Sophia", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
            ], "Tuesday")).toBe(true);
            
        expect(areWeCovered([
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Sophia", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
            ], "Sunday")).toBe(false);
    });
});