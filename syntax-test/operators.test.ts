describe("Test for in operator", () => {
    test("check property", () => {
        const obj = {a: 1};
        expect('a' in obj).toBeTruthy();
        expect('b' in obj).toBeFalsy();
    });
});