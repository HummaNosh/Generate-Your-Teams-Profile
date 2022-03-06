const Intern = require("../Library/Intern")

describe("Creates an Intern", () => {
    it ("Intern name should get printed", () => {
        const name = "Peter";
        const Emp = new Intern(name);
        expect(Emp.name).toBe(name);
    })

    it ("Intern id should get printed", () => {
        const id = "013";
        const Emp = new Intern("Peter", id);
        expect(Emp.id).toBe(id);
    })

    it ("Intern email should get printed", () => {
        const email = "peter@yahoo.co.uk";
        const Emp = new Intern("Peter", "013", email);
        expect(Emp.email).toBe(email);
    })

    it ("Intern school should get printed", () => {
        const school = "Matthew boulton";
        const Emp = new Intern("Peter", "013", "peter@yahoo.co.uk", school);
        expect(Emp.getSchool()).toBe(school);
    })
})