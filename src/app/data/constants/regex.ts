
export const REGEX = {
  NOMBRES: /^^[a-zA-ZÑñ '.]*$/,

  APELLIDOS: /^^[a-zA-ZÑñ '.]*$/,

  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,

  ZIPCODE: /^(\d{1,10})/,

  TELEFONO: /^(\d{10})/,

  FECHAS: /^(\d{4})(\/|-)(0[1-9]|1[0-2])(\/|-)([0-2][0-9]|3[0-1])$/,

  SEGURO_S: /^(\d{3})-(\d{2})-(\d{4})/,

  DINERO: /^(\d{1,10})/,

  DIA: /\b([1-9]|[12][0-9]|3[01])\b/
}