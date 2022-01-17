const employee = require("../lib:/employee");

  describe("employee", () => {
    it("should instantiate through employee", () => {
      const execute = new employee();
      expect(typeof(execute)).toEqual("object");
    });

    it("should set name through constructor", () => {
        const execute = new employee("Chris");
        expect(execute.name).toEqual("Chris");
    });

    it("should set id through constructor", () => {
        const execute = new employee("Chris", 1);
        expect(execute.id).toEqual(1);
    });

    it("should set email through constructor", () => {
        const execute = new employee("Chris", 1, "chris@gmail.com");
        expect(execute.email).toEqual("chris@gmail.com");
    });

    describe("get Name", () => {
        it("should get name through getName()", () => {
            const execute = new employee("Chris");
            expect(execute.getName()).toEqual("Chris");
        });
    });

    describe("get Id", () => {
        it("should get Id through getId()", () => {
            const execute = new employee("Chris", 1);
            expect(execute.getId()).toEqual(1);
        });
    });

    describe("get Email", () => {
        it("should get email through getEmail()", () => {
            const execute = new employee("Chris", 1 ,"chris@gmail.com");
            expect(execute.getEmail()).toEqual("chris@gmail.com");
        });
    });

    describe("get Role", () => {
        it("should return 'Employee'", () => {
            const execute = new employee();
            expect(execute.getRole()).toEqual("Employee");
        });
    });
});