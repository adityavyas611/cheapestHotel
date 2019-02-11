const computeCost = require("./main");

test('Regular:16MAR2009,17MAR2009,18MAR2009 to Lakewood', () => {
  expect(computeCost('Regular:16MAR2009,17MAR2009,18MAR2009')).toEqual('Lakewood');
});

test('Regular:20MAR2009,21MAR2009,22MAR2009 to Bridgewood', () => {
  expect(computeCost('Regular:20MAR2009,21MAR2009,22MAR2009')).toEqual('Bridgewood');
});

test('Rewards:26MAR2009,27MAR2009,28MAR2009 to Ridgewood', () => {
  expect(computeCost('Rewards:26MAR2009,27MAR2009,28MAR2009')).toEqual('Ridgewood');
});

test('Rewards:26MAR2009,27MAR2009,28MAR2009 to Ridgewood', () => {
  expect(computeCost('Rewards:2FEB2019,3FEB2019,4FEB2019')).toEqual('Ridgewood');
});

