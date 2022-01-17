const intern = require("../lib:/intern");

describe("intern", () => {
    it("should set school through constructor", () => {
        const execute = new intern(null, null, null, "ASU");
        expect(execute.school).toEqual("ASU");
      });
          
    describe("get Role", () => {
        it("should return intern", () => {
            const execute = new intern();
            expect(execute.getRole()).toEqual("Intern");
        });
    });
    
    describe("get School", () => {
        it("should get school through getSchool()", () => {
            const execute = new intern(null, null, null, "ASU");
            expect(execute.getSchool()).toEqual("ASU");
        });
    });
});