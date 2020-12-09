import RegExpValidator from "./RegExpValidator";

const reg: RegExp = /^[A-Za-z]+$/

class AlphabetValidator extends RegExpValidator {
  constructor() {
    super(reg);
  }
}

export default AlphabetValidator;