export const numbersFractionCalculator = (numbers: number[]) => {
    if (!numbers.length) return {
        positives: 0,
        negative: 0,
        zeros: 0
    }

    const length = numbers.length;
    let positives = 0, negative = 0, zeros = 0;

    numbers.forEach(number => {
        if (number > 0) positives++;
        else if (number < 0) negative++;
        else zeros++;
    })

    return {
        positives: positives / length,
        negative: negative / length,
        zeros: zeros / length
    }
};
