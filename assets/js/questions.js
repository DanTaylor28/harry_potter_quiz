let questions = [
  {
    numb: 1,
    question:
      "What is the name of the powerful and dangerous artifact that Voldemort creates by splitting his soul into seven pieces?",
    answer: "D. The Horcruxes",
    options: [
      "A. The Philosopher's Stone",
      "B. The Elder Wand",
      "C. The Resurrection Stone",
      "D. The Horcruxes",
    ],
  },
  {
    numb: 2,
    question:
      "After Draco insults Hermione, Ron cast a spell that backfired. What did he intend for Draco to eat?",
    answer: "D. Slugs",
    options: ["A. Bees", "B. Mud", "C. Spiders", "D. Slugs"],
  },
  {
    numb: 3,
    question: "At what age do children receive their Hogwarts letter?",
    answer: "B. 11",
    options: ["A. 9", "B. 11", "C. 12", "D. 13"],
  },
  {
    numb: 4,
    question: "By which statue is there a hidden pathway to Honeydukes?",
    answer: "B. The one-eyed witch",
    options: [
      "A. Boris the Bewildered",
      "B. The one-eyed witch",
      "C. A statue of Dumbledore",
      "D. There is no secret passage",
    ],
  },
  {
    numb: 5,
    question:
      "Harry was raised by his mother's sister. What was his aunt named?",
    answer: "A. Petunia",
    options: ["A. Petunia", "B. Daisy", "C. Rose", "D. Hortense"],
  },
  // {
  //   numb: 6,
  //   question: "How did Fred and George get the money to open their shop?",
  //   answer: "A. They won a bet on the Quidditch World Cup",
  //   options: [
  //     "A. They won a bet on the Quidditch World Cup",
  //     "B. Harry gave them his Triwizard Tournament winnings",
  //     "C. They stole it from Malfoy",
  //     "D. Dumbledore gifted it to them",
  //   ],
  // },
  // {
  //   numb: 7,
  //   question: "How old was Luna when she lost her mom?",
  //   answer: "D. Nine",
  //   options: [
  //     "A. Three",
  //     "B. She never lost her mother",
  //     "C. Twelve",
  //     "D. Nine",
  //   ],
  // },
  // {
  //   numb: 8,
  //   question:
  //     "Who was the Journalist at The Daily Prophet in the Harry Potter series?",
  //   answer: "A. Rita Skeeter",
  //   options: [
  //     "A. Rita Skeeter",
  //     "B. Xenophilius Lovegood",
  //     "C. Cornelius Fudge",
  //     "D. Arthur Weasley",
  //   ],
  // },
  // {
  //   numb: 9,
  //   question:
  //     "What is the name of the wizarding prison in the Harry Potter series?",
  //   answer: "B. Azkaban",
  //   options: [
  //     "A. Gringotts",
  //     "B. Azkaban",
  //     "C. Malfoy Manor",
  //     "D. Ministry of Magic",
  //   ],
  // },
  // {
  //   numb: 10,
  //   question:
  //     "On his first ride aboard the Hogwarts Express, whose card did Harry get with his chocolate frog?",
  //   answer: "A. Dumbledore",
  //   options: ["A. Dumbledore", "B. Snape", "C. McGonagall", "D. Hagrid"],
  // },
  // {
  //   numb: 11,
  //   question:
  //     "Which character in the Harry Potter series is known for wearing radish earrings?",
  //   answer: "C. Luna Lovegood",
  //   options: [
  //     "A. Nymphadora Tonks",
  //     "B. Ginny Weasley",
  //     "C. Luna Lovegood",
  //     "D. Fleur Delacour",
  //   ],
  // },
  // {
  //   numb: 12,
  //   question: "What is the name of the Black family's house-elf?",
  //   answer: "B. Kreacher",
  //   options: ["A. Dobby", "B. Kreacher", "C. Winky", "D. Hokey"],
  // },
  // {
  //   numb: 13,
  //   question:
  //     "Which dragon does Harry Potter face in the first task of the Triwizard Tournament?",
  //   answer: "A. Hungarian Horntail",
  //   options: [
  //     "A. Hungarian Horntail",
  //     "B. Common Welsh Green",
  //     "C. Chinese Fireball",
  //     "D. Swedish Short-Snout",
  //   ],
  // },
  // {
  //   numb: 14,
  //   question:
  //     "Which spell did Hermione use to release the dragon from Gringotts Bank?",
  //   answer: "C. Revulsion Jinx",
  //   options: [
  //     "A. Wingardium Leviosa",
  //     "B. Aguamenti",
  //     "C. Revulsion Jinx",
  //     "D. Diffindo",
  //   ],
  // },
  // {
  //   numb: 15,
  //   question: "Who was the Hogwarts headmaster before Albus Dumbledore?",
  //   answer: "A. Armando Dippet",
  //   options: [
  //     "A. Armando Dippet",
  //     "B. Phineas Nigellus Black",
  //     "C. Everard",
  //     "D. Dexter Fortescue",
  //   ],
  // },
  // {
  //   numb: 16,
  //   question:
  //     "What was the name of the person who was the original wonder of Elder Wand?",
  //   answer: "C. Antioch Peverell",
  //   options: [
  //     "A. Gellert Grindelwald",
  //     "B. Albus Dumbledore",
  //     "C. Antioch Peverell",
  //     "D. Cadmus Peverell",
  //   ],
  // },
  // {
  //   numb: 17,
  //   question:
  //     "In the Goblet of Fire, which two schools participate in the Triwizard Tournament alongside Hogwarts?",
  //   answer: "D. Durmstrang and Beauxbatons",
  //   options: [
  //     "A. Koldovstoretz and Hogwarts New Zealand",
  //     "B. Ilvermorny and Castelobruxo",
  //     "C. Mahoutokoro and Uagadou",
  //     "D. Durmstrang and Beauxbatons",
  //   ],
  // },
  // {
  //   numb: 18,
  //   question:
  //     "What is one of the creatures that lives in the lake at Hogwarts?",
  //   answer: "B. Merpeople",
  //   options: ["A. Thestrals", "B. Merpeople", "C. Nifflers", "D. Grindylows"],
  // },
  // {
  //   numb: 19,
  //   question: "Who was the original owner of the locket Horcrux?",
  //   answer: "C. Salazar Slytherin",
  //   options: [
  //     "A. Tom Riddle Sr.",
  //     "B. Marvolo Gaunt",
  //     "C. Salazar Slytherin",
  //     "D. Hepzibah Smith",
  //   ],
  // },
  // {
  //   numb: 20,
  //   question:
  //     "What is the name of the black family's ancestral home in the Harry Potter series?",
  //   answer: "D. Grimmauld Place",
  //   options: [
  //     "A. Black Manor",
  //     "B. Malfoy Manor",
  //     "C. Lestrange Manor",
  //     "D. Grimmauld Place",
  //   ],
  // },
];
