export interface Activity {
  id: string;
  title: string;
  concept: string;
  category: 'Math' | 'Science' | 'Language' | 'Logic';
  description: string;
  task: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const activities: Activity[] = [
  {
    id: '1',
    title: 'The Water Cycle',
    concept: 'Evaporation',
    category: 'Science',
    description: 'Learn how water turns into vapor and rises into the atmosphere.',
    task: 'What is the process called when liquid water turns into gas due to heat?',
    options: ['Condensation', 'Evaporation', 'Precipitation', 'Infiltration'],
    correctAnswer: 'Evaporation',
    explanation: 'Evaporation happens when the sun heats up water in rivers or lakes or the ocean and turns it into vapor or steam.',
    difficulty: 'Beginner'
  },
  {
    id: '2',
    title: 'Prime Numbers',
    concept: 'Number Theory',
    category: 'Math',
    description: 'Identify numbers that are only divisible by 1 and themselves.',
    task: 'Which of these is a prime number?',
    options: ['9', '15', '21', '17'],
    correctAnswer: '17',
    explanation: 'A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 17 cannot be divided evenly by any other number.',
    difficulty: 'Intermediate'
  },
  {
    id: '3',
    title: 'Metaphors vs Similes',
    concept: 'Figurative Language',
    category: 'Language',
    description: 'Distinguish between different types of comparisons in literature.',
    task: 'Which sentence is a metaphor?',
    options: [
      'He is as brave as a lion.',
      'The snow was a white blanket.',
      'She runs like the wind.',
      'The water was clear as crystal.'
    ],
    correctAnswer: 'The snow was a white blanket.',
    explanation: 'A metaphor makes a direct comparison without using "like" or "as". Saying the snow *was* a blanket is a metaphor.',
    difficulty: 'Beginner'
  },
  {
    id: '4',
    title: 'Logical Deduction',
    concept: 'Syllogisms',
    category: 'Logic',
    description: 'Practice drawing conclusions from given premises.',
    task: 'All humans are mortal. Socrates is human. Therefore...',
    options: [
      'Socrates is immortal.',
      'Socrates is mortal.',
      'All humans are Socrates.',
      'Mortals are humans.'
    ],
    correctAnswer: 'Socrates is mortal.',
    explanation: 'This is a classic syllogism. If the premises are true, the conclusion must follow logically.',
    difficulty: 'Intermediate'
  },
  {
    id: '5',
    title: 'Photosynthesis',
    concept: 'Plant Biology',
    category: 'Science',
    description: 'Understand how plants create their own food.',
    task: 'What gas do plants primarily absorb during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
    explanation: 'Plants take in carbon dioxide from the air and, with the help of sunlight and water, turn it into glucose (food) and release oxygen.',
    difficulty: 'Beginner'
  },
  {
    id: '6',
    title: 'Order of Operations',
    concept: 'PEMDAS',
    category: 'Math',
    description: 'Solve equations using the correct mathematical sequence.',
    task: 'What is 5 + 2 * 3?',
    options: ['21', '11', '10', '15'],
    correctAnswer: '11',
    explanation: 'According to PEMDAS, multiplication comes before addition. So, 2 * 3 = 6, and 5 + 6 = 11.',
    difficulty: 'Beginner'
  },
  {
    id: '7',
    title: 'The Solar System',
    concept: 'Astronomy',
    category: 'Science',
    description: 'Explore the planets in our cosmic neighborhood.',
    task: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
    correctAnswer: 'Mars',
    explanation: 'Mars is often called the Red Planet because of iron oxide (rust) on its surface, which gives it a reddish appearance.',
    difficulty: 'Beginner'
  },
  {
    id: '8',
    title: 'Binary Code',
    concept: 'Computer Science',
    category: 'Logic',
    description: 'Learn how computers represent data using 0s and 1s.',
    task: 'What is the decimal value of the binary number 101?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'In binary, 101 represents (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = 4 + 0 + 1 = 5.',
    difficulty: 'Advanced'
  }
];