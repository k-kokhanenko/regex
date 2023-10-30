export default class Validator {
  validateUserName(name) {
    // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
    if (name.match(/^[A-Z0-9_-]+$/i) == null) {
      return false;
    }
    // Имя не должно содержать подряд более трёх цифр
    if (name.match(/\d{3}/) != null) {
      return false;
    }
    // Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире
    if (name.match(/^[-_\d{1}].*[-_\d{1}]$/) != null) {
      return false;
    }

    return true;
  }
}
