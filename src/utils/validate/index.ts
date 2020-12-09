import IsExternalValidator from './IsExternalValidator';
import RegExpValidator from './RegExpValidator';
import EmailValidator from './EmailValidator';
import UrlValidator from './UrlValidator';
import AlphabetValidator from './AlphabetValidator';


export function isExternal(s:string):boolean {
  return new IsExternalValidator().isAcceptable(s);
}

export function validUrl(url: string): boolean {
  return new UrlValidator().isAcceptable(url);
}

export function validEmail(email: string): boolean {
  return new EmailValidator().isAcceptable(email);
}

export function validRegExp(regexp: RegExp, s: string): boolean {
  return new RegExpValidator(regexp).isAcceptable(s);
}

export function validAlphabets(str: string): boolean {
  return new AlphabetValidator().isAcceptable(str);
}

