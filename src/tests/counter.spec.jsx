
const state = {
  value: 0,
}

const setByAmount = (value) => {
  state.value = value;

  return state.value;
}

it('should set by value', () => {
  expect(setByAmount(15)).toEqual(15);
})