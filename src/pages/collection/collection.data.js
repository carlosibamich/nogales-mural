const COLLECTION_DATA = [
  {
    id: 1,
    language: 'english',
    items: [
      {
        name: 'Life, Death, Love and Art',
        imagePATH: require('../../assets/life-death-love-art.jpg'),
        routeName: 'life-death-love-art',
        id: 3
      },
      {
        name: 'Beethoven',
        imagePATH: require('../../assets/beethoven.jpg'),
        routeName: 'beethoven',
        id: 4
      },
      {
        name: 'Fat Man',
        imagePATH: require('../../assets/fat-man.jpg'),
        routeName: 'fat-man',
        id: 5
      },
      {
        name: 'Squares and Circles',
        imagePATH: require('../../assets/squares-circles.jpg'),
        routeName: 'squares-circles',
        id: 6
      },
      {
        name: 'Frida Kahlo',
        imagePATH: require('../../assets/frida-kahlo.jpg'),
        routeName: 'frida-kahlo',
        id: 7
      },
      {
        name: 'Black Box',
        imagePATH: require('../../assets/black-box.jpg'),
        routeName: 'black-box',
        id: 8
      },
      {
        name: 'Jean',
        imagePATH: require('../../assets/jean.jpg'),
        routeName: 'jean',
        id: 9
      },
      {
        name: 'Van Gogh',
        imagePATH: require('../../assets/vangogh-3.jpg'),
        routeName: 'van-gogh',
        id: 10
      },
      {
        name: 'Nogales',
        imagePATH: require('../../assets/nogales-mural.jpg'),
        routeName: 'nogales',
        id: 11
      },
      {
        name: 'Picasso in a Vermeer 1',
        imagePATH: require('../../assets/picasso-vermeer-1.jpg'),
        routeName: 'picasso-vermeer-1',
        id: 12
      },
      {
        name: 'Picasso in a Vermeer 2',
        imagePATH: require('../../assets/picasso-vermeer-2.jpg'),
        routeName: 'picasso-vermeer-2',
        id: 13
      },
      {
        name: 'Carlos and Crayons',
        imagePATH: require('../../assets/carlos-and-crayons.jpg'),
        routeName: 'carlos-crayons',
        id: 14
      },
      {
        name: 'Picasso in Vermeer 4',
        imagePATH: require('../../assets/picasso-vermeer-4.jpg'),
        routeName: 'picasso-vermeer-4',
        id: 15
      },
      {
        name: 'José Alfredo Jiménez',
        imagePATH: require('../../assets/jose-alfredo.jpg'),
        routeName: 'jose-alfredo-jimenez',
        id: 16
      },
      {
        name: 'America',
        imagePATH: require('../../assets/mother-child.jpg'),
        routeName: 'america',
        id: 17
      },
      {
        name: 'Mercado Díaz',
        imagePATH: require('../../assets/mercado.jpg'),
        routeName: 'mercado-diaz',
        id: 18
      },
      {
        name: 'Picasso in a Vermeer 3',
        imagePATH: require('../../assets/picasso-vermeer-3.jpg'),
        routeName: 'picasso-vermeer-3',
        id: 19
      }
    ]
  },
  // {
  //   id: 2,
  //   language: 'español',
  //   items: [
  //     {
  //       nombre: 'La Vida, La Muerte, El Amor y El Arte',
  //       imagePATH: require('../../assets/life-death-love-art.jpg'),
  //       routeName: 'vida-muerte-amor-arte',
  //       id: 20
  //     },
  //     {
  //       nombre: 'Beethoven',
  //       imagePATH: require('../../assets/beethoven.jpg'),
  //       routeName: 'beethoven',
  //       id: 21
  //     },
  //     {
  //       nombre: 'Fat Man',
  //       imagePATH: require('../../assets/fat-man.jpg'),
  //       routeName: 'fat-man',
  //       id: 22
  //     },
  //     {
  //       nombre: 'Cuadros y Círculos',
  //       imagePATH: require('../../assets/squares-circles.jpg'),
  //       routeName: 'circulos-cuadros',
  //       id: 23
  //     },
  //     {
  //       nombre: 'Frida Kahlo',
  //       imagePATH: require('../../assets/frida-kahlo.jpg'),
  //       routeName: 'frida-kahlo',
  //       id: 24
  //     },
  //     {
  //       nombre: 'La Caja Negra',
  //       imagePATH: require('../../assets/black-box.jpg'),
  //       routeName: 'caja-negra',
  //       id: 25
  //     },
  //     {
  //       nombre: 'Jean',
  //       imagePATH: require('../../assets/jean.jpg'),
  //       routeName: 'jean',
  //       id: 26
  //     },
  //     {
  //       nombre: 'Van Gogh',
  //       imagePATH: require('../../assets/vangogh-3.jpg'),
  //       routeName: 'van-gogh',
  //       id: 27
  //     },
  //     {
  //       nombre: 'Nogales',
  //       imagePATH: require('../../assets/nogales-mural.jpg'),
  //       routeName: 'nogales',
  //       id: 28
  //     },
  //     {
  //       nombre: 'Picasso en un Vermeer 1',
  //       imagePATH: require('../../assets/picasso-vermeer-1.jpg'),
  //       routeName: 'picasso-vermeer-1',
  //       id: 29
  //     },
  //     {
  //       nombre: 'Picasso en un Vermeer 2',
  //       imagePATH: require('../../assets/picasso-vermeer-2.jpg'),
  //       routeName: 'picasso-vermeer-2',
  //       id: 30
  //     },
  //     {
  //       nombre: 'Carlos y Crayolas',
  //       imagePATH: require('../../assets/carlos-and-crayons.jpg'),
  //       routeName: 'carlos-crayolas',
  //       id: 31
  //     },
  //     {
  //       nombre: 'Picasso en un Vermeer 4',
  //       imagePATH: require('../../assets/picasso-vermeer-4.jpg'),
  //       routeName: 'picasso-vermeer-4',
  //       id: 32
  //     },
  //     {
  //       nombre: 'José Alfredo Jiménez',
  //       imagePATH: require('../../assets/jose-alfredo.jpg'),
  //       routeName: 'jose-alfredo-jimenez',
  //       id: 33
  //     },
  //     {
  //       nombre: 'America',
  //       imagePATH: require('../../assets/mother-child.jpg'),
  //       routeName: 'america',
  //       id: 34
  //     },
  //     {
  //       nombre: 'Mercado Díaz',
  //       imagePATH: require('../../assets/mercado.jpg'),
  //       routeName: 'mercado-diaz',
  //       id: 35
  //     },
  //     {
  //       nombre: 'Picasso en un Vermeer 3',
  //       imagePATH: require('../../assets/picasso-vermeer-3.jpg'),
  //       routeName: 'picasso-vermeer-3',
  //       id: 36
  //     }
  //   ]
  //  }
];

export default COLLECTION_DATA;
//export to collection-data.component and portfolio.component