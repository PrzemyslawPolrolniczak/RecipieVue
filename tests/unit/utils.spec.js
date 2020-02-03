import { sortArrayOfObjects, convertToSlug } from "@/utils";

describe("convertToSlug", () => {
  test("Converts text to slug", () => {
    const text = "Some generic recipie name";
    const slug = convertToSlug(text);

    const expectedSlug = "some_generic_recipie_name";

    expect(slug).toMatch(expectedSlug);
  });
});

describe("sortArrayOfObjects", () => {
  const testObjects = [
    {
      string: "GHI",
      number: 2,
      boolean: true
    },
    {
      string: "DEF",
      number: 1,
      boolean: false
    },
    {
      string: "ABC",
      number: 3,
      boolean: true
    }
  ];

  test("Sorts array of objects by string", () => {
    const sortedTestObjects = sortArrayOfObjects(testObjects, "string", "asc");

    expect(sortedTestObjects[0].string).toBe("ABC");
    expect(sortedTestObjects[1].string).toBe("DEF");
    expect(sortedTestObjects[2].string).toBe("GHI");
  });

  test("Sorts array of objects by number", () => {
    const sortedTestObjects = sortArrayOfObjects(testObjects, "number", "asc");

    expect(sortedTestObjects[0].number).toBe(1);
    expect(sortedTestObjects[1].number).toBe(2);
    expect(sortedTestObjects[2].number).toBe(3);
  });

  test("Sorts array of objects by boolean", () => {
    const sortedTestObjects = sortArrayOfObjects(testObjects, "boolean", "asc");

    expect(sortedTestObjects[0].boolean).toBe(false);
    expect(sortedTestObjects[1].boolean).toBe(true);
    expect(sortedTestObjects[2].boolean).toBe(true);
  });

  test("Sorts array in correct order when param is passed", () => {
    const sortedTestObjects = sortArrayOfObjects(testObjects, "number", "desc");

    expect(sortedTestObjects[0].number).toBe(3);
  });
});
