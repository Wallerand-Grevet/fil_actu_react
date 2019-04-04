export const reactionEmojis = {
    'likes': '☺️',
    'hearts': '😍',
    'sad': '😭',
  };
  
  export const actualites = [
    {
      id: '47ld',
      message: 'Bonjour tout le monde !',
      datePublication: Date.now() - 100,
      auteur: {
        nom: 'Arnaud',
        avatar: 'https://cdn.pixabay.com/photo/2015/11/07/11/22/dog-1031058_960_720.jpg',
      },
      reactions: {
        likes: 4,
        hearts: 5,
        sad: 0,
      },
      commentaires: [
        {
          message: 'Salut à toi !',
          datePublication: Date.now() - 30000,
          auteur: {
            nom: 'Nick',
            avatar: 'https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg',
          },
          actualiteId: '47ld',
        },
        {
          message: 'Salut',
          datePublication: Date.now() - 10000,
          auteur: {
            nom: 'Damien',
            avatar: 'https://pbs.twimg.com/profile_images/813159538119557126/Y1rUf3I5_bigger.jpg',
          },
          actualiteId: '47ld',
        },
      ],
    },
    {
      id: 'i9pz',
      message: 'Je ne sais plus quoi faire...',
      datePublication: Date.now() - 100000,
      auteur: {
        nom: 'Nick',
        avatar: 'https://pbs.twimg.com/profile_images/888229114338918401/yVyVEnej_bigger.jpg',
      },
      reactions: {
        likes: 1,
        hearts: 0,
        sad: 3,
      },
      commentaires: [],
    },
  ];
  