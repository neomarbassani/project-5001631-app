/* eslint-disable radix */
const taxaDeAcumulo = {
  campoNativo: {
    janeiro: '17.6',
    fevereiro: '16.5',
    março: '12.7',
    abril: '9.3',
    maio: '3.5',
    junho: '6.7',
    julho: '6.8',
    agosto: '0.1',
    setembro: '5.7',
    outubro: '17.2',
    novembro: '14.6',
    dezembro: '11',
    media: '10.1',
    minimo: '0.1',
  },
  azevem: {
    janeiro: undefined,
    fevereiro: undefined,
    março: undefined,
    abril: undefined,
    maio: '16.66',
    junho: '44.1',
    julho: '71.9',
    agosto: '56.3',
    setembro: '76.6',
    outubro: '50.8',
    novembro: '9.4',
    dezembro: undefined,
    media: '46.5',
    minimo: '9.4',
  },
  aveiaAzevem: {
    janeiro: undefined,
    fevereiro: undefined,
    março: undefined,
    abril: undefined,
    maio: '23.1',
    junho: '34',
    julho: '43.6',
    agosto: '67.6',
    setembro: '48.8',
    outubro: '29.2',
    novembro: '16.8',
    dezembro: undefined,
    media: '37.6',
    minimo: '16.8',
  },
  sudao: {
    janeiro: '123',
    fevereiro: '130',
    março: '64.06',
    abril: '18.8',
    maio: undefined,
    junho: undefined,
    julho: undefined,
    agosto: undefined,
    setembro: undefined,
    outubro: undefined,
    novembro: '67',
    dezembro: '88',
    media: '81.8',
    minimo: '18.8',
  },
  milheto: {
    janeiro: '178',
    fevereiro: '140.9',
    março: '122.9',
    abril: '63.1',
    maio: '16.4',
    junho: undefined,
    julho: undefined,
    agosto: undefined,
    setembro: undefined,
    outubro: undefined,
    novembro: '101.2',
    dezembro: '226.9',
    media: '121.3',
    minimo: '16.4',
  },
  sorgo: {
    janeiro: '79.1',
    fevereiro: '52.2',
    março: '60.9',
    abril: '49.5',
    maio: '24.3',
    junho: undefined,
    julho: undefined,
    agosto: undefined,
    setembro: undefined,
    outubro: undefined,
    novembro: '67',
    dezembro: '86.4',
    media: '59.9',
    minimo: '24.3',
  },
  tifton: {
    janeiro: '115.2',
    fevereiro: '113.4',
    março: '83.5',
    abril: '71.3',
    maio: '38.1',
    junho: undefined,
    julho: undefined,
    agosto: undefined,
    setembro: undefined,
    outubro: undefined,
    novembro: '57.1',
    dezembro: '111.7',
    media: '84.3',
    minimo: '38.1',
  },
  papua: {
    janeiro: '152',
    fevereiro: '165.9',
    março: '145.3',
    abril: '71',
    maio: undefined,
    junho: undefined,
    julho: undefined,
    agosto: undefined,
    setembro: undefined,
    outubro: undefined,
    novembro: '83',
    dezembro: '124.1',
    media: '123.5',
    minimo: '71',
  },
  campoNativoMelhorado: {
    janeiro: '59.1',
    fevereiro: '33.5',
    março: '16.8',
    abril: '7.6',
    maio: '4.5',
    junho: '6',
    julho: '10.6',
    agosto: '16.9',
    setembro: '23.5',
    outubro: '29',
    novembro: '31.9',
    dezembro: '30.7',
    media: '22.5',
    minimo: '4.5',
  },
};

