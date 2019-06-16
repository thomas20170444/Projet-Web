const myQuestions = [
  {
    question: "Où le célèbre révolutionnaire Marat fut assassiné ?",
    answers: {
      a: "dans sa beignoire",
      b: "dans son lit",
      c: "à l'assemblée"
    },
    correctAnswer: "a"
  },
  {
    question: "Qui appelle-t-on le fils de la révolution ?",
    answers: {
      a: "Louis XVII",
      b: "Napoléon Ier",
      c: "Danton"
    },
    correctAnswer: "b"
  },
  {
    question: "Quand fut proclammée la première République ?",
    answers: {
      a: "21 septembre 1792",
      b: "4 aout 1789",
      c: "14 juillet 1789"
    },
    correctAnswer: "a"
  },
  {
    question: "Quel lieu parisien fut entièrement détruit par les révolutionnaires ?",
    answers: {
      a: "Le pont Neuf",
      b: "Le palais des tuilleries",
      c: "La prison de la Bastille"
    },
    correctAnswer: "c"
  },
  {
    question: "Quel révolutionnaire eut pour derniers mots : j'emporte avec moi les derniers lambeaux de la monarchie?",
    answers: {
      a: "Danton",
      b: "Mirabeau",
      c: "Roberpierre"
    },
    correctAnswer: "b"
  },
  {
    question: "Quel fut le premier débat qui mena à l'apparition du clivage droite gauche en France ?",
    answers: {
      a: "le droit de véto du roi",
      b: "la mort du roi",
      c: "l'imposition des nobles"
    },
    correctAnswer: "a"
  },
  {
    question: "Où fut emprisonnée la famille royale ?",
    answers: {
      a: "dans la prision de la bastille",
      b: "dans la prison du temple",
      c: "au palais de justice"
    },
    correctAnswer: "b"
  },
  {
    question: "Qui a inventé la guillotine ?",
    answers: {
      a: "Joseph Ignace Guillotin",
      b: "Louis XVI",
      c: "L'abbé Syes"
    },
    correctAnswer: "a"
  },
  {
    question: "Où fut emprisonnée la famille royale ?",
    answers: {
      a: "dans la prision de la bastille",
      b: "dans la prison du temple",
      c: "au palais de justice"
    },
    correctAnswer: "b"
  },
  {
    question: "Qui a inventé la guillotine ?",
    answers: {
      a: "Joseph Ignace Guillotin",
      b: "Louis XVI",
      c: "L'abbé Syes"
    },
    correctAnswer: "a"
  },


  /* Antiquité */

  {
    question: "Quand a eu lieu la conquête de la Gaule par Jules César ?",
    answers: {
      a: "en -300 av-JC",
      b: "en -52 av-JC",
      c: "en -78 av-JC"
    },
    correctAnswer: "b"
  },
  {
    question: "Quelle est la dernière hypothèse quant à l'implantation de la Lutèce gauloise ?",
    answers: {
      a: "à Toulouse",
      b: "à Paris",
      c: "à Nanterre"
    },
    correctAnswer: "c"
  },
  {
    question: "À quoi une amphore servait-elle ?",
    answers: {
      a: "à des pratiques funéraires",
      b: "à lester les bateaux",
      c: "à transporter de la nourriture"
    },
    correctAnswer: "c"
  },
  {
    question: "Quelle était la sauce préférée des Romains ?",
    answers: {
      a: "le jus de poisson fermenté",
      b: "la sauce tomate",
      c: "la sauce au sang"
    },
    correctAnswer: "a"
  },
  {
    question: "Quelle est la hauteur du Pont du Gard ?",
    answers: {
      a: "49 mètres",
      b: "23 mètres",
      c: "9 mètres"
    },
    correctAnswer: "a"
  },
  {
    question: "Quel est le volcan dont l’éruption a détruit Pompéi ?",
    answers: {
      a: "le Stromboli",
      b: "le Vésuve",
      c: "l'Etna"
    },
    correctAnswer: "b"
  },
  {
    question: "Quelle culture étrangère imprégna la civilisation romaine ?",
    answers: {
      a: "la culture indienne",
      b: "la culture grecque",
      c: "la culture du maïs"
    },
    correctAnswer: "b"
  },
  {
    question: "A quel âge les jeunes spartiates étaient-ils confiés à l'Etat pour devenir des soldats ?",
    answers: {
      a: "13 ans",
      b: "7 ans",
      c: "17 ans"
    },
    correctAnswer: "b"
  },
  {
    question: "Où se trouve Carthage ?",
    answers: {
      a: "en Espagne",
      b: "en Afrique",
      c: "en Bretagne"
    },
    correctAnswer: "b"
  },
  {
    question: "Dans la Grèce antique, où avaient lieu les jeux les plus importants ?",
    answers: {
      a: "à Delphes",
      b: "à Olympie",
      c: "à Athènes"
    },
    correctAnswer: "b"
  },


  /* Renaissance */
  {
    question: "Qui a inventé le premier plan d'hélicoptère ?",
    answers: {
      a: "Léonard de Vincie",
      b: "Galilée",
      c: "Copernic"
    },
    correctAnswer: "a"
  },
  {
    question: "Quel fut le deuxième roi français de la renaissance ?",
    answers: {
      a: "Henri II",
      b: "François II",
      c: "Henri III"
    },
    correctAnswer: "a"
  },
  {
    question: "Quel fut le dernier roi de la renaissance ?",
    answers: {
      a: "Henri III",
      b: "Henri IV",
      c: "Louis Philippe"
    },
    correctAnswer: "b"
  },
  {
    question: "Quel était la profession des memebres de la famille Médicis ?",
    answers: {
      a: "Tailleurs",
      b: "Religieux",
      c: "Banquiers"
    },
    correctAnswer: "c"
  },
  {
    question: "En quel année fut signé l'édit de Nantes ?",
    answers: {
      a: "1496",
      b: "1598",
      c: "1589"
    },
    correctAnswer: "b"
  },
  {
    question: "Qui signa l'édit de Nantes",
    answers: {
      a: "Catherine de Médicis",
      b: "Anne d'Autriche",
      c: "Henri IV"
    },
    correctAnswer: "c"
  },
  {
    question: "Comment Henri IV mit fin aux guerres de religions en France ?",
    answers: {
      a: "par l'extermination des protestants",
      b: "par la mise en place d'une trève",
      c: "par la signature de l'édit de Nantes"
    },
    correctAnswer: "c"
  },
  {
    question: "Parmi ces trois rois, lequel ne mourrut pas d'assassinat ?",
    answers: {
      a: "Henri III",
      b: "Henri IV",
      c: "Charles IX"
    },
    correctAnswer: "c"
  },
  {
    question: "Sous quel règne fut signé la paix des dames ?",
    answers: {
      a: "François Ier",
      b: "François II",
      c: "Louis XII"
    },
    correctAnswer: "a"
  },
  {
    question: "Quand François premier adopta-t-il l'ordonnance de Villiers-Cotteret ?",
    answers: {
      a: "1539",
      b: "1515",
      c: "1519"
    },
    correctAnswer: "a"
  }
];