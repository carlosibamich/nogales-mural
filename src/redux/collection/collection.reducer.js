import CollectionActionTypes from './collection.types';

const INITIAL_STATE = {
  artCollection: [
    {
      name: 'Life, Death, Love and Art',
      imagePATH: require('../../assets/life-death-love-art.jpg'),
      price: 40,
      routeName: 'life-death-love-art',
      id: 3
    },
    {
      name: 'Beethoven',
      imagePATH: require('../../assets/beethoven.jpg'),
      price: 85,
      routeName: 'beethoven',
      id: 4
    },
    {
      name: 'Fat Man',
      imagePATH: require('../../assets/fat-man.jpg'),
      price: '',
      routeName: 'fat-man',
      id: 5
    },
    {
      name: 'Squares and Circles',
      imagePATH: require('../../assets/squares-circles.jpg'),
      price: '',
      routeName: 'squares-circles',
      id: 6
    },
    {
      name: 'Frida Kahlo',
      imagePATH: require('../../assets/frida-kahlo.jpg'),
      price: 35,
      routeName: 'frida-kahlo',
      id: 7
    },
    {
      name: 'Black Box',
      imagePATH: require('../../assets/black-box.jpg'),
      price: 30,
      routeName: 'black-box',
      id: 8
    },
    {
      name: 'Jean',
      imagePATH: require('../../assets/jean.jpg'),
      price: '',
      routeName: 'jean',
      id: 9
    },
    {
      name: 'Van Gogh',
      imagePATH: require('../../assets/vangogh-3.jpg'),
      price: 25,
      routeName: 'van-gogh',
      id: 10
    },
    {
      name: 'Nogales',
      imagePATH: require('../../assets/nogales-mural.jpg'),
      price: 180,
      routeName: 'nogales',
      id: 11
    },
    {
      name: 'Picasso in a Vermeer 1',
      imagePATH: require('../../assets/picasso-vermeer-1.jpg'),
      price: 40,
      routeName: 'picasso-vermeer-1',
      id: 12
    },
    {
      name: 'Picasso in a Vermeer 2',
      imagePATH: require('../../assets/picasso-vermeer-2.jpg'),
      price: 25,
      routeName: 'picasso-vermeer-2',
      id: 13
    },
    {
      name: 'Carlos and Crayons',
      imagePATH: require('../../assets/carlos-and-crayons.jpg'),
      price: '',
      routeName: 'carlos-crayons',
      id: 14
    },
    {
      name: 'Picasso in Vermeer 4',
      imagePATH: require('../../assets/picasso-vermeer-4.jpg'),
      price: 35,
      routeName: 'picasso-vermeer-4',
      id: 15
    },
    {
      name: 'José Alfredo Jiménez',
      imagePATH: require('../../assets/jose-alfredo.jpg'),
      price: 30,
      routeName: 'jose-alfredo-jimenez',
      id: 16
    },
    {
      name: 'America',
      imagePATH: require('../../assets/mother-child.jpg'),
      price: 35,
      routeName: 'america',
      id: 17
    },
    {
      name: 'Mercado Díaz',
      imagePATH: require('../../assets/mercado.jpg'),
      price: '',
      routeName: 'mercado-diaz',
      id: 18
    },
    {
      name: 'Picasso in a Vermeer 3',
      imagePATH: require('../../assets/picasso-vermeer-3.jpg'),
      price: 40,
      routeName: 'picasso-vermeer-3',
      id: 19
    }
  ]
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionActionTypes.DISPLAY_ART_PIECES:
      return {
        ...state,
        artCollection: action.payload
      }
    default:
      return state;
  };
};

export default collectionReducer;
// export to root-reducer