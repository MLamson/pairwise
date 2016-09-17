import {checkPairsForSum} from "../src/pairwise";

describe('pairwise', () => {
    it('take an empty array and arg of 100 return 0', () => {
        expect(checkPairsForSum.loopThroughArray([], 100)).toEqual(0);
    });
    it('take an [1, 3] array and arg of 4 return 1', () => {
        expect(checkPairsForSum.loopThroughArray([1, 3], 4)).toEqual(1);
    });
    it('take an [1, 3] array and arg of 3 return 0', () => {
        expect(checkPairsForSum.loopThroughArray([1, 3], 3)).toEqual(0);
    });
    it('take an [0, 0, 0, 0, 1, 1] array and arg of 1 return 10', () => {
        expect(checkPairsForSum.loopThroughArray([0, 0, 0, 0, 1, 1], 1)).toEqual(10);
    });
    it('take an [1, 1, 1] array and arg of 2 return 1', () => {
        expect(checkPairsForSum.loopThroughArray([1, 1, 1], 2)).toEqual(1);
    });
    it('take an [1, 4, 2, 3, 0, 5] array and arg of 7 return 11', () => {
        expect(checkPairsForSum.loopThroughArray([1, 4, 2, 3, 0, 5], 7)).toEqual(11);
    });
});