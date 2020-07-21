const capitalLetter = (word: string, numLetter: number = 0) => {
  const wordToConvert = word.split(' ');
  let wordConverted = '';
  let firstPartWord = '';

  wordToConvert.forEach((letter) => {
    firstPartWord = letter.slice(0, numLetter);

    if (letter.length >= numLetter + 1) {
      const capital = letter[numLetter].toUpperCase();
      wordConverted += ` ${firstPartWord}${capital}${letter.slice(
        // eslint-disable-next-line comma-dangle
        numLetter + 1
      )}`;
    } else {
      wordConverted += ` ${firstPartWord}${letter.slice(numLetter + 1)}`;
    }
  });

  return wordConverted.trim();
};

export default capitalLetter;
