describe("Running a sample test", () => {
    beforeEach(() => {
        $("~app-root").waitForDisplayed(11000, false)
    });
  
    it("Should increase the count by 1", () => {
        $("~increase-count").click();
    });
  });