export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  const dices = [dice1, dice2, dice3]

  dices.forEach(element => {
    if (element < 1 || element > 6) {
      throw new Error('Dice out of number range');
    }
  });

  if (dice1 === dice2 && dice1 === dice3) {
    return dice1 * 3;
  }

  if (dice1 === dice2 || dice1 === dice3) {
    return dice1 * 2;
  } else if (dice2 === dice3) {
    return dice2 * 2;
  }

  return dices.sort()[2];
};
