import RegExpValidator from "./RegExpValidator";

const reg: RegExp = /^(https?:|mailto:|tel:)/;

class IsExternalValidtor extends RegExpValidator {
  constructor(){
    super(reg);
  };
}

export default IsExternalValidtor;