const especie = {
  campoNativo: {
    relacaoMassaAltura: 197.8,
    alturaOtima: 12,
  },
  azevem: {
    relacaoMassaAltura: 119.6,
    alturaOtima: 20,
  },
  aveiaAzevem: {
    relacaoMassaAltura: 93,
    alturaOtima: 25,
  },
  sudao: {
    relacaoMassaAltura: 62.7,
    alturaOtima: 30,
  },
  milheto: {
    relacaoMassaAltura: 63.8,
    alturaOtima: 40,
  },
  sorgo: {
    relacaoMassaAltura: 40.6,
    alturaOtima: 50,
  },
  tifton: {
    relacaoMassaAltura: 227.1,
    alturaOtima: 19,
  },
  papua: {
    relacaoMassaAltura: 59.9,
    alturaOtima: 30,
  },
  campoNativoMelhorado: {
    relacaoMassaAltura: 229.5,
    alturaOtima: 12,
  },
};

const consumo = {
  bovinoCorte: {
    terneiro: weigth =>
      ((Math.pow(weigth, 0.75) *
        (0.2435 * 1.2 - 0.046 * Math.pow(1.2, 2) - 0.1128)) /
        1.2) *
      1.16,
    novilha: weigth =>
      (Math.pow(weigth, 0.75) *
        (0.2435 * 1.2 - 0.0466 * Math.pow(1.2, 2) - 0.0869)) /
      1.2,
    vacaSeca: weigth =>
      (Math.pow(weigth, 0.75) * (0.04997 * Math.pow(1.2, 2) + 0.0384)) / 1.2,
    vacaPrenha: weight =>
      (Math.pow(weight, 0.75) * (0.04997 * 1.2 + 0.04631)) / 1.2 + 0.2 * 10,
  },
  bovinoLeite: {
    novilha: (weigth, daysOfLactation) => {
      if (daysOfLactation < 210) {
        return (
          ((Math.pow(weigth, 0.75) *
            (0.2435 * 1.35 - 0.0466 * Math.pow(1.35, 2) - 0.1128)) /
            1.35) *
          1.16
        );
      }
      if (daysOfLactation >= 210 && daysOfLactation < 259) {
        ((Math.pow(weigth, 0.75) *
          (0.2435 * 1.35 - 0.0466 * Math.pow(1.35, 2) - 0.1128)) /
          1.35) *
          (1 + (210 - daysOfLactation) * 0.0025) *
          1.16;
      }
      if (daysOfLactation > 259) {
        ((1.71 - 0.69 * Math.pow(2.72, 0.35 * daysOfLactation - 280)) / 100) *
          weigth *
          1.16;
      }
    },
    vacaLactacao: (weigth, weeksOfLactation, milkQuantity) => {
      const FC1 = 0.4 * milkQuantity + 15 * 0.03 * milkQuantity;
      const FC2 = 1 - Math.pow(2.72, -1 * 0.192 * weeksOfLactation + 3.67);

      return (Math.pow(weigth, 0.75) * 0.0968 + 0.372 * FC1 - 0.293) * FC2;
    },
  },
};

const mouth = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

// Ajustar lotação Animal Continuo
export function numberOfAnimalsContinuous({
  startDate,
  weigth,
  pastureHeight,
  typeOfPasture,
  foalArea,
}) {
  /* const fodderMass =
    pastureHeight * parseInt(especie[typeOfPasture].relacaoMassaAltura);

  const forageAvailability =
    fodderMass / 30 + parseInt(taxaDeAcumulo[typeOfPasture][mouth[startDate]]);

  const animalLoad = forageAvailability / 0.12;

  const results = {
    name: 'Número de animais no potreiro',
    value: Math.round((animalLoad / weigth) * foalArea).toLocaleString('pt-BR'),
  };

  console.log(results);
  return results; */

  const results = [
    {
      name: 'Número de animais no potreiro',
      value: Math.round(pastureHeight + foalArea).toLocaleString('pt-BR'),
    },
  ];

  return results;
}

// Ajustar lotação Animal Rotativo
export function numberOfAnimalsRotative({
  startDate,
  weigth,
  foodQuantity,
  numberOfTracks,
  pastureHeight,
  typeOfPasture,
  milkQuantity = 0,
  lenghtOfStay,
  foalArea,
  weeksOfLactation = 0,
}) {
  /* const accumulationRate = parseInt(
    taxaDeAcumulo[typeOfPasture][mouth[new Date(startDate).getMonth()]],
  ); */

  const results = [
    {
      name: 'Número de animais no potreiro',
      value: Math.round(pastureHeight + foalArea).toLocaleString('pt-BR'),
    },
  ];

  return results;

  /* console.log({
    startDate,
    weigth,
    foodQuantity,
    numberOfTracks,
    pastureHeight,
    typeOfPasture,
    milkQuantity,
    lenghtOfStay,
    foalArea,
    weeksOfLactation,
  }); */
}

