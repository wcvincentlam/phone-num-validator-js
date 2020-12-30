# phone-num-validator-js
Validates the format of user's phone number input to match that of a valid US phone number, including the area code and/or country code if provided. Returns "true" for valid US phone number format, and "false" for an invalid format.

**Only validates the FORMAT, the relevant area codes are not tested for.**
Some examples of valid US phone number formats that are tested includes:
  - xxx-xxx-xxxx
  - xxx-xxx xxxx
  - xxx xxx-xxxx
  - xxx xxx xxxx
  - xxxxxxxxxx
  - (xxx)xxx-xxxx
  - (xxx)xxx xxxx
  - (xxx)xxxxxxx
  - (xxx) xxx-xxxx
  - (xxx) xxx xxxx
  - (xxx)-xxx xxxx
  - (xxx)-xxx-xxxx
  - 1 xxx xxx xxxx
  - 1(xxx) xxx xxxx
  - 1 (xxx) xxx xxxx
  - 1-xxx-xxx-xxxx
  - 1-xxx xxx-xxxx
  
Some examples of invalid US phone number formats that are tested includes:
  - xxx-xxxx
  - xxx)-xxx-xxxx
  - -1xxx-xxx-xxxx
  - 10(xxx)-xxx-xxxx
  - (xxx)(xxx)-xxxx

Distributed under The Unlicense. See ``LICENSE`` for more information.
