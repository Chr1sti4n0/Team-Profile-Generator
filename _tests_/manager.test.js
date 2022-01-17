const manager = require("../lib:/manager");

describe("manager", () => {
    it("should set office number through constructor", () => {
        const execute = new manager(null, null, null, 15);
        expect(execute.officeNumber).toEqual(15);
      });
          
    describe("get Role", () => {
        it("should return manager", () => {
            const execute = new manager();
            expect(execute.getRole()).toEqual("Manager");
        });
    });
    
    describe("get officeNumber", () => {
        it("should get office number through getOfficeNumber()", () => {
            const execute = new manager(null, null, null, 15);
            expect(execute.getOfficeNumber()).toEqual(15);
        });
    });
});