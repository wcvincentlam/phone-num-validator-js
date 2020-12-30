function telephoneCheck(str) {
    var regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    return regex.test(str);
  }
  telephoneCheck("1(111)-456-7891");

  /*

  ^(1\s?)? checks for 1 in the beginning, followed by a space or not.

  (\d{3}|\(\d{3}\)) following a similar concept, this looks for three digits, OR an open parentheses followed by three digits and a closed parentheses.
  
  [\-\s]? checks for space or hyphen.
  
  \d{4}$ four digits at the last of the string.

  */