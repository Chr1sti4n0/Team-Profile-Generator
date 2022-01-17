const Engineer = require("../lib:/Engineer");

describe("Engineer", () => {
    it("should set GitHub username through constructor", () => {
        const execute = new Engineer(null, null, null, "Chr1sti4n0");
        expect(execute.github).toEqual("Chr1sti4n0");
      });
          
    describe("get Role", () => {
        it("should return Engineer", () => {
            const execute = new Engineer();
            expect(execute.getRole()).toEqual("Engineer");
        });
    });
    
    describe("get Github", () => {
        it("should get Github username through getGithub()", () => {
            const execute = new Engineer(null, null, null, "Chr1sti4n0");
            expect(execute.getGithub()).toEqual("Chr1sti4n0");
        });
    });
});