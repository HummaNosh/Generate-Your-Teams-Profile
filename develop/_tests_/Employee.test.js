const Employee = require ('../Library/Employee');


describe("Creates an Employee", () => {
    it ("Employee name should get printed", () => {
        const name = "humma";
        const Emp = new Employee(name);
        expect(Emp.name).toBe(name);
    })

    it ("Employee id should get printed", () => {
        const id = "011";
        const Emp = new Employee("humma", id);
        expect(Emp.id).toBe(id);
    })

    it ("Employee email should get printed", () => {
        const email = "huma@yahoo.co.uk";
        const Emp = new Employee("humma", "011", email);
        expect(Emp.email).toBe(email);
    })
})

