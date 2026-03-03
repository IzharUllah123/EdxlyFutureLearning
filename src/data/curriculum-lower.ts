import { SubjectData } from "./curriculum";

export const lowerGradeData: Record<string, Record<string, SubjectData>> = {
  
  // ==============================================================
  // PRE-K MATH (Ends at Topic Y)
  // ==============================================================
 // ==============================================================
  // RECEPTION MATH (Replaces Pre-K & Kindergarten)
  // ==============================================================
  reception: {
    math: {
      title: "Reception Math",
      description: "Foundation skills, counting, shapes, and introduction to addition and subtraction.",
      stats: { skills: 184, videos: 120, games: 35 },
      topics: [
        {
          id: "A", title: "Count to 3",
          skills: [
            { id: "A.1", title: "Identify numbers - up to 3" },
            { id: "A.2", title: "Choose the number that you hear - up to 3" },
            { id: "A.3", title: "Learn to count - up to 3" },
            { id: "A.4", title: "Count objects - up to 3" },
            { id: "A.5", title: "Count dots - up to 3" },
            { id: "A.6", title: "Count shapes - up to 3" },
            { id: "A.7", title: "Count using stickers - up to 3" },
            { id: "A.8", title: "Count on ten frames - up to 3" },
            { id: "A.9", title: "Show numbers on ten frames - up to 3" },
            { id: "A.10", title: "Represent numbers - up to 3" }
          ]
        },
        {
          id: "B", title: "Count to 5",
          skills: [
            { id: "B.1", title: "Identify numbers - up to 5" },
            { id: "B.2", title: "Choose the number that you hear - up to 5" },
            { id: "B.3", title: "Learn to count - up to 5" },
            { id: "B.4", title: "Count objects - up to 5" },
            { id: "B.5", title: "Count dots - up to 5" },
            { id: "B.6", title: "Count shapes - up to 5" },
            { id: "B.7", title: "Count using stickers - up to 5" },
            { id: "B.8", title: "Count cubes - up to 5" },
            { id: "B.9", title: "Show numbers with cubes - up to 5" },
            { id: "B.10", title: "Count on ten frames - up to 5" },
            { id: "B.11", title: "Show numbers on ten frames - up to 5" },
            { id: "B.12", title: "Represent numbers - up to 5" },
            { id: "B.13", title: "One more with pictures - up to 5" },
            { id: "B.14", title: "One more - up to 5" },
            { id: "B.15", title: "One less with pictures - up to 5" },
            { id: "B.16", title: "One less - up to 5" },
            { id: "B.17", title: "What number comes next? - up to 5" },
            { id: "B.18", title: "Ordinal numbers - up to fifth" }
          ]
        },
        {
          id: "C", title: "Count to 10",
          skills: [
            { id: "C.1", title: "Identify numbers - up to 10" },
            { id: "C.2", title: "Choose the number that you hear - up to 10" },
            { id: "C.3", title: "Learn to count - up to 10" },
            { id: "C.4", title: "Count objects - up to 10" },
            { id: "C.5", title: "Count dots - up to 10" },
            { id: "C.6", title: "Count shapes - up to 10" },
            { id: "C.7", title: "Count using stickers - up to 10" },
            { id: "C.8", title: "Count cubes - up to 10" },
            { id: "C.9", title: "Show numbers with cubes - up to 10" },
            { id: "C.10", title: "Count on ten frames - up to 10" },
            { id: "C.11", title: "Show numbers on ten frames - up to 10" },
            { id: "C.12", title: "Tally marks - up to 10" },
            { id: "C.13", title: "Represent numbers - up to 10" },
            { id: "C.14", title: "One more with pictures - up to 10" },
            { id: "C.15", title: "One more - up to 10" },
            { id: "C.16", title: "One less with pictures - up to 10" },
            { id: "C.17", title: "One less - up to 10" },
            { id: "C.18", title: "One more and one less - up to 10" },
            { id: "C.19", title: "What number comes next? - up to 10" },
            { id: "C.20", title: "Count up - up to 10" },
            { id: "C.21", title: "Count up and down - up to 10" },
            { id: "C.22", title: "Count forward - up to 10" },
            { id: "C.23", title: "Count forward and backward - up to 10" },
            { id: "C.24", title: "Count to fill a ten frame" },
            { id: "C.25", title: "Learn to count by 2s" },
            { id: "C.26", title: "Count by 2s" },
            { id: "C.27", title: "Ordinal numbers - up to tenth" }
          ]
        },
        {
          id: "D", title: "Count to 20",
          skills: [
            { id: "D.1", title: "Identify numbers - up to 20" },
            { id: "D.2", title: "Count objects - up to 20" },
            { id: "D.3", title: "Count dots - up to 20" },
            { id: "D.4", title: "Count dots - 0 to 20" },
            { id: "D.5", title: "Count shapes - up to 20" },
            { id: "D.6", title: "Count on ten frames - up to 20" },
            { id: "D.7", title: "Show numbers on ten frames - up to 20" },
            { id: "D.8", title: "Represent numbers - up to 20" },
            { id: "D.9", title: "Tally marks - up to 20" },
            { id: "D.10", title: "Count up - up to 20" },
            { id: "D.11", title: "Count up and down - up to 20" },
            { id: "D.12", title: "Count forward - up to 20" },
            { id: "D.13", title: "Count forward and backward - up to 20" }
          ]
        },
        {
          id: "E", title: "Comparing",
          skills: [
            { id: "E.1", title: "Are there enough?" },
            { id: "E.2", title: "More" },
            { id: "E.3", title: "Fewer" },
            { id: "E.4", title: "Fewer and more - compare by counting" },
            { id: "E.5", title: "Compare in a mixed group" },
            { id: "E.6", title: "Find the larger number - up to 5" },
            { id: "E.7", title: "Find the smaller number - up to 5" },
            { id: "E.8", title: "Compare two numbers - up to 10" },
            { id: "E.9", title: "Put numbers in order - up to 10" },
            { id: "E.10", title: "Put numbers in order - up to 20" }
          ]
        },
        {
          id: "F", title: "Addition up to 5",
          skills: [
            { id: "F.1", title: "Put together cubes - sums up to 5" },
            { id: "F.2", title: "Partition numbers up to 5: words" },
            { id: "F.3", title: "Add with cubes - sums up to 5" },
            { id: "F.4", title: "Add with pictures - sums up to 5" },
            { id: "F.5", title: "Addition sentences up to 5: which model matches?" },
            { id: "F.6", title: "Addition sentences up to 5: what does the model show?" },
            { id: "F.7", title: "Partition numbers up to 5: addition sentences" },
            { id: "F.8", title: "Add two numbers - sums up to 5" },
            { id: "F.9", title: "Make a number using addition - sums up to 5" },
            { id: "F.10", title: "Complete the addition sentence - sums up to 5" },
            { id: "F.11", title: "Addition word problems with pictures - sums up to 5" }
          ]
        },
        {
          id: "G", title: "Addition up to 10",
          skills: [
            { id: "G.1", title: "Put together cubes - sums up to 10" },
            { id: "G.2", title: "Partition numbers up to 10: words" },
            { id: "G.3", title: "Add with cubes - sums up to 10" },
            { id: "G.4", title: "Add with pictures - sums up to 10" },
            { id: "G.5", title: "Addition sentences up to 10: which model matches?" },
            { id: "G.6", title: "Addition sentences up to 10: what does the model show?" },
            { id: "G.7", title: "Partition numbers up to 10: addition sentences" },
            { id: "G.8", title: "Add two numbers - sums up to 10" },
            { id: "G.9", title: "Make a number using addition - sums up to 10" },
            { id: "G.10", title: "Complete the addition sentence - sums up to 10" },
            { id: "G.11", title: "Add doubles with models - sums up to 10" },
            { id: "G.12", title: "Add doubles - sums up to 10" },
            { id: "G.13", title: "Addition word problems with pictures - sums up to 10" }
          ]
        },
        {
          id: "H", title: "Subtraction up to 5",
          skills: [
            { id: "H.1", title: "Take away cubes - numbers up to 5" },
            { id: "H.2", title: "Subtract with cubes - numbers up to 5" },
            { id: "H.3", title: "Subtract with pictures - numbers up to 5" },
            { id: "H.4", title: "Subtraction sentences up to 5: which model matches?" },
            { id: "H.5", title: "Subtract - numbers up to 5" },
            { id: "H.6", title: "Make a number using subtraction - numbers up to 5" },
            { id: "H.7", title: "Complete the subtraction sentence - numbers up to 5" },
            { id: "H.8", title: "Subtraction word problems with pictures - numbers up to 5" }
          ]
        },
        {
          id: "I", title: "Subtraction up to 10",
          skills: [
            { id: "I.1", title: "Take away cubes - numbers up to 10" },
            { id: "I.2", title: "Subtract with cubes - numbers up to 10" },
            { id: "I.3", title: "Subtract with pictures - numbers up to 10" },
            { id: "I.4", title: "Subtraction sentences up to 10: which model matches?" },
            { id: "I.5", title: "Subtract - numbers up to 10" },
            { id: "I.6", title: "Make a number using subtraction - numbers up to 10" },
            { id: "I.7", title: "Complete the subtraction sentence - numbers up to 10" },
            { id: "I.8", title: "Subtraction word problems with pictures - numbers up to 10" }
          ]
        },
        {
          id: "J", title: "Fractions",
          skills: [
            { id: "J.1", title: "Equal parts" },
            { id: "J.2", title: "Identify halves" },
            { id: "J.3", title: "Identify halves and quarters" },
            { id: "J.4", title: "Make halves" }
          ]
        },
        {
          id: "K", title: "Positions",
          skills: [
            { id: "K.1", title: "In front of and behind" },
            { id: "K.2", title: "Inside and outside" },
            { id: "K.3", title: "Top and bottom" },
            { id: "K.4", title: "Top, middle and bottom" },
            { id: "K.5", title: "Above and below" },
            { id: "K.6", title: "Left and right" },
            { id: "K.7", title: "Left, middle and right" },
            { id: "K.8", title: "Beside and next to" }
          ]
        },
        {
          id: "L", title: "Classify",
          skills: [
            { id: "L.1", title: "Different" },
            { id: "L.2", title: "Same" },
            { id: "L.3", title: "Same and different" },
            { id: "L.4", title: "Classify shapes by colour" },
            { id: "L.5", title: "Classify and sort by colour" },
            { id: "L.6", title: "Classify and sort by shape" }
          ]
        },
        {
          id: "M", title: "Patterns",
          skills: [
            { id: "M.1", title: "Colour patterns" },
            { id: "M.2", title: "Size patterns" },
            { id: "M.3", title: "Shape patterns" },
            { id: "M.4", title: "What comes next?" }
          ]
        },
        {
          id: "N", title: "Size",
          skills: [
            { id: "N.1", title: "Long and short" },
            { id: "N.2", title: "Tall and short" },
            { id: "N.3", title: "Wide and narrow" },
            { id: "N.4", title: "Light and heavy" },
            { id: "N.5", title: "Holds more or less" },
            { id: "N.6", title: "Compare size, weight and capacity" },
            { id: "N.7", title: "Measure using objects" },
            { id: "N.8", title: "Measure length with cubes" },
            { id: "N.9", title: "Build cube trains to measure length" },
            { id: "N.10", title: "Measure height with cubes" },
            { id: "N.11", title: "Build cube trains to measure height" }
          ]
        },
        {
          id: "O", title: "Money",
          skills: [
            { id: "O.1", title: "Coin values - 1p, 2p, 5p and 10p" },
            { id: "O.2", title: "Coin values - 20p, 50p, £1 and £2" },
            { id: "O.3", title: "Coin values - all coins" },
            { id: "O.4", title: "Count pennies" },
            { id: "O.5", title: "Count money - 1p and 2p coins" },
            { id: "O.6", title: "Count money - 1p, 2p and 5p coins" }
          ]
        },
        {
          id: "P", title: "Flat shapes",
          skills: [
            { id: "P.1", title: "Name the shape" },
            { id: "P.2", title: "Circles" },
            { id: "P.3", title: "Squares" },
            { id: "P.4", title: "Triangles" },
            { id: "P.5", title: "Rectangles" },
            { id: "P.6", title: "Circles, squares, triangles and rectangles" },
            { id: "P.7", title: "Flat shapes in the real world" },
            { id: "P.8", title: "Curved parts" },
            { id: "P.9", title: "Count sides" },
            { id: "P.10", title: "Count corners" },
            { id: "P.11", title: "Compose flat shapes" }
          ]
        },
        {
          id: "Q", title: "Solid shapes",
          skills: [
            { id: "Q.1", title: "Flat and solid shapes" },
            { id: "Q.2", title: "Describe solid shapes" },
            { id: "Q.3", title: "Name the solid shape" },
            { id: "Q.4", title: "Spheres" },
            { id: "Q.5", title: "Cubes" },
            { id: "Q.6", title: "Cuboids" },
            { id: "Q.7", title: "Cones" },
            { id: "Q.8", title: "Cylinders" },
            { id: "Q.9", title: "Select solid shapes" }
          ]
        },
        {
          id: "R", title: "Time",
          skills: [
            { id: "R.1", title: "Seasons" },
            { id: "R.2", title: "Days of the week" },
            { id: "R.3", title: "Months of the year" }
          ]
        },
        {
          id: "S", title: "Data and graphs",
          skills: [
            { id: "S.1", title: "Which pictograph is correct?" },
            { id: "S.2", title: "Interpret pictographs" },
            { id: "S.3", title: "Which table is correct?" },
            { id: "S.4", title: "Interpret data in tables" }
          ]
        }
      ]
    }
  },

  // ==============================================================
  // GRADE 1 MATH
  // ==============================================================
 "1": {
    math: {
      title: "Year 1 Math",
      description: "Addition and subtraction strategies, counting to 100, patterns, geometry, and measurement.",
      stats: { skills: 450, videos: 350, games: 80 },
      topics: [
        {
          id: "A", title: "Numbers and counting up to 3",
          skills: [
            { id: "A.1", title: "Identify numbers - up to 3" },
            { id: "A.2", title: "Choose the number that you hear - up to 3" },
            { id: "A.3", title: "Learn to count to 3" },
            { id: "A.4", title: "Count to 3" },
            { id: "A.5", title: "Count using stickers - up to 3" },
            { id: "A.6", title: "Count on ten frames - up to 3" },
            { id: "A.7", title: "Show numbers on ten frames - up to 3" },
            { id: "A.8", title: "Represent numbers - up to 3" }
          ]
        },
        {
          id: "B", title: "Numbers and counting up to 5",
          skills: [
            { id: "B.1", title: "Identify numbers - up to 5" },
            { id: "B.2", title: "Choose the number that you hear - up to 5" },
            { id: "B.3", title: "Learn to count to 5" },
            { id: "B.4", title: "Count to 5" },
            { id: "B.5", title: "Count using stickers - up to 5" },
            { id: "B.6", title: "Count cubes - up to 5" },
            { id: "B.7", title: "Show numbers with cubes - up to 5" },
            { id: "B.8", title: "Count on ten frames - up to 5" },
            { id: "B.9", title: "Show numbers on ten frames - up to 5" },
            { id: "B.10", title: "Represent numbers - up to 5" },
            { id: "B.11", title: "One more with pictures - up to 5" },
            { id: "B.12", title: "One more on frames - up to 5" },
            { id: "B.13", title: "One more - up to 5" },
            { id: "B.14", title: "One less with pictures - up to 5" },
            { id: "B.15", title: "One less on frames - up to 5" },
            { id: "B.16", title: "One less - up to 5" },
            { id: "B.17", title: "What number comes next? - up to 5" },
            { id: "B.18", title: "Ordinal numbers - up to fifth" }
          ]
        },
        {
          id: "C", title: "Numbers and counting up to 10",
          skills: [
            { id: "C.1", title: "Identify numbers - up to 10" },
            { id: "C.2", title: "Choose the number that you hear - up to 10" },
            { id: "C.3", title: "Learn to count to 10" },
            { id: "C.4", title: "Count to 10" },
            { id: "C.5", title: "Count using stickers - up to 10" },
            { id: "C.6", title: "Count cubes - up to 10" },
            { id: "C.7", title: "Show numbers with cubes - up to 10" },
            { id: "C.8", title: "Count on ten frames - up to 10" },
            { id: "C.9", title: "Show numbers on ten frames - up to 10" },
            { id: "C.10", title: "Represent numbers - up to 10" },
            { id: "C.11", title: "One more with pictures - up to 10" },
            { id: "C.12", title: "One more on frames - up to 10" },
            { id: "C.13", title: "One more - up to 10" },
            { id: "C.14", title: "One less with pictures - up to 10" },
            { id: "C.15", title: "One less on frames - up to 10" },
            { id: "C.16", title: "One less - up to 10" },
            { id: "C.17", title: "One more and one less with pictures - up to 10" },
            { id: "C.18", title: "One more and one less on frames - up to 10" },
            { id: "C.19", title: "One more and one less - up to 10" },
            { id: "C.20", title: "What number comes next? - up to 10" },
            { id: "C.21", title: "Count up and down to find the next number - up to 10" },
            { id: "C.22", title: "Count to fill a ten frame" },
            { id: "C.23", title: "Tally marks - up to 10" },
            { id: "C.24", title: "Number lines - up to 10" },
            { id: "C.25", title: "Before, after and between - up to 10" },
            { id: "C.26", title: "Count forward and backward - up to 10" },
            { id: "C.27", title: "Convert from words to digits - up to 10" },
            { id: "C.28", title: "Convert from digits to words - up to 10" },
            { id: "C.29", title: "Write digits given words - up to 10" },
            { id: "C.30", title: "Write words given digits - up to 10" },
            { id: "C.31", title: "Complete a sequence - up to 10" },
            { id: "C.32", title: "Ordinal numbers - up to tenth" }
          ]
        },
        {
          id: "D", title: "Numbers and counting up to 20",
          skills: [
            { id: "D.1", title: "Identify numbers - up to 20" },
            { id: "D.2", title: "Count to 20" },
            { id: "D.3", title: "Count on ten frames - up to 20" },
            { id: "D.4", title: "Show numbers on ten frames - up to 20" },
            { id: "D.5", title: "Represent numbers - up to 20" },
            { id: "D.6", title: "One more - up to 20" },
            { id: "D.7", title: "One less - up to 20" },
            { id: "D.8", title: "One more and one less - up to 20" },
            { id: "D.9", title: "Count up and down to find the next number - up to 20" },
            { id: "D.10", title: "Tally marks - up to 20" },
            { id: "D.11", title: "Number lines - up to 20" },
            { id: "D.12", title: "Before, after and between - up to 20" },
            { id: "D.13", title: "Count forward and backward - up to 20" },
            { id: "D.14", title: "Convert from words to digits - up to 20" },
            { id: "D.15", title: "Convert from digits to words - up to 20" },
            { id: "D.16", title: "Write digits given words - up to 20" },
            { id: "D.17", title: "Write words given digits - up to 20" },
            { id: "D.18", title: "Complete a sequence - up to 20" },
            { id: "D.19", title: "Count tens and ones - up to 20" },
            { id: "D.20", title: "Write tens and ones - up to 20" },
            { id: "D.21", title: "Make teen numbers" },
            { id: "D.22", title: "Partition teen numbers" }
          ]
        },
        {
          id: "E", title: "Numbers and counting beyond 20",
          skills: [
            { id: "E.1", title: "Count on ten frames - up to 30" },
            { id: "E.2", title: "Number lines - up to 30" },
            { id: "E.3", title: "Count tens and ones - up to 30" },
            { id: "E.4", title: "Count groups of ten" },
            { id: "E.5", title: "Count to 100" },
            { id: "E.6", title: "Count on the hundred chart" },
            { id: "E.7", title: "Count up and down to find the next number - up to 100" },
            { id: "E.8", title: "Complete a sequence - up to 100" },
            { id: "E.9", title: "Count forward and backward - up to 100" },
            { id: "E.10", title: "Estimate to the nearest ten - up to 100" }
          ]
        },
        {
          id: "F", title: "Skip-counting",
          skills: [
            { id: "F.1", title: "Learn to skip-count by twos" },
            { id: "F.2", title: "Skip-count by twos" },
            { id: "F.3", title: "Skip-count by twos on ten frames" },
            { id: "F.4", title: "Learn to skip-count by fives" },
            { id: "F.5", title: "Skip-count by fives" },
            { id: "F.6", title: "Learn to skip-count by tens" },
            { id: "F.7", title: "Skip-count by tens" },
            { id: "F.8", title: "Learn to skip-count by twos, fives and tens" },
            { id: "F.9", title: "Skip-count by twos, fives and tens" }
          ]
        },
        {
          id: "G", title: "Comparing",
          skills: [
            { id: "G.1", title: "Are there enough?" },
            { id: "G.2", title: "Fewer and more - compare by matching" },
            { id: "G.3", title: "Fewer and more - compare by counting" },
            { id: "G.4", title: "Fewer and more - compare in a mixed group" },
            { id: "G.5", title: "Fewer, more and same" },
            { id: "G.6", title: "Compare two numbers - up to 10" },
            { id: "G.7", title: "Compare three numbers - up to 10" },
            { id: "G.8", title: "Compare two numbers - up to 20" }
          ]
        },
        {
          id: "H", title: "Sorting, ordering and classifying",
          skills: [
            { id: "H.1", title: "Different" },
            { id: "H.2", title: "Same" },
            { id: "H.3", title: "Same and different" },
            { id: "H.4", title: "Classify shapes by colour" },
            { id: "H.5", title: "Classify and sort by colour" },
            { id: "H.6", title: "Classify and sort by shape" },
            { id: "H.7", title: "Classify and sort" },
            { id: "H.8", title: "Count shapes in a Venn diagram" },
            { id: "H.9", title: "Sort shapes into a Venn diagram" },
            { id: "H.10", title: "Put numbers up to 10 in order" },
            { id: "H.11", title: "Put numbers up to 20 in order" }
          ]
        },
        {
          id: "I", title: "Patterns",
          skills: [
            { id: "I.1", title: "Colour patterns" },
            { id: "I.2", title: "Size patterns" },
            { id: "I.3", title: "Shape patterns" },
            { id: "I.4", title: "Find the next shape in a pattern" },
            { id: "I.5", title: "Complete a pattern" },
            { id: "I.6", title: "Make a pattern" },
            { id: "I.7", title: "Growing patterns" },
            { id: "I.8", title: "Find the next shape in a growing pattern" },
            { id: "I.9", title: "Find the next row in a growing pattern" }
          ]
        },
        {
          id: "J", title: "Positions",
          skills: [
            { id: "J.1", title: "In front of and behind" },
            { id: "J.2", title: "Inside and outside" },
            { id: "J.3", title: "Top, middle and bottom" },
            { id: "J.4", title: "Above and below" },
            { id: "J.5", title: "Above and below - find solid figures" },
            { id: "J.6", title: "Left, middle and right" },
            { id: "J.7", title: "Beside and next to" },
            { id: "J.8", title: "Beside and next to - find solid figures" },
            { id: "J.9", title: "Location in a grid" }
          ]
        },
        {
          id: "K", title: "Addition skill builders",
          skills: [
            { id: "K.1", title: "Adding 1" },
            { id: "K.2", title: "Adding 2" },
            { id: "K.3", title: "Adding 3" },
            { id: "K.4", title: "Adding 4" },
            { id: "K.5", title: "Adding 5" },
            { id: "K.6", title: "Adding 6" },
            { id: "K.7", title: "Adding 7" },
            { id: "K.8", title: "Adding 8" },
            { id: "K.9", title: "Adding 9" },
            { id: "K.10", title: "Adding 10" },
            { id: "K.11", title: "Adding 0" }
          ]
        },
        {
          id: "L", title: "Addition up to 5",
          skills: [
            { id: "L.1", title: "Put together cubes - sums up to 5" },
            { id: "L.2", title: "Partition numbers up to 5: words" },
            { id: "L.3", title: "Add with cubes - sums up to 5" },
            { id: "L.4", title: "Add with pictures - sums up to 5" },
            { id: "L.5", title: "Addition sentences up to 5: which model matches?" },
            { id: "L.6", title: "Addition sentences up to 5: what does the model show?" },
            { id: "L.7", title: "Partition numbers up to 5: addition sentences" },
            { id: "L.8", title: "Add two numbers - sums up to 5" },
            { id: "L.9", title: "Make a number using addition - sums up to 5" },
            { id: "L.10", title: "Complete the addition sentence - sums up to 5" },
            { id: "L.11", title: "Addition word problems with pictures - sums up to 5" },
            { id: "L.12", title: "Addition word problems - sums up to 5" }
          ]
        },
        {
          id: "M", title: "Addition up to 10",
          skills: [
            { id: "M.1", title: "Put together cubes - sums up to 10" },
            { id: "M.2", title: "Partition numbers up to 10: words" },
            { id: "M.3", title: "Decompose a number up to 10" },
            { id: "M.4", title: "Add with cubes - sums up to 10" },
            { id: "M.5", title: "Add with pictures - sums up to 10" },
            { id: "M.6", title: "Addition sentences up to 10: which model matches?" },
            { id: "M.7", title: "Addition sentences up to 10: what does the model show?" },
            { id: "M.8", title: "Partition numbers up to 10: addition sentences" },
            { id: "M.9", title: "Add two numbers - sums up to 10" },
            { id: "M.10", title: "Make a number using addition - sums up to 10" },
            { id: "M.11", title: "Complete the addition sentence - sums up to 10" },
            { id: "M.12", title: "Complete the addition sentence to make 10 - with models" },
            { id: "M.13", title: "Complete the addition sentence to make 10" },
            { id: "M.14", title: "Write addition sentences - sums up to 10" },
            { id: "M.15", title: "Addition word problems with pictures - sums up to 10" },
            { id: "M.16", title: "Addition word problems - sums up to 10" },
            { id: "M.17", title: "Add doubles with models" },
            { id: "M.18", title: "Add doubles" },
            { id: "M.19", title: "Add doubles: complete the sentence" },
            { id: "M.20", title: "Add using doubles plus one" },
            { id: "M.21", title: "Add using doubles minus one" },
            { id: "M.22", title: "Add three numbers" }
          ]
        },
        {
          id: "N", title: "Addition up to 20",
          skills: [
            { id: "N.1", title: "Add with pictures - sums up to 20" },
            { id: "N.2", title: "Add one-digit numbers - sums up to 20" },
            { id: "N.3", title: "Add any two numbers - sums up to 20" },
            { id: "N.4", title: "Make a number using addition - sums up to 20" },
            { id: "N.5", title: "Complete the addition sentence - sums up to 20" },
            { id: "N.6", title: "Addition word problems - sums up to 20" },
            { id: "N.7", title: "Related addition facts" }
          ]
        },
        {
          id: "O", title: "Subtraction skill builders",
          skills: [
            { id: "O.1", title: "Subtracting 1" },
            { id: "O.2", title: "Subtracting 2" },
            { id: "O.3", title: "Subtracting 3" },
            { id: "O.4", title: "Subtracting 4" },
            { id: "O.5", title: "Subtracting 5" },
            { id: "O.6", title: "Subtracting 6" },
            { id: "O.7", title: "Subtracting 7" },
            { id: "O.8", title: "Subtracting 8" },
            { id: "O.9", title: "Subtracting 9" },
            { id: "O.10", title: "Subtracting 10" },
            { id: "O.11", title: "Subtracting 0" }
          ]
        },
        {
          id: "P", title: "Subtraction up to 5",
          skills: [
            { id: "P.1", title: "Take away cubes - numbers up to 5" },
            { id: "P.2", title: "Subtract with cubes - numbers up to 5" },
            { id: "P.3", title: "Subtract with pictures - numbers up to 5" },
            { id: "P.4", title: "Subtraction sentences up to 5: which model matches?" },
            { id: "P.5", title: "Subtraction sentences up to 5: what does the model show?" },
            { id: "P.6", title: "Subtract - numbers up to 5" },
            { id: "P.7", title: "Complete the subtraction sentence - numbers up to 5" },
            { id: "P.8", title: "Subtraction word problems with pictures - numbers up to 5" },
            { id: "P.9", title: "Subtraction word problems - numbers up to 5" }
          ]
        },
        {
          id: "Q", title: "Subtraction up to 10",
          skills: [
            { id: "Q.1", title: "Take away cubes - numbers up to 10" },
            { id: "Q.2", title: "Subtract with cubes - numbers up to 10" },
            { id: "Q.3", title: "Subtract with pictures - numbers up to 10" },
            { id: "Q.4", title: "Subtraction sentences up to 10: which model matches?" },
            { id: "Q.5", title: "Subtraction sentences up to 10: what does the model show?" },
            { id: "Q.6", title: "Subtract - numbers up to 10" },
            { id: "Q.7", title: "Make a number using subtraction - numbers up to 10" },
            { id: "Q.8", title: "Complete the subtraction sentence - numbers up to 10" },
            { id: "Q.9", title: "Write subtraction sentences - numbers up to 10" },
            { id: "Q.10", title: "Subtraction word problems with pictures - numbers up to 10" },
            { id: "Q.11", title: "Subtraction word problems - numbers up to 10" }
          ]
        },
        {
          id: "R", title: "Subtraction up to 20",
          skills: [
            { id: "R.1", title: "Subtract with pictures - numbers up to 20" },
            { id: "R.2", title: "Subtract - numbers up to 20" },
            { id: "R.3", title: "Make a number using subtraction - numbers up to 20" },
            { id: "R.4", title: "Complete the subtraction sentence - numbers up to 20" },
            { id: "R.5", title: "Subtraction word problems - numbers up to 20" },
            { id: "R.6", title: "Related subtraction facts" }
          ]
        },
        {
          id: "S", title: "Fractions",
          skills: [
            { id: "S.1", title: "Equal parts" },
            { id: "S.2", title: "Identify halves" },
            { id: "S.3", title: "Identify quarters" },
            { id: "S.4", title: "Identify halves and quarters" },
            { id: "S.5", title: "Make halves" },
            { id: "S.6", title: "Make quarters" },
            { id: "S.7", title: "Make halves and quarters" }
          ]
        },
        {
          id: "T", title: "Time",
          skills: [
            { id: "T.1", title: "Match digital clocks and times I" },
            { id: "T.2", title: "Match digital clocks and times II" },
            { id: "T.3", title: "Match analogue clocks and times I" },
            { id: "T.4", title: "Match analogue clocks and times II" },
            { id: "T.5", title: "Match analogue and digital clocks I" },
            { id: "T.6", title: "Match analogue and digital clocks II" },
            { id: "T.7", title: "Read clocks and write times I" },
            { id: "T.8", title: "Read clocks and write times II" },
            { id: "T.9", title: "A.M. or P.M." },
            { id: "T.10", title: "Times of everyday events" },
            { id: "T.11", title: "Compare clocks" },
            { id: "T.12", title: "Seasons" },
            { id: "T.13", title: "Days of the week" },
            { id: "T.14", title: "Months of the year" },
            { id: "T.15", title: "Read a calendar" }
          ]
        },
        {
          id: "U", title: "Data and graphs",
          skills: [
            { id: "U.1", title: "Which pictograph is correct?" },
            { id: "U.2", title: "Interpret pictographs" },
            { id: "U.3", title: "Which tally chart is correct?" },
            { id: "U.4", title: "Interpret tally charts" },
            { id: "U.5", title: "Which table is correct?" },
            { id: "U.6", title: "Interpret data in tables" }
          ]
        },
        {
          id: "V", title: "Probability",
          skills: [
            { id: "V.1", title: "More or less likely" }
          ]
        },
        {
          id: "W", title: "Measurement",
          skills: [
            { id: "W.1", title: "Long and short" },
            { id: "W.2", title: "Tall and short" },
            { id: "W.3", title: "Wide and narrow" },
            { id: "W.4", title: "Light and heavy" },
            { id: "W.5", title: "Holds more or less" },
            { id: "W.6", title: "Compare size, weight and capacity" },
            { id: "W.7", title: "Measure using objects" },
            { id: "W.8", title: "Measure length with cubes" },
            { id: "W.9", title: "Build cube trains to measure length" },
            { id: "W.10", title: "Measure height with cubes" },
            { id: "W.11", title: "Build cube trains to measure height" }
          ]
        },
        {
          id: "X", title: "Money",
          skills: [
            { id: "X.1", title: "Coin values - 1p, 2p, 5p and 10p coins" },
            { id: "X.2", title: "Coin values - 20p, 50p, £1 and £2" },
            { id: "X.3", title: "Coin values" },
            { id: "X.4", title: "Count money - 1p coins only" },
            { id: "X.5", title: "Count money - 1p and 2p coins" },
            { id: "X.6", title: "Count money - 1p, 2p and 5p coins" },
            { id: "X.7", title: "Count money - 1p, 2p, 5p and 10p coins" },
            { id: "X.8", title: "Equivalent groups of coins" },
            { id: "X.9", title: "Exchanging groups of coins" },
            { id: "X.10", title: "Exchanging coins" },
            { id: "X.11", title: "Compare two groups of coins" }
          ]
        },
        {
          id: "Y", title: "Two-dimensional shapes",
          skills: [
            { id: "Y.1", title: "Name the two-dimensional shape" },
            { id: "Y.2", title: "Circles" },
            { id: "Y.3", title: "Triangles" },
            { id: "Y.4", title: "Squares and rectangles" },
            { id: "Y.5", title: "Hexagons" },
            { id: "Y.6", title: "Select two-dimensional shapes" },
            { id: "Y.7", title: "Two-dimensional shapes in the real world" },
            { id: "Y.8", title: "Curved parts" },
            { id: "Y.9", title: "Count sides and corners" },
            { id: "Y.10", title: "Compare sides and corners" },
            { id: "Y.11", title: "Introduction to symmetry" },
            { id: "Y.12", title: "Identify pictures with symmetry" },
            { id: "Y.13", title: "Compose two-dimensional shapes" }
          ]
        },
        {
          id: "Z", title: "Three-dimensional shapes",
          skills: [
            { id: "Z.1", title: "Two-dimensional and three-dimensional shapes" },
            { id: "Z.2", title: "Describe three-dimensional shapes" },
            { id: "Z.3", title: "Name the three-dimensional shape" },
            { id: "Z.4", title: "Spheres" },
            { id: "Z.5", title: "Cubes and cuboids" },
            { id: "Z.6", title: "Cones" },
            { id: "Z.7", title: "Cylinders" },
            { id: "Z.8", title: "Pyramids" },
            { id: "Z.9", title: "Select three-dimensional shapes" },
            { id: "Z.10", title: "Identify shapes traced from solids" },
            { id: "Z.11", title: "Three-dimensional shapes in the real world I" },
            { id: "Z.12", title: "Three-dimensional shapes in the real world II" }
          ]
        },
        {
          id: "AA", title: "Vocabulary",
          skills: [
            { id: "AA.1", title: "Sum and difference" }
          ]
        },
        {
          id: "BB", title: "Understand multiplication",
          skills: [
            { id: "BB.1", title: "Count equal groups" },
            { id: "BB.2", title: "Identify multiplication expressions for equal groups" },
            { id: "BB.3", title: "Write multiplication sentences for equal groups" },
            { id: "BB.4", title: "Identify multiplication expressions for arrays" },
            { id: "BB.5", title: "Write multiplication sentences for arrays" }
          ]
        },
        {
          id: "CC", title: "Understand division",
          skills: [
            { id: "CC.1", title: "Divide by counting equal groups" },
            { id: "CC.2", title: "Write division sentences for equal groups" },
            { id: "CC.3", title: "Write division sentences for arrays" }
          ]
        }
      ],
    },
  },

  // ==============================================================
  // GRADE 2 MATH
  // ==============================================================
 // ==============================================================
  // GRADE 2 MATH
  // ==============================================================
  "2": {
    math: {
      title: "Year 2 Math",
      description: "Counting, addition/subtraction to 100, place value, multiplication intro, measurement, and geometry.",
      stats: { skills: 500, videos: 350, games: 85 },
      topics: [
        {
          id: "A", title: "Counting and numbers",
          skills: [
            { id: "A.1", title: "Counting review - up to 10" },
            { id: "A.2", title: "Count to fill a ten frame" },
            { id: "A.3", title: "Counting review - up to 20" },
            { id: "A.4", title: "Count on ten frames - up to 40" },
            { id: "A.5", title: "Count objects to 100" },
            { id: "A.6", title: "Count forward and backward" },
            { id: "A.7", title: "Number lines - up to 100" },
            { id: "A.8", title: "Count on the hundred chart" },
            { id: "A.9", title: "Hundred chart" },
            { id: "A.10", title: "Ordinal numbers" },
            { id: "A.11", title: "Convert words to digits" },
            { id: "A.12", title: "Convert digits to words" },
            { id: "A.13", title: "Write digits given words" },
            { id: "A.14", title: "Write words given digits" },
            { id: "A.15", title: "Convert between digits and words - mixed review" }
          ]
        },
        {
          id: "B", title: "Skip-counting",
          skills: [
            { id: "B.1", title: "Count by tens with pictures" },
            { id: "B.2", title: "Estimate to the nearest ten" },
            { id: "B.3", title: "Count by twos, fives and tens with pictures" },
            { id: "B.4", title: "Count by twos, fives and tens" },
            { id: "B.5", title: "Count by 2, 3, 5 and 10 - with tables" },
            { id: "B.6", title: "Sequences - count up and down by 1, 2, 3, 5 and 10" },
            { id: "B.7", title: "Sequences - count up and down by 100" }
          ]
        },
        {
          id: "C", title: "Even and odd",
          skills: [
            { id: "C.1", title: "Even or odd" },
            { id: "C.2", title: "Identify numbers as even or odd" },
            { id: "C.3", title: "Even or odd numbers on number lines" },
            { id: "C.4", title: "Which even or odd number comes before or after?" }
          ]
        },
        {
          id: "D", title: "Comparing up to 10",
          skills: [
            { id: "D.1", title: "Comparing - review" },
            { id: "D.2", title: "Compare numbers up to 10 using words" },
            { id: "D.3", title: "Compare numbers up to 10 using symbols" }
          ]
        },
        {
          id: "E", title: "Understand addition",
          skills: [
            { id: "E.1", title: "Add with cubes - sums up to 10" },
            { id: "E.2", title: "Add with pictures - sums up to 10" },
            { id: "E.3", title: "Addition sentences up to 10: which model matches?" },
            { id: "E.4", title: "Addition sentences up to 10: what does the model show?" },
            { id: "E.5", title: "Addition sentences using number lines - sums up to 10" },
            { id: "E.6", title: "Turn words into an addition sentence - sums up to 10" },
            { id: "E.7", title: "Add with pictures - sums up to 20" }
          ]
        },
        {
          id: "F", title: "Addition strategies up to 10",
          skills: [
            { id: "F.1", title: "Add in any order" },
            { id: "F.2", title: "Add by counting on - sums up to 10" },
            { id: "F.3", title: "Complete the addition sentence to make ten - with models" },
            { id: "F.4", title: "Complete the addition sentence - make ten" }
          ]
        },
        {
          id: "G", title: "Addition up to 10",
          skills: [
            { id: "G.1", title: "Addition facts - sums up to 10" },
            { id: "G.2", title: "Make a number using addition - sums up to 10" },
            { id: "G.3", title: "Ways to make a number - addition sentences" },
            { id: "G.4", title: "Complete the addition sentence - sums up to 10" }
          ]
        },
        {
          id: "H", title: "Addition word problems up to 10",
          skills: [
            { id: "H.1", title: "Addition word problems with pictures - sums up to 10" },
            { id: "H.2", title: "Addition sentences for word problems with pictures - sums up to 10" },
            { id: "H.3", title: "Addition word problems - sums up to 10" },
            { id: "H.4", title: "Addition sentences for word problems - sums up to 10" }
          ]
        },
        {
          id: "I", title: "Understand subtraction",
          skills: [
            { id: "I.1", title: "Subtract with cubes - up to 10" },
            { id: "I.2", title: "Subtract with pictures - up to 10" },
            { id: "I.3", title: "Subtraction sentences up to 10: which model matches?" },
            { id: "I.4", title: "Subtraction sentences up to 10: what does the model show?" },
            { id: "I.5", title: "Subtraction sentences using number lines - up to 10" },
            { id: "I.6", title: "Turn words into a subtraction sentence - up to 10" },
            { id: "I.7", title: "Subtract zero and all" },
            { id: "I.8", title: "Subtract with pictures - up to 20" }
          ]
        },
        {
          id: "J", title: "Subtraction strategies up to 10",
          skills: [
            { id: "J.1", title: "Subtract by counting back - up to 10" },
            { id: "J.2", title: "Subtract by counting on - up to 10" },
            { id: "J.3", title: "Relate addition and subtraction sentences - up to 10" },
            { id: "J.4", title: "Use addition to subtract - up to 10" }
          ]
        },
        {
          id: "K", title: "Subtraction up to 10",
          skills: [
            { id: "K.1", title: "Subtraction facts - up to 10" },
            { id: "K.2", title: "Make a number using subtraction - up to 10" },
            { id: "K.3", title: "Ways to make a number - subtraction sentences" },
            { id: "K.4", title: "Ways to subtract from a number - subtraction sentences" },
            { id: "K.5", title: "Complete the subtraction sentence - up to 10" }
          ]
        },
        {
          id: "L", title: "Subtraction word problems up to 10",
          skills: [
            { id: "L.1", title: "Subtraction word problems with pictures - up to 10" },
            { id: "L.2", title: "Subtraction sentences for word problems with pictures - up to 10" },
            { id: "L.3", title: "Subtraction word problems - up to 10" },
            { id: "L.4", title: "Subtraction sentences for word problems - up to 10" }
          ]
        },
        {
          id: "M", title: "Addition strategies up to 20",
          skills: [
            { id: "M.1", title: "Related addition facts" },
            { id: "M.2", title: "Addition sentences using number lines - sums up to 20" },
            { id: "M.3", title: "Add by counting on - sums up to 20" },
            { id: "M.4", title: "Add doubles with models" },
            { id: "M.5", title: "Add doubles" },
            { id: "M.6", title: "Add doubles - complete the sentence" },
            { id: "M.7", title: "Add using doubles plus one" },
            { id: "M.8", title: "Add using doubles minus one" },
            { id: "M.9", title: "Add three numbers - use doubles" },
            { id: "M.10", title: "Use ten frames to add" },
            { id: "M.11", title: "Make ten to add" },
            { id: "M.12", title: "Add three numbers - make ten" }
          ]
        },
        {
          id: "N", title: "Addition up to 20",
          skills: [
            { id: "N.1", title: "Adding 1" },
            { id: "N.2", title: "Adding 2" },
            { id: "N.3", title: "Adding 3" },
            { id: "N.4", title: "Adding 4" },
            { id: "N.5", title: "Adding 5" },
            { id: "N.6", title: "Adding 6" },
            { id: "N.7", title: "Adding 7" },
            { id: "N.8", title: "Adding 8" },
            { id: "N.9", title: "Adding 9" },
            { id: "N.10", title: "Adding 10" },
            { id: "N.11", title: "Adding 0" },
            { id: "N.12", title: "Addition facts - sums up to 20" },
            { id: "N.13", title: "Make a number using addition - sums up to 20" },
            { id: "N.14", title: "Addition sentences: true or false?" },
            { id: "N.15", title: "Complete the addition sentence - sums up to 20" },
            { id: "N.16", title: "Add three numbers" }
          ]
        },
        {
          id: "O", title: "Addition word problems up to 20",
          skills: [
            { id: "O.1", title: "Addition word problems - sums up to 20" },
            { id: "O.2", title: "Addition sentences for word problems - sums up to 20" },
            { id: "O.3", title: "Add three numbers - word problems" }
          ]
        },
        {
          id: "P", title: "Subtraction strategies up to 20",
          skills: [
            { id: "P.1", title: "Related subtraction facts" },
            { id: "P.2", title: "Relate addition and subtraction sentences - up to 20" },
            { id: "P.3", title: "Subtraction sentences using number lines - up to 20" },
            { id: "P.4", title: "Subtract by counting back - up to 20" },
            { id: "P.5", title: "Use ten frames to subtract" },
            { id: "P.6", title: "Use ten to subtract" },
            { id: "P.7", title: "Use addition to subtract - up to 20" },
            { id: "P.8", title: "Subtract by counting on - up to 20" },
            { id: "P.9", title: "Subtract doubles" }
          ]
        },
        {
          id: "Q", title: "Subtraction up to 20",
          skills: [
            { id: "Q.1", title: "Subtracting 1" },
            { id: "Q.2", title: "Subtracting 2" },
            { id: "Q.3", title: "Subtracting 3" },
            { id: "Q.4", title: "Subtracting 4" },
            { id: "Q.5", title: "Subtracting 5" },
            { id: "Q.6", title: "Subtracting 6" },
            { id: "Q.7", title: "Subtracting 7" },
            { id: "Q.8", title: "Subtracting 8" },
            { id: "Q.9", title: "Subtracting 9" },
            { id: "Q.10", title: "Subtracting 10" },
            { id: "Q.11", title: "Subtracting 0" },
            { id: "Q.12", title: "Subtraction facts - up to 20" },
            { id: "Q.13", title: "Make a number using subtraction - up to 20" },
            { id: "Q.14", title: "Subtraction sentences: true or false?" },
            { id: "Q.15", title: "Complete the subtraction sentence - up to 20" }
          ]
        },
        {
          id: "R", title: "Subtraction word problems up to 20",
          skills: [
            { id: "R.1", title: "Subtraction word problems - up to 20" },
            { id: "R.2", title: "Subtraction sentences for word problems - up to 20" }
          ]
        },
        {
          id: "S", title: "Addition and subtraction up to 20",
          skills: [
            { id: "S.1", title: "Addition and subtraction - ways to make a number" },
            { id: "S.2", title: "Which sign makes the number sentence true?" },
            { id: "S.3", title: "Fact families" },
            { id: "S.4", title: "Addition and subtraction facts - up to 10" },
            { id: "S.5", title: "Addition and subtraction facts - up to 20" },
            { id: "S.6", title: "Word problems with one addend unknown - up to 10" },
            { id: "S.7", title: "Addition and subtraction word problems - up to 20" }
          ]
        },
        {
          id: "T", title: "Place value",
          skills: [
            { id: "T.1", title: "Build and partition teen numbers" },
            { id: "T.2", title: "Place value models up to 20" },
            { id: "T.3", title: "Build and partition multiples of ten" },
            { id: "T.4", title: "Build and partition two-digit numbers - with models" },
            { id: "T.5", title: "Place value models for two-digit numbers" },
            { id: "T.6", title: "Build and partition two-digit numbers - without models" },
            { id: "T.7", title: "Identify a digit - tens and ones" },
            { id: "T.8", title: "Value of a digit - tens and ones" },
            { id: "T.9", title: "Ways to make a number - tens and ones" },
            { id: "T.10", title: "Regroup tens and ones - ways to make a number" },
            { id: "T.11", title: "Regroup tens and ones" }
          ]
        },
        {
          id: "U", title: "Comparing up to 100",
          skills: [
            { id: "U.1", title: "Compare numbers up to 100 using words" },
            { id: "U.2", title: "Compare numbers up to 100 using symbols" },
            { id: "U.3", title: "Comparison word problems" },
            { id: "U.4", title: "Put numbers in order" }
          ]
        },
        {
          id: "V", title: "Addition and subtraction: multiples of ten",
          skills: [
            { id: "V.1", title: "Ten more or less" },
            { id: "V.2", title: "Add two multiples of ten" },
            { id: "V.3", title: "Subtract multiples of ten" },
            { id: "V.4", title: "Add and subtract multiples of ten" }
          ]
        },
        {
          id: "W", title: "Addition strategies: two digits",
          skills: [
            { id: "W.1", title: "Use models to add a multiple of ten and a one-digit number" },
            { id: "W.2", title: "Use models to add a multiple of ten and a two-digit number" },
            { id: "W.3", title: "Use a hundred chart to add a multiple of ten and a two-digit number" },
            { id: "W.4", title: "Use a hundred chart to add a two-digit number and a one-digit number" },
            { id: "W.5", title: "Use models to add a two-digit and a one-digit number - without regrouping" },
            { id: "W.6", title: "Use models to add a two-digit and a one-digit number - with regrouping" },
            { id: "W.7", title: "Use compensation to add a two-digit number and a one-digit number" },
            { id: "W.8", title: "Use models to add two-digit numbers - without regrouping" },
            { id: "W.9", title: "Use models to add two-digit numbers - with regrouping" },
            { id: "W.10", title: "Use place value to add two-digit numbers - without regrouping" },
            { id: "W.11", title: "Use place value to add two-digit numbers - with regrouping" }
          ]
        },
        {
          id: "X", title: "Addition: two digits",
          skills: [
            { id: "X.1", title: "Add a multiple of ten and a one-digit number" },
            { id: "X.2", title: "Add a multiple of ten and a two-digit number" },
            { id: "X.3", title: "Add a two-digit and a one-digit number - without regrouping" },
            { id: "X.4", title: "Add a two-digit and a one-digit number - with regrouping" },
            { id: "X.5", title: "Add two-digit numbers - without regrouping" },
            { id: "X.6", title: "Add two-digit numbers - with regrouping" },
            { id: "X.7", title: "Addition word problems - up to two digits" }
          ]
        },
        {
          id: "Y", title: "Subtraction strategies: two digits",
          skills: [
            { id: "Y.1", title: "Use models to subtract a one-digit number from a two-digit number - without regrouping" },
            { id: "Y.2", title: "Use models to subtract a one-digit number from a two-digit number - with regrouping" },
            { id: "Y.3", title: "Subtract by counting back - up to 100" },
            { id: "Y.4", title: "Use compensation to subtract a one-digit number from a two-digit number" },
            { id: "Y.5", title: "Use models to subtract two-digit numbers - without regrouping" },
            { id: "Y.6", title: "Use models to subtract two-digit numbers - with regrouping" }
          ]
        },
        {
          id: "Z", title: "Subtraction: two digits",
          skills: [
            { id: "Z.1", title: "Subtract a multiple of ten" },
            { id: "Z.2", title: "Subtract a one-digit number from a two-digit number - without regrouping" },
            { id: "Z.3", title: "Subtract a one-digit number from a two-digit number - with regrouping" },
            { id: "Z.4", title: "Subtract two-digit numbers - without regrouping" },
            { id: "Z.5", title: "Subtract two-digit numbers - with regrouping" },
            { id: "Z.6", title: "Subtraction word problems - up to two digits" }
          ]
        },
        {
          id: "AA", title: "Addition and subtraction: two digits",
          skills: [
            { id: "AA.1", title: "Addition and subtraction - up to 100" },
            { id: "AA.2", title: "Addition and subtraction word problems - up to 100" },
            { id: "AA.3", title: "Two-step addition and subtraction word problems - up to 100" },
            { id: "AA.4", title: "Addition and subtraction terms" }
          ]
        },
        {
          id: "BB", title: "Understand multiplication",
          skills: [
            { id: "BB.1", title: "Count equal groups" },
            { id: "BB.2", title: "Identify multiplication expressions for equal groups" },
            { id: "BB.3", title: "Write multiplication sentences for equal groups" },
            { id: "BB.4", title: "Relate addition and multiplication for equal groups" },
            { id: "BB.5", title: "Identify multiplication expressions for arrays" },
            { id: "BB.6", title: "Write multiplication sentences for arrays" },
            { id: "BB.7", title: "Make arrays to model multiplication" },
            { id: "BB.8", title: "Write two multiplication sentences for an array" },
            { id: "BB.9", title: "Write multiplication sentences for number lines" }
          ]
        },
        {
          id: "CC", title: "Multiplication",
          skills: [
            { id: "CC.1", title: "Multiply by 2" },
            { id: "CC.2", title: "Multiply by 3" },
            { id: "CC.3", title: "Multiply by 4" },
            { id: "CC.4", title: "Multiply by 5" },
            { id: "CC.5", title: "Multiplication facts up to 5" },
            { id: "CC.6", title: "Multiply by 10" },
            { id: "CC.7", title: "Multiplication facts for 2, 5, 10" },
            { id: "CC.8", title: "Multiplication facts for 2, 5, 10: true or false?" },
            { id: "CC.9", title: "Multiplication facts for 2, 5, 10: find the missing factor" },
            { id: "CC.10", title: "Multiplication word problems" }
          ]
        },
        {
          id: "DD", title: "Understand division",
          skills: [
            { id: "DD.1", title: "Divide by counting equal groups" },
            { id: "DD.2", title: "Write division sentences for equal groups" },
            { id: "DD.3", title: "Relate multiplication and division for equal groups" },
            { id: "DD.4", title: "Write division sentences for arrays" },
            { id: "DD.5", title: "Make arrays to model division" },
            { id: "DD.6", title: "Relate multiplication and division for arrays" }
          ]
        },
        {
          id: "EE", title: "Division",
          skills: [
            { id: "EE.1", title: "Divide by 2" },
            { id: "EE.2", title: "Divide by 3" },
            { id: "EE.3", title: "Divide by 4" },
            { id: "EE.4", title: "Divide by 5" },
            { id: "EE.5", title: "Divisors and quotients up to 5" },
            { id: "EE.6", title: "Divide by 10" },
            { id: "EE.7", title: "Division facts for 2, 5, 10" },
            { id: "EE.8", title: "Division facts for 2, 5, 10: true or false?" },
            { id: "EE.9", title: "Division word problems" }
          ]
        },
        {
          id: "FF", title: "Multiplication and division",
          skills: [
            { id: "FF.1", title: "Multiplication and division facts with 2, 5 and 10" },
            { id: "FF.2", title: "Multiplication and division facts with 2, 5 and 10: true or false?" },
            { id: "FF.3", title: "Multiplication and division facts up to 5" },
            { id: "FF.4", title: "Multiplication and division terms" }
          ]
        },
        {
          id: "GG", title: "Measurement",
          skills: [
            { id: "GG.1", title: "Long and short" },
            { id: "GG.2", title: "Tall and short" },
            { id: "GG.3", title: "Order objects: length and height" },
            { id: "GG.4", title: "Light and heavy" },
            { id: "GG.5", title: "Holds more or less" },
            { id: "GG.6", title: "Compare size, weight and capacity" },
            { id: "GG.7", title: "Measure using objects" },
            { id: "GG.8", title: "Read a thermometer" },
            { id: "GG.9", title: "Measure using a centimetre ruler" },
            { id: "GG.10", title: "Which metric unit of length is appropriate?" },
            { id: "GG.11", title: "Metric units of length: word problems" },
            { id: "GG.12", title: "Which metric unit of mass is appropriate?" },
            { id: "GG.13", title: "Measure liquid volumes - metric units" },
            { id: "GG.14", title: "Which metric unit of volume is appropriate?" },
            { id: "GG.15", title: "Metric units of mass and volume: word problems" }
          ]
        },
        {
          id: "HH", title: "Time",
          skills: [
            { id: "HH.1", title: "Match digital clocks and times I" },
            { id: "HH.2", title: "Match digital clocks and times II" },
            { id: "HH.3", title: "Match analogue clocks and times I" },
            { id: "HH.4", title: "Match analogue clocks and times II" },
            { id: "HH.5", title: "Match analogue and digital clocks I" },
            { id: "HH.6", title: "Match analogue and digital clocks II" },
            { id: "HH.7", title: "Read clocks and write times I" },
            { id: "HH.8", title: "Read clocks and write times II" },
            { id: "HH.9", title: "Time words: o'clock, half, quarter" },
            { id: "HH.10", title: "A.M. or P.M." },
            { id: "HH.11", title: "Times of everyday events" },
            { id: "HH.12", title: "Compare clocks I" },
            { id: "HH.13", title: "Compare clocks II" },
            { id: "HH.14", title: "Time and clocks: word problems" },
            { id: "HH.15", title: "Elapsed time I" },
            { id: "HH.16", title: "Elapsed time II" },
            { id: "HH.17", title: "Reading schedules" }
          ]
        },
        {
          id: "II", title: "Days, months and seasons",
          skills: [
            { id: "II.1", title: "Days of the week" },
            { id: "II.2", title: "Months of the year" },
            { id: "II.3", title: "Seasons of the year" },
            { id: "II.4", title: "Read a calendar" }
          ]
        },
        {
          id: "JJ", title: "Money",
          skills: [
            { id: "JJ.1", title: "Coin values" },
            { id: "JJ.2", title: "Count 1p, 2p, 5p and 10p coins" },
            { id: "JJ.3", title: "Count all coins" },
            { id: "JJ.4", title: "Count coins and notes - up to £20 note" },
            { id: "JJ.5", title: "Equivalent groups of coins" },
            { id: "JJ.6", title: "Exchanging coins" },
            { id: "JJ.7", title: "Money - word problems" },
            { id: "JJ.8", title: "Least number of coins" },
            { id: "JJ.9", title: "Purchases up to £1: do you have enough money?" },
            { id: "JJ.10", title: "Purchases up to £10: do you have enough money?" },
            { id: "JJ.11", title: "Compare money amounts" },
            { id: "JJ.12", title: "Making change" }
          ]
        },
        {
          id: "KK", title: "Data and graphs",
          skills: [
            { id: "KK.1", title: "Interpret pictograms" },
            { id: "KK.2", title: "Interpret scaled pictograms" },
            { id: "KK.3", title: "Create pictograms" },
            { id: "KK.4", title: "Create scaled pictograms" },
            { id: "KK.5", title: "Which tally chart is correct?" },
            { id: "KK.6", title: "Interpret tally charts" },
            { id: "KK.7", title: "Which table is correct?" },
            { id: "KK.8", title: "Interpret data in tables" },
            { id: "KK.9", title: "Show data in different ways" },
            { id: "KK.10", title: "Which bar graph is correct?" },
            { id: "KK.11", title: "Interpret bar graphs" },
            { id: "KK.12", title: "Create bar graphs" }
          ]
        },
        {
          id: "LL", title: "Patterns",
          skills: [
            { id: "LL.1", title: "Introduction to patterns" },
            { id: "LL.2", title: "Find the next shape in a pattern" },
            { id: "LL.3", title: "Complete a pattern" },
            { id: "LL.4", title: "Make a pattern" },
            { id: "LL.5", title: "Growing patterns" },
            { id: "LL.6", title: "Find the next shape in a growing pattern" },
            { id: "LL.7", title: "Find the next row in a growing pattern" }
          ]
        },
        {
          id: "MM", title: "Two-dimensional shapes",
          skills: [
            { id: "MM.1", title: "Name the two-dimensional shape" },
            { id: "MM.2", title: "Select two-dimensional shapes" },
            { id: "MM.3", title: "Two-dimensional shapes in the real world" },
            { id: "MM.4", title: "Count sides and vertices" },
            { id: "MM.5", title: "Compare sides and vertices" },
            { id: "MM.6", title: "Equal sides" },
            { id: "MM.7", title: "Open and closed shapes" },
            { id: "MM.8", title: "Name the two-dimensional shape and explain your answer" },
            { id: "MM.9", title: "Symmetry" },
            { id: "MM.10", title: "Compose two-dimensional shapes" }
          ]
        },
        {
          id: "NN", title: "Three-dimensional shapes",
          skills: [
            { id: "NN.1", title: "Two-dimensional and three-dimensional shapes" },
            { id: "NN.2", title: "Name the three-dimensional shape" },
            { id: "NN.3", title: "Select three-dimensional shapes" },
            { id: "NN.4", title: "Count vertices, edges and faces" },
            { id: "NN.5", title: "Compare vertices, edges and faces" },
            { id: "NN.6", title: "Identify shapes traced from solids" },
            { id: "NN.7", title: "Identify faces of three-dimensional shapes" },
            { id: "NN.8", title: "Three-dimensional shapes in the real world I" },
            { id: "NN.9", title: "Three-dimensional shapes in the real world II" }
          ]
        },
        {
          id: "OO", title: "Spatial sense",
          skills: [
            { id: "OO.1", title: "In front of and behind" },
            { id: "OO.2", title: "Left, middle and right" },
            { id: "OO.3", title: "Top, middle and bottom" },
            { id: "OO.4", title: "Location in a grid" },
            { id: "OO.5", title: "Above and below" },
            { id: "OO.6", title: "Beside and next to" },
            { id: "OO.7", title: "Flip, turn and slide" },
            { id: "OO.8", title: "Fractions of a turn" }
          ]
        },
        {
          id: "PP", title: "Sorting and classifying",
          skills: [
            { id: "PP.1", title: "Classify and sort by shape" },
            { id: "PP.2", title: "Classify, sort and count" },
            { id: "PP.3", title: "Count shapes in a Venn diagram" },
            { id: "PP.4", title: "Sort shapes into a Venn diagram" }
          ]
        },
        {
          id: "QQ", title: "Fractions",
          skills: [
            { id: "QQ.1", title: "Equal parts" },
            { id: "QQ.2", title: "Halves and quarters" },
            { id: "QQ.3", title: "Halves, thirds and quarters" },
            { id: "QQ.4", title: "Halves, thirds and quarters: what fraction does the shape show?" },
            { id: "QQ.5", title: "Halves, thirds and quarters: which shape matches the fraction?" },
            { id: "QQ.6", title: "Halves, thirds and quarters: parts of a group" },
            { id: "QQ.7", title: "Halves, thirds and quarters of number lines" },
            { id: "QQ.8", title: "Halves, thirds and quarters of a whole: modelling word problems" },
            { id: "QQ.9", title: "Halves, thirds and quarters of a whole: word problems" },
            { id: "QQ.10", title: "Fractions up to tenths: what fraction does the shape show?" },
            { id: "QQ.11", title: "Fractions up to tenths: which shape matches the fraction?" },
            { id: "QQ.12", title: "Fractions up to tenths: parts of a group" },
            { id: "QQ.13", title: "Fractions up to tenths: word problems" },
            { id: "QQ.14", title: "Fractions of a whole up to tenths: modelling word problems" },
            { id: "QQ.15", title: "Fractions of a whole up to tenths: word problems" },
            { id: "QQ.16", title: "Compare fractions" }
          ]
        }
      ],
    },
  },

 
  // GRADE 3 MATH (Full Curriculum A-HH)
  // ==============================================================
  "3": {
    math: {
      title: "Year 3 Math",
      description: "Multiplication, division, fractions, area, perimeter, and data analysis.",
      stats: { skills: 600, videos: 450, games: 100 },
      topics: [
        {
          id: "A", title: "Counting and number patterns",
          skills: [
            { id: "A.1", title: "Skip-counting by 2, 5 and 10" },
            { id: "A.2", title: "Skip-counting by 4" },
            { id: "A.3", title: "Skip-counting by 8" },
            { id: "A.4", title: "Skip-counting by 100" },
            { id: "A.5", title: "Skip-counting stories" },
            { id: "A.6", title: "Skip-counting sequences" },
            { id: "A.7", title: "Skip-counting puzzles" },
            { id: "A.8", title: "Number lines - up to 100" },
            { id: "A.9", title: "Counting patterns - up to 100" },
            { id: "A.10", title: "Hundred chart" },
            { id: "A.11", title: "Number lines - up to 1,000" },
            { id: "A.12", title: "Count forward - up to 1,000" },
            { id: "A.13", title: "Counting patterns - up to 1,000" },
            { id: "A.14", title: "Even or odd" },
            { id: "A.15", title: "Identify numbers as even or odd" },
            { id: "A.16", title: "Select even or odd numbers" },
            { id: "A.17", title: "Even or odd numbers on number lines" },
            { id: "A.18", title: "Which even or odd number comes before or after?" },
            { id: "A.19", title: "Understand negative numbers" }
          ]
        },
        {
          id: "B", title: "Comparing and ordering",
          skills: [
            { id: "B.1", title: "Comparing numbers up to 100" },
            { id: "B.2", title: "Comparing numbers up to 1,000" },
            { id: "B.3", title: "Put numbers up to 100 in order" },
            { id: "B.4", title: "Put numbers up to 1,000 in order" },
            { id: "B.5", title: "Greatest and least - word problems - up to 100" },
            { id: "B.6", title: "Greatest and least - word problems - up to 1,000" }
          ]
        },
        {
          id: "C", title: "Names of numbers",
          skills: [
            { id: "C.1", title: "Ordinal numbers up to 10th" },
            { id: "C.2", title: "Ordinal numbers up to 100th" },
            { id: "C.3", title: "Convert between digits and words - up to 100" },
            { id: "C.4", title: "Convert digits to words - up to 1,000" },
            { id: "C.5", title: "Convert words to digits - up to 1,000" },
            { id: "C.6", title: "Write digits given words - up to 1,000" },
            { id: "C.7", title: "Write words given digits - up to 1,000" },
            { id: "C.8", title: "Convert between digits and words - up to 1,000" },
            { id: "C.9", title: "Roman numerals I, V, X" }
          ]
        },
        {
          id: "D", title: "Patterns",
          skills: [
            { id: "D.1", title: "Repeating patterns" },
            { id: "D.2", title: "Growing patterns" },
            { id: "D.3", title: "Find the next shape in a pattern" },
            { id: "D.4", title: "Complete a repeating pattern" },
            { id: "D.5", title: "Make a repeating pattern" },
            { id: "D.6", title: "Find the next row in a growing pattern" }
          ]
        },
        {
          id: "E", title: "Addition - one digit",
          skills: [
            { id: "E.1", title: "Add one-digit numbers - sums to 10" },
            { id: "E.2", title: "Ways to make a number - sums to 10" },
            { id: "E.3", title: "Write addition sentences - sums to 10" },
            { id: "E.4", title: "Add doubles" },
            { id: "E.5", title: "Add zero" },
            { id: "E.6", title: "Addition with pictures - sums to 20" },
            { id: "E.7", title: "Add one-digit numbers" },
            { id: "E.8", title: "Addition input/output tables - sums to 20" },
            { id: "E.9", title: "Addition word problems - sums to 20" },
            { id: "E.10", title: "Complete the addition sentence - sums to 20" },
            { id: "E.11", title: "Write the addition sentence - sums to 20" },
            { id: "E.12", title: "Balance addition equations - sums to 20" },
            { id: "E.13", title: "Add three or more one-digit numbers" },
            { id: "E.14", title: "Add three or more one-digit numbers - word problems" },
            { id: "E.15", title: "Identify repeated addition for arrays - sums to 10" },
            { id: "E.16", title: "Write addition sentences for arrays - sums to 10" },
            { id: "E.17", title: "Identify repeated addition for arrays - sums to 25" },
            { id: "E.18", title: "Write addition sentences for arrays - sums to 25" }
          ]
        },
        {
          id: "F", title: "Subtraction - one digit",
          skills: [
            { id: "F.1", title: "Subtract one-digit numbers - up to 10" },
            { id: "F.2", title: "Ways to subtract - up to 10" },
            { id: "F.3", title: "Write subtraction sentences - up to 10" },
            { id: "F.4", title: "Subtract doubles" },
            { id: "F.5", title: "Subtract zero/all" },
            { id: "F.6", title: "Subtraction with pictures - up to 20" },
            { id: "F.7", title: "Subtract a one-digit number from a two-digit number up to 20" },
            { id: "F.8", title: "Subtraction input/output tables - up to 20" },
            { id: "F.9", title: "Subtraction word problems - up to 20" },
            { id: "F.10", title: "Complete the subtraction sentence - up to 20" },
            { id: "F.11", title: "Write the subtraction sentence - up to 20" },
            { id: "F.12", title: "Balance subtraction equations - up to 20" }
          ]
        },
        {
          id: "G", title: "Addition - two digits",
          skills: [
            { id: "G.1", title: "Add multiples of 10" },
            { id: "G.2", title: "Use models to add a two-digit and a one-digit number - without regrouping" },
            { id: "G.3", title: "Add a two-digit and a one-digit number - without regrouping" },
            { id: "G.4", title: "Use models to add a two-digit and a one-digit number - with regrouping" },
            { id: "G.5", title: "Add a two-digit and a one-digit number - with regrouping" },
            { id: "G.6", title: "Use models to add two-digit numbers - without regrouping" },
            { id: "G.7", title: "Add two-digit numbers - without regrouping" },
            { id: "G.8", title: "Use models to add two-digit numbers - with regrouping" },
            { id: "G.9", title: "Add two-digit numbers - with regrouping" },
            { id: "G.10", title: "Use compensation to add - up to two digits" },
            { id: "G.11", title: "Addition input/output tables - up to two digits" },
            { id: "G.12", title: "Ways to make a number using addition" },
            { id: "G.13", title: "Addition word problems - up to two digits" },
            { id: "G.14", title: "Complete the addition sentence - up to two digits" },
            { id: "G.15", title: "Write the addition sentence - up to two digits" },
            { id: "G.16", title: "Balance addition equations - up to two digits" },
            { id: "G.17", title: "Add three or more numbers up to two digits each" },
            { id: "G.18", title: "Add three or more numbers up to two digits - word problems" }
          ]
        },
        {
          id: "H", title: "Subtraction - two digits",
          skills: [
            { id: "H.1", title: "Subtract multiples of 10" },
            { id: "H.2", title: "Use models to subtract a one-digit number from a two-digit number - without regrouping" },
            { id: "H.3", title: "Subtract a one-digit number from a two-digit number - without regrouping" },
            { id: "H.4", title: "Use models to subtract a one-digit number from a two-digit number - with regrouping" },
            { id: "H.5", title: "Subtract a one-digit number from a two-digit number - with regrouping" },
            { id: "H.6", title: "Use models to subtract two-digit numbers - without regrouping" },
            { id: "H.7", title: "Subtract two-digit numbers - without regrouping" },
            { id: "H.8", title: "Use models to subtract two-digit numbers - with regrouping" },
            { id: "H.9", title: "Subtract two-digit numbers - with regrouping" },
            { id: "H.10", title: "Use compensation to subtract - up to two digits" },
            { id: "H.11", title: "Subtraction input/output tables - up to two digits" },
            { id: "H.12", title: "Ways to make a number using subtraction" },
            { id: "H.13", title: "Subtraction word problems - up to two digits" },
            { id: "H.14", title: "Complete the subtraction sentence - up to two digits" },
            { id: "H.15", title: "Write the subtraction sentence - up to two digits" },
            { id: "H.16", title: "Balance subtraction equations - up to two digits" }
          ]
        },
        {
          id: "I", title: "Addition - three digits",
          skills: [
            { id: "I.1", title: "Add multiples of 100" },
            { id: "I.2", title: "Add a multiple of 10 or 100" },
            { id: "I.3", title: "Use models to add three-digit numbers - without regrouping" },
            { id: "I.4", title: "Use models to add three-digit numbers - with regrouping" },
            { id: "I.5", title: "Add a one-digit number to a three-digit number" },
            { id: "I.6", title: "Add a two-digit number to a three-digit number" },
            { id: "I.7", title: "Add a three-digit number to a three-digit number" },
            { id: "I.8", title: "Use compensation to add - up to three digits" },
            { id: "I.9", title: "Addition input/output tables - up to three digits" },
            { id: "I.10", title: "Add a one-digit number to a three-digit number: word problems" },
            { id: "I.11", title: "Add a two-digit number to a three-digit number: word problems" },
            { id: "I.12", title: "Addition word problems - up to three digits" },
            { id: "I.13", title: "Complete the addition sentence - up to three digits" },
            { id: "I.14", title: "Write the addition sentence - up to three digits" },
            { id: "I.15", title: "Balance addition equations - up to three digits" }
          ]
        },
        {
          id: "J", title: "Subtraction - three digits",
          skills: [
            { id: "J.1", title: "Subtract multiples of 100" },
            { id: "J.2", title: "Use models to subtract from three-digit numbers - without regrouping" },
            { id: "J.3", title: "Use models to subtract from three-digit numbers - with regrouping" },
            { id: "J.4", title: "Subtract a one-digit number from a three-digit number" },
            { id: "J.5", title: "Subtract by a multiple of 10" },
            { id: "J.6", title: "Subtract a two-digit number from a three-digit number" },
            { id: "J.7", title: "Subtract by a multiple of 100" },
            { id: "J.8", title: "Subtract a three-digit number from a three-digit number" },
            { id: "J.9", title: "Use compensation to subtract - up to three digits" },
            { id: "J.10", title: "Subtraction input/output tables - up to three digits" },
            { id: "J.11", title: "Subtract a one-digit number from a three-digit number: word problems" },
            { id: "J.12", title: "Subtract a two-digit number from a three-digit number: word problems" },
            { id: "J.13", title: "Subtraction word problems - up to three digits" },
            { id: "J.14", title: "Complete the subtraction sentence - up to three digits" },
            { id: "J.15", title: "Write the subtraction sentence - up to three digits" },
            { id: "J.16", title: "Balance subtraction equations - up to three digits" }
          ]
        },
        {
          id: "K", title: "Understand multiplication",
          skills: [
            { id: "K.1", title: "Count equal groups" },
            { id: "K.2", title: "Identify multiplication expressions for equal groups" },
            { id: "K.3", title: "Write multiplication sentences for equal groups" },
            { id: "K.4", title: "Relate addition and multiplication for equal groups" },
            { id: "K.5", title: "Identify multiplication expressions for arrays" },
            { id: "K.6", title: "Write multiplication sentences for arrays" },
            { id: "K.7", title: "Make arrays to model multiplication" },
            { id: "K.8", title: "Multiply using number lines" },
            { id: "K.9", title: "Write multiplication sentences for number lines" }
          ]
        },
        {
          id: "L", title: "Multiplication skill builders",
          skills: [
            { id: "L.1", title: "Multiply by 0" },
            { id: "L.2", title: "Multiply by 1" },
            { id: "L.3", title: "Multiply by 2" },
            { id: "L.4", title: "Multiply by 3" },
            { id: "L.5", title: "Multiply by 4" },
            { id: "L.6", title: "Multiply by 5" },
            { id: "L.7", title: "Multiply by 6" },
            { id: "L.8", title: "Multiply by 7" },
            { id: "L.9", title: "Multiply by 8" },
            { id: "L.10", title: "Multiply by 9" },
            { id: "L.11", title: "Multiply by 10" }
          ]
        },
        {
          id: "M", title: "Multiplication",
          skills: [
            { id: "M.1", title: "Multiplication facts up to 5" },
            { id: "M.2", title: "Multiplication facts for 2, 3, 4, 5, 8 and 10" },
            { id: "M.3", title: "Multiplication facts for 6, 7, 8 and 9" },
            { id: "M.4", title: "Multiplication facts up to 10" },
            { id: "M.5", title: "Multiplication facts up to 5: true or false?" },
            { id: "M.6", title: "Multiplication facts for 2, 3, 4, 5, 8, 10: true or false?" },
            { id: "M.7", title: "Multiplication facts up to 10: true or false?" },
            { id: "M.8", title: "Choose the multiples of 2, 3, 4, 5 or 10" },
            { id: "M.9", title: "Multiplication facts up to 10: find the missing factor" },
            { id: "M.10", title: "Multiplication word problems" },
            { id: "M.11", title: "Multiplication word problems: find the missing factor" },
            { id: "M.12", title: "Multiply a one-digit number by a two-digit number using area models I" },
            { id: "M.13", title: "Multiply a one-digit number by a two-digit number using area models II" },
            { id: "M.14", title: "Multiply a one-digit number by a two-digit number" },
            { id: "M.15", title: "Multiply a one-digit number by a two-digit number: word problems" },
            { id: "M.16", title: "Multiplication input/output tables" },
            { id: "M.17", title: "Combinations" },
            { id: "M.18", title: "Multiply a 1-digit number by 10 or 100" },
            { id: "M.19", title: "Multiply using properties" }
          ]
        },
        {
          id: "N", title: "Understand division",
          skills: [
            { id: "N.1", title: "Divide by counting equal groups" },
            { id: "N.2", title: "Write division sentences for equal groups" },
            { id: "N.3", title: "Relate multiplication and division for equal groups" },
            { id: "N.4", title: "Write division sentences for arrays" },
            { id: "N.5", title: "Relate multiplication and division for arrays" },
            { id: "N.6", title: "Divide using number lines" }
          ]
        },
        {
          id: "O", title: "Division skill builders",
          skills: [
            { id: "O.1", title: "Divide by 1" },
            { id: "O.2", title: "Divide by 2" },
            { id: "O.3", title: "Divide by 3" },
            { id: "O.4", title: "Divide by 4" },
            { id: "O.5", title: "Divide by 5" },
            { id: "O.6", title: "Divide by 6" },
            { id: "O.7", title: "Divide by 7" },
            { id: "O.8", title: "Divide by 8" },
            { id: "O.9", title: "Divide by 9" },
            { id: "O.10", title: "Divide by 10" }
          ]
        },
        {
          id: "P", title: "Division",
          skills: [
            { id: "P.1", title: "Divisors and quotients up to 5" },
            { id: "P.2", title: "Division facts for 2, 3, 4, 5, 8 and 10" },
            { id: "P.3", title: "Division facts for 6, 7, 8 and 9" },
            { id: "P.4", title: "Divisors and quotients up to 10" },
            { id: "P.5", title: "Division facts up to 5: true or false?" },
            { id: "P.6", title: "Division facts for 2, 3, 4, 5, 8, 10: true or false?" },
            { id: "P.7", title: "Division facts up to 10: true or false?" },
            { id: "P.8", title: "Division facts up to 10: find the missing number" },
            { id: "P.9", title: "Division word problems" },
            { id: "P.10", title: "Divide a two-digit number by a one-digit number using area models" },
            { id: "P.11", title: "Divide using repeated subtraction" },
            { id: "P.12", title: "Divide a two-digit number by a one-digit number" },
            { id: "P.13", title: "Divide a two-digit number by a one-digit number: word problems" },
            { id: "P.14", title: "Complete the division table" },
            { id: "P.15", title: "Division input/output tables" }
          ]
        },
        {
          id: "Q", title: "Properties",
          skills: [
            { id: "Q.1", title: "Related addition facts" },
            { id: "Q.2", title: "Related subtraction facts" },
            { id: "Q.3", title: "Relate addition and subtraction" },
            { id: "Q.4", title: "Fact families" },
            { id: "Q.5", title: "Relate addition and multiplication" },
            { id: "Q.6", title: "Relate multiplication and division" },
            { id: "Q.7", title: "Addition, subtraction, multiplication and division terms" },
            { id: "Q.8", title: "Solve inequalities using addition and subtraction shortcuts" }
          ]
        },
        {
          id: "R", title: "Place values",
          skills: [
            { id: "R.1", title: "Place value models - tens and ones" },
            { id: "R.2", title: "Place value models - up to hundreds" },
            { id: "R.3", title: "Identify a digit up to the hundreds place" },
            { id: "R.4", title: "Value of a digit - tens and ones" },
            { id: "R.5", title: "Value of a digit - up to hundreds" },
            { id: "R.6", title: "Convert to/from a number - tens and ones" },
            { id: "R.7", title: "Regroup tens and ones - ways to make a number" },
            { id: "R.8", title: "Regroup tens and ones" },
            { id: "R.9", title: "Convert to/from a number - up to hundreds" },
            { id: "R.10", title: "Convert between place values - up to hundreds" },
            { id: "R.11", title: "Convert from expanded form - up to hundreds" },
            { id: "R.12", title: "Place value word problems" }
          ]
        },
        {
          id: "S", title: "Estimation and rounding",
          skills: [
            { id: "S.1", title: "Estimate to the nearest ten" },
            { id: "S.2", title: "Round to the nearest ten" },
            { id: "S.3", title: "Round to the nearest ten or hundred" },
            { id: "S.4", title: "Estimate sums" },
            { id: "S.5", title: "Estimate sums: word problems" },
            { id: "S.6", title: "Estimate differences" },
            { id: "S.7", title: "Estimate differences: word problems" }
          ]
        },
        {
          id: "T", title: "Mixed operations",
          skills: [
            { id: "T.1", title: "Ten more or less" },
            { id: "T.2", title: "Add and subtract 10 - input/output tables" },
            { id: "T.3", title: "Add and subtract numbers up to 20" },
            { id: "T.4", title: "Ways to make a number using addition and subtraction - up to 20" },
            { id: "T.5", title: "Addition and subtraction word problems - up to 20" },
            { id: "T.6", title: "Addition and subtraction - balance equations - up to 20" },
            { id: "T.7", title: "Write the addition or subtraction rule for an input/output table - up to 20" },
            { id: "T.8", title: "Add and subtract numbers up to 100" },
            { id: "T.9", title: "Ways to make a number using addition and subtraction - up to 100" },
            { id: "T.10", title: "Addition and subtraction word problems - up to 100" },
            { id: "T.11", title: "Two-step addition and subtraction word problems - up to 100" },
            { id: "T.12", title: "Addition and subtraction - balance equations - up to 100" },
            { id: "T.13", title: "Write the addition or subtraction rule for an input/output table - up to 100" },
            { id: "T.14", title: "Add and subtract 100 - input/output tables" },
            { id: "T.15", title: "Which sign (+ or -) makes the number sentence true? - up to 100" },
            { id: "T.16", title: "Write addition and subtraction sentences" },
            { id: "T.17", title: "Inequalities with addition and subtraction - up to 100" },
            { id: "T.18", title: "Add and subtract numbers up to 1,000" },
            { id: "T.19", title: "Multiplication and division facts with 2, 3, 4, 5, 8 and 10" },
            { id: "T.20", title: "Multiplication and division facts with 2, 3, 4, 5, 8 and 10: true or false?" },
            { id: "T.21", title: "Multiplication and division facts up to 10" },
            { id: "T.22", title: "Multiplication and division facts up to 10: true or false?" },
            { id: "T.23", title: "Addition, subtraction, multiplication and division facts I" },
            { id: "T.24", title: "Addition, subtraction, multiplication and division facts II" }
          ]
        },
        {
          id: "U", title: "Logical reasoning",
          skills: [
            { id: "U.1", title: "Guess the number" }
          ]
        },
        {
          id: "V", title: "Money",
          skills: [
            { id: "V.1", title: "Coin values" },
            { id: "V.2", title: "Count coins" },
            { id: "V.3", title: "Count coins and notes" },
            { id: "V.4", title: "Equivalent amounts of money - up to £1" },
            { id: "V.5", title: "Equivalent amounts of money - up to £5" },
            { id: "V.6", title: "Exchanging coins" },
            { id: "V.7", title: "Comparing groups of coins" },
            { id: "V.8", title: "Add and subtract money - up to £1" },
            { id: "V.9", title: "Add and subtract money - word problems - up to £1" },
            { id: "V.10", title: "Add and subtract money - word problems - up to £5" },
            { id: "V.11", title: "Purchases - do you have enough money - up to £1" },
            { id: "V.12", title: "Purchases - do you have enough money - up to £10" },
            { id: "V.13", title: "Which picture shows more - up to £1" },
            { id: "V.14", title: "Which picture shows more - up to £5" },
            { id: "V.15", title: "Least number of coins" },
            { id: "V.16", title: "How much more to make one pound?" },
            { id: "V.17", title: "Making change - purchases up to £1" },
            { id: "V.18", title: "Making change - purchases up to £10" }
          ]
        },
        {
          id: "W", title: "Time",
          skills: [
            { id: "W.1", title: "Match clocks and times I" },
            { id: "W.2", title: "Match clocks and times II" },
            { id: "W.3", title: "Match analogue and digital clocks I" },
            { id: "W.4", title: "Match analogue and digital clocks II" },
            { id: "W.5", title: "Read clocks and write times I" },
            { id: "W.6", title: "Read clocks and write times II" },
            { id: "W.7", title: "Time words: o'clock, half, quarter" },
            { id: "W.8", title: "A.M. or P.M." },
            { id: "W.9", title: "Compare clocks" },
            { id: "W.10", title: "Elapsed time I" },
            { id: "W.11", title: "Elapsed time II" },
            { id: "W.12", title: "Time patterns" },
            { id: "W.13", title: "Relate time units" },
            { id: "W.14", title: "Seasons" },
            { id: "W.15", title: "Days of the week" },
            { id: "W.16", title: "Months of the year" },
            { id: "W.17", title: "Number of days in each month" },
            { id: "W.18", title: "Read a calendar" },
            { id: "W.19", title: "Reading schedules" }
          ]
        },
        {
          id: "X", title: "Data and graphs",
          skills: [
            { id: "X.1", title: "Which tally chart is correct?" },
            { id: "X.2", title: "Interpret tally charts" },
            { id: "X.3", title: "Which bar graph is correct?" },
            { id: "X.4", title: "Interpret bar graphs" },
            { id: "X.5", title: "Create bar graphs" },
            { id: "X.6", title: "Use bar graphs to solve problems" },
            { id: "X.7", title: "Interpret line plots" },
            { id: "X.8", title: "Create line plots" },
            { id: "X.9", title: "Interpret pictograms I" },
            { id: "X.10", title: "Interpret pictograms II" },
            { id: "X.11", title: "Create pictograms" },
            { id: "X.12", title: "Interpret data in tables" },
            { id: "X.13", title: "Which line graph is correct?" },
            { id: "X.14", title: "Interpret line graphs" },
            { id: "X.15", title: "Count shapes in a Venn diagram" },
            { id: "X.16", title: "Sort shapes into a Venn diagram" }
          ]
        },
        {
          id: "Y", title: "Units of measurement",
          skills: [
            { id: "Y.1", title: "Compare size, weight and capacity" },
            { id: "Y.2", title: "Read a thermometer" },
            { id: "Y.3", title: "Measure using a centimetre ruler" },
            { id: "Y.4", title: "Which metric unit of length is appropriate?" },
            { id: "Y.5", title: "Compare and convert metric units of length" },
            { id: "Y.6", title: "Metric units of length: word problems" },
            { id: "Y.7", title: "Which metric unit of mass is appropriate?" },
            { id: "Y.8", title: "Compare and convert metric units of mass" },
            { id: "Y.9", title: "Measure liquid volumes - metric units" },
            { id: "Y.10", title: "Which metric unit of volume is appropriate?" },
            { id: "Y.11", title: "Compare and convert metric units of volume" },
            { id: "Y.12", title: "Metric units of mass and volume: word problems" },
            { id: "Y.13", title: "Choose the appropriate measuring tool" }
          ]
        },
        {
          id: "Z", title: "Two-dimensional shapes",
          skills: [
            { id: "Z.1", title: "Name polygons" },
            { id: "Z.2", title: "Classify polygons" },
            { id: "Z.3", title: "Two-dimensional shapes in the real world" },
            { id: "Z.4", title: "Count sides and vertices" },
            { id: "Z.5", title: "Compare sides and vertices" },
            { id: "Z.6", title: "Sort two-dimensional shapes" },
            { id: "Z.7", title: "Draw shapes" },
            { id: "Z.8", title: "Flip, turn and slide" },
            { id: "Z.9", title: "Fractions of a turn" },
            { id: "Z.10", title: "Angles: greater than, less than or equal to a right angle" },
            { id: "Z.11", title: "Angles: acute, right or obtuse" },
            { id: "Z.12", title: "Right angles in quadrilaterals" },
            { id: "Z.13", title: "Parallel and perpendicular lines" },
            { id: "Z.14", title: "Identify congruent shapes" },
            { id: "Z.15", title: "Identify lines of symmetry" },
            { id: "Z.16", title: "Draw lines of symmetry" },
            { id: "Z.17", title: "Count lines of symmetry" }
          ]
        },
        {
          id: "AA", title: "Three-dimensional shapes",
          skills: [
            { id: "AA.1", title: "Name the three-dimensional shape" },
            { id: "AA.2", title: "Select three-dimensional shapes" },
            { id: "AA.3", title: "Count vertices, edges and faces" },
            { id: "AA.4", title: "Compare vertices, edges and faces" },
            { id: "AA.5", title: "Identify faces of three-dimensional shapes" },
            { id: "AA.6", title: "Identify shapes traced from solids" },
            { id: "AA.7", title: "Three-dimensional shapes in the real world I" },
            { id: "AA.8", title: "Three-dimensional shapes in the real world II" }
          ]
        },
        {
          id: "BB", title: "Perimeter and area",
          skills: [
            { id: "BB.1", title: "Perimeter" },
            { id: "BB.2", title: "Perimeter - word problems" },
            { id: "BB.3", title: "Area" },
            { id: "BB.4", title: "Area of figures on grids" },
            { id: "BB.5", title: "Select figures with a given area" },
            { id: "BB.6", title: "Select two figures with the same area" },
            { id: "BB.7", title: "Create figures with a given area" }
          ]
        },
        {
          id: "CC", title: "Understand fractions",
          skills: [
            { id: "CC.1", title: "Halves and quarters" },
            { id: "CC.2", title: "Identify the fraction" },
            { id: "CC.3", title: "Understand fractions: fraction bars" },
            { id: "CC.4", title: "Understand fractions: area models" },
            { id: "CC.5", title: "Match fractions to models" },
            { id: "CC.6", title: "Show fractions: fraction bars" },
            { id: "CC.7", title: "Show fractions: area models" },
            { id: "CC.8", title: "Fractions of number lines: unit fractions" },
            { id: "CC.9", title: "Fractions of number lines" },
            { id: "CC.10", title: "Identify unit fractions on number lines" },
            { id: "CC.11", title: "Identify fractions on number lines" },
            { id: "CC.12", title: "Graph unit fractions on number lines" },
            { id: "CC.13", title: "Graph fractions on number lines" },
            { id: "CC.14", title: "Graph smaller or larger fractions on a number line" },
            { id: "CC.15", title: "Fractions of a number" },
            { id: "CC.16", title: "Fractions of a group" },
            { id: "CC.17", title: "Fractions of a group: word problems" },
            { id: "CC.18", title: "Fractions of a whole: modelling word problems" },
            { id: "CC.19", title: "Fractions of a whole: word problems" },
            { id: "CC.20", title: "Model decimals and fractions: tenths" },
            { id: "CC.21", title: "Graph decimals and fractions on a number line: tenths" }
          ]
        },
        {
          id: "DD", title: "Equivalent fractions",
          skills: [
            { id: "DD.1", title: "Find equivalent fractions using area models: two models" },
            { id: "DD.2", title: "Find equivalent fractions using area models: one model" },
            { id: "DD.3", title: "Identify equivalent fractions on number lines" },
            { id: "DD.4", title: "Find equivalent fractions using number lines" },
            { id: "DD.5", title: "Graph equivalent fractions on number lines" },
            { id: "DD.6", title: "Select equivalent fractions" },
            { id: "DD.7", title: "Find equivalent fractions" }
          ]
        },
        {
          id: "EE", title: "Compare fractions",
          skills: [
            { id: "EE.1", title: "Compare fractions using models" },
            { id: "EE.2", title: "Compare fractions using number lines" },
            { id: "EE.3", title: "Graph and compare fractions with the same denominator on number lines" },
            { id: "EE.4", title: "Graph and compare fractions with the same numerator on number lines" },
            { id: "EE.5", title: "Compare fractions" },
            { id: "EE.6", title: "Graph and order fractions on number lines" },
            { id: "EE.7", title: "Order fractions with the same denominator" },
            { id: "EE.8", title: "Order fractions with the same numerator" }
          ]
        },
        {
          id: "FF", title: "Add and subtract fractions",
          skills: [
            { id: "FF.1", title: "Decompose fractions into unit fractions" },
            { id: "FF.2", title: "Decompose fractions" },
            { id: "FF.3", title: "Add fractions with the same denominator using area models" },
            { id: "FF.4", title: "Add fractions with the same denominator using bar models" },
            { id: "FF.5", title: "Add fractions with the same denominator using number lines" },
            { id: "FF.6", title: "Add fractions with the same denominator" },
            { id: "FF.7", title: "Subtract fractions with the same denominator using area models" },
            { id: "FF.8", title: "Subtract fractions with the same denominator using bar models" },
            { id: "FF.9", title: "Subtract fractions with the same denominator using number lines" },
            { id: "FF.10", title: "Subtract fractions with the same denominator" },
            { id: "FF.11", title: "Add and subtract fractions with the same denominator" },
            { id: "FF.12", title: "Add and subtract fractions with the same denominator: word problems" }
          ]
        },
        {
          id: "GG", title: "Probability",
          skills: [
            { id: "GG.1", title: "More, less and equally likely" },
            { id: "GG.2", title: "Certain, probable, unlikely and impossible" }
          ]
        },
        {
          id: "HH", title: "Financial literacy",
          skills: [
            { id: "HH.1", title: "Reading financial records" },
            { id: "HH.2", title: "Keeping financial records" }
          ]
        }
      ],
    },
  },

 
 // ==============================================================
  // GRADE 4 MATH
  // ==============================================================
  "4": {
    math: {
      title: "Year 4 Math",
      description: "Advanced multiplication, long division, fractions, decimals, measurement, and geometry.",
      stats: { skills: 600, videos: 450, games: 110 },
      topics: [
        {
          id: "A", title: "Counting and number patterns",
          skills: [
            { id: "A.1", title: "Even or odd" },
            { id: "A.2", title: "Even or odd: arithmetic rules" },
            { id: "A.3", title: "Skip-counting by 6" },
            { id: "A.4", title: "Skip-counting by 7" },
            { id: "A.5", title: "Skip-counting by 9" },
            { id: "A.6", title: "Skip-counting puzzles" },
            { id: "A.7", title: "Number sequences" },
            { id: "A.8", title: "Ordinal numbers to 100th" },
            { id: "A.9", title: "Writing numbers up to 10,000 in words: convert words to digits" },
            { id: "A.10", title: "Writing numbers up to 10,000 in words: convert digits to words" },
            { id: "A.11", title: "Roman numerals" },
            { id: "A.12", title: "Compare numbers up to 1,000" },
            { id: "A.13", title: "Compare numbers up to 100,000" },
            { id: "A.14", title: "Compare numbers in tables: up to 100,000" },
            { id: "A.15", title: "Put numbers in order: up to 1,000" },
            { id: "A.16", title: "Put numbers in order: up to 100,000" },
            { id: "A.17", title: "Comparing - with addition and subtraction" },
            { id: "A.18", title: "Multi-step inequalities" }
          ]
        },
        {
          id: "B", title: "Place values",
          skills: [
            { id: "B.1", title: "Place value models up to thousands" },
            { id: "B.2", title: "Place value names up to thousands" },
            { id: "B.3", title: "Place value names up to hundred thousands" },
            { id: "B.4", title: "Value of a digit" },
            { id: "B.5", title: "Convert to/from a number" },
            { id: "B.6", title: "Convert between place values" },
            { id: "B.7", title: "Convert from expanded form" },
            { id: "B.8", title: "Convert between standard and expanded form" },
            { id: "B.9", title: "Place value word problems" }
          ]
        },
        {
          id: "C", title: "Addition",
          skills: [
            { id: "C.1", title: "Add a two-digit number to a three-digit number" },
            { id: "C.2", title: "Add a two-digit number to a three-digit number - word problems" },
            { id: "C.3", title: "Complete the addition sentence - add a two-digit number to a three-digit number" },
            { id: "C.4", title: "Balance addition equations - add a two-digit number to a three-digit number" },
            { id: "C.5", title: "Use compensation to add - up to three digits plus two-digits" },
            { id: "C.6", title: "Add two three-digit numbers" },
            { id: "C.7", title: "Addition input/output tables - up to three digits" },
            { id: "C.8", title: "Add two three-digit numbers - word problems" },
            { id: "C.9", title: "Complete the addition sentence - three-digit numbers" },
            { id: "C.10", title: "Balance addition equations - three-digit numbers" },
            { id: "C.11", title: "Add three or more numbers with up to three digits each" },
            { id: "C.12", title: "Add three or more numbers with up to three digits - word problems" },
            { id: "C.13", title: "Add multiples of 10, 100 or 1,000 to whole numbers" },
            { id: "C.14", title: "Addition patterns over increasing place values" },
            { id: "C.15", title: "Add two numbers with up to four digits" },
            { id: "C.16", title: "Addition input/output tables - up to four digits" },
            { id: "C.17", title: "Add two numbers with up to four digits - word problems" },
            { id: "C.18", title: "Complete the addition sentence - up to four digits" },
            { id: "C.19", title: "Balance addition equations - up to four digits" },
            { id: "C.20", title: "Add three or more numbers with up to four digits" },
            { id: "C.21", title: "Add three or more numbers with up to four digits - word problems" },
            { id: "C.22", title: "Addition: fill in the missing digits" }
          ]
        },
        {
          id: "D", title: "Subtraction",
          skills: [
            { id: "D.1", title: "Subtract a two-digit number from a three-digit number" },
            { id: "D.2", title: "Subtract a two-digit number from a three-digit number - word problems" },
            { id: "D.3", title: "Complete the subtraction sentence - three-digit numbers minus two-digit numbers" },
            { id: "D.4", title: "Balance subtraction equations - three-digit numbers minus two-digit numbers" },
            { id: "D.5", title: "Subtract three-digit numbers" },
            { id: "D.6", title: "Subtraction input/output tables - up to three digits" },
            { id: "D.7", title: "Subtract three-digit numbers - word problems" },
            { id: "D.8", title: "Complete the subtraction sentence - three-digit numbers" },
            { id: "D.9", title: "Balance subtraction equations - three-digit numbers" },
            { id: "D.10", title: "Subtract multiples of 10, 100 or 1,000 from whole numbers" },
            { id: "D.11", title: "Subtraction patterns over increasing place values" },
            { id: "D.12", title: "Subtract numbers with up to four digits" },
            { id: "D.13", title: "Subtraction input/output tables - up to four digits" },
            { id: "D.14", title: "Subtract numbers with up to four digits - word problems" },
            { id: "D.15", title: "Complete the subtraction sentence - up to four digits" },
            { id: "D.16", title: "Subtract across zeros" },
            { id: "D.17", title: "Subtraction: fill in the missing digits" }
          ]
        },
        {
          id: "E", title: "Understand multiplication",
          skills: [
            { id: "E.1", title: "Count equal groups" },
            { id: "E.2", title: "Identify multiplication expressions for equal groups" },
            { id: "E.3", title: "Write multiplication sentences for equal groups" },
            { id: "E.4", title: "Relate addition and multiplication for equal groups" },
            { id: "E.5", title: "Identify multiplication expressions for arrays" },
            { id: "E.6", title: "Write multiplication sentences for arrays" },
            { id: "E.7", title: "Make arrays to model multiplication" },
            { id: "E.8", title: "Write multiplication sentences for number lines" }
          ]
        },
        {
          id: "F", title: "Multiplication skill builders",
          skills: [
            { id: "F.1", title: "Multiply by 0" },
            { id: "F.2", title: "Multiply by 1" },
            { id: "F.3", title: "Multiply by 2" },
            { id: "F.4", title: "Multiply by 3" },
            { id: "F.5", title: "Multiply by 4" },
            { id: "F.6", title: "Multiply by 5" },
            { id: "F.7", title: "Multiply by 6" },
            { id: "F.8", title: "Multiply by 7" },
            { id: "F.9", title: "Multiply by 8" },
            { id: "F.10", title: "Multiply by 9" },
            { id: "F.11", title: "Multiply by 10" },
            { id: "F.12", title: "Multiply by 11" },
            { id: "F.13", title: "Multiply by 12" }
          ]
        },
        {
          id: "G", title: "Multiplication fluency",
          skills: [
            { id: "G.1", title: "Multiplication facts for 2, 5, 10" },
            { id: "G.2", title: "Multiplication facts for 2, 5, 10: true or false?" },
            { id: "G.3", title: "Multiplication facts for 2, 5, 10: sorting" },
            { id: "G.4", title: "Multiplication facts for 3, 4, 6" },
            { id: "G.5", title: "Multiplication facts for 3, 4, 6: true or false?" },
            { id: "G.6", title: "Multiplication facts for 3, 4, 6: sorting" },
            { id: "G.7", title: "Multiplication facts for 2, 3, 4, 5, 6 and 10: find the missing factor" },
            { id: "G.8", title: "Multiplication facts for 7, 8, 9" },
            { id: "G.9", title: "Multiplication facts for 7, 8, 9: true or false?" },
            { id: "G.10", title: "Multiplication facts for 7, 8, 9: sorting" },
            { id: "G.11", title: "Multiplication facts up to 10" },
            { id: "G.12", title: "Multiplication facts up to 10: true or false?" },
            { id: "G.13", title: "Multiplication facts up to 10: sorting" },
            { id: "G.14", title: "Multiplication facts up to 10: find the missing factor" },
            { id: "G.15", title: "Multiplication facts up to 10: select the missing factors" },
            { id: "G.16", title: "Multiplication sentences up to 10: true or false?" },
            { id: "G.17", title: "Squares up to 10 x 10" },
            { id: "G.18", title: "Multiplication facts to 12" },
            { id: "G.19", title: "Multiplication facts up to 12: true or false?" },
            { id: "G.20", title: "Multiplication facts up to 12: sorting" },
            { id: "G.21", title: "Multiplication facts up to 12: find the missing factor" },
            { id: "G.22", title: "Multiplication facts up to 12: select the missing factors" },
            { id: "G.23", title: "Multiplication sentences up to 12: true or false?" }
          ]
        },
        {
          id: "H", title: "Multiplication",
          skills: [
            { id: "H.1", title: "Multiplication sentences" },
            { id: "H.2", title: "Choose the multiples of 2, 3, 4, 5, 6, 10" },
            { id: "H.3", title: "Choose the multiples of a given number up to 10" },
            { id: "H.4", title: "Identify factors" },
            { id: "H.5", title: "Complete the factor pairs of a number" },
            { id: "H.6", title: "Multiply one-digit numbers by 10 or 100" },
            { id: "H.7", title: "Multiply by a multiple of 10 using place value" },
            { id: "H.8", title: "Multiply by a multiple of 10" },
            { id: "H.9", title: "Multiply by multiples of 10 and 100" },
            { id: "H.10", title: "Multiplication patterns over increasing place values" },
            { id: "H.11", title: "Multiplication input/output tables" },
            { id: "H.12", title: "Multiplication input/output tables: find the rule" },
            { id: "H.13", title: "Multiplication word problems" },
            { id: "H.14", title: "Multiplication word problems: find the missing factor" },
            { id: "H.15", title: "Compare numbers using multiplication" },
            { id: "H.16", title: "Compare numbers using multiplication: word problems" },
            { id: "H.17", title: "Multiply one-digit numbers by two-digit numbers using area models I" },
            { id: "H.18", title: "Multiply one-digit numbers by two-digit numbers using area models II" },
            { id: "H.19", title: "Multiply one-digit numbers by two-digit numbers" },
            { id: "H.20", title: "Multiply one-digit numbers by two-digit numbers: word problems" },
            { id: "H.21", title: "Multiply one-digit numbers by three-digit numbers using area models I" },
            { id: "H.22", title: "Multiply one-digit numbers by three-digit numbers using area models II" },
            { id: "H.23", title: "Multiply one-digit numbers by three-digit numbers" },
            { id: "H.24", title: "Multiply one-digit numbers by three-digit numbers: word problems" },
            { id: "H.25", title: "Multiply three or more numbers" },
            { id: "H.26", title: "Multiply three or more numbers: word problems" }
          ]
        },
        {
          id: "I", title: "Understand division",
          skills: [
            { id: "I.1", title: "Divide by counting equal groups" },
            { id: "I.2", title: "Write division sentences for equal groups" },
            { id: "I.3", title: "Relate multiplication and division for equal groups" },
            { id: "I.4", title: "Write division sentences for arrays" },
            { id: "I.5", title: "Relate multiplication and division for arrays" }
          ]
        },
        {
          id: "J", title: "Division skill builders",
          skills: [
            { id: "J.1", title: "Divide by 1" },
            { id: "J.2", title: "Divide by 2" },
            { id: "J.3", title: "Divide by 3" },
            { id: "J.4", title: "Divide by 4" },
            { id: "J.5", title: "Divide by 5" },
            { id: "J.6", title: "Divide by 6" },
            { id: "J.7", title: "Divide by 7" },
            { id: "J.8", title: "Divide by 8" },
            { id: "J.9", title: "Divide by 9" },
            { id: "J.10", title: "Divide by 10" },
            { id: "J.11", title: "Divide by 11" },
            { id: "J.12", title: "Divide by 12" }
          ]
        },
        {
          id: "K", title: "Division fluency",
          skills: [
            { id: "K.1", title: "Division facts for 2, 5, 10" },
            { id: "K.2", title: "Division facts for 2, 5, 10: true or false?" },
            { id: "K.3", title: "Division facts for 3, 4, 6" },
            { id: "K.4", title: "Division facts for 3, 4, 6: true or false?" },
            { id: "K.5", title: "Division facts for 7, 8, 9" },
            { id: "K.6", title: "Division facts for 7, 8, 9: true or false?" },
            { id: "K.7", title: "Division facts up to 10" },
            { id: "K.8", title: "Division facts up to 10: true or false?" },
            { id: "K.9", title: "Division facts up to 10: sorting" },
            { id: "K.10", title: "Division facts up to 10: find the missing number" },
            { id: "K.11", title: "Division facts up to 10: select the missing numbers" },
            { id: "K.12", title: "Division sentences up to 10: true or false?" },
            { id: "K.13", title: "Division facts up to 12" },
            { id: "K.14", title: "Division facts up to 12: true or false?" },
            { id: "K.15", title: "Division facts up to 12: sorting" },
            { id: "K.16", title: "Division facts up to 12: find the missing number" },
            { id: "K.17", title: "Division facts up to 12: select the missing numbers" },
            { id: "K.18", title: "Division sentences up to 12: true or false?" }
          ]
        },
        {
          id: "L", title: "Division",
          skills: [
            { id: "L.1", title: "Complete the division table" },
            { id: "L.2", title: "Division patterns over increasing place values" },
            { id: "L.3", title: "Divide numbers ending in zeros" },
            { id: "L.4", title: "Division input/output tables" },
            { id: "L.5", title: "Division word problems" },
            { id: "L.6", title: "Divide two-digit numbers by one-digit numbers using area models" },
            { id: "L.7", title: "Divide two-digit numbers by one-digit numbers" },
            { id: "L.8", title: "Divide two-digit numbers by one-digit numbers: word problems" },
            { id: "L.9", title: "Divide three-digit numbers by one-digit numbers using area models" },
            { id: "L.10", title: "Divide using repeated subtraction" },
            { id: "L.11", title: "Divide using partial quotients" },
            { id: "L.12", title: "Divide three-digit numbers by one-digit numbers" },
            { id: "L.13", title: "Divide three-digit numbers by one-digit numbers: word problems" },
            { id: "L.14", title: "Divisibility rules for 2, 5 and 10" }
          ]
        },
        {
          id: "M", title: "Mixed operations",
          skills: [
            { id: "M.1", title: "Addition, subtraction, multiplication and division facts" },
            { id: "M.2", title: "Complete the addition, subtraction, multiplication or division sentence" },
            { id: "M.3", title: "Multiplication and division facts up to 5: true or false?" },
            { id: "M.4", title: "Multiplication and division facts up to 10: true or false?" },
            { id: "M.5", title: "Multiplication and division facts up to 12: true or false?" },
            { id: "M.6", title: "Multiplication and division sentences up to 12: true or false?" },
            { id: "M.7", title: "Write numerical expressions" },
            { id: "M.8", title: "Add, subtract and multiply" },
            { id: "M.9", title: "Add, subtract, multiply and divide" },
            { id: "M.10", title: "Input/output tables: add and subtract by 1,000" },
            { id: "M.11", title: "Input/output tables" },
            { id: "M.12", title: "Input/output tables: find the rule" },
            { id: "M.13", title: "Add and subtract data from tables" },
            { id: "M.14", title: "Addition and subtraction word problems" },
            { id: "M.15", title: "Multiplication and division word problems" },
            { id: "M.16", title: "Comparison word problems: addition or multiplication?" },
            { id: "M.17", title: "Addition, subtraction and multiplication word problems" },
            { id: "M.18", title: "Addition, subtraction, multiplication and division word problems" },
            { id: "M.19", title: "Two-step addition and subtraction word problems" },
            { id: "M.20", title: "Two-step multiplication and division word problems" },
            { id: "M.21", title: "Two-step mixed operation word problems" },
            { id: "M.22", title: "Numerical operations: find the missing sign" }
          ]
        },
        {
          id: "N", title: "Properties",
          skills: [
            { id: "N.1", title: "Addition, subtraction, multiplication and division terms" },
            { id: "N.2", title: "Understanding brackets" },
            { id: "N.3", title: "Properties of addition" },
            { id: "N.4", title: "Complete the equation using properties of addition" },
            { id: "N.5", title: "Add using properties" },
            { id: "N.6", title: "Properties of multiplication" },
            { id: "N.7", title: "Distributive property: find the missing factor" },
            { id: "N.8", title: "Multiply using the distributive property" },
            { id: "N.9", title: "Solve using properties of multiplication" },
            { id: "N.10", title: "Relate addition and multiplication" },
            { id: "N.11", title: "Relate multiplication and division" },
            { id: "N.12", title: "Multiply by 0 or 1: complete the sentence" }
          ]
        },
        {
          id: "O", title: "Integers",
          skills: [
            { id: "O.1", title: "Understanding integers" },
            { id: "O.2", title: "Count on a number line with negative numbers" },
            { id: "O.3", title: "Graph integers on number lines" },
            { id: "O.4", title: "Compare and order integers using a number line" }
          ]
        },
        {
          id: "P", title: "Equations and variables",
          skills: [
            { id: "P.1", title: "Identify equations" },
            { id: "P.2", title: "Solve for the variable: addition and subtraction" },
            { id: "P.3", title: "Solve for the variable: multiplication and division" },
            { id: "P.4", title: "Solve for the variable: addition, subtraction, multiplication and division" },
            { id: "P.5", title: "Write variable expressions" },
            { id: "P.6", title: "Write variable expressions from word problems" },
            { id: "P.7", title: "Write variable equations to represent word problems" }
          ]
        },
        {
          id: "Q", title: "Estimation and rounding",
          skills: [
            { id: "Q.1", title: "Round using a number line - nearest ten or hundred" },
            { id: "Q.2", title: "Round to the nearest ten or hundred" },
            { id: "Q.3", title: "Round to the nearest ten, hundred or thousand" },
            { id: "Q.4", title: "Round money amounts" },
            { id: "Q.5", title: "Rounding puzzles" },
            { id: "Q.6", title: "Solve inequalities using estimation" },
            { id: "Q.7", title: "Estimate sums up to 1,000" },
            { id: "Q.8", title: "Estimate sums" },
            { id: "Q.9", title: "Estimate sums: word problems" },
            { id: "Q.10", title: "Estimate differences up to 1,000" },
            { id: "Q.11", title: "Estimate differences" },
            { id: "Q.12", title: "Estimate differences: word problems" },
            { id: "Q.13", title: "Estimate products: multiply by 1-digit numbers" },
            { id: "Q.14", title: "Estimate products: multiply by 2-digit numbers" },
            { id: "Q.15", title: "Estimate products: word problems" },
            { id: "Q.16", title: "Estimate quotients" },
            { id: "Q.17", title: "Estimate quotients: word problems" },
            { id: "Q.18", title: "Estimate sums, differences, products and quotients: word problems" }
          ]
        },
        {
          id: "R", title: "Logical reasoning",
          skills: [
            { id: "R.1", title: "Guess the number" },
            { id: "R.2", title: "Largest/smallest number possible" },
            { id: "R.3", title: "Find the order" },
            { id: "R.4", title: "Age puzzles" },
            { id: "R.5", title: "Find two numbers based on sum and difference" },
            { id: "R.6", title: "Find two numbers based on sum, difference, product and quotient" }
          ]
        },
        {
          id: "S", title: "Patterns",
          skills: [
            { id: "S.1", title: "Repeating patterns" },
            { id: "S.2", title: "Growing patterns" },
            { id: "S.3", title: "Find the next shape in a pattern" },
            { id: "S.4", title: "Complete a repeating pattern" },
            { id: "S.5", title: "Make a repeating pattern" },
            { id: "S.6", title: "Find the next row in a growing pattern" }
          ]
        },
        {
          id: "T", title: "Money",
          skills: [
            { id: "T.1", title: "Count coins and notes - up to £5 note" },
            { id: "T.2", title: "Purchases - do you have enough money - up to £10" },
            { id: "T.3", title: "Which picture shows more?" },
            { id: "T.4", title: "Making change" },
            { id: "T.5", title: "Inequalities with money" },
            { id: "T.6", title: "Put money amounts in order" },
            { id: "T.7", title: "Add and subtract money - up to £1" },
            { id: "T.8", title: "Add and subtract money amounts" },
            { id: "T.9", title: "Add and subtract money - word problems - up to £1" },
            { id: "T.10", title: "Add and subtract money amounts - word problems" },
            { id: "T.11", title: "Price lists" }
          ]
        },
        {
          id: "U", title: "Time",
          skills: [
            { id: "U.1", title: "Match clocks and times" },
            { id: "U.2", title: "Match analogue and digital clocks" },
            { id: "U.3", title: "Read clocks and write times" },
            { id: "U.4", title: "A.M. or P.M." },
            { id: "U.5", title: "Write times" },
            { id: "U.6", title: "Elapsed time: find the end time" },
            { id: "U.7", title: "Find the elapsed time" },
            { id: "U.8", title: "Elapsed time word problems" },
            { id: "U.9", title: "Read a calendar" },
            { id: "U.10", title: "Relate time units" },
            { id: "U.11", title: "Time patterns" },
            { id: "U.12", title: "Convert between hours and fractions of hours" },
            { id: "U.13", title: "Convert between 12-hour and 24-hour time" },
            { id: "U.14", title: "Reading schedules - 12-hour time" },
            { id: "U.15", title: "Reading schedules - 24-hour time" },
            { id: "U.16", title: "Timelines" }
          ]
        },
        {
          id: "V", title: "Data and graphs",
          skills: [
            { id: "V.1", title: "Objects on a coordinate plane" },
            { id: "V.2", title: "Graph points on a coordinate plane" },
            { id: "V.3", title: "Coordinate planes as maps - find the coordinates" },
            { id: "V.4", title: "Coordinate planes as maps - count the distance" },
            { id: "V.5", title: "Coordinate planes as maps - find the distance or travel time" },
            { id: "V.6", title: "Direction to starting point" },
            { id: "V.7", title: "Interpret tally charts" },
            { id: "V.8", title: "Interpret frequency tables" },
            { id: "V.9", title: "Create frequency tables" },
            { id: "V.10", title: "Interpret bar graphs" },
            { id: "V.11", title: "Use bar graphs to solve problems" },
            { id: "V.12", title: "Interpret bar graphs: two-step problems" },
            { id: "V.13", title: "Create bar graphs" },
            { id: "V.14", title: "Interpret bar graphs for grouped data" },
            { id: "V.15", title: "Create bar graphs for grouped data" },
            { id: "V.16", title: "Interpret line plots" },
            { id: "V.17", title: "Create line plots" },
            { id: "V.18", title: "Interpret pictograms" },
            { id: "V.19", title: "Create pictograms" },
            { id: "V.20", title: "Interpret line graphs" },
            { id: "V.21", title: "Create line graphs" },
            { id: "V.22", title: "Count shapes in a Venn diagram" },
            { id: "V.23", title: "Sort shapes into a Venn diagram" }
          ]
        },
        {
          id: "W", title: "Units of measurement",
          skills: [
            { id: "W.1", title: "Read a thermometer" },
            { id: "W.2", title: "Reasonable temperature" },
            { id: "W.3", title: "Measure using a centimetre ruler" },
            { id: "W.4", title: "Measure with different metric units" },
            { id: "W.5", title: "Which metric unit of length is appropriate?" },
            { id: "W.6", title: "Compare and convert metric units of length" },
            { id: "W.7", title: "Metric mixed units of length" },
            { id: "W.8", title: "Which metric unit of mass is appropriate?" },
            { id: "W.9", title: "Compare and convert metric units of mass" },
            { id: "W.10", title: "Greater or smaller volume" },
            { id: "W.11", title: "Measure liquid volumes - metric units" },
            { id: "W.12", title: "Which metric unit of volume is appropriate?" },
            { id: "W.13", title: "Compare and convert metric units of volume" },
            { id: "W.14", title: "Conversion tables - metric units" },
            { id: "W.15", title: "Which imperial unit of length is appropriate?" },
            { id: "W.16", title: "Compare and convert imperial units of length" },
            { id: "W.17", title: "Which imperial unit of weight is appropriate?" },
            { id: "W.18", title: "Compare and convert imperial units of weight" },
            { id: "W.19", title: "Which imperial unit of volume is appropriate?" },
            { id: "W.20", title: "Compare and convert imperial units of volume" },
            { id: "W.21", title: "Conversion tables - imperial units" },
            { id: "W.22", title: "Choose the appropriate measuring tool" }
          ]
        },
        {
          id: "X", title: "Two-dimensional figures",
          skills: [
            { id: "X.1", title: "Identify polygons" },
            { id: "X.2", title: "Count and compare sides and vertices" },
            { id: "X.3", title: "Draw polygons" },
            { id: "X.4", title: "Is it a polygon?" },
            { id: "X.5", title: "Regular and irregular polygons" },
            { id: "X.6", title: "Plot points to draw a polygon" },
            { id: "X.7", title: "Lines, line segments and rays" },
            { id: "X.8", title: "Angles greater than, less than or equal to a right angle" },
            { id: "X.9", title: "Acute, right and obtuse angles" },
            { id: "X.10", title: "Acute, right and obtuse angles - with a protractor" },
            { id: "X.11", title: "Angles of 90, 180, 270 and 360 degrees" },
            { id: "X.12", title: "Parallel and perpendicular lines" },
            { id: "X.13", title: "Reflection, rotation and translation" },
            { id: "X.14", title: "Translations" },
            { id: "X.15", title: "Reflections" },
            { id: "X.16", title: "Identify congruent shapes" },
            { id: "X.17", title: "Symmetry" },
            { id: "X.18", title: "Identify lines of symmetry" },
            { id: "X.19", title: "Draw lines of symmetry" },
            { id: "X.20", title: "Count lines of symmetry" }
          ]
        },
        {
          id: "Y", title: "Triangles and quadrilaterals",
          skills: [
            { id: "Y.1", title: "Acute, obtuse and right triangles" },
            { id: "Y.2", title: "Scalene, isosceles and equilateral triangles" },
            { id: "Y.3", title: "Parallel sides in quadrilaterals" },
            { id: "Y.4", title: "Identify parallelograms" },
            { id: "Y.5", title: "Identify trapeziums" },
            { id: "Y.6", title: "Identify rectangles" },
            { id: "Y.7", title: "Identify rhombuses" },
            { id: "Y.8", title: "Classify quadrilaterals" },
            { id: "Y.9", title: "Draw quadrilaterals" }
          ]
        },
        {
          id: "Z", title: "Perimeter and area",
          skills: [
            { id: "Z.1", title: "Perimeter of rectangles" },
            { id: "Z.2", title: "Perimeter of rectilinear shapes" },
            { id: "Z.3", title: "Perimeter of polygons" },
            { id: "Z.4", title: "Perimeter: find the missing side length" },
            { id: "Z.5", title: "Perimeter: word problems" },
            { id: "Z.6", title: "Find the area of figures made of unit squares" },
            { id: "Z.7", title: "Select figures with a given area" },
            { id: "Z.8", title: "Select two figures with the same area" },
            { id: "Z.9", title: "Tile a rectangle and find the area" },
            { id: "Z.10", title: "Multiply to find the area of a rectangle made of unit squares" },
            { id: "Z.11", title: "Create figures with a given area" },
            { id: "Z.12", title: "Create rectangles with a given area" },
            { id: "Z.13", title: "Find the area of rectangles and squares" },
            { id: "Z.14", title: "Find the missing side length of a rectangle" }
          ]
        },
        {
          id: "AA", title: "Three-dimensional figures",
          skills: [
            { id: "AA.1", title: "Identify three-dimensional shapes" },
            { id: "AA.2", title: "Count vertices, edges and faces" },
            { id: "AA.3", title: "Identify faces of three-dimensional shapes" },
            { id: "AA.4", title: "Three-dimensional shapes in the real world I" },
            { id: "AA.5", title: "Three-dimensional shapes in the real world II" },
            { id: "AA.6", title: "Identify objects with volume" },
            { id: "AA.7", title: "Volume" }
          ]
        },
        {
          id: "BB", title: "Understand fractions",
          skills: [
            { id: "BB.1", title: "Understand fractions: fraction bars" },
            { id: "BB.2", title: "Understand fractions: area models" },
            { id: "BB.3", title: "Show fractions: fraction bars" },
            { id: "BB.4", title: "Show fractions: area models" },
            { id: "BB.5", title: "Match fractions to models" },
            { id: "BB.6", title: "Fractions of a group" },
            { id: "BB.7", title: "Fractions of number lines: unit fractions" },
            { id: "BB.8", title: "Fractions of number lines" },
            { id: "BB.9", title: "Identify fractions on number lines" },
            { id: "BB.10", title: "Graph unit fractions on number lines" },
            { id: "BB.11", title: "Graph fractions on number lines" },
            { id: "BB.12", title: "Unit fractions: modelling word problems" },
            { id: "BB.13", title: "Unit fractions: word problems" },
            { id: "BB.14", title: "Fractions of a whole: modelling word problems" },
            { id: "BB.15", title: "Fractions of a whole: word problems" },
            { id: "BB.16", title: "Fractions of a group: word problems" }
          ]
        },
        {
          id: "CC", title: "Compare and order fractions",
          skills: [
            { id: "CC.1", title: "Graph and compare fractions with the same denominator on number lines" },
            { id: "CC.2", title: "Graph and compare fractions with the same numerator on number lines" },
            { id: "CC.3", title: "Graph and compare fractions on number lines" },
            { id: "CC.4", title: "Compare fractions" },
            { id: "CC.5", title: "Put fractions in order" }
          ]
        },
        {
          id: "DD", title: "Equivalent fractions",
          skills: [
            { id: "DD.1", title: "Find equivalent fractions using area models: two models" },
            { id: "DD.2", title: "Find equivalent fractions using area models: one model" },
            { id: "DD.3", title: "Identify equivalent fractions on number lines" },
            { id: "DD.4", title: "Find equivalent fractions using number lines" },
            { id: "DD.5", title: "Graph equivalent fractions on number lines" },
            { id: "DD.6", title: "Select equivalent fractions" },
            { id: "DD.7", title: "Find equivalent fractions" },
            { id: "DD.8", title: "Graph fractions equivalent to 1 on number lines" },
            { id: "DD.9", title: "Write fractions in lowest terms" }
          ]
        },
        {
          id: "EE", title: "Operations with fractions",
          skills: [
            { id: "EE.1", title: "Fractions of a number - unit fractions" },
            { id: "EE.2", title: "Fractions of a number" },
            { id: "EE.3", title: "Fractions of a number - unit fractions: word problems" },
            { id: "EE.4", title: "Fractions of a number: word problems" },
            { id: "EE.5", title: "Decompose fractions into unit fractions" },
            { id: "EE.6", title: "Decompose fractions" },
            { id: "EE.7", title: "Add fractions with the same denominator using number lines" },
            { id: "EE.8", title: "Add fractions with the same denominator" },
            { id: "EE.9", title: "Subtract fractions with the same denominator using number lines" },
            { id: "EE.10", title: "Subtract fractions with the same denominator" },
            { id: "EE.11", title: "Add and subtract fractions with the same denominator using number lines" },
            { id: "EE.12", title: "Add and subtract fractions with the same denominator" },
            { id: "EE.13", title: "Compare sums and differences of fractions with the same denominator" },
            { id: "EE.14", title: "Add and subtract fractions with the same denominator: word problems" },
            { id: "EE.15", title: "Add 3 or more fractions with the same denominator" }
          ]
        },
        {
          id: "FF", title: "Decimals",
          skills: [
            { id: "FF.1", title: "What decimal number is illustrated?" },
            { id: "FF.2", title: "Model decimals and fractions" },
            { id: "FF.3", title: "Convert fractions to decimals" },
            { id: "FF.4", title: "Convert decimals to fractions" },
            { id: "FF.5", title: "Understanding decimals expressed in words" },
            { id: "FF.6", title: "Round decimals to the nearest whole number" },
            { id: "FF.7", title: "Name the place value of a given digit" },
            { id: "FF.8", title: "Name the digit in a given place value" },
            { id: "FF.9", title: "One-tenth or one-hundredth more or less" },
            { id: "FF.10", title: "Number sequences involving decimals" },
            { id: "FF.11", title: "Graph decimals on number lines" },
            { id: "FF.12", title: "Decimal number lines" },
            { id: "FF.13", title: "Graph fractions as decimals on number lines" },
            { id: "FF.14", title: "Compare decimals using models" },
            { id: "FF.15", title: "Compare decimals on number lines" },
            { id: "FF.16", title: "Inequalities with decimals" },
            { id: "FF.17", title: "Which decimals are greater/less?" },
            { id: "FF.18", title: "Which decimal comparisons are true?" },
            { id: "FF.19", title: "Put decimal numbers in order" }
          ]
        },
        {
          id: "GG", title: "Operations with decimals",
          skills: [
            { id: "GG.1", title: "Add decimal numbers using blocks" },
            { id: "GG.2", title: "Add decimal numbers" },
            { id: "GG.3", title: "Subtract decimal numbers" },
            { id: "GG.4", title: "Add and subtract decimal numbers" },
            { id: "GG.5", title: "Add and subtract decimals: word problems" },
            { id: "GG.6", title: "Add three or more decimal numbers" },
            { id: "GG.7", title: "Add three or more decimal numbers: word problems" },
            { id: "GG.8", title: "Estimate sums and differences of decimals" },
            { id: "GG.9", title: "Multiply a decimal by 10 or 100" },
            { id: "GG.10", title: "Divide a whole number by 10 or 100: decimal quotients" },
            { id: "GG.11", title: "Divide a decimal by 10 or 100" }
          ]
        },
        {
          id: "HH", title: "Probability and statistics",
          skills: [
            { id: "HH.1", title: "More, less and equally likely" },
            { id: "HH.2", title: "Certain, probable, unlikely and impossible" },
            { id: "HH.3", title: "Mean" },
            { id: "HH.4", title: "Range" },
            { id: "HH.5", title: "Interpret charts to find mean" },
            { id: "HH.6", title: "Interpret charts to find range" }
          ]
        }
      ],
    },
  },

  // ==============================================================
  // GRADE 5 MATH
  // ==============================================================
  "5": {
    math: {
      title: "Year 5 Math",
      description: "Decimals, fraction operations, volume, coordinate plane, and advanced multiplication/division.",
      stats: { skills: 650, videos: 480, games: 120 },
      topics: [
        {
          id: "A", title: "Place values and number sense",
          skills: [
            { id: "A.1", title: "Place value names up to millions" },
            { id: "A.2", title: "Value of a digit" },
            { id: "A.3", title: "Convert between ordinary and expanded form" },
            { id: "A.4", title: "Convert between place values" },
            { id: "A.5", title: "Place value review" },
            { id: "A.6", title: "Place value word problems" },
            { id: "A.7", title: "Writing numbers up to 100,000 in words: convert words to digits" },
            { id: "A.8", title: "Writing numbers up to 100,000 in words: convert digits to words" },
            { id: "A.9", title: "Writing numbers up to one million in words: convert words to digits" },
            { id: "A.10", title: "Writing numbers up to one million in words: convert digits to words" },
            { id: "A.11", title: "Ordinal numbers to 100th" },
            { id: "A.12", title: "Roman numerals" },
            { id: "A.13", title: "Rounding: up to thousands place" },
            { id: "A.14", title: "Rounding: up to hundred thousands place" },
            { id: "A.15", title: "Rounding puzzles" },
            { id: "A.16", title: "Even or odd: arithmetic rules" },
            { id: "A.17", title: "Compare numbers up to one hundred thousand" },
            { id: "A.18", title: "Compare numbers up to one million" },
            { id: "A.19", title: "Put numbers in order: up to one hundred thousand" },
            { id: "A.20", title: "Put numbers in order: up to one million" }
          ]
        },
        {
          id: "B", title: "Addition",
          skills: [
            { id: "B.1", title: "Properties of addition" },
            { id: "B.2", title: "Add using properties" },
            { id: "B.3", title: "Addition patterns over increasing place values" },
            { id: "B.4", title: "Add two three-digit numbers" },
            { id: "B.5", title: "Add two three-digit numbers: word problems" },
            { id: "B.6", title: "Complete the addition sentence: three-digit numbers" },
            { id: "B.7", title: "Balance addition equations: three-digit numbers" },
            { id: "B.8", title: "Add three or more numbers with up to three digits each" },
            { id: "B.9", title: "Add numbers up to six digits" },
            { id: "B.10", title: "Add numbers up to six digits: word problems" },
            { id: "B.11", title: "Addition up to six digits: fill in the missing digits" },
            { id: "B.12", title: "Add three or more numbers with up to six digits" },
            { id: "B.13", title: "Choose numbers with a particular sum" },
            { id: "B.14", title: "Estimate sums: up to four digits" },
            { id: "B.15", title: "Estimate sums: up to six digits" },
            { id: "B.16", title: "Estimate sums: word problems up to six digits" }
          ]
        },
        {
          id: "C", title: "Subtraction",
          skills: [
            { id: "C.1", title: "Subtract three-digit numbers" },
            { id: "C.2", title: "Subtract three-digit numbers: word problems" },
            { id: "C.3", title: "Complete the subtraction sentence: three-digit numbers" },
            { id: "C.4", title: "Balance subtraction equations: three-digit numbers" },
            { id: "C.5", title: "Subtract numbers up to six digits" },
            { id: "C.6", title: "Subtract numbers up to six digits: word problems" },
            { id: "C.7", title: "Subtraction up to six digits: fill in the missing digits" },
            { id: "C.8", title: "Subtraction patterns over increasing place values" },
            { id: "C.9", title: "Choose numbers with a particular difference" },
            { id: "C.10", title: "Estimate differences: up to four digits" },
            { id: "C.11", title: "Estimate differences: up to six digits" },
            { id: "C.12", title: "Estimate differences: word problems up to six digits" }
          ]
        },
        {
          id: "D", title: "Multiplication fluency",
          skills: [
            { id: "D.1", title: "Multiplication facts for 2, 3, 4, 5, 6, 8 and 10" },
            { id: "D.2", title: "Multiplication facts for 2, 3, 4, 5, 6, 8 and 10: find the missing factor" },
            { id: "D.3", title: "Choose the multiples of 2, 3, 4, 5, 6, 8 and 10" },
            { id: "D.4", title: "Multiplication facts to 10" },
            { id: "D.5", title: "Multiplication facts up to 10: find the missing factor" },
            { id: "D.6", title: "Choose the multiples of a given number up to 10" },
            { id: "D.7", title: "Multiplication facts to 12" },
            { id: "D.8", title: "Multiplication facts up to 12: find the missing factor" },
            { id: "D.9", title: "Choose the multiples of a given number up to 12" }
          ]
        },
        {
          id: "E", title: "Multiply by one-digit numbers",
          skills: [
            { id: "E.1", title: "Compare numbers using multiplication" },
            { id: "E.2", title: "Compare numbers using multiplication: word problems" },
            { id: "E.3", title: "Multiply by multiples of 10, 100 and 1,000" },
            { id: "E.4", title: "Multiplication patterns over increasing place values" },
            { id: "E.5", title: "Properties of multiplication" },
            { id: "E.6", title: "Estimate products: multiply by 1-digit numbers" },
            { id: "E.7", title: "Estimate products word problems: identify reasonable answers" },
            { id: "E.8", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers using area models I" },
            { id: "E.9", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers using area models II" },
            { id: "E.10", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers" },
            { id: "E.11", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers: word problems" },
            { id: "E.12", title: "Multiply 1-digit numbers by 4-digit numbers using area models" },
            { id: "E.13", title: "Multiply 1-digit numbers by 3-digit or 4-digit numbers using expanded form" },
            { id: "E.14", title: "Multiply 1-digit numbers by multi-digit numbers using partial products" },
            { id: "E.15", title: "Multiply 1-digit numbers by 4-digit numbers" },
            { id: "E.16", title: "Multiply 1-digit numbers by 4-digit numbers: word problems" },
            { id: "E.17", title: "Multiply 1-digit numbers by larger numbers" }
          ]
        },
        {
          id: "F", title: "Multiply by two-digit numbers",
          skills: [
            { id: "F.1", title: "Multiply 2-digit numbers by 10 or 100" },
            { id: "F.2", title: "Estimate products: multiply by 2-digit numbers" },
            { id: "F.3", title: "Estimate products: word problems" },
            { id: "F.4", title: "Use one multiplication fact to complete another" },
            { id: "F.5", title: "Multiply 2-digit numbers by 2-digit numbers using area models I" },
            { id: "F.6", title: "Multiply 2-digit numbers by 2-digit numbers using area models II" },
            { id: "F.7", title: "Multiply 2-digit numbers by 2-digit numbers using partial products" },
            { id: "F.8", title: "Multiply 2-digit numbers by 2-digit numbers: complete the missing steps" },
            { id: "F.9", title: "Multiply 2-digit numbers by 2-digit numbers" },
            { id: "F.10", title: "Multiply 2-digit numbers by 2-digit numbers: word problems" },
            { id: "F.11", title: "Box multiplication" },
            { id: "F.12", title: "Lattice multiplication" },
            { id: "F.13", title: "Multiply 2-digit numbers by 3-digit or 4-digit numbers: complete the missing steps" },
            { id: "F.14", title: "Multiply 2-digit numbers by 3-digit or 4-digit numbers" },
            { id: "F.15", title: "Multiply 2-digit numbers by 3-digit or 4-digit numbers: word problems" },
            { id: "F.16", title: "Choose numbers with a particular product" },
            { id: "F.17", title: "Multiply numbers ending in zeros" },
            { id: "F.18", title: "Multiply numbers ending in zeros: word problems" },
            { id: "F.19", title: "Multiply three numbers up to 2 digits each" },
            { id: "F.20", title: "Multiply three or more numbers: word problems" },
            { id: "F.21", title: "Inequalities with multiplication" }
          ]
        },
        {
          id: "G", title: "Division fluency",
          skills: [
            { id: "G.1", title: "Division facts for 2, 3, 4, 5, 6, 8 and 10" },
            { id: "G.2", title: "Division facts to 10" },
            { id: "G.3", title: "Division facts to 10: word problems" },
            { id: "G.4", title: "Division facts to 12" },
            { id: "G.5", title: "Division facts to 12: word problems" }
          ]
        },
        {
          id: "H", title: "Division",
          skills: [
            { id: "H.1", title: "Properties of division" },
            { id: "H.2", title: "Divide 2-digit numbers by 1-digit numbers using arrays" },
            { id: "H.3", title: "Divide 2-digit numbers by 1-digit numbers using area models" },
            { id: "H.4", title: "Divide using repeated subtraction" },
            { id: "H.5", title: "Divide using the distributive property" },
            { id: "H.6", title: "Divide 2-digit numbers by 1-digit numbers: quotients up to 10" },
            { id: "H.7", title: "Divide 2-digit numbers by 1-digit numbers" },
            { id: "H.8", title: "Divide 2-digit numbers by 1-digit numbers: word problems" },
            { id: "H.9", title: "Divide 2-digit numbers by 1-digit numbers: complete the table" },
            { id: "H.10", title: "Divide 2-digit numbers by 1-digit numbers: interpret remainders" },
            { id: "H.11", title: "Divide 3-digit numbers by 1-digit numbers using area models" },
            { id: "H.12", title: "Divide using partial quotients" },
            { id: "H.13", title: "Divide 3-digit numbers by 1-digit numbers" },
            { id: "H.14", title: "Divide 3-digit numbers by 1-digit numbers: word problems" },
            { id: "H.15", title: "Divide 4-digit numbers by 1-digit numbers" },
            { id: "H.16", title: "Divide 4-digit numbers by 1-digit numbers: word problems" },
            { id: "H.17", title: "Divide larger numbers by 1-digit numbers: complete the table" },
            { id: "H.18", title: "Divide larger numbers by 1-digit numbers: interpret remainders" },
            { id: "H.19", title: "Choose numbers with a particular quotient" },
            { id: "H.20", title: "Division patterns over increasing place values" },
            { id: "H.21", title: "Divide numbers ending in zeros by 1-digit numbers" },
            { id: "H.22", title: "Estimate quotients using compatible numbers: 1-digit divisors" },
            { id: "H.23", title: "Estimate quotients to compare" },
            { id: "H.24", title: "Estimate quotients: word problems" },
            { id: "H.25", title: "Divide numbers ending in zeros" },
            { id: "H.26", title: "Divide numbers ending in zeros: word problems" },
            { id: "H.27", title: "Inequalities with division" }
          ]
        },
        {
          id: "I", title: "Mixed operations",
          skills: [
            { id: "I.1", title: "Write numerical expressions" },
            { id: "I.2", title: "Mentally add and subtract numbers ending in zeros" },
            { id: "I.3", title: "Add, subtract, multiply and divide" },
            { id: "I.4", title: "Input/output tables: add and subtract powers of ten" },
            { id: "I.5", title: "Use a rule to complete an input/output table" },
            { id: "I.6", title: "Input/output tables: find the rule" },
            { id: "I.7", title: "Input/output tables: find the rule and complete the table" },
            { id: "I.8", title: "Comparison word problems with addition and subtraction" },
            { id: "I.9", title: "Addition, subtraction, multiplication and division word problems" },
            { id: "I.10", title: "Estimate sums, differences, products and quotients: word problems" },
            { id: "I.11", title: "Choose numbers with a particular sum, difference, product or quotient" },
            { id: "I.12", title: "Inequalities involving addition, subtraction, multiplication and division" },
            { id: "I.13", title: "Word problems with extra or missing information" },
            { id: "I.14", title: "Solve word problems using guess-and-check" },
            { id: "I.15", title: "Multi-step addition and subtraction word problems" },
            { id: "I.16", title: "Multi-step word problems" },
            { id: "I.17", title: "Multi-step word problems involving remainders" },
            { id: "I.18", title: "Multi-step word problems: identify reasonable answers" }
          ]
        },
        {
          id: "J", title: "Indices",
          skills: [
            { id: "J.1", title: "Understand square and cube numbers" },
            { id: "J.2", title: "Evaluate indices: squares and cubes" }
          ]
        },
        {
          id: "K", title: "Number theory",
          skills: [
            { id: "K.1", title: "Divisibility rules" },
            { id: "K.2", title: "Divisibility rules: word problems" },
            { id: "K.3", title: "Identify factors" },
            { id: "K.4", title: "Find all the factor pairs of a number" },
            { id: "K.5", title: "Prime and composite numbers: up to 10" },
            { id: "K.6", title: "Prime and composite numbers: up to 20" },
            { id: "K.7", title: "Prime and composite numbers: up to 100" },
            { id: "K.8", title: "Prime factorisation" },
            { id: "K.9", title: "Highest common factor" },
            { id: "K.10", title: "Square numbers" }
          ]
        },
        {
          id: "L", title: "Integers",
          skills: [
            { id: "L.1", title: "Understanding integers" },
            { id: "L.2", title: "Count on a number line - up to 10 in both directions" },
            { id: "L.3", title: "Count on a number line - up to 100 in both directions" },
            { id: "L.4", title: "Graph integers on horizontal and vertical number lines" },
            { id: "L.5", title: "Compare integers" },
            { id: "L.6", title: "Put integers in order" }
          ]
        },
        {
          id: "M", title: "Equations and variables",
          skills: [
            { id: "M.1", title: "Write variable expressions" },
            { id: "M.2", title: "Write variable expressions: word problems" },
            { id: "M.3", title: "Evaluate variable expressions" },
            { id: "M.4", title: "Write variable equations to represent word problems" },
            { id: "M.5", title: "Solve for the variable: addition and subtraction" },
            { id: "M.6", title: "Solve for the variable: multiplication and division" },
            { id: "M.7", title: "Solve for the variable: addition, subtraction, multiplication and division" },
            { id: "M.8", title: "Complete a table for a two-variable relationship" },
            { id: "M.9", title: "Write a two-variable equation" }
          ]
        },
        {
          id: "N", title: "Coordinate plane",
          skills: [
            { id: "N.1", title: "Objects on a coordinate plane" },
            { id: "N.2", title: "Graph points on a coordinate plane" },
            { id: "N.3", title: "Follow directions on a coordinate plane" },
            { id: "N.4", title: "Coordinate planes as maps" },
            { id: "N.5", title: "Direction to starting point" }
          ]
        },
        {
          id: "O", title: "Data and graphs",
          skills: [
            { id: "O.1", title: "Read a table" },
            { id: "O.2", title: "Interpret tally charts" },
            { id: "O.3", title: "Interpret line graphs" },
            { id: "O.4", title: "Create line graphs" },
            { id: "O.5", title: "Interpret bar graphs" },
            { id: "O.6", title: "Interpret bar graphs: multi-step problems" },
            { id: "O.7", title: "Create bar graphs" },
            { id: "O.8", title: "Interpret bar graphs for grouped data" },
            { id: "O.9", title: "Create bar graphs for grouped data" },
            { id: "O.10", title: "Interpret line plots" },
            { id: "O.11", title: "Create line plots" },
            { id: "O.12", title: "Interpret frequency tables" },
            { id: "O.13", title: "Create frequency tables" },
            { id: "O.14", title: "Interpret stem-and-leaf plots" },
            { id: "O.15", title: "Create stem-and-leaf plots" },
            { id: "O.16", title: "Pie charts" },
            { id: "O.17", title: "Choose the best type of graph" }
          ]
        },
        {
          id: "P", title: "Logical reasoning",
          skills: [
            { id: "P.1", title: "Find two numbers based on sum and difference" },
            { id: "P.2", title: "Find two numbers based on sum, difference, product and quotient" },
            { id: "P.3", title: "Find the order" }
          ]
        },
        {
          id: "Q", title: "Patterns and sequences",
          skills: [
            { id: "Q.1", title: "Use a rule to complete a number pattern" },
            { id: "Q.2", title: "What is true about the addition pattern?" },
            { id: "Q.3", title: "What is true about the multiplication pattern?" },
            { id: "Q.4", title: "Identify mistakes in number patterns" },
            { id: "Q.5", title: "Complete an increasing number pattern" },
            { id: "Q.6", title: "Complete a geometric number pattern" },
            { id: "Q.7", title: "Number patterns: word problems" },
            { id: "Q.8", title: "Number patterns: mixed review" },
            { id: "Q.9", title: "Shape patterns" }
          ]
        },
        {
          id: "R", title: "Money",
          skills: [
            { id: "R.1", title: "Compare money amounts" },
            { id: "R.2", title: "Round money amounts" },
            { id: "R.3", title: "Add and subtract money amounts" },
            { id: "R.4", title: "Add and subtract money amounts - word problems" },
            { id: "R.5", title: "Making change" },
            { id: "R.6", title: "Price lists" }
          ]
        },
        {
          id: "S", title: "Units of measurement",
          skills: [
            { id: "S.1", title: "Read a thermometer" },
            { id: "S.2", title: "Compare temperatures above and below zero" },
            { id: "S.3", title: "Calculate temperature differences" },
            { id: "S.4", title: "Choose the appropriate metric unit of measure" },
            { id: "S.5", title: "Compare and convert metric units of length" },
            { id: "S.6", title: "Compare and convert metric units of mass" },
            { id: "S.7", title: "Compare and convert metric units of volume" },
            { id: "S.8", title: "Metric mixed units" },
            { id: "S.9", title: "Add and subtract metric mixed units" },
            { id: "S.10", title: "Choose the appropriate imperial unit of measure" },
            { id: "S.11", title: "Compare and convert imperial units of length" },
            { id: "S.12", title: "Compare and convert imperial units of weight" },
            { id: "S.13", title: "Compare and convert imperial units of volume" },
            { id: "S.14", title: "Imperial mixed units" },
            { id: "S.15", title: "Convert between metric and imperial units" }
          ]
        },
        {
          id: "T", title: "Time",
          skills: [
            { id: "T.1", title: "Match analogue and digital clocks" },
            { id: "T.2", title: "Read clocks and write times" },
            { id: "T.3", title: "Convert time units" },
            { id: "T.4", title: "Add and subtract mixed time units" },
            { id: "T.5", title: "Fractions of time units" },
            { id: "T.6", title: "Elapsed time: find the end time" },
            { id: "T.7", title: "Find the elapsed time" },
            { id: "T.8", title: "Elapsed time word problems: find the end time" },
            { id: "T.9", title: "Elapsed time word problems: find the elapsed time" },
            { id: "T.10", title: "Find start and end times: multi-step word problems" },
            { id: "T.11", title: "Convert between 12-hour and 24-hour time" },
            { id: "T.12", title: "Time zones - 12-hour time" },
            { id: "T.13", title: "Time zones - 24-hour time" },
            { id: "T.14", title: "Transportation schedules - 12-hour time" },
            { id: "T.15", title: "Transportation schedules - 24-hour time" },
            { id: "T.16", title: "Time patterns" }
          ]
        },
        {
          id: "U", title: "Two-dimensional figures",
          skills: [
            { id: "U.1", title: "Which two-dimensional figure is being described?" },
            { id: "U.2", title: "Is it a polygon?" },
            { id: "U.3", title: "Regular and irregular polygons" },
            { id: "U.4", title: "Number of sides in polygons" },
            { id: "U.5", title: "Graph triangles and quadrilaterals" },
            { id: "U.6", title: "Lines, line segments and rays" },
            { id: "U.7", title: "Parallel, perpendicular and intersecting lines" },
            { id: "U.8", title: "Types of triangles" },
            { id: "U.9", title: "Identify congruent figures" }
          ]
        },
        {
          id: "V", title: "Angles",
          skills: [
            { id: "V.1", title: "Acute, right, obtuse and straight angles" },
            { id: "V.2", title: "Angles as fractions of a circle" },
            { id: "V.3", title: "Use fractions to find the measure of an angle" },
            { id: "V.4", title: "Angles of 90, 180, 270 and 360 degrees" },
            { id: "V.5", title: "Measure angles on a circle" },
            { id: "V.6", title: "Measure angles with a protractor" },
            { id: "V.7", title: "Draw angles with a protractor" },
            { id: "V.8", title: "Estimate angle measurements" }
          ]
        },
        {
          id: "W", title: "Symmetry and transformations",
          skills: [
            { id: "W.1", title: "Identify lines of symmetry" },
            { id: "W.2", title: "Draw lines of symmetry" },
            { id: "W.3", title: "Count lines of symmetry" },
            { id: "W.4", title: "Rotational symmetry" },
            { id: "W.5", title: "Identify reflections, rotations and translations" },
            { id: "W.6", title: "Translations" },
            { id: "W.7", title: "Reflections" },
            { id: "W.8", title: "Rotations" },
            { id: "W.9", title: "Combinations of reflections, rotations and translations" }
          ]
        },
        {
          id: "X", title: "Three-dimensional figures",
          skills: [
            { id: "X.1", title: "Identify three-dimensional figures" },
            { id: "X.2", title: "Count vertices, edges and faces" },
            { id: "X.3", title: "Identify faces of three-dimensional figures" },
            { id: "X.4", title: "Which three-dimensional figure is being described?" },
            { id: "X.5", title: "Nets of three-dimensional figures" }
          ]
        },
        {
          id: "Y", title: "Geometric measurement",
          skills: [
            { id: "Y.1", title: "Find the perimeter of rectangles using formulas" },
            { id: "Y.2", title: "Perimeter of rectilinear shapes" },
            { id: "Y.3", title: "Perimeter of polygons" },
            { id: "Y.4", title: "Perimeter with decimal side lengths" },
            { id: "Y.5", title: "Perimeter: find the missing side lengths" },
            { id: "Y.6", title: "Perimeter: word problems" },
            { id: "Y.7", title: "Find the area of figures made of unit squares" },
            { id: "Y.8", title: "Select figures with a given area" },
            { id: "Y.9", title: "Select two figures with the same area" },
            { id: "Y.10", title: "Multiply to find the area of a rectangle made of unit squares" },
            { id: "Y.11", title: "Create figures with a given area" },
            { id: "Y.12", title: "Create rectangles with a given area" },
            { id: "Y.13", title: "Find the area of rectangles and squares" },
            { id: "Y.14", title: "Compare areas of rectangles and squares" },
            { id: "Y.15", title: "Find the missing side length of a rectangle" },
            { id: "Y.16", title: "Area word problems" },
            { id: "Y.17", title: "Find the area of complex figures" },
            { id: "Y.18", title: "Find the area between two rectangles" },
            { id: "Y.19", title: "Area and perimeter: word problems" },
            { id: "Y.20", title: "Use area and perimeter to determine cost" },
            { id: "Y.21", title: "Volume of cuboids made of unit cubes" },
            { id: "Y.22", title: "Volume of irregular figures made of unit cubes" }
          ]
        },
        {
          id: "Z", title: "Fractions and mixed numbers",
          skills: [
            { id: "Z.1", title: "Fractions review" },
            { id: "Z.2", title: "Fractions of a whole: word problems" },
            { id: "Z.3", title: "Fractions of a group: word problems" },
            { id: "Z.4", title: "Identify mixed numbers" },
            { id: "Z.5", title: "Find equivalent fractions using area models" },
            { id: "Z.6", title: "Graph equivalent fractions on number lines" },
            { id: "Z.7", title: "Identify equivalent fractions" },
            { id: "Z.8", title: "Equivalent fractions: find the missing numerator or denominator" },
            { id: "Z.9", title: "Graph fractions equivalent to 1 on number lines" },
            { id: "Z.10", title: "Select fractions equivalent to whole numbers using models" },
            { id: "Z.11", title: "Fractions with denominators of 10 and 100" },
            { id: "Z.12", title: "Fractions and mixed numbers with denominators of 10 and 100" },
            { id: "Z.13", title: "Patterns of equivalent fractions" },
            { id: "Z.14", title: "Write fractions in lowest terms" },
            { id: "Z.15", title: "Compare fractions with the same numerator or denominator using models" },
            { id: "Z.16", title: "Graph and compare fractions with the same numerator or denominator on number lines" },
            { id: "Z.17", title: "Compare fractions with the same numerator or denominator" },
            { id: "Z.18", title: "Compare fractions with different denominators using models" },
            { id: "Z.19", title: "Compare fractions with different denominators" },
            { id: "Z.20", title: "Graph and order fractions with the same numerator or denominator on number lines" },
            { id: "Z.21", title: "Order fractions with the same numerator or denominator" },
            { id: "Z.22", title: "Order fractions with different denominators" },
            { id: "Z.23", title: "Find smaller or larger fractions" },
            { id: "Z.24", title: "Convert between improper fractions and mixed numbers" },
            { id: "Z.25", title: "Relate division and fractions" },
            { id: "Z.26", title: "Understand fractions as division: word problems" }
          ]
        },
        {
          id: "AA", title: "Add and subtract fractions with the same denominator",
          skills: [
            { id: "AA.1", title: "Decompose fractions multiple ways" },
            { id: "AA.2", title: "Add fractions with the same denominator using area models" },
            { id: "AA.3", title: "Add fractions with the same denominator using bar models" },
            { id: "AA.4", title: "Add fractions with the same denominator using number lines" },
            { id: "AA.5", title: "Add fractions with the same denominator" },
            { id: "AA.6", title: "Subtract fractions with the same denominator using area models" },
            { id: "AA.7", title: "Subtract fractions with the same denominator using bar models" },
            { id: "AA.8", title: "Subtract fractions with the same denominator using number lines" },
            { id: "AA.9", title: "Subtract fractions with the same denominator" },
            { id: "AA.10", title: "Add and subtract fractions with the same denominator using number lines" },
            { id: "AA.11", title: "Add and subtract fractions with the same denominator" },
            { id: "AA.12", title: "Add and subtract fractions with the same denominator: word problems" },
            { id: "AA.13", title: "Add three or more fractions with the same denominator" },
            { id: "AA.14", title: "Add three or more fractions with the same denominator: word problems" },
            { id: "AA.15", title: "Add and subtract mixed numbers with the same denominator" },
            { id: "AA.16", title: "Add and subtract mixed numbers with the same denominator: word problems" },
            { id: "AA.17", title: "Complete addition and subtraction sentences with fractions" }
          ]
        },
        {
          id: "BB", title: "Add and subtract fractions with different denominators",
          skills: [
            { id: "BB.1", title: "Add up to 4 fractions with denominators of 10 and 100" },
            { id: "BB.2", title: "Add fractions with different denominators using models" },
            { id: "BB.3", title: "Add fractions with different denominators" },
            { id: "BB.4", title: "Subtract fractions with different denominators using models" },
            { id: "BB.5", title: "Subtract fractions with different denominators" },
            { id: "BB.6", title: "Add and subtract fractions with different denominators" },
            { id: "BB.7", title: "Add and subtract fractions with different denominators: word problems" },
            { id: "BB.8", title: "Add three or more fractions with different denominators" },
            { id: "BB.9", title: "Add three or more fractions with different denominators: word problems" },
            { id: "BB.10", title: "Add and subtract mixed numbers with different denominators" },
            { id: "BB.11", title: "Add and subtract mixed numbers with different denominators: word problems" }
          ]
        },
        {
          id: "CC", title: "Multiply fractions",
          skills: [
            { id: "CC.1", title: "Multiply unit fractions by whole numbers using number lines" },
            { id: "CC.2", title: "Multiply unit fractions by whole numbers using models" },
            { id: "CC.3", title: "Multiples of unit fractions: find the missing numbers" },
            { id: "CC.4", title: "Multiply unit fractions and whole numbers: sorting" },
            { id: "CC.5", title: "Multiply unit fractions by whole numbers" },
            { id: "CC.6", title: "Multiply unit fractions by whole numbers: word problems" },
            { id: "CC.7", title: "Multiply fractions by whole numbers using number lines" },
            { id: "CC.8", title: "Multiply fractions by whole numbers using models" },
            { id: "CC.9", title: "Multiply fractions by whole numbers using models: complete the equation" },
            { id: "CC.10", title: "Multiples of fractions: find the missing numbers" },
            { id: "CC.11", title: "Multiply fractions and whole numbers: sorting" },
            { id: "CC.12", title: "Multiply fractions by whole numbers" },
            { id: "CC.13", title: "Multiply fractions by whole numbers: word problems" },
            { id: "CC.14", title: "Fractions of a number" },
            { id: "CC.15", title: "Fractions of a number: word problems" }
          ]
        },
        {
          id: "DD", title: "Decimals up to hundredths",
          skills: [
            { id: "DD.1", title: "What decimal number is illustrated?" },
            { id: "DD.2", title: "Model decimals and fractions" },
            { id: "DD.3", title: "Understanding decimals expressed in words: up to hundredths" },
            { id: "DD.4", title: "Place values in decimal numbers up to hundredths" },
            { id: "DD.5", title: "One-tenth or one-hundredth more or less" },
            { id: "DD.6", title: "Equivalent decimals up to hundredths" },
            { id: "DD.7", title: "Graph decimals on number lines" },
            { id: "DD.8", title: "Decimal number lines" },
            { id: "DD.9", title: "Graph fractions as decimals on number lines" },
            { id: "DD.10", title: "Convert fractions to decimals: up to hundredths" },
            { id: "DD.11", title: "Convert decimals to fractions: up to hundredths" },
            { id: "DD.12", title: "Convert decimals between standard and expanded form using fractions: up to hundredths" },
            { id: "DD.13", title: "Round decimals to the nearest whole number or tenth" },
            { id: "DD.14", title: "Compare decimals using models" },
            { id: "DD.15", title: "Compare decimals on number lines" },
            { id: "DD.16", title: "Compare decimal numbers up to hundredths" },
            { id: "DD.17", title: "Put decimal numbers in order I: up to hundredths" },
            { id: "DD.18", title: "Put decimal numbers in order II: up to hundredths" },
            { id: "DD.19", title: "Compare positive and negative decimals: up to tenths" },
            { id: "DD.20", title: "Put positive and negative decimals in order: up to tenths" },
            { id: "DD.21", title: "Compare decimals and fractions on number lines" },
            { id: "DD.22", title: "Compare decimals and fractions: up to hundredths" },
            { id: "DD.23", title: "Number sequences involving decimals" }
          ]
        },
        {
          id: "EE", title: "Decimals up to thousandths",
          skills: [
            { id: "EE.1", title: "Understanding decimals expressed in words: up to thousandths" },
            { id: "EE.2", title: "Place values in decimal numbers up to thousandths" },
            { id: "EE.3", title: "Relationship between decimal place values" },
            { id: "EE.4", title: "Equivalent decimals up to thousandths" },
            { id: "EE.5", title: "Convert fractions and mixed numbers to decimals: up to thousandths" },
            { id: "EE.6", title: "Convert decimals to fractions and mixed numbers: up to thousandths" },
            { id: "EE.7", title: "Convert decimals between standard and expanded form using fractions: up to thousandths" },
            { id: "EE.8", title: "Compare decimal numbers up to thousandths" },
            { id: "EE.9", title: "Put decimal numbers in order I: up to thousandths" },
            { id: "EE.10", title: "Put decimal numbers in order II: up to thousandths" },
            { id: "EE.11", title: "Compare, order and round decimals: word problems" },
            { id: "EE.12", title: "Compare decimals and fractions: up to thousandths" }
          ]
        },
        {
          id: "FF", title: "Add and subtract decimals",
          skills: [
            { id: "FF.1", title: "Add decimal numbers: up to tenths" },
            { id: "FF.2", title: "Subtract decimal numbers: up to tenths" },
            { id: "FF.3", title: "Add decimal numbers using blocks" },
            { id: "FF.4", title: "Add decimal numbers: up to hundredths" },
            { id: "FF.5", title: "Subtract decimal numbers: up to hundredths" },
            { id: "FF.6", title: "Add and subtract decimal numbers: up to hundredths" },
            { id: "FF.7", title: "Add and subtract decimals up to hundredths: word problems" },
            { id: "FF.8", title: "Add decimal numbers: up to thousandths" },
            { id: "FF.9", title: "Subtract decimal numbers: up to thousandths" },
            { id: "FF.10", title: "Add and subtract decimal numbers: up to thousandths" },
            { id: "FF.11", title: "Add and subtract decimals up to thousandths: word problems" },
            { id: "FF.12", title: "Choose decimals with a particular sum or difference" },
            { id: "FF.13", title: "Add three or more decimals" },
            { id: "FF.14", title: "Add three or more decimals: word problems" },
            { id: "FF.15", title: "Complete the addition or subtraction sentence with decimals" },
            { id: "FF.16", title: "Inequalities with addition and subtraction of decimals" },
            { id: "FF.17", title: "Estimate sums and differences of decimals" },
            { id: "FF.18", title: "Solve decimal problems using diagrams" }
          ]
        },
        {
          id: "GG", title: "Multiply and divide decimals",
          skills: [
            { id: "GG.1", title: "Multiply a decimal by 10 or 100" },
            { id: "GG.2", title: "Divide a whole number by 10 or 100: decimal quotients" },
            { id: "GG.3", title: "Divide a decimal by 10 or 100" },
            { id: "GG.4", title: "Multiply a decimal by 10, 100 or 1,000" },
            { id: "GG.5", title: "Divide a whole number by 10, 100 or 1,000: decimal quotients" },
            { id: "GG.6", title: "Divide a decimal by 10, 100 or 1,000" }
          ]
        },
        {
          id: "HH", title: "Percents and ratios",
          skills: [
            { id: "HH.1", title: "What percentage is illustrated?" },
            { id: "HH.2", title: "Understanding percents: bar models" },
            { id: "HH.3", title: "Convert fractions to percents using grid models" },
            { id: "HH.4", title: "Convert percents to fractions and decimals" },
            { id: "HH.5", title: "Convert between percents, fractions and decimals" },
            { id: "HH.6", title: "Convert between percents, fractions and decimals: word problems" },
            { id: "HH.7", title: "Compare percents to each other and to fractions" },
            { id: "HH.8", title: "Compare percents and fractions: word problems" },
            { id: "HH.9", title: "Percent of a number" },
            { id: "HH.10", title: "Percent of a number: word problems" },
            { id: "HH.11", title: "Compare percents of numbers" },
            { id: "HH.12", title: "Write a ratio" },
            { id: "HH.13", title: "Which model represents the ratio?" },
            { id: "HH.14", title: "Unit rates" }
          ]
        },
        {
          id: "II", title: "Probability and statistics",
          skills: [
            { id: "II.1", title: "Understanding probability" },
            { id: "II.2", title: "Find the probability" },
            { id: "II.3", title: "Make predictions" },
            { id: "II.4", title: "Find the mode" },
            { id: "II.5", title: "Find the mean" },
            { id: "II.6", title: "Find the median" },
            { id: "II.7", title: "Find the range" },
            { id: "II.8", title: "Interpret charts to find mode" },
            { id: "II.9", title: "Interpret charts to find mean" },
            { id: "II.10", title: "Interpret charts to find median" },
            { id: "II.11", title: "Interpret charts to find range" }
          ]
        },
        {
          id: "JJ", title: "Financial literacy",
          skills: [
            { id: "JJ.1", title: "Calculate profit: word problems" },
            { id: "JJ.2", title: "Compare savings options" },
            { id: "JJ.3", title: "Budget a weekly allowance: word problems" }
          ]
        }
      ],
    },
  },

  // ==============================================================
  // GRADE 6 MATH
  // ==============================================================
  "6": {
    math: {
      title: "Year 6 Math",
      description: "Ratios, percentages, integers, algebra, geometry, and statistics.",
      stats: { skills: 600, videos: 400, games: 100 },
      topics: [
        {
          id: "A", title: "Place values and number sense",
          skills: [
            { id: "A.1", title: "Place value names up to millions" },
            { id: "A.2", title: "Value of a digit" },
            { id: "A.3", title: "Convert between ordinary and expanded form" },
            { id: "A.4", title: "Convert between place values" },
            { id: "A.5", title: "Place value review" },
            { id: "A.6", title: "Place value word problems" },
            { id: "A.7", title: "Writing numbers up to 100,000 in words: convert words to digits" },
            { id: "A.8", title: "Writing numbers up to 100,000 in words: convert digits to words" },
            { id: "A.9", title: "Writing numbers up to one million in words: convert words to digits" },
            { id: "A.10", title: "Writing numbers up to one million in words: convert digits to words" },
            { id: "A.11", title: "Ordinal numbers to 100th" },
            { id: "A.12", title: "Roman numerals" },
            { id: "A.13", title: "Rounding: up to thousands place" },
            { id: "A.14", title: "Rounding: up to hundred thousands place" },
            { id: "A.15", title: "Rounding puzzles" },
            { id: "A.16", title: "Even or odd: arithmetic rules" },
            { id: "A.17", title: "Compare numbers up to one hundred thousand" },
            { id: "A.18", title: "Compare numbers up to one million" },
            { id: "A.19", title: "Put numbers in order: up to one hundred thousand" },
            { id: "A.20", title: "Put numbers in order: up to one million" }
          ]
        },
        {
          id: "B", title: "Addition",
          skills: [
            { id: "B.1", title: "Properties of addition" },
            { id: "B.2", title: "Add using properties" },
            { id: "B.3", title: "Addition patterns over increasing place values" },
            { id: "B.4", title: "Add two three-digit numbers" },
            { id: "B.5", title: "Add two three-digit numbers: word problems" },
            { id: "B.6", title: "Complete the addition sentence: three-digit numbers" },
            { id: "B.7", title: "Balance addition equations: three-digit numbers" },
            { id: "B.8", title: "Add three or more numbers with up to three digits each" },
            { id: "B.9", title: "Add numbers up to six digits" },
            { id: "B.10", title: "Add numbers up to six digits: word problems" },
            { id: "B.11", title: "Addition up to six digits: fill in the missing digits" },
            { id: "B.12", title: "Add three or more numbers with up to six digits" },
            { id: "B.13", title: "Choose numbers with a particular sum" },
            { id: "B.14", title: "Estimate sums: up to four digits" },
            { id: "B.15", title: "Estimate sums: up to six digits" },
            { id: "B.16", title: "Estimate sums: word problems up to six digits" }
          ]
        },
        {
          id: "C", title: "Subtraction",
          skills: [
            { id: "C.1", title: "Subtract three-digit numbers" },
            { id: "C.2", title: "Subtract three-digit numbers: word problems" },
            { id: "C.3", title: "Complete the subtraction sentence: three-digit numbers" },
            { id: "C.4", title: "Balance subtraction equations: three-digit numbers" },
            { id: "C.5", title: "Subtract numbers up to six digits" },
            { id: "C.6", title: "Subtract numbers up to six digits: word problems" },
            { id: "C.7", title: "Subtraction up to six digits: fill in the missing digits" },
            { id: "C.8", title: "Subtraction patterns over increasing place values" },
            { id: "C.9", title: "Choose numbers with a particular difference" },
            { id: "C.10", title: "Estimate differences: up to four digits" },
            { id: "C.11", title: "Estimate differences: up to six digits" },
            { id: "C.12", title: "Estimate differences: word problems up to six digits" }
          ]
        },
        {
          id: "D", title: "Multiplication fluency",
          skills: [
            { id: "D.1", title: "Multiplication facts for 2, 3, 4, 5, 6, 8 and 10" },
            { id: "D.2", title: "Multiplication facts for 2, 3, 4, 5, 6, 8 and 10: find the missing factor" },
            { id: "D.3", title: "Choose the multiples of 2, 3, 4, 5, 6, 8 and 10" },
            { id: "D.4", title: "Multiplication facts to 10" },
            { id: "D.5", title: "Multiplication facts up to 10: find the missing factor" },
            { id: "D.6", title: "Choose the multiples of a given number up to 10" },
            { id: "D.7", title: "Multiplication facts to 12" },
            { id: "D.8", title: "Multiplication facts up to 12: find the missing factor" },
            { id: "D.9", title: "Choose the multiples of a given number up to 12" }
          ]
        },
        {
          id: "E", title: "Multiply by one-digit numbers",
          skills: [
            { id: "E.1", title: "Compare numbers using multiplication" },
            { id: "E.2", title: "Compare numbers using multiplication: word problems" },
            { id: "E.3", title: "Multiply by multiples of 10, 100 and 1,000" },
            { id: "E.4", title: "Multiplication patterns over increasing place values" },
            { id: "E.5", title: "Properties of multiplication" },
            { id: "E.6", title: "Estimate products: multiply by 1-digit numbers" },
            { id: "E.7", title: "Estimate products word problems: identify reasonable answers" },
            { id: "E.8", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers using area models I" },
            { id: "E.9", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers using area models II" },
            { id: "E.10", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers" },
            { id: "E.11", title: "Multiply 1-digit numbers by 2-digit or 3-digit numbers: word problems" },
            { id: "E.12", title: "Multiply 1-digit numbers by 4-digit numbers using area models" },
            { id: "E.13", title: "Multiply 1-digit numbers by 3-digit or 4-digit numbers using expanded form" },
            { id: "E.14", title: "Multiply 1-digit numbers by multi-digit numbers using partial products" },
            { id: "E.15", title: "Multiply 1-digit numbers by 4-digit numbers" },
            { id: "E.16", title: "Multiply 1-digit numbers by 4-digit numbers: word problems" },
            { id: "E.17", title: "Multiply 1-digit numbers by larger numbers" }
          ]
        },
        {
          id: "F", title: "Multiply by two-digit numbers",
          skills: [
            { id: "F.1", title: "Multiply 2-digit numbers by 10 or 100" },
            { id: "F.2", title: "Estimate products: multiply by 2-digit numbers" },
            { id: "F.3", title: "Estimate products: word problems" },
            { id: "F.4", title: "Use one multiplication fact to complete another" },
            { id: "F.5", title: "Multiply 2-digit numbers by 2-digit numbers using area models I" },
            { id: "F.6", title: "Multiply 2-digit numbers by 2-digit numbers using area models II" },
            { id: "F.7", title: "Multiply 2-digit numbers by 2-digit numbers using partial products" },
            { id: "F.8", title: "Multiply 2-digit numbers by 2-digit numbers: complete the missing steps" },
            { id: "F.9", title: "Multiply 2-digit numbers by 2-digit numbers" },
            { id: "F.10", title: "Multiply 2-digit numbers by 2-digit numbers: word problems" },
            { id: "F.11", title: "Box multiplication" },
            { id: "F.12", title: "Lattice multiplication" },
            { id: "F.13", title: "Multiply 2-digit numbers by 3-digit or 4-digit numbers: complete the missing steps" },
            { id: "F.14", title: "Multiply 2-digit numbers by 3-digit or 4-digit numbers" },
            { id: "F.15", title: "Multiply 2-digit numbers by 3-digit or 4-digit numbers: word problems" },
            { id: "F.16", title: "Choose numbers with a particular product" },
            { id: "F.17", title: "Multiply numbers ending in zeros" },
            { id: "F.18", title: "Multiply numbers ending in zeros: word problems" },
            { id: "F.19", title: "Multiply three numbers up to 2 digits each" },
            { id: "F.20", title: "Multiply three or more numbers: word problems" },
            { id: "F.21", title: "Inequalities with multiplication" }
          ]
        },
        {
          id: "G", title: "Division fluency",
          skills: [
            { id: "G.1", title: "Division facts for 2, 3, 4, 5, 6, 8 and 10" },
            { id: "G.2", title: "Division facts to 10" },
            { id: "G.3", title: "Division facts to 10: word problems" },
            { id: "G.4", title: "Division facts to 12" },
            { id: "G.5", title: "Division facts to 12: word problems" }
          ]
        },
        {
          id: "H", title: "Division",
          skills: [
            { id: "H.1", title: "Properties of division" },
            { id: "H.2", title: "Divide 2-digit numbers by 1-digit numbers using arrays" },
            { id: "H.3", title: "Divide 2-digit numbers by 1-digit numbers using area models" },
            { id: "H.4", title: "Divide using repeated subtraction" },
            { id: "H.5", title: "Divide using the distributive property" },
            { id: "H.6", title: "Divide 2-digit numbers by 1-digit numbers: quotients up to 10" },
            { id: "H.7", title: "Divide 2-digit numbers by 1-digit numbers" },
            { id: "H.8", title: "Divide 2-digit numbers by 1-digit numbers: word problems" },
            { id: "H.9", title: "Divide 2-digit numbers by 1-digit numbers: complete the table" },
            { id: "H.10", title: "Divide 2-digit numbers by 1-digit numbers: interpret remainders" },
            { id: "H.11", title: "Divide 3-digit numbers by 1-digit numbers using area models" },
            { id: "H.12", title: "Divide using partial quotients" },
            { id: "H.13", title: "Divide 3-digit numbers by 1-digit numbers" },
            { id: "H.14", title: "Divide 3-digit numbers by 1-digit numbers: word problems" },
            { id: "H.15", title: "Divide 4-digit numbers by 1-digit numbers" },
            { id: "H.16", title: "Divide 4-digit numbers by 1-digit numbers: word problems" },
            { id: "H.17", title: "Divide larger numbers by 1-digit numbers: complete the table" },
            { id: "H.18", title: "Divide larger numbers by 1-digit numbers: interpret remainders" },
            { id: "H.19", title: "Choose numbers with a particular quotient" },
            { id: "H.20", title: "Division patterns over increasing place values" },
            { id: "H.21", title: "Divide numbers ending in zeros by 1-digit numbers" },
            { id: "H.22", title: "Estimate quotients using compatible numbers: 1-digit divisors" },
            { id: "H.23", title: "Estimate quotients to compare" },
            { id: "H.24", title: "Estimate quotients: word problems" },
            { id: "H.25", title: "Divide numbers ending in zeros" },
            { id: "H.26", title: "Divide numbers ending in zeros: word problems" },
            { id: "H.27", title: "Inequalities with division" }
          ]
        },
        {
          id: "I", title: "Mixed operations",
          skills: [
            { id: "I.1", title: "Write numerical expressions" },
            { id: "I.2", title: "Mentally add and subtract numbers ending in zeros" },
            { id: "I.3", title: "Add, subtract, multiply and divide" },
            { id: "I.4", title: "Input/output tables: add and subtract powers of ten" },
            { id: "I.5", title: "Use a rule to complete an input/output table" },
            { id: "I.6", title: "Input/output tables: find the rule" },
            { id: "I.7", title: "Input/output tables: find the rule and complete the table" },
            { id: "I.8", title: "Comparison word problems with addition and subtraction" },
            { id: "I.9", title: "Addition, subtraction, multiplication and division word problems" },
            { id: "I.10", title: "Estimate sums, differences, products and quotients: word problems" },
            { id: "I.11", title: "Choose numbers with a particular sum, difference, product or quotient" },
            { id: "I.12", title: "Inequalities involving addition, subtraction, multiplication and division" },
            { id: "I.13", title: "Word problems with extra or missing information" },
            { id: "I.14", title: "Solve word problems using guess-and-check" },
            { id: "I.15", title: "Multi-step addition and subtraction word problems" },
            { id: "I.16", title: "Multi-step word problems" },
            { id: "I.17", title: "Multi-step word problems involving remainders" },
            { id: "I.18", title: "Multi-step word problems: identify reasonable answers" }
          ]
        },
        {
          id: "J", title: "Indices",
          skills: [
            { id: "J.1", title: "Understand square and cube numbers" },
            { id: "J.2", title: "Evaluate indices: squares and cubes" }
          ]
        },
        {
          id: "K", title: "Number theory",
          skills: [
            { id: "K.1", title: "Divisibility rules" },
            { id: "K.2", title: "Divisibility rules: word problems" },
            { id: "K.3", title: "Identify factors" },
            { id: "K.4", title: "Find all the factor pairs of a number" },
            { id: "K.5", title: "Prime and composite numbers: up to 10" },
            { id: "K.6", title: "Prime and composite numbers: up to 20" },
            { id: "K.7", title: "Prime and composite numbers: up to 100" },
            { id: "K.8", title: "Prime factorisation" },
            { id: "K.9", title: "Highest common factor" },
            { id: "K.10", title: "Square numbers" }
          ]
        },
        {
          id: "L", title: "Integers",
          skills: [
            { id: "L.1", title: "Understanding integers" },
            { id: "L.2", title: "Count on a number line - up to 10 in both directions" },
            { id: "L.3", title: "Count on a number line - up to 100 in both directions" },
            { id: "L.4", title: "Graph integers on horizontal and vertical number lines" },
            { id: "L.5", title: "Compare integers" },
            { id: "L.6", title: "Put integers in order" }
          ]
        },
        {
          id: "M", title: "Equations and variables",
          skills: [
            { id: "M.1", title: "Write variable expressions" },
            { id: "M.2", title: "Write variable expressions: word problems" },
            { id: "M.3", title: "Evaluate variable expressions" },
            { id: "M.4", title: "Write variable equations to represent word problems" },
            { id: "M.5", title: "Solve for the variable: addition and subtraction" },
            { id: "M.6", title: "Solve for the variable: multiplication and division" },
            { id: "M.7", title: "Solve for the variable: addition, subtraction, multiplication and division" },
            { id: "M.8", title: "Complete a table for a two-variable relationship" },
            { id: "M.9", title: "Write a two-variable equation" }
          ]
        },
        {
          id: "N", title: "Coordinate plane",
          skills: [
            { id: "N.1", title: "Objects on a coordinate plane" },
            { id: "N.2", title: "Graph points on a coordinate plane" },
            { id: "N.3", title: "Follow directions on a coordinate plane" },
            { id: "N.4", title: "Coordinate planes as maps" },
            { id: "N.5", title: "Direction to starting point" }
          ]
        },
        {
          id: "O", title: "Data and graphs",
          skills: [
            { id: "O.1", title: "Read a table" },
            { id: "O.2", title: "Interpret tally charts" },
            { id: "O.3", title: "Interpret line graphs" },
            { id: "O.4", title: "Create line graphs" },
            { id: "O.5", title: "Interpret bar graphs" },
            { id: "O.6", title: "Interpret bar graphs: multi-step problems" },
            { id: "O.7", title: "Create bar graphs" },
            { id: "O.8", title: "Interpret bar graphs for grouped data" },
            { id: "O.9", title: "Create bar graphs for grouped data" },
            { id: "O.10", title: "Interpret line plots" },
            { id: "O.11", title: "Create line plots" },
            { id: "O.12", title: "Interpret frequency tables" },
            { id: "O.13", title: "Create frequency tables" },
            { id: "O.14", title: "Interpret stem-and-leaf plots" },
            { id: "O.15", title: "Create stem-and-leaf plots" },
            { id: "O.16", title: "Pie charts" },
            { id: "O.17", title: "Choose the best type of graph" }
          ]
        },
        {
          id: "P", title: "Logical reasoning",
          skills: [
            { id: "P.1", title: "Find two numbers based on sum and difference" },
            { id: "P.2", title: "Find two numbers based on sum, difference, product and quotient" },
            { id: "P.3", title: "Find the order" }
          ]
        },
        {
          id: "Q", title: "Patterns and sequences",
          skills: [
            { id: "Q.1", title: "Use a rule to complete a number pattern" },
            { id: "Q.2", title: "What is true about the addition pattern?" },
            { id: "Q.3", title: "What is true about the multiplication pattern?" },
            { id: "Q.4", title: "Identify mistakes in number patterns" },
            { id: "Q.5", title: "Complete an increasing number pattern" },
            { id: "Q.6", title: "Complete a geometric number pattern" },
            { id: "Q.7", title: "Number patterns: word problems" },
            { id: "Q.8", title: "Number patterns: mixed review" },
            { id: "Q.9", title: "Shape patterns" }
          ]
        },
        {
          id: "R", title: "Money",
          skills: [
            { id: "R.1", title: "Compare money amounts" },
            { id: "R.2", title: "Round money amounts" },
            { id: "R.3", title: "Add and subtract money amounts" },
            { id: "R.4", title: "Add and subtract money amounts - word problems" },
            { id: "R.5", title: "Making change" },
            { id: "R.6", title: "Price lists" }
          ]
        },
        {
          id: "S", title: "Units of measurement",
          skills: [
            { id: "S.1", title: "Read a thermometer" },
            { id: "S.2", title: "Compare temperatures above and below zero" },
            { id: "S.3", title: "Calculate temperature differences" },
            { id: "S.4", title: "Choose the appropriate metric unit of measure" },
            { id: "S.5", title: "Compare and convert metric units of length" },
            { id: "S.6", title: "Compare and convert metric units of mass" },
            { id: "S.7", title: "Compare and convert metric units of volume" },
            { id: "S.8", title: "Metric mixed units" },
            { id: "S.9", title: "Add and subtract metric mixed units" },
            { id: "S.10", title: "Choose the appropriate imperial unit of measure" },
            { id: "S.11", title: "Compare and convert imperial units of length" },
            { id: "S.12", title: "Compare and convert imperial units of weight" },
            { id: "S.13", title: "Compare and convert imperial units of volume" },
            { id: "S.14", title: "Imperial mixed units" },
            { id: "S.15", title: "Convert between metric and imperial units" }
          ]
        },
        {
          id: "T", title: "Time",
          skills: [
            { id: "T.1", title: "Match analogue and digital clocks" },
            { id: "T.2", title: "Read clocks and write times" },
            { id: "T.3", title: "Convert time units" },
            { id: "T.4", title: "Add and subtract mixed time units" },
            { id: "T.5", title: "Fractions of time units" },
            { id: "T.6", title: "Elapsed time: find the end time" },
            { id: "T.7", title: "Find the elapsed time" },
            { id: "T.8", title: "Elapsed time word problems: find the end time" },
            { id: "T.9", title: "Elapsed time word problems: find the elapsed time" },
            { id: "T.10", title: "Find start and end times: multi-step word problems" },
            { id: "T.11", title: "Convert between 12-hour and 24-hour time" },
            { id: "T.12", title: "Time zones - 12-hour time" },
            { id: "T.13", title: "Time zones - 24-hour time" },
            { id: "T.14", title: "Transportation schedules - 12-hour time" },
            { id: "T.15", title: "Transportation schedules - 24-hour time" },
            { id: "T.16", title: "Time patterns" }
          ]
        },
        {
          id: "U", title: "Two-dimensional figures",
          skills: [
            { id: "U.1", title: "Which two-dimensional figure is being described?" },
            { id: "U.2", title: "Is it a polygon?" },
            { id: "U.3", title: "Regular and irregular polygons" },
            { id: "U.4", title: "Number of sides in polygons" },
            { id: "U.5", title: "Graph triangles and quadrilaterals" },
            { id: "U.6", title: "Lines, line segments and rays" },
            { id: "U.7", title: "Parallel, perpendicular and intersecting lines" },
            { id: "U.8", title: "Types of triangles" },
            { id: "U.9", title: "Identify congruent figures" }
          ]
        },
        {
          id: "V", title: "Angles",
          skills: [
            { id: "V.1", title: "Acute, right, obtuse and straight angles" },
            { id: "V.2", title: "Angles as fractions of a circle" },
            { id: "V.3", title: "Use fractions to find the measure of an angle" },
            { id: "V.4", title: "Angles of 90, 180, 270 and 360 degrees" },
            { id: "V.5", title: "Measure angles on a circle" },
            { id: "V.6", title: "Measure angles with a protractor" },
            { id: "V.7", title: "Draw angles with a protractor" },
            { id: "V.8", title: "Estimate angle measurements" }
          ]
        },
        {
          id: "W", title: "Symmetry and transformations",
          skills: [
            { id: "W.1", title: "Identify lines of symmetry" },
            { id: "W.2", title: "Draw lines of symmetry" },
            { id: "W.3", title: "Count lines of symmetry" },
            { id: "W.4", title: "Rotational symmetry" },
            { id: "W.5", title: "Identify reflections, rotations and translations" },
            { id: "W.6", title: "Translations" },
            { id: "W.7", title: "Reflections" },
            { id: "W.8", title: "Rotations" },
            { id: "W.9", title: "Combinations of reflections, rotations and translations" }
          ]
        },
        {
          id: "X", title: "Three-dimensional figures",
          skills: [
            { id: "X.1", title: "Identify three-dimensional figures" },
            { id: "X.2", title: "Count vertices, edges and faces" },
            { id: "X.3", title: "Identify faces of three-dimensional figures" },
            { id: "X.4", title: "Which three-dimensional figure is being described?" },
            { id: "X.5", title: "Nets of three-dimensional figures" }
          ]
        },
        {
          id: "Y", title: "Geometric measurement",
          skills: [
            { id: "Y.1", title: "Find the perimeter of rectangles using formulas" },
            { id: "Y.2", title: "Perimeter of rectilinear shapes" },
            { id: "Y.3", title: "Perimeter of polygons" },
            { id: "Y.4", title: "Perimeter with decimal side lengths" },
            { id: "Y.5", title: "Perimeter: find the missing side lengths" },
            { id: "Y.6", title: "Perimeter: word problems" },
            { id: "Y.7", title: "Find the area of figures made of unit squares" },
            { id: "Y.8", title: "Select figures with a given area" },
            { id: "Y.9", title: "Select two figures with the same area" },
            { id: "Y.10", title: "Multiply to find the area of a rectangle made of unit squares" },
            { id: "Y.11", title: "Create figures with a given area" },
            { id: "Y.12", title: "Create rectangles with a given area" },
            { id: "Y.13", title: "Find the area of rectangles and squares" },
            { id: "Y.14", title: "Compare areas of rectangles and squares" },
            { id: "Y.15", title: "Find the missing side length of a rectangle" },
            { id: "Y.16", title: "Area word problems" },
            { id: "Y.17", title: "Find the area of complex figures" },
            { id: "Y.18", title: "Find the area between two rectangles" },
            { id: "Y.19", title: "Area and perimeter: word problems" },
            { id: "Y.20", title: "Use area and perimeter to determine cost" },
            { id: "Y.21", title: "Volume of cuboids made of unit cubes" },
            { id: "Y.22", title: "Volume of irregular figures made of unit cubes" }
          ]
        },
        {
          id: "Z", title: "Fractions and mixed numbers",
          skills: [
            { id: "Z.1", title: "Fractions review" },
            { id: "Z.2", title: "Fractions of a whole: word problems" },
            { id: "Z.3", title: "Fractions of a group: word problems" },
            { id: "Z.4", title: "Identify mixed numbers" },
            { id: "Z.5", title: "Find equivalent fractions using area models" },
            { id: "Z.6", title: "Graph equivalent fractions on number lines" },
            { id: "Z.7", title: "Identify equivalent fractions" },
            { id: "Z.8", title: "Equivalent fractions: find the missing numerator or denominator" },
            { id: "Z.9", title: "Graph fractions equivalent to 1 on number lines" },
            { id: "Z.10", title: "Select fractions equivalent to whole numbers using models" },
            { id: "Z.11", title: "Fractions with denominators of 10 and 100" },
            { id: "Z.12", title: "Fractions and mixed numbers with denominators of 10 and 100" },
            { id: "Z.13", title: "Patterns of equivalent fractions" },
            { id: "Z.14", title: "Write fractions in lowest terms" },
            { id: "Z.15", title: "Compare fractions with the same numerator or denominator using models" },
            { id: "Z.16", title: "Graph and compare fractions with the same numerator or denominator on number lines" },
            { id: "Z.17", title: "Compare fractions with the same numerator or denominator" },
            { id: "Z.18", title: "Compare fractions with different denominators using models" },
            { id: "Z.19", title: "Compare fractions with different denominators" },
            { id: "Z.20", title: "Graph and order fractions with the same numerator or denominator on number lines" },
            { id: "Z.21", title: "Order fractions with the same numerator or denominator" },
            { id: "Z.22", title: "Order fractions with different denominators" },
            { id: "Z.23", title: "Find smaller or larger fractions" },
            { id: "Z.24", title: "Convert between improper fractions and mixed numbers" },
            { id: "Z.25", title: "Relate division and fractions" },
            { id: "Z.26", title: "Understand fractions as division: word problems" }
          ]
        },
        {
          id: "AA", title: "Add and subtract fractions with the same denominator",
          skills: [
            { id: "AA.1", title: "Decompose fractions multiple ways" },
            { id: "AA.2", title: "Add fractions with the same denominator using area models" },
            { id: "AA.3", title: "Add fractions with the same denominator using bar models" },
            { id: "AA.4", title: "Add fractions with the same denominator using number lines" },
            { id: "AA.5", title: "Add fractions with the same denominator" },
            { id: "AA.6", title: "Subtract fractions with the same denominator using area models" },
            { id: "AA.7", title: "Subtract fractions with the same denominator using bar models" },
            { id: "AA.8", title: "Subtract fractions with the same denominator using number lines" },
            { id: "AA.9", title: "Subtract fractions with the same denominator" },
            { id: "AA.10", title: "Add and subtract fractions with the same denominator using number lines" },
            { id: "AA.11", title: "Add and subtract fractions with the same denominator" },
            { id: "AA.12", title: "Add and subtract fractions with the same denominator: word problems" },
            { id: "AA.13", title: "Add three or more fractions with the same denominator" },
            { id: "AA.14", title: "Add three or more fractions with the same denominator: word problems" },
            { id: "AA.15", title: "Add and subtract mixed numbers with the same denominator" },
            { id: "AA.16", title: "Add and subtract mixed numbers with the same denominator: word problems" },
            { id: "AA.17", title: "Complete addition and subtraction sentences with fractions" }
          ]
        },
        {
          id: "BB", title: "Add and subtract fractions with different denominators",
          skills: [
            { id: "BB.1", title: "Add up to 4 fractions with denominators of 10 and 100" },
            { id: "BB.2", title: "Add fractions with different denominators using models" },
            { id: "BB.3", title: "Add fractions with different denominators" },
            { id: "BB.4", title: "Subtract fractions with different denominators using models" },
            { id: "BB.5", title: "Subtract fractions with different denominators" },
            { id: "BB.6", title: "Add and subtract fractions with different denominators" },
            { id: "BB.7", title: "Add and subtract fractions with different denominators: word problems" },
            { id: "BB.8", title: "Add three or more fractions with different denominators" },
            { id: "BB.9", title: "Add three or more fractions with different denominators: word problems" },
            { id: "BB.10", title: "Add and subtract mixed numbers with different denominators" },
            { id: "BB.11", title: "Add and subtract mixed numbers with different denominators: word problems" }
          ]
        },
        {
          id: "CC", title: "Multiply fractions",
          skills: [
            { id: "CC.1", title: "Multiply unit fractions by whole numbers using number lines" },
            { id: "CC.2", title: "Multiply unit fractions by whole numbers using models" },
            { id: "CC.3", title: "Multiples of unit fractions: find the missing numbers" },
            { id: "CC.4", title: "Multiply unit fractions and whole numbers: sorting" },
            { id: "CC.5", title: "Multiply unit fractions by whole numbers" },
            { id: "CC.6", title: "Multiply unit fractions by whole numbers: word problems" },
            { id: "CC.7", title: "Multiply fractions by whole numbers using number lines" },
            { id: "CC.8", title: "Multiply fractions by whole numbers using models" },
            { id: "CC.9", title: "Multiply fractions by whole numbers using models: complete the equation" },
            { id: "CC.10", title: "Multiples of fractions: find the missing numbers" },
            { id: "CC.11", title: "Multiply fractions and whole numbers: sorting" },
            { id: "CC.12", title: "Multiply fractions by whole numbers" },
            { id: "CC.13", title: "Multiply fractions by whole numbers: word problems" },
            { id: "CC.14", title: "Fractions of a number" },
            { id: "CC.15", title: "Fractions of a number: word problems" }
          ]
        },
        {
          id: "DD", title: "Decimals up to hundredths",
          skills: [
            { id: "DD.1", title: "What decimal number is illustrated?" },
            { id: "DD.2", title: "Model decimals and fractions" },
            { id: "DD.3", title: "Understanding decimals expressed in words: up to hundredths" },
            { id: "DD.4", title: "Place values in decimal numbers up to hundredths" },
            { id: "DD.5", title: "One-tenth or one-hundredth more or less" },
            { id: "DD.6", title: "Equivalent decimals up to hundredths" },
            { id: "DD.7", title: "Graph decimals on number lines" },
            { id: "DD.8", title: "Decimal number lines" },
            { id: "DD.9", title: "Graph fractions as decimals on number lines" },
            { id: "DD.10", title: "Convert fractions to decimals: up to hundredths" },
            { id: "DD.11", title: "Convert decimals to fractions: up to hundredths" },
            { id: "DD.12", title: "Convert decimals between standard and expanded form using fractions: up to hundredths" },
            { id: "DD.13", title: "Round decimals to the nearest whole number or tenth" },
            { id: "DD.14", title: "Compare decimals using models" },
            { id: "DD.15", title: "Compare decimals on number lines" },
            { id: "DD.16", title: "Compare decimal numbers up to hundredths" },
            { id: "DD.17", title: "Put decimal numbers in order I: up to hundredths" },
            { id: "DD.18", title: "Put decimal numbers in order II: up to hundredths" },
            { id: "DD.19", title: "Compare positive and negative decimals: up to tenths" },
            { id: "DD.20", title: "Put positive and negative decimals in order: up to tenths" },
            { id: "DD.21", title: "Compare decimals and fractions on number lines" },
            { id: "DD.22", title: "Compare decimals and fractions: up to hundredths" },
            { id: "DD.23", title: "Number sequences involving decimals" }
          ]
        },
        {
          id: "EE", title: "Decimals up to thousandths",
          skills: [
            { id: "EE.1", title: "Understanding decimals expressed in words: up to thousandths" },
            { id: "EE.2", title: "Place values in decimal numbers up to thousandths" },
            { id: "EE.3", title: "Relationship between decimal place values" },
            { id: "EE.4", title: "Equivalent decimals up to thousandths" },
            { id: "EE.5", title: "Convert fractions and mixed numbers to decimals: up to thousandths" },
            { id: "EE.6", title: "Convert decimals to fractions and mixed numbers: up to thousandths" },
            { id: "EE.7", title: "Convert decimals between standard and expanded form using fractions: up to thousandths" },
            { id: "EE.8", title: "Compare decimal numbers up to thousandths" },
            { id: "EE.9", title: "Put decimal numbers in order I: up to thousandths" },
            { id: "EE.10", title: "Put decimal numbers in order II: up to thousandths" },
            { id: "EE.11", title: "Compare, order and round decimals: word problems" },
            { id: "EE.12", title: "Compare decimals and fractions: up to thousandths" }
          ]
        },
        {
          id: "FF", title: "Add and subtract decimals",
          skills: [
            { id: "FF.1", title: "Add decimal numbers: up to tenths" },
            { id: "FF.2", title: "Subtract decimal numbers: up to tenths" },
            { id: "FF.3", title: "Add decimal numbers using blocks" },
            { id: "FF.4", title: "Add decimal numbers: up to hundredths" },
            { id: "FF.5", title: "Subtract decimal numbers: up to hundredths" },
            { id: "FF.6", title: "Add and subtract decimal numbers: up to hundredths" },
            { id: "FF.7", title: "Add and subtract decimals up to hundredths: word problems" },
            { id: "FF.8", title: "Add decimal numbers: up to thousandths" },
            { id: "FF.9", title: "Subtract decimal numbers: up to thousandths" },
            { id: "FF.10", title: "Add and subtract decimal numbers: up to thousandths" },
            { id: "FF.11", title: "Add and subtract decimals up to thousandths: word problems" },
            { id: "FF.12", title: "Choose decimals with a particular sum or difference" },
            { id: "FF.13", title: "Add three or more decimals" },
            { id: "FF.14", title: "Add three or more decimals: word problems" },
            { id: "FF.15", title: "Complete the addition or subtraction sentence with decimals" },
            { id: "FF.16", title: "Inequalities with addition and subtraction of decimals" },
            { id: "FF.17", title: "Estimate sums and differences of decimals" },
            { id: "FF.18", title: "Solve decimal problems using diagrams" }
          ]
        },
        {
          id: "GG", title: "Multiply and divide decimals",
          skills: [
            { id: "GG.1", title: "Multiply a decimal by 10 or 100" },
            { id: "GG.2", title: "Divide a whole number by 10 or 100: decimal quotients" },
            { id: "GG.3", title: "Divide a decimal by 10 or 100" },
            { id: "GG.4", title: "Multiply a decimal by 10, 100 or 1,000" },
            { id: "GG.5", title: "Divide a whole number by 10, 100 or 1,000: decimal quotients" },
            { id: "GG.6", title: "Divide a decimal by 10, 100 or 1,000" }
          ]
        },
        {
          id: "HH", title: "Percents and ratios",
          skills: [
            { id: "HH.1", title: "What percentage is illustrated?" },
            { id: "HH.2", title: "Understanding percents: bar models" },
            { id: "HH.3", title: "Convert fractions to percents using grid models" },
            { id: "HH.4", title: "Convert percents to fractions and decimals" },
            { id: "HH.5", title: "Convert between percents, fractions and decimals" },
            { id: "HH.6", title: "Convert between percents, fractions and decimals: word problems" },
            { id: "HH.7", title: "Compare percents to each other and to fractions" },
            { id: "HH.8", title: "Compare percents and fractions: word problems" },
            { id: "HH.9", title: "Percent of a number" },
            { id: "HH.10", title: "Percent of a number: word problems" },
            { id: "HH.11", title: "Compare percents of numbers" },
            { id: "HH.12", title: "Write a ratio" },
            { id: "HH.13", title: "Which model represents the ratio?" },
            { id: "HH.14", title: "Unit rates" }
          ]
        },
        {
          id: "II", title: "Probability and statistics",
          skills: [
            { id: "II.1", title: "Understanding probability" },
            { id: "II.2", title: "Find the probability" },
            { id: "II.3", title: "Make predictions" },
            { id: "II.4", title: "Find the mode" },
            { id: "II.5", title: "Find the mean" },
            { id: "II.6", title: "Find the median" },
            { id: "II.7", title: "Find the range" },
            { id: "II.8", title: "Interpret charts to find mode" },
            { id: "II.9", title: "Interpret charts to find mean" },
            { id: "II.10", title: "Interpret charts to find median" },
            { id: "II.11", title: "Interpret charts to find range" }
          ]
        },
        {
          id: "JJ", title: "Financial literacy",
          skills: [
            { id: "JJ.1", title: "Calculate profit: word problems" },
            { id: "JJ.2", title: "Compare savings options" },
            { id: "JJ.3", title: "Budget a weekly allowance: word problems" }
          ]
        }
      ],
    },
  },
};