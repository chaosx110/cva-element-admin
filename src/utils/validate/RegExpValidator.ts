import { Validator } from "./Validator";

class RegExpValidator implements Validator {
  constructor(private readonly reg: RegExp) {}
  isAcceptable(s: string): boolean {
    return this.reg.test(s);
  }
}

export default RegExpValidator;