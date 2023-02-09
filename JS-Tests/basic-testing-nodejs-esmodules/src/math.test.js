import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2];
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );

  //Act
  const result = add(numbers);

  //assert

  expect(result).toBe(expectedResult);
});

it("should yield NaN if at lest one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const result = add(inputs);
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numberic string values provided", () => {
  const numbers = ["1", "2"];
  const result = add(numbers);
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yielf 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrowError();
});

it("should throw an error if provided with multiple arguments intead of an array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrowError(/is not iterable/);
});
