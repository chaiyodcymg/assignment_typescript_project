import { mergeCollections } from "../src/mergeCollections";

describe("mergeCollections function", () => {
    it("Collections should be merged and sorted", () => {
      const result = mergeCollections.mergeAndSort([5,16,2,0,7,1,30],[7,3,6,9,2,55,212])
      expect(result).toEqual([0, 1, 2, 2, 3, 5, 6 ,7, 7, 9, 16 , 30 , 55, 212 ]);
    });
});