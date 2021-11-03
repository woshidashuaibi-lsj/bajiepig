test("test common matcher", () => {
	expect(2 + 2).toBe(4);
	expect(2 + 2).not.toBe(5);
});

test("test to br true or false", () => {
	expect(1).toBeTruthy();
	expect(0).toBeFalsy();
});

test("test number", () => {
	expect(4).toBeGreaterThan(3);
	expect(2).toBeLessThan(3);
});

test("test Object", () => {
	expect({ name: "lsj" }).toEqual({ name: "lsj" });
});
