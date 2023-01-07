

describe("Test for in operator", () => {
    test("check property", () => {
        const obj = { a: 1 };
        expect('a' in obj).toBeTruthy();
        expect('b' in obj).toBeFalsy();
    });

    test("check type", () => {

        type User = {
            name: string;
            age: number;
        };
        const user: User = {
            name: "John",
            age: 30,
        };

        function check(key: keyof User) {
            if (key in user) {
                return true;
            }
            return false;
        }

        expect(check("name")).toBeTruthy();
    });
});