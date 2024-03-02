export const propertiesData: any[] = [
  {
    id: 1,
    street: 'Rua da Primavera',
    number: 123,
    neighborhood: 'Jardim Botânico',
    city: 'Rio de Janeiro',
    uf: 'SP',
    country: 'Brasil',
    bedroom: 1,
    bathroom: 1,
    kitchen: 1,
    spot: 2,
    area: 120,
    externalArea: 100,
    price: 150,
    title: 'Acampamento de Luxo com Vista Panorâmica',
    description: 'Acampamento de luxo com vista panorâmica da cidade em condomínio exclusivo.',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property01.jpg',
    tags: ['Casas Modernas', 'Na praia'],
  },
  {
    id: 2,
    title: 'Casa Térrea com Jardim Exuberante',
    price: 200,
    city: 'Belo Horizonte',
    country: 'Brasil',
    bedroom: 4,
    area: 150,
    bathroom: 3,
    kitchen: 1,
    spot: 3,
    externalArea: 100,
    street: 'Avenida das Flores',
    number: 456,
    neighborhood: 'Centro',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property02.jpg',
    description: 'Casa térrea com jardim exuberante, oferecendo serenidade e privacidade.',
    uf: 'BA',
    tags: ['Casas Modernas', 'Na praia'],
  },
  {
    id: 3,
    title: 'Cobertura à Beira-mar com Terraço Privativo',
    price: 300,
    city: 'Porto Alegre',
    country: 'Brasil',
    bedroom: 6,
    area: 180,
    bathroom: 4,
    kitchen: 1,
    spot: 4,
    externalArea: 100,
    street: 'Rua Beira Mar',
    number: 789,
    neighborhood: 'Praia de Belas',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property04.jpg',
    description: 'Cobertura à beira-mar com terraço privativo e vistas deslumbrantes do oceano.',
    uf: 'SP',
    tags: ['Acampamento', 'No Interior'],
  },
  {
    id: 4,
    title: 'Aconchegante Acampamento de Um Quarto no Centro',
    price: 120,
    city: 'Fortaleza',
    country: 'Brasil',
    bedroom: 3,
    area: 100,
    bathroom: 2,
    kitchen: 1,
    spot: 1,
    externalArea: 100,
    street: 'Rua dos Coqueiros',
    number: 456,
    neighborhood: 'Meireles',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property05.jpg',
    description: 'Aconchegante Acampamento de um quarto no centro, repleto de charme e elegância.',
    uf: 'PE',
    tags: ['Acampamento', 'No Interior'],
  },
  {
    id: 5,
    title: 'Chalé Rústico com Lareira',
    price: 180,
    city: 'Curitiba',
    country: 'Brasil',
    bedroom: 4,
    area: 140,
    bathroom: 3,
    kitchen: 1,
    spot: 2,
    externalArea: 100,
    street: 'Alameda das Montanhas',
    number: 789,
    neighborhood: 'Alto da XV',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property06.jpg',
    description: 'Chalé rústico com lareira, ideal para um retiro encantador nas montanhas.',
    uf: 'ES',
    tags: ['Com Piscina', 'Nas Montanhas'],
  },
  {
    id: 6,
    title: 'Condomínio de Quatro Quartos com Design Sofisticado',
    price: 250,
    city: 'Recife',
    country: 'Brasil',
    bedroom: 5,
    area: 200,
    bathroom: 4,
    kitchen: 1,
    spot: 3,
    externalArea: 100,
    street: 'Rua dos Girassóis',
    number: 101,
    neighborhood: 'Boa Viagem',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property07.jpg',
    description: 'Condomínio de quatro quartos com design sofisticado e instalações de última geração.',
    uf: 'SP',
    tags: ['Com Piscina', 'Nas Montanhas'],
  },
  {
    id: 7,
    title: 'Sobrado Histórico Meticulosamente Restaurado',
    price: 90,
    city: 'Brasília',
    country: 'Brasil',
    bedroom: 2,
    area: 80,
    bathroom: 1,
    kitchen: 1,
    spot: 1,
    externalArea: 100,
    street: 'Quadra das Oliveiras',
    number: 34,
    neighborhood: 'Asa Sul',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property01.jpg',
    description: 'Sobrado histórico meticulosamente restaurado, preservando detalhes originais.',
    uf: 'SP',
    tags: ['Casas Modernas', 'Com Piscina'],
  },
  {
    id: 8,
    title: 'Duplex Penthouse com Terraço e Vista Deslumbrante',
    price: 160,
    city: 'Florianópolis',
    country: 'Brasil',
    bedroom: 3,
    area: 120,
    bathroom: 2,
    kitchen: 1,
    spot: 2,
    externalArea: 100,
    street: 'Rua das Palmeiras',
    number: 567,
    neighborhood: 'Centro',
    contactNumber: 'ex',
    email: 'ex',
    url: 'assets/properties/property02.jpg',
    description: 'Duplex penthouse com terraço e vista deslumbrante, oferecendo luxo exclusivo.',
    uf: 'MG',
    tags: ['Casas Modernas', 'Na praia'],
  }
];

export const tags: any[] = [
  { name: 'Na praia', src: 'assets/icons/beach.jpg', active: false },
  { name: 'Acampamento', src: 'assets/icons/camping.jpg', active: false },
  { name: 'No Interior', src: 'assets/icons/countryHouse.jpg', active: false },
  { name: 'Casas Modernas', src: 'assets/icons/house.jpg', active: false },
  { name: 'Nas Montanhas', src: 'assets/icons/mountains.jpg', active: false },
  { name: 'Com Piscina', src: 'assets/icons/pool.jpg', active: false },
]

export const users: any[] = [
  {
    id: 0,
    name: "Celso",
    email: "cp@gmail.com",
    password: "$2a$10$gw55KLfO1/MaMq30YKBqY.TDY9t2mTkg6MyM61Kw9oZ5qZTcZ9xmO"
  },
  {
    id: 1,
    name: "Gabriel",
    email: "gfm@gmail.com",
    password: "$2a$10$v1bn8.rieF/Bap1eCJY5O.q8gXzAttnaqDocx2W1MHZ8wKppAJl5e"
  }
]