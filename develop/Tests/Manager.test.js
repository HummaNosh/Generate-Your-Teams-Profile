const Manager = require("../Library/Manager")

describe("Creates an Manager", () => {
    it ("Manager name should get printed", () => {
        const name = "Kenny";
        const Emp = new Manager(name);
        expect(Emp.name).toBe(name);
    })

    it ("Manager id should get printed", () => {
        const id = "014";
        const Emp = new Manager("Kenny", id);
        expect(Emp.id).toBe(id);
    })

    it ("Manager email should get printed", () => {
        const email = "kenny@yahoo.co.uk";
        const Emp = new Manager("Kenny", "014", email);
        expect(Emp.email).toBe(email);
    })

    it ("Manager number should get printed", () => {
        const officeNumber = "0123456789";
        const Emp = new Manager("Kenny", "014", "kenny@yahoo.co.uk", officeNumber);
        expect(Emp.getOfficeNumber()).toBe(officeNumber);
    })
})