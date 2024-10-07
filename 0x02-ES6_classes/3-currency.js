export default class Currency {
  constructor(code, name) {
    this._code = code; // Use _code and _name to directly assign the values in the constructor
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`; // Access properties through getters
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string' || !(code instanceof String)) {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string' || !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
}