// Tamanho potreiro Rotativo
export function foalSizeRotative({
  startDate,
  weigth,
  animalsAmount,
  rationAmount,
  silageAmount,
  typeOfPasture,
}) {
  /* console.log({
    startDate,
    weigth,
    animalsAmount,
    rationAmount,
    silageAmount,
    typeOfPasture,
  }); */

  const results = [
    {
      name: 'Área total do potreiro (ha)',
      value: Math.round(weigth + weigth).toLocaleString('pt-BR'),
    },
  ];

  return results;
}

// Tamanho potreiro Continuo
export function foalSizeContinuous({
  startDate,
  weigth,
  typeOfPasture,
  animalsAmount,
}) {
  /* console.log({
    startDate,
    weigth,
    typeOfPasture,
  }); */
  const results = [
    {
      name: 'Área total do potreiro (ha)',
      value: Math.round(weigth + animalsAmount).toLocaleString('pt-BR'),
    },
  ];

  return results;
}

// Fornecer suplemento continuo
export function supplyAmountContinuous({
  startDate,
  weigth,
  animalsAmount,
  foalArea,
  pastureHeight,
  typeOfAnimal,
  typeOfPasture,
}) {
  /* console.log({
    startDate,
    weigth,
    pastureHeight,
    typeOfPasture,
    typeOfAnimal,
    animalsAmount,
    foalArea,
  }); */
  const results = [
    {
      name:
        'Quantidade de ração a ser fornecida por animal/dia (kg MS/animal/dia)',
      value: Math.round(pastureHeight + foalArea).toLocaleString('pt-BR'),
    },
  ];

  return results;
}

// Fornecer suplemento rotativo
export function supplyAmountRotative({
  startDate,
  weigth,
  animalsAmount,
  foalArea,
  pastureHeight,
  typeOfAnimal,
  tracksAmount,
  daysOfStay,
  typeOfPasture,
}) {
  /* console.log({
    startDate,
    weigth,
    animalsAmount,
    foalArea,
    pastureHeight,
    typeOfAnimal,
    tracksAmount,
    daysOfStay,
    typeOfPasture,
  }); */
  const results = [
    {
      name:
        'Quantidade total de ração a ser fornecida por dia para os animais (kg MS/dia)',
      value: Math.round(pastureHeight + foalArea).toLocaleString('pt-BR'),
    },
  ];

  return results;
}

export function daysAmountRotative({
  startDate,
  weigth,
  animalsAmount,
  foalArea,
  pastureHeight,
  typeOfAnimal,
  tracksAmount,
  supplyAmount,
  typeOfPasture,
}) {
  /* console.log({
    startDate,
    weigth,
    supplyAmount,
    animalsAmount,
    foalArea,
    pastureHeight,
    typeOfAnimal,
    tracksAmount,
    typeOfPasture,
  }); */

  const results = [
    {
      name:
        'Período de ocupação (tempo de permanência dos animais em cada faixa, em dias)',
      value: Math.round(pastureHeight + foalArea).toLocaleString('pt-BR'),
    },
  ];

  return results;
}

// Calcular número de piquetes
export function tracksAmountRotative({
  startDate,
  weigth,
  animalsAmount,
  foalArea,
  feedInTheTrough,
  receivingSilageOrHay,
}) {
  const results = [
    {
      name: 'Número de faixas',
      value: Math.round(weigth + foalArea).toLocaleString('pt-BR'),
    },
  ];

  return results;

  /*  console.log({
    startDate,
    weigth,
    animalsAmount,
    foalArea,
    feedInTheTrough,
    receivingSilageOrHay,
  }); */
}
