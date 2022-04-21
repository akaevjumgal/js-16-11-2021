
function groupBy<Type, Key extends keyof Type>(
  inputArray: Type[], key: Key
): { [key: string]: Type } {
  return inputArray.reduce<{ [key: string]: Type }>(
    (accumulator, item) => {
    const itemKey = item[key] as unknown as string;
    accumulator[itemKey] = item;
    return accumulator;
  }, {});
}

interface MockObject {
  name: string;
  age: number;
  dateOfBirth: Date;
}

const MOCK_ARRAY: MockObject[] = [
  {
    name: 'John',
    age: 14,
    dateOfBirth: new Date(),
  },
  {
    name: 'Claudia',
    age: 32,
    dateOfBirth: new Date(),
  },
  {
    name: 'Victor',
    age: 18,
    dateOfBirth: new Date(),
  }
]

console.log(groupBy(MOCK_ARRAY, 'name')['Claudia'])