export interface Produto {
  id: number;
  nome: string;
  descricao: string;
}

export const PRODUTOS: Produto[] = [
  {
    id: 1,
    nome: 'Laranja',
    descricao: `A laranja é uma fruta rica em vitamina C, essencial para fortalecer o sistema imunológico e ajudar na prevenção de doenças, além de conter fibras que auxiliam no bom funcionamento do intestino e no controle do colesterol. Também é fonte de antioxidantes, que combatem o envelhecimento precoce das células, e de potássio, importante para a saúde do coração e dos músculos. Com baixo teor calórico e alto poder de hidratação, a laranja é uma opção saudável para o consumo diário, especialmente quando ingerida in natura.`,
  },
  {
    id: 2,
    nome: 'Maçã',
    descricao: `A maçã contém fibras solúveis como a pectina, que ajudam na digestão e no controle do colesterol. É uma boa fonte de vitamina C e antioxidantes. Consumir maçã regularmente pode contribuir para a saciedade e uma dieta equilibrada.`,
  },
  {
    id: 3,
    nome: 'Banana',
    descricao: `A banana é rica em potássio, que auxilia na função cardíaca e no funcionamento dos músculos. Também fornece carboidratos de rápida absorção e pequenas quantidades de fibras e vitaminas do complexo B.`,
  },
];
