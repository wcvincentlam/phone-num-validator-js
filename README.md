# phone-num-validator-js
Validates the format of user's phone number input to match that of a valid US phone number, including the area code and/or country code if provided. Returns "true" for valid US phone number format, and "false" for an invalid format.

**Only validates the FORMAT, the relevant area codes are not tested for.**

Some examples of valid US phone number formats that are tested includes:
  - 123-456-7890
  - 123-456 7890
  - 123 456-7890
  - 123 456 7890
  - 1234567890
  - (123)456-7890
  - (123)456 7890
  - (123)4567890
  - (123) 456-7890
  - (123) 456 7890
  - (123)-456 7890
  - (123)-456-7890
  - 1 123 456 7890
  - 1(123) 456 7890
  - 1 (123) 456 7890
  - 1123-456-7890
  - 1 123 456-7890
  
Some examples of invalid US phone number formats that are tested includes:
  - 456-7890
  - 234)-567-7890
  - -1123-456-7890
  - 10(1a2)-3b4-5678
  - (12@)(34?)-56789

Distributed under The Unlicense. See ``LICENSE`` for more information.
