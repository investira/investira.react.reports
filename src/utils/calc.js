function somaAttr(pData = [], pOptions = {}) {
  if (!pOptions.hasOwnProperty("soma")) {
    console.error("Atributo soma deve ser informado em options");
    return 0;
  }

  if (!pOptions.hasOwnProperty("filter")) {
    console.error("Atributo filter deve ser informado em options");
    return 0;
  }

  if (!pOptions.hasOwnProperty("filter_value")) {
    console.error("Atributo filter_value deve ser informado em options");
    return 0;
  }

  const { soma, filter, filter_value } = pOptions;

  const xFilteredData = pData.filter((xItem) => {
    return xItem[filter] === filter_value;
  });

  const xSoma = xFilteredData.reduce((acc, curr) => {
    return acc + curr[soma];
  }, 0);

  return xSoma;
}

const calc = {
  somaAttr,
};

export default calc;
