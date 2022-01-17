const intern = require("../lib:/intern");

describe("intern", () => {
    it("should set school through constructor", () => {
        const execute = new intern();
        expect(execute.school).toEqual("ASU");
      });
          
    describe("get Role", () => {
        it("should return intern", () => {
            const execute = new intern();
            expect(execute.getRole()).toEqual("intern");
        });
    });
    
    describe("get School", () => {
        it("should get school through getSchool()", () => {
            const execute = new intern();
            expect(execute.getSchool()).toEqual("ASU");
        });
    });
});