import { sum, subtract, multiple, isContain, stringReverse } from "./ex0.js";
describe("Tests de ex0.js", () => {
    test('1,2 should result equal 3', () => {
      expect(sum(1,2)).toBe(3);
    });
    test("2,1 should result equal 1", () => {
      expect(subtract(2,1)).toBe(1);
    });
    test("2,3 should result equal 6", () => {
      expect(multiple(3,2)).toBe(6);
    });
    test("ex included in exemple", () => {
      expect(isContain('exemple','ex')).toBeTruthy();
    });
    test("tr not included in exemple", () => {
      expect(isContain('exemple','tr')).toBeFalsy();
    });
    test("word is reverse", () => {
      expect(stringReverse('exemple')).toBeFalsy();
      // contient toutes les lettres avec split ?
      // lenght is equal
      // comparer 2 chaines de caract
    });

});