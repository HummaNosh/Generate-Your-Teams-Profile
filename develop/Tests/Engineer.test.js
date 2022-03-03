
const Engineer = require("../Library/Engineer")

describe("Creates an Engineer", () => {
    it ("Engineer name should get printed", () => {
        const name = "Farha";
        const Emp = new Engineer(name);
        expect(Emp.name).toBe(name);
    })

    it ("Engineer id should get printed", () => {
        const id = "012";
        const Emp = new Engineer("Farha", id);
        expect(Emp.id).toBe(id);
    })

    it ("Engineer email should get printed", () => {
        const email = "farha@yahoo.co.uk";
        const Emp = new Engineer("Farha", "012", email);
        expect(Emp.email).toBe(email);
    })

    it ("Engineer github username should get printed", () => {
        const github = "farhadin";
        const Emp = new Engineer("Farha", "012", "farha@yahoo.co.uk", github);
        expect(Emp.getGithub()).toBe(github);
    })
})