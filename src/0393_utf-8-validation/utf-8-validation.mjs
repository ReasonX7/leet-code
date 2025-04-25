/**
 *
 *      Number of Bytes   |        UTF-8 Octet Sequence
 *                        |              (binary)
 *    --------------------+-----------------------------------------
 *             1          |   0xxxxxxx
 *             2          |   110xxxxx 10xxxxxx
 *             3          |   1110xxxx 10xxxxxx 10xxxxxx
 *             4          |   11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 */

const getCharByteCountFast = (firstByte) => {
  if (firstByte >= 0b1100_0000 && firstByte <= 0b1110_0000 - 1) {
    return 2;
  }
  if (firstByte >= 0b1110_0000 && firstByte <= 0b1111_0000 - 1) {
    return 3;
  }
  if (firstByte >= 0b1111_0000 && firstByte <= 0b1111_1000 - 1) {
    return 4;
  }
  return 1;
};

const validateSingleByteChar = (byte) => {
  return byte <= 0b0111_1111;
};

const validateMultiByteChar = (bytes, currentIndex, byteCount) => {
  const lastIndex = currentIndex + byteCount - 1;

  for (let i = currentIndex; i < lastIndex; i++) {
    const isInRange = bytes[i] >= 0b1000_0000 && bytes[i] <= 0b1011_1111;

    if (!isInRange) {
      return false;
    }
  }

  return true;
};

const validateAllBytes = (bytes, currentIndex) => {
  const charByteCount = getCharByteCountFast(bytes[currentIndex]);

  const currentByteSequenceIsValid = charByteCount === 1
    ? validateSingleByteChar(bytes[currentIndex])
    : validateMultiByteChar(bytes, currentIndex + 1, charByteCount);

  if (!currentByteSequenceIsValid) {
    return false;
  }

  const nextIndex = currentIndex + charByteCount;

  return nextIndex === bytes.length || validateAllBytes(bytes, nextIndex);
};

export const validUtf8_Mine = (data) => {
  return validateAllBytes(data, 0);
};

export const validUtf8_LeetCodeFastestSolution = (data) => {
  let i = 0;
  while (i < data.length) {
    let byte = data[i];

    let numBytes = 0;
    if ((byte & 0b10000000) === 0) {
      numBytes = 1;
    } else if ((byte & 0b11100000) === 0b11000000) {
      numBytes = 2;
    } else if ((byte & 0b11110000) === 0b11100000) {
      numBytes = 3;
    } else if ((byte & 0b11111000) === 0b11110000) {
      numBytes = 4;
    } else {
      return false;
    }

    for (let j = 1; j < numBytes; j++) {
      if (i + j >= data.length || (data[i + j] & 0b11000000) !== 0b10000000) {
        return false;
      }
    }

    i += numBytes;
  }

  return true;
};

export const validUtf8 = validUtf8_Mine;
// export const validUtf8 = validUtf8_LeetCodeFastestSolution;
