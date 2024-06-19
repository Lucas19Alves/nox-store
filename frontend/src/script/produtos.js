const ofertas = [
    {
      id: 1,
      name: "Camiseta lisa",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 39.99,
      type: "camisetas",
      colors: ["red", "green", "blue"]
    },
    {
      id: 2,
      name: "Short florido",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 29.99,
      type: "shorts",
      colors: ["yellow", "purple"]
    },
    {
      id: 3,
      name: "Blusa babylook",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 69.99,
      type: "blusas",
      colors: ["black", "white"]
    },
    {
      id: 4,
      name: "Camisa social",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 49.99,
      type: "camisas",
      colors: ["pink", "orange", "gray"]
    },
  ]
  
  const produtos = [
    {
      id: 1,
      name: "Camiseta lisa",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 39.99,
      type: "camisetas",
      colors: ["red", "green", "blue"]
    },
    {
      id: 2,
      name: "Short florido",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 29.99,
      type: "shorts",
      colors: ["yellow", "purple"]
    },
    {
      id: 3,
      name: "Blusa babylook",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 69.99,
      type: "blusas",
      colors: ["black", "white"]
    },
    {
      id: 4,
      name: "Camisa social",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 49.99,
      type: "camisas",
      colors: ["pink", "orange", "gray"]
    },
    {
      id: 5,
      name: "Vestido longo",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 89.99,
      type: "vestidos",
      colors: ["red", "blue", "black"]
    },
    {
      id: 6,
      name: "Calça jeans",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 99.99,
      type: "calças",
      colors: ["blue", "black"]
    },
    {
      id: 7,
      name: "Saia curta",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 49.99,
      type: "saias",
      colors: ["pink", "white", "yellow"]
    },
    {
      id: 8,
      name: "Blazer casual",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 129.99,
      type: "ternos",
      colors: ["gray", "black"]
    },
    {
      id: 9,
      name: "Sapato social",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 149.99,
      type: "calçados",
      colors: ["black", "brown"]
    },
    {
      id: 10,
      name: "Tênis esportivo",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 199.99,
      type: "calçados",
      colors: ["white", "blue", "red"]
    },
    {
      id: 11,
      name: "Bolsa feminina",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 89.99,
      type: "bolsas",
      colors: ["black", "red", "blue"]
    },
    {
      id: 12,
      name: "Relógio de pulso",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 249.99,
      type: "acessorios",
      colors: ["black", "silver", "gold"]
    },
    {
      id: 13,
      name: "Cinto de couro",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 39.99,
      type: "acessorios",
      colors: ["black", "brown"]
    },
    {
      id: 14,
      name: "Óculos de sol",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 59.99,
      type: "acessorios",
      colors: ["black", "brown", "blue"]
    },
    {
      id: 15,
      name: "Jaqueta de couro",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 199.99,
      type: "blusas",
      colors: ["black", "brown"]
    },
    {
      id: 16,
      name: "Camisa polo",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 49.99,
      type: "camisas",
      colors: ["blue", "white", "green"]
    },
    {
      id: 17,
      name: "Terno completo",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 399.99,
      type: "ternos",
      colors: ["black", "gray", "blue"]
    },
    {
      id: 18,
      name: "Meia esportiva",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 19.99,
      type: "acessorios",
      colors: ["white", "black"]
    },
    {
      id: 19,
      name: "Luvas de inverno",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 29.99,
      type: "acessorios",
      colors: ["black", "gray", "red"]
    },
    {
      id: 20,
      name: "Cachecol de lã",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 39.99,
      type: "acessorios",
      colors: ["blue", "red", "gray"]
    },
    {
      id: 21,
      name: "Camiseta estampada",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 29.99,
      type: "camisetas",
      colors: ["white", "black", "gray"]
    },
    {
      id: 22,
      name: "Short jeans",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 39.99,
      type: "shorts",
      colors: ["blue", "black"]
    },
    {
      id: 23,
      name: "Blusa de renda",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 79.99,
      type: "blusas",
      colors: ["white", "red"]
    },
    {
      id: 24,
      name: "Camisa xadrez",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 59.99,
      type: "camisas",
      colors: ["red", "blue", "green"]
    },
    {
      id: 25,
      name: "Vestido curto",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 69.99,
      type: "vestidos",
      colors: ["yellow", "green", "blue"]
    },
    {
      id: 26,
      name: "Calça de moletom",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 49.99,
      type: "calças",
      colors: ["gray", "black"]
    },
    {
      id: 27,
      name: "Saia midi",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 59.99,
      type: "saias",
      colors: ["blue", "green"]
    },
    {
      id: 28,
      name: "Blazer formal",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 159.99,
      type: "ternos",
      colors: ["black", "blue"]
    },
    {
      id: 29,
      name: "Sapato casual",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 99.99,
      type: "calçados",
      colors: ["brown", "gray"]
    },
    {
      id: 30,
      name: "Tênis casual",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 89.99,
      type: "calçados",
      colors: ["black", "white"]
    },
    {
      id: 31,
      name: "Bolsa de mão",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 79.99,
      type: "bolsas",
      colors: ["white", "red", "blue"]
    },
    {
      id: 32,
      name: "Relógio esportivo",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 199.99,
      type: "acessorios",
      colors: ["black", "blue", "red"]
    },
    {
      id: 33,
      name: "Cinto casual",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 29.99,
      type: "acessorios",
      colors: ["black", "tan"]
    },
    {
      id: 34,
      name: "Óculos de grau",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 79.99,
      type: "acessorios",
      colors: ["black", "blue"]
    },
    {
      id: 35,
      name: "Jaqueta jeans",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 149.99,
      type: "blusas",
      colors: ["blue", "black"]
    },
    {
      id: 36,
      name: "Camisa de linho",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 69.99,
      type: "camisas",
      colors: ["white", "beige"]
    },
    {
      id: 37,
      name: "Terno slim fit",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 449.99,
      type: "ternos",
      colors: ["black", "navy", "gray"]
    },
    {
      id: 38,
      name: "Meia social",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 24.99,
      type: "acessorios",
      colors: ["black", "gray"]
    },
    {
      id: 39,
      name: "Luvas de couro",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 49.99,
      type: "acessorios",
      colors: ["black", "brown"]
    },
    {
      id: 40,
      name: "Cachecol xadrez",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 49.99,
      type: "acessorios",
      colors: ["red", "black"]
    },
    {
      id: 41,
      name: "Camiseta regata",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 19.99,
      type: "camisetas",
      colors: ["white", "blue", "black"]
    },
    {
      id: 42,
      name: "Short esportivo",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 24.99,
      type: "shorts",
      colors: ["black", "gray"]
    },
    {
      id: 43,
      name: "Blusa manga longa",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 59.99,
      type: "blusas",
      colors: ["red", "blue"]
    },
    {
      id: 44,
      name: "Camisa de algodão",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 39.99,
      type: "camisas",
      colors: ["white", "black"]
    },
    {
      id: 45,
      name: "Vestido estampado",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 79.99,
      type: "vestidos",
      colors: ["pink", "blue"]
    },
    {
      id: 46,
      name: "Calça chino",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 59.99,
      type: "calças",
      colors: ["beige", "blue"]
    },
    {
      id: 47,
      name: "Saia plissada",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 69.99,
      type: "saias",
      colors: ["red", "black"]
    },
    {
      id: 48,
      name: "Blazer de veludo",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 199.99,
      type: "ternos",
      colors: ["green", "brown"]
    },
    {
      id: 49,
      name: "Sapato de camurça",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 119.99,
      type: "calçados",
      colors: ["brown", "gray"]
    },
    {
      id: 50,
      name: "Tênis de corrida",
      description: "Cores disponíveis:",
      image: "https://placehold.co/600x400",
      price: 159.99,
      type: "calçados",
      colors: ["blue", "black"]
    },
  ];

  export { ofertas, produtos };