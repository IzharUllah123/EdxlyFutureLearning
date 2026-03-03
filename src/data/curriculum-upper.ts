import { SubjectData } from "./curriculum";

export const upperGradeData: Record<string, Record<string, SubjectData>> = {
 // ==============================================================
  // GRADE 7 MATH
  // ==============================================================
  "7": {
    math: {
      title: "Year 7 Math",
      description: "Proportional relationships, operations with rational numbers, linear equations, and probability.",
      stats: { skills: 520, videos: 360, games: 100 },
      topics: [
        {
          id: "A", title: "Whole numbers",
          skills: [
            { id: "A.1", title: "Place values in whole numbers" },
            { id: "A.2", title: "Word names for numbers" },
            { id: "A.3", title: "Roman numerals" },
            { id: "A.4", title: "Rounding" },
            { id: "A.5", title: "Add and subtract whole numbers" },
            { id: "A.6", title: "Add and subtract whole numbers: word problems" }
          ]
        },
        {
          id: "B", title: "Multiplication",
          skills: [
            { id: "B.1", title: "Multiply whole numbers" },
            { id: "B.2", title: "Multiply whole numbers: word problems" },
            { id: "B.3", title: "Multiply whole numbers with four or more digits" },
            { id: "B.4", title: "Multiply numbers ending in zeros" },
            { id: "B.5", title: "Multiply numbers ending in zeros: word problems" },
            { id: "B.6", title: "Multiply three or more numbers" },
            { id: "B.7", title: "Multiply three or more numbers: word problems" },
            { id: "B.8", title: "Estimate products" }
          ]
        },
        {
          id: "C", title: "Division",
          skills: [
            { id: "C.1", title: "Divisibility rules" },
            { id: "C.2", title: "Division patterns with zeros" },
            { id: "C.3", title: "Divide numbers ending in zeros: word problems" },
            { id: "C.4", title: "Estimate quotients" },
            { id: "C.5", title: "Divide whole numbers - two-digit divisors" },
            { id: "C.6", title: "Divide whole numbers - three-digit divisors" }
          ]
        },
        {
          id: "D", title: "Indices and square roots",
          skills: [
            { id: "D.1", title: "Write multiplication expressions using indices" },
            { id: "D.2", title: "Evaluate indices with whole number bases" },
            { id: "D.3", title: "Find the missing index or base" },
            { id: "D.4", title: "Evaluate indices with decimal bases" },
            { id: "D.5", title: "Evaluate indices with fractional bases" },
            { id: "D.6", title: "Evaluate indices with whole number, decimal, and fractional bases" },
            { id: "D.7", title: "Square roots of perfect squares" },
            { id: "D.8", title: "Relationship between squares and square roots" }
          ]
        },
        {
          id: "E", title: "Number theory",
          skills: [
            { id: "E.1", title: "Multiplicative inverses" },
            { id: "E.2", title: "Prime or composite" },
            { id: "E.3", title: "Identify factors" },
            { id: "E.4", title: "Find all the factor pairs of a number" },
            { id: "E.5", title: "Prime factorisation" },
            { id: "E.6", title: "Prime factorisation with indices" },
            { id: "E.7", title: "Highest common factor" },
            { id: "E.8", title: "Lowest common multiple" },
            { id: "E.9", title: "HCF and LCM: word problems" }
          ]
        },
        {
          id: "F", title: "Decimals",
          skills: [
            { id: "F.1", title: "What decimal number is illustrated?" },
            { id: "F.2", title: "Decimal place values" },
            { id: "F.3", title: "Word names for decimal numbers" },
            { id: "F.4", title: "Convert decimals to mixed numbers" },
            { id: "F.5", title: "Put decimal numbers in order" },
            { id: "F.6", title: "Inequalities with decimals" },
            { id: "F.7", title: "Round decimals" },
            { id: "F.8", title: "Round whole numbers and decimals: find the missing digit" },
            { id: "F.9", title: "Decimal number lines" }
          ]
        },
        {
          id: "G", title: "Add and subtract decimals",
          skills: [
            { id: "G.1", title: "Add and subtract decimal numbers" },
            { id: "G.2", title: "Add and subtract decimals: word problems" },
            { id: "G.3", title: "Complete the decimal addition or subtraction number sentence" },
            { id: "G.4", title: "Estimate sums and differences of decimals" },
            { id: "G.5", title: "Maps with decimal distances" }
          ]
        },
        {
          id: "H", title: "Multiply and divide decimals",
          skills: [
            { id: "H.1", title: "Multiply and divide decimals by powers of ten" },
            { id: "H.2", title: "Multiply a decimal by a one-digit whole number" },
            { id: "H.3", title: "Multiply a decimal by a multi-digit whole number" },
            { id: "H.4", title: "Multiply decimals and whole numbers: word problems" },
            { id: "H.5", title: "Multiply two decimals using grids" },
            { id: "H.6", title: "Multiply decimals" },
            { id: "H.7", title: "Estimate products of decimal numbers" },
            { id: "H.8", title: "Inequalities with decimal multiplication" },
            { id: "H.9", title: "Divide decimals by whole numbers" },
            { id: "H.10", title: "Divide decimals by whole numbers: word problems" },
            { id: "H.11", title: "Division with decimal divisors" },
            { id: "H.12", title: "Inequalities with decimal division" }
          ]
        },
        {
          id: "I", title: "Fractions and mixed numbers",
          skills: [
            { id: "I.1", title: "Fractions and mixed numbers review" },
            { id: "I.2", title: "Understanding fractions: word problems" },
            { id: "I.3", title: "Understanding fractions: graphs and tables" },
            { id: "I.4", title: "Equivalent fractions review" },
            { id: "I.5", title: "Write fractions in lowest terms" },
            { id: "I.6", title: "Fractions of a set: word problems" },
            { id: "I.7", title: "Lowest common denominator" },
            { id: "I.8", title: "Compare fractions with same and different denominators" },
            { id: "I.9", title: "Compare fractions: word problems" },
            { id: "I.10", title: "Convert between improper fractions and mixed numbers" },
            { id: "I.11", title: "Convert fractions to terminating decimals" },
            { id: "I.12", title: "Convert fractions to terminating and recurring decimals" },
            { id: "I.13", title: "Convert decimals to fractions" },
            { id: "I.14", title: "Convert between decimals and fractions" },
            { id: "I.15", title: "Convert between decimals and mixed numbers" },
            { id: "I.16", title: "Put a mix of decimals, fractions and mixed numbers in order" },
            { id: "I.17", title: "Understand fractions as division: word problems" }
          ]
        },
        {
          id: "J", title: "Add and subtract fractions",
          skills: [
            { id: "J.1", title: "Add and subtract fractions with the same denominator using number lines" },
            { id: "J.2", title: "Add and subtract fractions with the same denominator" },
            { id: "J.3", title: "Add and subtract fractions with the same denominator: word problems" },
            { id: "J.4", title: "Add and subtract mixed numbers with the same denominator" },
            { id: "J.5", title: "Add fractions with different denominators using models" },
            { id: "J.6", title: "Add fractions with different denominators" },
            { id: "J.7", title: "Subtract fractions with different denominators using models" },
            { id: "J.8", title: "Subtract fractions with different denominators" },
            { id: "J.9", title: "Add and subtract fractions with different denominators: word problems" },
            { id: "J.10", title: "Complete addition and subtraction number sentences with fractions" },
            { id: "J.11", title: "Inequalities with addition and subtraction of fractions" },
            { id: "J.12", title: "Estimate sums and differences of mixed numbers" },
            { id: "J.13", title: "Add and subtract mixed numbers" },
            { id: "J.14", title: "Add and subtract mixed numbers: word problems" },
            { id: "J.15", title: "Inequalities with addition and subtraction of mixed numbers" }
          ]
        },
        {
          id: "K", title: "Multiply fractions",
          skills: [
            { id: "K.1", title: "Multiply fractions by whole numbers using number lines" },
            { id: "K.2", title: "Multiply fractions by whole numbers: choose the model" },
            { id: "K.3", title: "Multiply fractions by whole numbers using models: complete the equation" },
            { id: "K.4", title: "Multiply fractions and whole numbers: sorting" },
            { id: "K.5", title: "Multiply fractions by whole numbers I" },
            { id: "K.6", title: "Multiply fractions by whole numbers II" },
            { id: "K.7", title: "Fractions of a number I" },
            { id: "K.8", title: "Fractions of a number II" },
            { id: "K.9", title: "Fractions of a number: word problems" },
            { id: "K.10", title: "Estimate products of fractions and whole numbers" },
            { id: "K.11", title: "Scaling whole numbers by fractions: justify your answer" },
            { id: "K.12", title: "Scaling whole numbers by fractions" },
            { id: "K.13", title: "Multiply two fractions using models" },
            { id: "K.14", title: "Multiply two fractions" },
            { id: "K.15", title: "Multiply fractions: word problems" },
            { id: "K.16", title: "Complete the fraction multiplication number sentence" },
            { id: "K.17", title: "Multiply three or more fractions and whole numbers" },
            { id: "K.18", title: "Multiply mixed numbers and whole numbers" },
            { id: "K.19", title: "Multiply mixed numbers" },
            { id: "K.20", title: "Estimate products of fractions, whole numbers and mixed numbers" }
          ]
        },
        {
          id: "L", title: "Divide fractions",
          skills: [
            { id: "L.1", title: "Divide unit fractions by whole numbers using models" },
            { id: "L.2", title: "Divide unit fractions by whole numbers" },
            { id: "L.3", title: "Divide whole numbers by unit fractions using models" },
            { id: "L.4", title: "Divide whole numbers by unit fractions" },
            { id: "L.5", title: "Divide unit fractions and whole numbers using area models" },
            { id: "L.6", title: "Divide whole numbers and unit fractions" },
            { id: "L.7", title: "Divide fractions by whole numbers" },
            { id: "L.8", title: "Divide whole numbers by fractions" },
            { id: "L.9", title: "Divide two fractions" },
            { id: "L.10", title: "Divide fractions and mixed numbers" },
            { id: "L.11", title: "Divide fractions and mixed numbers: word problems" }
          ]
        },
        {
          id: "M", title: "Integers",
          skills: [
            { id: "M.1", title: "Understanding integers" },
            { id: "M.2", title: "Integers on number lines" },
            { id: "M.3", title: "Graph integers on horizontal and vertical number lines" },
            { id: "M.4", title: "Understanding opposite integers" },
            { id: "M.5", title: "Opposite integers" },
            { id: "M.6", title: "Compare integers" },
            { id: "M.7", title: "Put integers in order" }
          ]
        },
        {
          id: "N", title: "Add and subtract integers",
          skills: [
            { id: "N.1", title: "Add integers using number lines" },
            { id: "N.2", title: "Add integers using counters" },
            { id: "N.3", title: "Integer addition rules" },
            { id: "N.4", title: "Add integers" },
            { id: "N.5", title: "Add three or more integers" },
            { id: "N.6", title: "Subtract integers using number lines" },
            { id: "N.7", title: "Subtract integers using counters" },
            { id: "N.8", title: "Integer subtraction rules" },
            { id: "N.9", title: "Subtract integers" },
            { id: "N.10", title: "Integer addition and subtraction rules" },
            { id: "N.11", title: "Add and subtract integers" },
            { id: "N.12", title: "Complete addition and subtraction equations with integers" },
            { id: "N.13", title: "Add and subtract integers: word problems" },
            { id: "N.14", title: "Add and subtract integers: input/output tables" }
          ]
        },
        {
          id: "O", title: "Multiply and divide integers",
          skills: [
            { id: "O.1", title: "Understand multiplying by a negative integer using a number line" },
            { id: "O.2", title: "Integer multiplication rules" },
            { id: "O.3", title: "Multiply integers" },
            { id: "O.4", title: "Integer division rules" },
            { id: "O.5", title: "Divide integers" },
            { id: "O.6", title: "Integer multiplication and division rules" },
            { id: "O.7", title: "Multiply and divide integers" },
            { id: "O.8", title: "Complete multiplication and division equations with integers" }
          ]
        },
        {
          id: "P", title: "Mixed operations",
          skills: [
            { id: "P.1", title: "Add, subtract, multiply or divide two whole numbers" },
            { id: "P.2", title: "Add, subtract, multiply or divide two whole numbers: word problems" },
            { id: "P.3", title: "Evaluate simple numerical expressions" },
            { id: "P.4", title: "Evaluate numerical expressions one step at a time" },
            { id: "P.5", title: "Evaluate numerical expressions involving whole numbers" },
            { id: "P.6", title: "Identify mistakes involving the order of operations" },
            { id: "P.7", title: "Add, subtract, multiply or divide two decimals" },
            { id: "P.8", title: "Add, subtract, multiply or divide two decimals: word problems" },
            { id: "P.9", title: "Evaluate numerical expressions involving decimals" },
            { id: "P.10", title: "Add, subtract, multiply or divide two fractions" },
            { id: "P.11", title: "Add, subtract, multiply or divide two fractions: word problems" },
            { id: "P.12", title: "Evaluate numerical expressions involving fractions" },
            { id: "P.13", title: "Add, subtract, multiply or divide two integers" },
            { id: "P.14", title: "Evaluate numerical expressions involving integers" }
          ]
        },
        {
          id: "Q", title: "Rational numbers",
          skills: [
            { id: "Q.1", title: "Rational numbers on number lines" },
            { id: "Q.2", title: "Compare and order rational numbers using number lines" },
            { id: "Q.3", title: "Compare rational numbers" },
            { id: "Q.4", title: "Put rational numbers in order" },
            { id: "Q.5", title: "Compare and order rational numbers: word problems" },
            { id: "Q.6", title: "Rational numbers: find the sign" }
          ]
        },
        {
          id: "R", title: "Problem solving and estimation",
          skills: [
            { id: "R.1", title: "Estimate to solve word problems" },
            { id: "R.2", title: "Multi-step word problems" },
            { id: "R.3", title: "Multi-step word problems: identify reasonable answers" },
            { id: "R.4", title: "Word problems with extra or missing information" },
            { id: "R.5", title: "Guess-and-check word problems" },
            { id: "R.6", title: "Distance/direction to starting point" },
            { id: "R.7", title: "Use logical reasoning to find the order" }
          ]
        },
        {
          id: "S", title: "Ratios and rates",
          skills: [
            { id: "S.1", title: "Write a ratio" },
            { id: "S.2", title: "Write a ratio: word problems" },
            { id: "S.3", title: "Which model represents the ratio?" },
            { id: "S.4", title: "Identify equivalent ratios" },
            { id: "S.5", title: "Write an equivalent ratio" },
            { id: "S.6", title: "Equivalent ratios: word problems" },
            { id: "S.7", title: "Ratio tables" },
            { id: "S.8", title: "Unit rates" },
            { id: "S.9", title: "Equivalent rates" },
            { id: "S.10", title: "Use bar diagrams to solve ratio word problems" },
            { id: "S.11", title: "Compare ratios: word problems" },
            { id: "S.12", title: "Compare rates: word problems" },
            { id: "S.13", title: "Ratios and rates: word problems" },
            { id: "S.14", title: "Do the ratios form a proportion?" },
            { id: "S.15", title: "Solve the proportion" },
            { id: "S.16", title: "Scale drawings: word problems" },
            { id: "S.17", title: "Scale drawings: scale factor word problems" }
          ]
        },
        {
          id: "T", title: "Percents",
          skills: [
            { id: "T.1", title: "What percentage is illustrated?" },
            { id: "T.2", title: "Convert between percents, fractions and decimals" },
            { id: "T.3", title: "Convert between percents, fractions and decimals: word problems" },
            { id: "T.4", title: "Compare percents to each other and to fractions" },
            { id: "T.5", title: "Compare percents and fractions: word problems" },
            { id: "T.6", title: "Solve percent problems using grid models" },
            { id: "T.7", title: "Solve percent problems using bar models" },
            { id: "T.8", title: "Estimate percents of numbers" },
            { id: "T.9", title: "Percents of numbers and money amounts" },
            { id: "T.10", title: "Percents of numbers: word problems" },
            { id: "T.11", title: "Find what percent one number is of another" },
            { id: "T.12", title: "Find what percent one number is of another: word problems" },
            { id: "T.13", title: "Solve percent equations: word problems" }
          ]
        },
        {
          id: "U", title: "Units of measurement",
          skills: [
            { id: "U.1", title: "Estimate metric measurements" },
            { id: "U.2", title: "Convert and compare metric units" },
            { id: "U.3", title: "Multi-step problems with metric unit conversions" },
            { id: "U.4", title: "Metric mixed units" },
            { id: "U.5", title: "Convert square and cubic units of length" },
            { id: "U.6", title: "Convert between cubic metres and litres" },
            { id: "U.7", title: "Compare temperatures above and below zero" },
            { id: "U.8", title: "Estimate imperial measurements" },
            { id: "U.9", title: "Convert and compare imperial units" },
            { id: "U.10", title: "Imperial mixed units" },
            { id: "U.11", title: "Convert between metric and imperial units" },
            { id: "U.12", title: "Precision" }
          ]
        },
        {
          id: "V", title: "Money",
          skills: [
            { id: "V.1", title: "Find the number of each type of coin" },
            { id: "V.2", title: "Add and subtract money amounts" },
            { id: "V.3", title: "Add and subtract money amounts: word problems" },
            { id: "V.4", title: "Multiply money by whole numbers" },
            { id: "V.5", title: "Multiply money: word problems" },
            { id: "V.6", title: "Divide money amounts" },
            { id: "V.7", title: "Divide money amounts: word problems" }
          ]
        },
        {
          id: "W", title: "Consumer maths",
          skills: [
            { id: "W.1", title: "Sale prices" },
            { id: "W.2", title: "Which is the better coupon?" },
            { id: "W.3", title: "Unit prices" },
            { id: "W.4", title: "Unit prices with fractions and decimals" },
            { id: "W.5", title: "Unit prices: find the total price" },
            { id: "W.6", title: "Percents - calculate tip, mark-up and more" },
            { id: "W.7", title: "Percents - calculate VAT" }
          ]
        },
        {
          id: "X", title: "Time",
          skills: [
            { id: "X.1", title: "Elapsed time" },
            { id: "X.2", title: "Time units" },
            { id: "X.3", title: "Find start and end times" },
            { id: "X.4", title: "Convert between 12-hour and 24-hour time" },
            { id: "X.5", title: "Time zones - 12-hour time" },
            { id: "X.6", title: "Time zones - 24-hour time" },
            { id: "X.7", title: "Transportation schedules" }
          ]
        },
        {
          id: "Y", title: "Coordinate plane",
          skills: [
            { id: "Y.1", title: "Objects on a coordinate plane" },
            { id: "Y.2", title: "Graph points on a coordinate plane" },
            { id: "Y.3", title: "Quadrants" },
            { id: "Y.4", title: "Coordinate planes as maps" },
            { id: "Y.5", title: "Follow directions on a coordinate plane" }
          ]
        },
        {
          id: "Z", title: "Number sequences",
          skills: [
            { id: "Z.1", title: "Identify arithmetic and geometric sequences" },
            { id: "Z.2", title: "Arithmetic sequences" },
            { id: "Z.3", title: "Geometric sequences" },
            { id: "Z.4", title: "Number sequences: mixed review" },
            { id: "Z.5", title: "Number sequences: word problems" },
            { id: "Z.6", title: "Evaluate variable expressions for arithmetic sequences" },
            { id: "Z.7", title: "Write variable expressions for arithmetic sequences" }
          ]
        },
        {
          id: "AA", title: "Expressions and properties",
          skills: [
            { id: "AA.1", title: "Write variable expressions" },
            { id: "AA.2", title: "Write variable expressions: word problems" },
            { id: "AA.3", title: "Evaluate variable expressions with whole numbers" },
            { id: "AA.4", title: "Evaluate multi-variable expressions" },
            { id: "AA.5", title: "Evaluate variable expressions with decimals" },
            { id: "AA.6", title: "Identify terms and coefficients" },
            { id: "AA.7", title: "Identify equivalent expressions using bar models" },
            { id: "AA.8", title: "Properties of addition" },
            { id: "AA.9", title: "Add and subtract like terms" },
            { id: "AA.10", title: "Properties of multiplication" },
            { id: "AA.11", title: "Solve for a variable using properties of multiplication" },
            { id: "AA.12", title: "Multiply using the distributive property: area models" },
            { id: "AA.13", title: "Multiply using the distributive property" },
            { id: "AA.14", title: "Factorise linear expressions: area models" },
            { id: "AA.15", title: "Factors of linear expressions" },
            { id: "AA.16", title: "Sort factors of expressions" },
            { id: "AA.17", title: "Write equivalent expressions using properties" },
            { id: "AA.18", title: "Identify equivalent expressions" }
          ]
        },
        {
          id: "BB", title: "One-variable equations",
          skills: [
            { id: "BB.1", title: "Which x satisfies an equation?" },
            { id: "BB.2", title: "Write an equation from words" },
            { id: "BB.3", title: "Identify expressions and equations" },
            { id: "BB.4", title: "Model and solve one-step equations using algebra tiles" },
            { id: "BB.5", title: "Write and solve one-step equations that represent diagrams" },
            { id: "BB.6", title: "Solve one-step equations with whole numbers" },
            { id: "BB.7", title: "Solve one-step equations with decimals" },
            { id: "BB.8", title: "Write a one-step equation: word problems" },
            { id: "BB.9", title: "Solve one-step equations: word problems" },
            { id: "BB.10", title: "Which word problem matches the one-step equation?" },
            { id: "BB.11", title: "Solve one-step equations involving integers" },
            { id: "BB.12", title: "Model and solve two-step equations using algebra tiles" },
            { id: "BB.13", title: "Write and solve two-step equations that represent diagrams" },
            { id: "BB.14", title: "Solve two-step equations: positive numbers" },
            { id: "BB.15", title: "Solve two-step equations: including negative numbers" },
            { id: "BB.16", title: "Solve one- and two-step equations: word problems" }
          ]
        },
        {
          id: "CC", title: "One-variable inequalities",
          skills: [
            { id: "CC.1", title: "Solutions to inequalities" },
            { id: "CC.2", title: "Graph inequalities on number lines" },
            { id: "CC.3", title: "Write inequalities from number lines" },
            { id: "CC.4", title: "Write and graph inequalities: word problems" },
            { id: "CC.5", title: "Solve one-step inequalities" },
            { id: "CC.6", title: "Graph solutions to one-step inequalities" },
            { id: "CC.7", title: "One-step inequalities: word problems" }
          ]
        },
        {
          id: "DD", title: "Two-variable equations",
          skills: [
            { id: "DD.1", title: "Does (x, y) satisfy an equation?" },
            { id: "DD.2", title: "Identify independent and dependent variables" },
            { id: "DD.3", title: "Write an equation from a graph using a table" },
            { id: "DD.4", title: "Find a value using two-variable equations" },
            { id: "DD.5", title: "Find a value using two-variable equations: word problems" },
            { id: "DD.6", title: "Solve word problems by finding two-variable equations" },
            { id: "DD.7", title: "Complete a table for a two-variable relationship" },
            { id: "DD.8", title: "Write a two-variable equation from a table" },
            { id: "DD.9", title: "Write a two-variable equation" },
            { id: "DD.10", title: "Identify the graph of an equation" },
            { id: "DD.11", title: "Complete a table and graph a two-variable equation" },
            { id: "DD.12", title: "Graph a two-variable equation" },
            { id: "DD.13", title: "Interpret a graph: word problems" }
          ]
        },
        {
          id: "EE", title: "Two-dimensional figures",
          skills: [
            { id: "EE.1", title: "Identify and classify polygons" },
            { id: "EE.2", title: "Measure angles" },
            { id: "EE.3", title: "Types of angles" },
            { id: "EE.4", title: "Estimate angle measurements" },
            { id: "EE.5", title: "Classify triangles" },
            { id: "EE.6", title: "Classify quadrilaterals" },
            { id: "EE.7", title: "Graph triangles and quadrilaterals" },
            { id: "EE.8", title: "Find missing angles in triangles" },
            { id: "EE.9", title: "Find missing angles in quadrilaterals" },
            { id: "EE.10", title: "Sums of angles in polygons" },
            { id: "EE.11", title: "Lines, line segments and rays" },
            { id: "EE.12", title: "Name angles" },
            { id: "EE.13", title: "Identify vertical and supplementary angles" },
            { id: "EE.14", title: "Find measures of vertical and supplementary angles" },
            { id: "EE.15", title: "Transversals of parallel lines: name angle pairs" },
            { id: "EE.16", title: "Transversals of parallel lines: find angle measures" },
            { id: "EE.17", title: "Find lengths and measures of bisected line segments and angles" },
            { id: "EE.18", title: "Parts of a circle" },
            { id: "EE.19", title: "Central angles of circles" }
          ]
        },
        {
          id: "FF", title: "Symmetry and transformations",
          skills: [
            { id: "FF.1", title: "Line symmetry" },
            { id: "FF.2", title: "Rotational symmetry" },
            { id: "FF.3", title: "Identify reflections, rotations and translations" },
            { id: "FF.4", title: "Translations: graph the image" },
            { id: "FF.5", title: "Translations: find the coordinates" },
            { id: "FF.6", title: "Translations: write the rule" },
            { id: "FF.7", title: "Identify congruent figures" },
            { id: "FF.8", title: "Congruence statements and corresponding parts" },
            { id: "FF.9", title: "Side lengths and angle measures of congruent figures" }
          ]
        },
        {
          id: "GG", title: "Three-dimensional figures",
          skills: [
            { id: "GG.1", title: "Which figure is being described?" },
            { id: "GG.2", title: "Bases of three-dimensional figures" },
            { id: "GG.3", title: "Nets of three-dimensional figures" },
            { id: "GG.4", title: "Front, side and top view" }
          ]
        },
        {
          id: "HH", title: "Geometric measurement",
          skills: [
            { id: "HH.1", title: "Perimeter" },
            { id: "HH.2", title: "Area of squares and rectangles" },
            { id: "HH.3", title: "Understanding area of a triangle" },
            { id: "HH.4", title: "Area of triangles" },
            { id: "HH.5", title: "Understanding area of a parallelogram" },
            { id: "HH.6", title: "Area of parallelograms" },
            { id: "HH.7", title: "Understanding area of a trapezium" },
            { id: "HH.8", title: "Area of trapeziums" },
            { id: "HH.9", title: "Area of rhombuses" },
            { id: "HH.10", title: "Area of quadrilaterals" },
            { id: "HH.11", title: "Area of compound figures" },
            { id: "HH.12", title: "Area of compound figures with triangles" },
            { id: "HH.13", title: "Area between two rectangles" },
            { id: "HH.14", title: "Area between two triangles" },
            { id: "HH.15", title: "Area and perimeter of squares and rectangles: word problems" },
            { id: "HH.16", title: "Rectangles: relationship between perimeter and area" },
            { id: "HH.17", title: "Compare area and perimeter of two figures" },
            { id: "HH.18", title: "Volume of cubes and cuboids" },
            { id: "HH.19", title: "Volume of cubes and cuboids: word problems" }
          ]
        },
        {
          id: "II", title: "Data and graphs",
          skills: [
            { id: "II.1", title: "Interpret pictograms" },
            { id: "II.2", title: "Create pictograms" },
            { id: "II.3", title: "Interpret stem-and-leaf plots" },
            { id: "II.4", title: "Create stem-and-leaf plots" },
            { id: "II.5", title: "Interpret line plots" },
            { id: "II.6", title: "Create line plots" },
            { id: "II.7", title: "Create frequency tables" },
            { id: "II.8", title: "Interpret bar graphs for categorical data" },
            { id: "II.9", title: "Create bar graphs for categorical data" },
            { id: "II.10", title: "Interpret categorical data" },
            { id: "II.11", title: "Interpret double bar graphs" },
            { id: "II.12", title: "Create double bar graphs" },
            { id: "II.13", title: "Interpret bar graphs for grouped data" },
            { id: "II.14", title: "Create bar graphs for grouped data" },
            { id: "II.15", title: "Pie charts with fractions" },
            { id: "II.16", title: "Interpret line graphs" },
            { id: "II.17", title: "Create line graphs" },
            { id: "II.18", title: "Interpret double line graphs" },
            { id: "II.19", title: "Create double line graphs" },
            { id: "II.20", title: "Choose the best type of graph" }
          ]
        },
        {
          id: "JJ", title: "Statistics",
          skills: [
            { id: "JJ.1", title: "Identify statistical questions" },
            { id: "JJ.2", title: "Populations and samples" },
            { id: "JJ.3", title: "Identify representative, random and biased samples" },
            { id: "JJ.4", title: "Calculate mean, median, mode and range" },
            { id: "JJ.5", title: "Interpret charts to find mean, median, mode and range" },
            { id: "JJ.6", title: "Mean, median, mode and range: find the missing number" },
            { id: "JJ.7", title: "Identify an outlier" },
            { id: "JJ.8", title: "Identify an outlier and describe the effect of removing it" },
            { id: "JJ.9", title: "Describe distributions in line plots" }
          ]
        },
        {
          id: "KK", title: "Probability",
          skills: [
            { id: "KK.1", title: "Probability of simple events" },
            { id: "KK.2", title: "Probability of simple events and opposite events" },
            { id: "KK.3", title: "Probability of mutually exclusive events and overlapping events" },
            { id: "KK.4", title: "Experimental probability" },
            { id: "KK.5", title: "Use collected data to find probabilities and make predictions" },
            { id: "KK.6", title: "Make predictions using theoretical probability" },
            { id: "KK.7", title: "Make predictions using experimental probability" }
          ]
        },
        {
          id: "LL", title: "Financial literacy",
          skills: [
            { id: "LL.1", title: "Balance a budget" },
            { id: "LL.2", title: "Adjust a budget" },
            { id: "LL.3", title: "Debit cards and credit cards" }
          ]
        }
      ],
    },
  },

// ==============================================================
  // GRADE 8 MATH
  // ==============================================================
  "8": {
    math: {
      title: "Year 8 Math",
      description: "Linear equations, functions, geometry, and statistics.",
      stats: { skills: 550, videos: 400, games: 110 },
      topics: [
        {
          id: "A", title: "Number theory",
          skills: [
            { id: "A.1", title: "Multiplicative inverses" },
            { id: "A.2", title: "Divisibility rules" },
            { id: "A.3", title: "Identify factors" },
            { id: "A.4", title: "Prime or composite" },
            { id: "A.5", title: "Prime factorisation" },
            { id: "A.6", title: "Highest common factor" },
            { id: "A.7", title: "Lowest common multiple" },
            { id: "A.8", title: "HCF and LCM: word problems" },
            { id: "A.9", title: "Classify numbers" },
            { id: "A.10", title: "Convert between ordinary numbers and standard form" },
            { id: "A.11", title: "Compare numbers written in standard form" }
          ]
        },
        {
          id: "B", title: "Decimals",
          skills: [
            { id: "B.1", title: "Decimal numbers review" },
            { id: "B.2", title: "Compare and order decimals" },
            { id: "B.3", title: "Decimal number lines" },
            { id: "B.4", title: "Round decimals" }
          ]
        },
        {
          id: "C", title: "Operations with decimals",
          skills: [
            { id: "C.1", title: "Add and subtract decimals" },
            { id: "C.2", title: "Add and subtract decimals: word problems" },
            { id: "C.3", title: "Complete the decimal addition or subtraction sentence" },
            { id: "C.4", title: "Multiply decimals" },
            { id: "C.5", title: "Multiply decimals and whole numbers: word problems" },
            { id: "C.6", title: "Divide decimals" },
            { id: "C.7", title: "Divide decimals by whole numbers: word problems" },
            { id: "C.8", title: "Multiply and divide decimals by powers of ten" },
            { id: "C.9", title: "Estimate sums, differences and products of decimals" },
            { id: "C.10", title: "Add, subtract, multiply and divide decimals: word problems" },
            { id: "C.11", title: "Multi-step inequalities with decimals" },
            { id: "C.12", title: "Maps with decimal distances" },
            { id: "C.13", title: "Evaluate numerical expressions involving decimals" }
          ]
        },
        {
          id: "D", title: "Fractions and mixed numbers",
          skills: [
            { id: "D.1", title: "Write fractions in lowest terms" },
            { id: "D.2", title: "Lowest common denominator" },
            { id: "D.3", title: "Compare and order fractions" },
            { id: "D.4", title: "Compare fractions: word problems" },
            { id: "D.5", title: "Convert between mixed numbers and improper fractions" },
            { id: "D.6", title: "Compare mixed numbers and improper fractions" },
            { id: "D.7", title: "Convert fractions or mixed numbers to decimals" },
            { id: "D.8", title: "Convert between decimals and fractions or mixed numbers" },
            { id: "D.9", title: "Put a mix of decimals, fractions and mixed numbers in order" }
          ]
        },
        {
          id: "E", title: "Add and subtract fractions",
          skills: [
            { id: "E.1", title: "Add and subtract fractions" },
            { id: "E.2", title: "Add and subtract fractions: word problems" },
            { id: "E.3", title: "Add and subtract mixed numbers" },
            { id: "E.4", title: "Add and subtract mixed numbers: word problems" },
            { id: "E.5", title: "Inequalities with addition and subtraction of fractions and mixed numbers" },
            { id: "E.6", title: "Estimate sums and differences of mixed numbers" }
          ]
        },
        {
          id: "F", title: "Multiply fractions",
          skills: [
            { id: "F.1", title: "Multiply fractions by whole numbers using number lines" },
            { id: "F.2", title: "Multiply fractions by whole numbers: choose the model" },
            { id: "F.3", title: "Multiply fractions by whole numbers using models: complete the equation" },
            { id: "F.4", title: "Multiply fractions and whole numbers: sorting" },
            { id: "F.5", title: "Multiply fractions by whole numbers I" },
            { id: "F.6", title: "Multiply fractions by whole numbers II" },
            { id: "F.7", title: "Multiply fractions and whole numbers: word problems" },
            { id: "F.8", title: "Fractions of a number I" },
            { id: "F.9", title: "Fractions of a number II" },
            { id: "F.10", title: "Fractions of a number: word problems" },
            { id: "F.11", title: "Estimate products of fractions and whole numbers" },
            { id: "F.12", title: "Scaling whole numbers by fractions: justify your answer" },
            { id: "F.13", title: "Scaling whole numbers by fractions" },
            { id: "F.14", title: "Multiply two fractions using models" },
            { id: "F.15", title: "Multiply fractions" },
            { id: "F.16", title: "Multiply fractions: word problems" },
            { id: "F.17", title: "Complete the fraction multiplication sentence" },
            { id: "F.18", title: "Multiply three or more fractions and whole numbers" },
            { id: "F.19", title: "Multiply mixed numbers and whole numbers" },
            { id: "F.20", title: "Multiply mixed numbers" }
          ]
        },
        {
          id: "G", title: "Divide fractions",
          skills: [
            { id: "G.1", title: "Reciprocals" },
            { id: "G.2", title: "Divide unit fractions by whole numbers using models" },
            { id: "G.3", title: "Divide unit fractions by whole numbers" },
            { id: "G.4", title: "Divide whole numbers by unit fractions using models" },
            { id: "G.5", title: "Divide whole numbers by unit fractions" },
            { id: "G.6", title: "Divide unit fractions and whole numbers using area models" },
            { id: "G.7", title: "Divide whole numbers and unit fractions" },
            { id: "G.8", title: "Divide fractions by whole numbers" },
            { id: "G.9", title: "Divide whole numbers by fractions" },
            { id: "G.10", title: "Divide fractions" },
            { id: "G.11", title: "Divide fractions: word problems" },
            { id: "G.12", title: "Divide fractions and mixed numbers" },
            { id: "G.13", title: "Estimate products and quotients of fractions and mixed numbers" },
            { id: "G.14", title: "Add, subtract, multiply or divide two fractions" },
            { id: "G.15", title: "Add, subtract, multiply and divide fractions and mixed numbers: word problems" },
            { id: "G.16", title: "Evaluate numerical expressions involving fractions" }
          ]
        },
        {
          id: "H", title: "Integers",
          skills: [
            { id: "H.1", title: "Understanding integers" },
            { id: "H.2", title: "Integers on number lines" },
            { id: "H.3", title: "Graph integers on horizontal and vertical number lines" },
            { id: "H.4", title: "Compare and order integers" }
          ]
        },
        {
          id: "I", title: "Operations with integers",
          skills: [
            { id: "I.1", title: "Add and subtract integers using number lines" },
            { id: "I.2", title: "Add and subtract integers using counters" },
            { id: "I.3", title: "Integer addition and subtraction rules" },
            { id: "I.4", title: "Add and subtract integers" },
            { id: "I.5", title: "Complete addition and subtraction sentences with integers" },
            { id: "I.6", title: "Add and subtract integers: word problems" },
            { id: "I.7", title: "Add and subtract three or more integers" },
            { id: "I.8", title: "Understand multiplying by a negative integer using a number line" },
            { id: "I.9", title: "Integer multiplication and division rules" },
            { id: "I.10", title: "Multiply and divide integers" },
            { id: "I.11", title: "Complete multiplication and division sentences with integers" },
            { id: "I.12", title: "Evaluate numerical expressions involving integers" }
          ]
        },
        {
          id: "J", title: "Rational numbers",
          skills: [
            { id: "J.1", title: "Identify rational numbers" },
            { id: "J.2", title: "Rational numbers on number lines" },
            { id: "J.3", title: "Compare and order rational numbers using number lines" },
            { id: "J.4", title: "Compare rational numbers" },
            { id: "J.5", title: "Put rational numbers in order" },
            { id: "J.6", title: "Compare and order rational numbers: word problems" },
            { id: "J.7", title: "Rational numbers: find the sign" }
          ]
        },
        {
          id: "K", title: "Operations with rational numbers",
          skills: [
            { id: "K.1", title: "Add and subtract positive and negative decimals" },
            { id: "K.2", title: "Add and subtract positive and negative fractions" },
            { id: "K.3", title: "Add and subtract rational numbers" },
            { id: "K.4", title: "Apply addition and subtraction rules" },
            { id: "K.5", title: "Multiply and divide positive and negative decimals" },
            { id: "K.6", title: "Multiply and divide positive and negative fractions" },
            { id: "K.7", title: "Multiply and divide rational numbers" },
            { id: "K.8", title: "Apply multiplication and division rules" },
            { id: "K.9", title: "Add, subtract, multiply and divide rational numbers" },
            { id: "K.10", title: "Evaluate numerical expressions involving rational numbers" }
          ]
        },
        {
          id: "L", title: "Indices and roots",
          skills: [
            { id: "L.1", title: "Understanding indices" },
            { id: "L.2", title: "Evaluate indices" },
            { id: "L.3", title: "Solve equations with variable indices" },
            { id: "L.4", title: "Indices with negative bases" },
            { id: "L.5", title: "Indices with decimal and fractional bases" },
            { id: "L.6", title: "Evaluate numerical expressions involving indices" },
            { id: "L.7", title: "Square roots of perfect squares" },
            { id: "L.8", title: "Estimate square roots" },
            { id: "L.9", title: "Cube roots of perfect cubes" }
          ]
        },
        {
          id: "M", title: "Ratios, rates and proportions",
          skills: [
            { id: "M.1", title: "Understanding ratios" },
            { id: "M.2", title: "Identify equivalent ratios" },
            { id: "M.3", title: "Write an equivalent ratio" },
            { id: "M.4", title: "Equivalent ratios: word problems" },
            { id: "M.5", title: "Compare ratios: word problems" },
            { id: "M.6", title: "Unit rates" },
            { id: "M.7", title: "Equivalent rates" },
            { id: "M.8", title: "Calculate speed, distance or time: word problems" },
            { id: "M.9", title: "Use bar diagrams to solve ratio word problems" },
            { id: "M.10", title: "Compare rates: word problems" },
            { id: "M.11", title: "Ratios and rates: word problems" },
            { id: "M.12", title: "Do the ratios form a proportion?" },
            { id: "M.13", title: "Do the ratios form a proportion: word problems" },
            { id: "M.14", title: "Solve proportions" },
            { id: "M.15", title: "Solve proportions: word problems" },
            { id: "M.16", title: "Rate of change" },
            { id: "M.17", title: "Constant rate of change" }
          ]
        },
        {
          id: "N", title: "Direct proportions",
          skills: [
            { id: "N.1", title: "Find the constant of proportionality from a table" },
            { id: "N.2", title: "Write equations for proportional relationships from tables" },
            { id: "N.3", title: "Identify proportional relationships by graphing" },
            { id: "N.4", title: "Find the constant of proportionality from a graph" },
            { id: "N.5", title: "Write equations for proportional relationships from graphs" },
            { id: "N.6", title: "Identify proportional relationships from graphs and equations" },
            { id: "N.7", title: "Identify proportional relationships from tables" },
            { id: "N.8", title: "Complete a table and graph a proportional relationship" },
            { id: "N.9", title: "Interpret graphs of proportional relationships" },
            { id: "N.10", title: "Write and solve equations for proportional relationships" }
          ]
        },
        {
          id: "O", title: "Percents",
          skills: [
            { id: "O.1", title: "What percentage is illustrated?" },
            { id: "O.2", title: "Convert between percents, fractions and decimals" },
            { id: "O.3", title: "Convert between percents, fractions and decimals: word problems" },
            { id: "O.4", title: "Compare percents to fractions and decimals" },
            { id: "O.5", title: "Solve percent problems using grid models" },
            { id: "O.6", title: "Solve percent problems using bar models" },
            { id: "O.7", title: "Estimate percents of numbers" },
            { id: "O.8", title: "Percents of numbers and money amounts" },
            { id: "O.9", title: "Percents of numbers: word problems" },
            { id: "O.10", title: "Compare percents of numbers" },
            { id: "O.11", title: "Find what percent one number is of another" },
            { id: "O.12", title: "Find what percent one number is of another: word problems" },
            { id: "O.13", title: "Find the total given a part and a percent" },
            { id: "O.14", title: "Solve percent equations" },
            { id: "O.15", title: "Solve percent equations: word problems" },
            { id: "O.16", title: "Percent of change" },
            { id: "O.17", title: "Percent of change: word problems" },
            { id: "O.18", title: "Percent of change: find the original amount word problems" }
          ]
        },
        {
          id: "P", title: "Consumer maths",
          skills: [
            { id: "P.1", title: "Add, subtract, multiply and divide money amounts: word problems" },
            { id: "P.2", title: "Price lists" },
            { id: "P.3", title: "Unit prices" },
            { id: "P.4", title: "Unit prices: find the total price" },
            { id: "P.5", title: "Percent of a number: VAT, discount and more" },
            { id: "P.6", title: "Find the percent: discount and mark-up" },
            { id: "P.7", title: "Sale prices: find the original price" },
            { id: "P.8", title: "Multi-step problems with percents" },
            { id: "P.9", title: "Estimate tips" },
            { id: "P.10", title: "Simple interest" },
            { id: "P.11", title: "Compound interest" }
          ]
        },
        {
          id: "Q", title: "Problem solving and estimation",
          skills: [
            { id: "Q.1", title: "Estimate to solve word problems" },
            { id: "Q.2", title: "Multi-step word problems" },
            { id: "Q.3", title: "Multi-step word problems: identify reasonable answers" },
            { id: "Q.4", title: "Guess-and-check word problems" },
            { id: "Q.5", title: "Use Venn diagrams to solve problems" }
          ]
        },
        {
          id: "R", title: "Units of measurement",
          skills: [
            { id: "R.1", title: "Estimate metric measurements" },
            { id: "R.2", title: "Compare and convert metric units" },
            { id: "R.3", title: "Multi-step problems with metric unit conversions" },
            { id: "R.4", title: "Metric mixed units" },
            { id: "R.5", title: "Convert between square metres and hectares" },
            { id: "R.6", title: "Convert square and cubic units of length" },
            { id: "R.7", title: "Convert between cubic metres and litres" },
            { id: "R.8", title: "Precision" },
            { id: "R.9", title: "Estimate imperial measurements" },
            { id: "R.10", title: "Convert and compare imperial units" },
            { id: "R.11", title: "Imperial mixed units" },
            { id: "R.12", title: "Convert between metric and imperial units" }
          ]
        },
        {
          id: "S", title: "Coordinate plane",
          skills: [
            { id: "S.1", title: "Coordinate plane review" },
            { id: "S.2", title: "Quadrants and axes" },
            { id: "S.3", title: "Follow directions on a coordinate plane" },
            { id: "S.4", title: "Distance between two points" }
          ]
        },
        {
          id: "T", title: "Number sequences",
          skills: [
            { id: "T.1", title: "Identify arithmetic and geometric sequences" },
            { id: "T.2", title: "Arithmetic sequences" },
            { id: "T.3", title: "Geometric sequences" },
            { id: "T.4", title: "Number sequences: mixed review" },
            { id: "T.5", title: "Number sequences: word problems" },
            { id: "T.6", title: "Evaluate variable expressions for arithmetic sequences" },
            { id: "T.7", title: "Evaluate variable expressions for geometric sequences" },
            { id: "T.8", title: "Write variable expressions for arithmetic sequences" }
          ]
        },
        {
          id: "U", title: "Expressions and properties",
          skills: [
            { id: "U.1", title: "Write variable expressions" },
            { id: "U.2", title: "Write variable expressions: word problems" },
            { id: "U.3", title: "Evaluate linear expressions" },
            { id: "U.4", title: "Evaluate multi-variable expressions" },
            { id: "U.5", title: "Evaluate nonlinear expressions" },
            { id: "U.6", title: "Identify terms and coefficients" },
            { id: "U.7", title: "Identify equivalent expressions using bar models" },
            { id: "U.8", title: "Properties of addition and multiplication" },
            { id: "U.9", title: "Add and subtract like terms" },
            { id: "U.10", title: "Multiply using the distributive property: area models" },
            { id: "U.11", title: "Multiply using the distributive property" },
            { id: "U.12", title: "Factorise linear expressions: area models" },
            { id: "U.13", title: "Factors of linear expressions" },
            { id: "U.14", title: "Sort factors of expressions" },
            { id: "U.15", title: "Write equivalent expressions using properties" },
            { id: "U.16", title: "Simplify linear expressions" },
            { id: "U.17", title: "Identify equivalent linear expressions" },
            { id: "U.18", title: "Identify equivalent linear expressions: word problems" }
          ]
        },
        {
          id: "V", title: "One-variable equations",
          skills: [
            { id: "V.1", title: "Which x satisfies an equation?" },
            { id: "V.2", title: "Write an equation from words" },
            { id: "V.3", title: "Model and solve equations using algebra tiles" },
            { id: "V.4", title: "Write and solve equations that represent diagrams" },
            { id: "V.5", title: "Solve equations using properties" },
            { id: "V.6", title: "Solve one-step equations" },
            { id: "V.7", title: "Solve two-step equations" },
            { id: "V.8", title: "Solve equations: complete the solution" },
            { id: "V.9", title: "Solve one- and two-step equations: word problems" },
            { id: "V.10", title: "Solve equations involving like terms" },
            { id: "V.11", title: "Solve equations with the distributive property" },
            { id: "V.12", title: "Solve multi-step equations: complete the solution" }
          ]
        },
        {
          id: "W", title: "One-variable inequalities",
          skills: [
            { id: "W.1", title: "Solutions to inequalities" },
            { id: "W.2", title: "Graph inequalities on number lines" },
            { id: "W.3", title: "Write inequalities from number lines" },
            { id: "W.4", title: "Write and graph inequalities: word problems" },
            { id: "W.5", title: "Solve one-step inequalities" },
            { id: "W.6", title: "Graph solutions to one-step inequalities" },
            { id: "W.7", title: "One-step inequalities: word problems" },
            { id: "W.8", title: "Solve two-step inequalities" },
            { id: "W.9", title: "Graph solutions to two-step inequalities" }
          ]
        },
        {
          id: "X", title: "Two-variable equations",
          skills: [
            { id: "X.1", title: "Does (x, y) satisfy the equation?" },
            { id: "X.2", title: "Identify independent and dependent variables" },
            { id: "X.3", title: "Solve word problems involving two-variable equations" },
            { id: "X.4", title: "Write a two-variable equation" },
            { id: "X.5", title: "Complete a table for a two-variable relationship" },
            { id: "X.6", title: "Complete a table and graph a two-variable equation" },
            { id: "X.7", title: "Identify the graph of an equation" },
            { id: "X.8", title: "Graph a two-variable equation" },
            { id: "X.9", title: "Interpret a graph: word problems" },
            { id: "X.10", title: "Write an equation from a graph using a table" }
          ]
        },
        {
          id: "Y", title: "Linear functions",
          skills: [
            { id: "Y.1", title: "Find the gradient from a graph" },
            { id: "Y.2", title: "Find the gradient from two points" },
            { id: "Y.3", title: "Find a missing coordinate using gradient" },
            { id: "Y.4", title: "Find the gradient and y-intercept of a linear equation" },
            { id: "Y.5", title: "Graph a line using gradient" },
            { id: "Y.6", title: "Graph an equation in y=mx+c form" },
            { id: "Y.7", title: "Write an equation in y=mx+c form from a graph" },
            { id: "Y.8", title: "Write an equation in y=mx+c form from a gradient and y-intercept" }
          ]
        },
        {
          id: "Z", title: "Two-dimensional figures",
          skills: [
            { id: "Z.1", title: "Identify and classify polygons" },
            { id: "Z.2", title: "Name, measure and classify angles" },
            { id: "Z.3", title: "Classify triangles" },
            { id: "Z.4", title: "Triangle inequality" },
            { id: "Z.5", title: "Classify quadrilaterals" },
            { id: "Z.6", title: "Graph triangles and quadrilaterals" },
            { id: "Z.7", title: "Find missing angles in triangles and quadrilaterals" },
            { id: "Z.8", title: "Exterior Angle Theorem" },
            { id: "Z.9", title: "Interior angles of polygons" },
            { id: "Z.10", title: "Lines, line segments and rays" },
            { id: "Z.11", title: "Parallel, perpendicular and intersecting lines" },
            { id: "Z.12", title: "Identify complementary, supplementary, vertical, adjacent and congruent angles" },
            { id: "Z.13", title: "Find measures of complementary, supplementary, vertical and adjacent angles" },
            { id: "Z.14", title: "Identify alternate interior and alternate exterior angles" },
            { id: "Z.15", title: "Transversals of parallel lines: name angle pairs" },
            { id: "Z.16", title: "Transversals of parallel lines: find angle measures" },
            { id: "Z.17", title: "Find lengths and measures of bisected line segments and angles" },
            { id: "Z.18", title: "Parts of a circle" }
          ]
        },
        {
          id: "AA", title: "Three-dimensional figures",
          skills: [
            { id: "AA.1", title: "Bases of three-dimensional figures" },
            { id: "AA.2", title: "Nets of three-dimensional figures" },
            { id: "AA.3", title: "Front, side and top view" },
            { id: "AA.4", title: "Base plans" }
          ]
        },
        {
          id: "BB", title: "Geometric measurement",
          skills: [
            { id: "BB.1", title: "Area of triangles" },
            { id: "BB.2", title: "Understanding area of a parallelogram" },
            { id: "BB.3", title: "Area of parallelograms" },
            { id: "BB.4", title: "Understanding area of a trapezium" },
            { id: "BB.5", title: "Area of trapeziums" },
            { id: "BB.6", title: "Area of rhombuses" },
            { id: "BB.7", title: "Area of triangles and quadrilaterals" },
            { id: "BB.8", title: "Area and perimeter of squares and rectangles: word problems" },
            { id: "BB.9", title: "Area of compound figures with triangles" },
            { id: "BB.10", title: "Circumference of circles" },
            { id: "BB.11", title: "Area of circles" },
            { id: "BB.12", title: "Circles: word problems" },
            { id: "BB.13", title: "Semicircles: calculate area, perimeter, radius and diameter" },
            { id: "BB.14", title: "Quarter circles: calculate area, perimeter and radius" },
            { id: "BB.15", title: "Area of compound figures with triangles, semicircles and quarter circles" },
            { id: "BB.16", title: "Area between two shapes" },
            { id: "BB.17", title: "Volume of cubes and cuboids" },
            { id: "BB.18", title: "Volume of compound figures" },
            { id: "BB.19", title: "Volume of triangular pyramids" },
            { id: "BB.20", title: "Volume of cylinders" },
            { id: "BB.21", title: "Surface area" },
            { id: "BB.22", title: "Scale drawings: word problems" },
            { id: "BB.23", title: "Scale drawings: scale factor word problems" }
          ]
        },
        {
          id: "CC", title: "Transformations",
          skills: [
            { id: "CC.1", title: "Symmetry" },
            { id: "CC.2", title: "Identify reflections, rotations and translations" },
            { id: "CC.3", title: "Translations: graph the image" },
            { id: "CC.4", title: "Translations: find the coordinates" },
            { id: "CC.5", title: "Translations: write the rule" },
            { id: "CC.6", title: "Reflections: graph the image" },
            { id: "CC.7", title: "Reflections: find the coordinates" },
            { id: "CC.8", title: "Rotations: graph the image" },
            { id: "CC.9", title: "Rotations: find the coordinates" },
            { id: "CC.10", title: "Reflections and rotations: write the rule" },
            { id: "CC.11", title: "Dilations: graph the image" },
            { id: "CC.12", title: "Dilations: find the coordinates" },
            { id: "CC.13", title: "Dilations: scale factor and classification" }
          ]
        },
        {
          id: "DD", title: "Congruence and similarity",
          skills: [
            { id: "DD.1", title: "Identify congruent figures" },
            { id: "DD.2", title: "Congruence statements and corresponding parts" },
            { id: "DD.3", title: "Side lengths and angle measures of congruent figures" },
            { id: "DD.4", title: "Identify similar figures" },
            { id: "DD.5", title: "Ratios in similar figures" },
            { id: "DD.6", title: "Similarity statements" },
            { id: "DD.7", title: "Side lengths and angle measures of similar figures" },
            { id: "DD.8", title: "Similar figures and indirect measurement" }
          ]
        },
        {
          id: "EE", title: "Pythagoras' theorem",
          skills: [
            { id: "EE.1", title: "Pythagoras' theorem: find the length of the hypotenuse" },
            { id: "EE.2", title: "Pythagoras' theorem: find the missing leg length" },
            { id: "EE.3", title: "Pythagoras' theorem: find the missing leg or hypotenuse length" },
            { id: "EE.4", title: "Pythagoras' theorem: find the perimeter" },
            { id: "EE.5", title: "Pythagoras' theorem: word problems" },
            { id: "EE.6", title: "Converse of Pythagoras' theorem: is it a right triangle?" }
          ]
        },
        {
          id: "FF", title: "Constructions",
          skills: [
            { id: "FF.1", title: "Construct the midpoint or perpendicular bisector of a segment" },
            { id: "FF.2", title: "Construct an angle bisector" },
            { id: "FF.3", title: "Construct a perpendicular line" },
            { id: "FF.4", title: "Construct an equilateral triangle or regular hexagon" }
          ]
        },
        {
          id: "GG", title: "Data and graphs",
          skills: [
            { id: "GG.1", title: "Interpret tables" },
            { id: "GG.2", title: "Interpret line plots" },
            { id: "GG.3", title: "Create line plots" },
            { id: "GG.4", title: "Interpret stem-and-leaf plots" },
            { id: "GG.5", title: "Create stem-and-leaf plots" },
            { id: "GG.6", title: "Interpret bar graphs for categorical data" },
            { id: "GG.7", title: "Create bar graphs for categorical data" },
            { id: "GG.8", title: "Interpret bar graphs for grouped data" },
            { id: "GG.9", title: "Create bar graphs for grouped data" },
            { id: "GG.10", title: "Create frequency tables" },
            { id: "GG.11", title: "Interpret pie charts" },
            { id: "GG.12", title: "Pie charts and central angles" },
            { id: "GG.13", title: "Interpret line graphs" },
            { id: "GG.14", title: "Create line graphs" },
            { id: "GG.15", title: "Choose the best type of graph" }
          ]
        },
        {
          id: "HH", title: "Statistics",
          skills: [
            { id: "HH.1", title: "Calculate mean, median, mode and range" },
            { id: "HH.2", title: "Interpret charts to find mean, median, mode and range" },
            { id: "HH.3", title: "Mean, median, mode and range: find the missing number" },
            { id: "HH.4", title: "Changes in mean, median, mode and range" },
            { id: "HH.5", title: "Identify an outlier" },
            { id: "HH.6", title: "Identify an outlier and describe the effect of removing it" },
            { id: "HH.7", title: "Describe distributions in line plots" },
            { id: "HH.8", title: "Populations and samples" },
            { id: "HH.9", title: "Identify representative, random and biased samples" },
            { id: "HH.10", title: "Create scatter plots" },
            { id: "HH.11", title: "Identify trends with scatter plots" },
            { id: "HH.12", title: "Make predictions with scatter plots" },
            { id: "HH.13", title: "Outliers in scatter plots" }
          ]
        },
        {
          id: "II", title: "Probability",
          skills: [
            { id: "II.1", title: "Probability of simple events" },
            { id: "II.2", title: "Probability of simple events and opposite events" },
            { id: "II.3", title: "Probability of mutually exclusive events and overlapping events" },
            { id: "II.4", title: "Experimental probability" },
            { id: "II.5", title: "Use collected data to find probabilities and make predictions" },
            { id: "II.6", title: "Make predictions using theoretical probability" },
            { id: "II.7", title: "Make predictions using experimental probability" },
            { id: "II.8", title: "Sample spaces for compound events" },
            { id: "II.9", title: "Compound events: find the number of outcomes" },
            { id: "II.10", title: "Probability of compound events" },
            { id: "II.11", title: "Find the number of outcomes: word problems" }
          ]
        }
      ],
    },
  },
  // ==============================================================
  // GRADE 9 MATH
  // ==============================================================
  "9": {
    math: {
      title: "Year 9 Math (Algebra 1)",
      description: "Algebra, linear equations, inequalities, functions, and geometric reasoning.",
      stats: { skills: 600, videos: 450, games: 120 },
      topics: [
        {
          id: "A", title: "Number theory",
          skills: [
            { id: "A.1", title: "Prime or composite" },
            { id: "A.2", title: "Prime factorisation" },
            { id: "A.3", title: "Highest common factor" },
            { id: "A.4", title: "Lowest common multiple" },
            { id: "A.5", title: "HCF and LCM: word problems" },
            { id: "A.6", title: "Classify numbers" }
          ]
        },
        {
          id: "B", title: "Integers",
          skills: [
            { id: "B.1", title: "Integers on number lines" },
            { id: "B.2", title: "Graph integers on horizontal and vertical number lines" },
            { id: "B.3", title: "Compare and order integers" }
          ]
        },
        {
          id: "C", title: "Operations with integers",
          skills: [
            { id: "C.1", title: "Add and subtract integers using number lines" },
            { id: "C.2", title: "Add and subtract integers using counters" },
            { id: "C.3", title: "Integer addition and subtraction rules" },
            { id: "C.4", title: "Add and subtract integers" },
            { id: "C.5", title: "Complete addition and subtraction sentences with integers" },
            { id: "C.6", title: "Add and subtract integers: word problems" },
            { id: "C.7", title: "Add and subtract three or more integers" },
            { id: "C.8", title: "Understand multiplying by a negative integer using a number line" },
            { id: "C.9", title: "Integer multiplication and division rules" },
            { id: "C.10", title: "Multiply and divide integers" },
            { id: "C.11", title: "Complete multiplication and division sentences with integers" },
            { id: "C.12", title: "Evaluate numerical expressions involving integers" }
          ]
        },
        {
          id: "D", title: "Rational numbers",
          skills: [
            { id: "D.1", title: "Identify rational and irrational numbers" },
            { id: "D.2", title: "Convert between decimals and fractions or mixed numbers" },
            { id: "D.3", title: "Rational numbers on number lines" },
            { id: "D.4", title: "Compare and order rational numbers using number lines" },
            { id: "D.5", title: "Compare rational numbers" },
            { id: "D.6", title: "Put rational numbers in order" },
            { id: "D.7", title: "Compare and order rational numbers: word problems" }
          ]
        },
        {
          id: "E", title: "Operations with rational numbers",
          skills: [
            { id: "E.1", title: "Add and subtract positive and negative decimals" },
            { id: "E.2", title: "Add and subtract positive and negative fractions" },
            { id: "E.3", title: "Add and subtract rational numbers" },
            { id: "E.4", title: "Add and subtract positive rational numbers: word problems" },
            { id: "E.5", title: "Apply addition and subtraction rules" },
            { id: "E.6", title: "Multiply and divide positive and negative decimals" },
            { id: "E.7", title: "Multiply and divide positive and negative fractions" },
            { id: "E.8", title: "Multiply and divide rational numbers" },
            { id: "E.9", title: "Multiply and divide positive rational numbers: word problems" },
            { id: "E.10", title: "Apply multiplication and division rules" },
            { id: "E.11", title: "Apply addition, subtraction, multiplication and division rules" },
            { id: "E.12", title: "Add, subtract, multiply and divide rational numbers" },
            { id: "E.13", title: "Evaluate numerical expressions involving rational numbers" }
          ]
        },
        {
          id: "F", title: "Indices and roots",
          skills: [
            { id: "F.1", title: "Understanding indices" },
            { id: "F.2", title: "Evaluate indices" },
            { id: "F.3", title: "Solve equations with variable indices" },
            { id: "F.4", title: "Powers of ten" },
            { id: "F.5", title: "Indices with negative bases" },
            { id: "F.6", title: "Indices with decimal and fractional bases" },
            { id: "F.7", title: "Understanding negative indices" },
            { id: "F.8", title: "Evaluate negative indices" },
            { id: "F.9", title: "Multiplication with indices" },
            { id: "F.10", title: "Division with indices" },
            { id: "F.11", title: "Multiplication and division with indices" },
            { id: "F.12", title: "Power rule" },
            { id: "F.13", title: "Evaluate expressions using properties of indices" },
            { id: "F.14", title: "Identify equivalent expressions involving indices I" },
            { id: "F.15", title: "Identify equivalent expressions involving indices II" },
            { id: "F.16", title: "Square roots of perfect squares" },
            { id: "F.17", title: "Positive and negative square roots" },
            { id: "F.18", title: "Estimate positive and negative square roots" },
            { id: "F.19", title: "Relationship between squares and square roots" },
            { id: "F.20", title: "Solve equations involving squares and square roots" },
            { id: "F.21", title: "Cube roots of perfect cubes" },
            { id: "F.22", title: "Estimate cube roots" }
          ]
        },
        {
          id: "G", title: "Standard form",
          skills: [
            { id: "G.1", title: "Convert between ordinary numbers and standard form" },
            { id: "G.2", title: "Standard form on calculators" },
            { id: "G.3", title: "Compare numbers written in standard form" }
          ]
        },
        {
          id: "H", title: "Ratios, rates and proportions",
          skills: [
            { id: "H.1", title: "Identify equivalent ratios" },
            { id: "H.2", title: "Write an equivalent ratio" },
            { id: "H.3", title: "Equivalent ratios: word problems" },
            { id: "H.4", title: "Compare ratios: word problems" },
            { id: "H.5", title: "Unit rates" },
            { id: "H.6", title: "Equivalent rates" },
            { id: "H.7", title: "Compare rates: word problems" },
            { id: "H.8", title: "Ratios and rates: word problems" },
            { id: "H.9", title: "Scale drawings: word problems" },
            { id: "H.10", title: "Scale drawings: scale factor word problems" },
            { id: "H.11", title: "Do the ratios form a proportion?" },
            { id: "H.12", title: "Do the ratios form a proportion: word problems" },
            { id: "H.13", title: "Solve proportions" },
            { id: "H.14", title: "Solve proportions: word problems" }
          ]
        },
        {
          id: "I", title: "Direct and inverse proportions",
          skills: [
            { id: "I.1", title: "Find the constant of proportionality from a table" },
            { id: "I.2", title: "Write equations for proportional relationships from tables" },
            { id: "I.3", title: "Identify proportional relationships by graphing" },
            { id: "I.4", title: "Find the constant of proportionality from a graph" },
            { id: "I.5", title: "Write equations for proportional relationships from graphs" },
            { id: "I.6", title: "Identify proportional relationships from graphs and equations" },
            { id: "I.7", title: "Identify proportional relationships from tables" },
            { id: "I.8", title: "Complete a table and graph a proportional relationship" },
            { id: "I.9", title: "Graph proportional relationships" },
            { id: "I.10", title: "Interpret graphs of proportional relationships" },
            { id: "I.11", title: "Write and solve equations for proportional relationships" },
            { id: "I.12", title: "Identify direct variation and inverse variation" },
            { id: "I.13", title: "Write inverse variation equations" },
            { id: "I.14", title: "Write and solve inverse variation equations" }
          ]
        },
        {
          id: "J", title: "Percents",
          skills: [
            { id: "J.1", title: "Convert between percents, fractions and decimals" },
            { id: "J.2", title: "Convert between percents, fractions and decimals: word problems" },
            { id: "J.3", title: "Compare percents to fractions and decimals" },
            { id: "J.4", title: "Estimate percents of numbers" },
            { id: "J.5", title: "Percents of numbers and money amounts" },
            { id: "J.6", title: "Percents of numbers: word problems" },
            { id: "J.7", title: "Compare percents of numbers" },
            { id: "J.8", title: "Find what percent one number is of another" },
            { id: "J.9", title: "Find what percent one number is of another: word problems" },
            { id: "J.10", title: "Find the total given a part and a percent" },
            { id: "J.11", title: "Solve percent equations" },
            { id: "J.12", title: "Solve percent equations: word problems" },
            { id: "J.13", title: "Percent of change" },
            { id: "J.14", title: "Percent of change: word problems" },
            { id: "J.15", title: "Percent of change: find the original amount word problems" }
          ]
        },
        {
          id: "K", title: "Consumer maths",
          skills: [
            { id: "K.1", title: "Price lists" },
            { id: "K.2", title: "Unit prices" },
            { id: "K.3", title: "Unit prices: find the total price" },
            { id: "K.4", title: "Percent of a number: VAT, discount and more" },
            { id: "K.5", title: "Find the percent: discount and mark-up" },
            { id: "K.6", title: "Sale prices: find the original price" },
            { id: "K.7", title: "Multi-step problems with percents" },
            { id: "K.8", title: "Estimate tips" },
            { id: "K.9", title: "Simple interest" },
            { id: "K.10", title: "Compound interest" }
          ]
        },
        {
          id: "L", title: "Units of measurement",
          skills: [
            { id: "L.1", title: "Convert rates and measurements: metric units" },
            { id: "L.2", title: "Multi-step problems with metric unit conversions" },
            { id: "L.3", title: "Metric mixed units" },
            { id: "L.4", title: "Convert between square metres and hectares" },
            { id: "L.5", title: "Convert square and cubic units of length" },
            { id: "L.6", title: "Convert between cubic metres and litres" },
            { id: "L.7", title: "Convert rates and measurements: imperial units" },
            { id: "L.8", title: "Imperial mixed units" },
            { id: "L.9", title: "Convert between metric and imperial units" },
            { id: "L.10", title: "Precision" },
            { id: "L.11", title: "Greatest possible error" },
            { id: "L.12", title: "Minimum and maximum area and volume" },
            { id: "L.13", title: "Percent error" },
            { id: "L.14", title: "Percent error: area and volume" }
          ]
        },
        {
          id: "M", title: "Problem solving",
          skills: [
            { id: "M.1", title: "Multi-step word problems" },
            { id: "M.2", title: "Multi-step word problems: identify reasonable answers" },
            { id: "M.3", title: "Guess-and-check word problems" },
            { id: "M.4", title: "Use Venn diagrams to solve problems" }
          ]
        },
        {
          id: "N", title: "Coordinate plane",
          skills: [
            { id: "N.1", title: "Coordinate plane review" },
            { id: "N.2", title: "Quadrants and axes" },
            { id: "N.3", title: "Follow directions on a coordinate plane" },
            { id: "N.4", title: "Find the distance between two points" }
          ]
        },
        {
          id: "O", title: "Number sequences",
          skills: [
            { id: "O.1", title: "Identify arithmetic and geometric sequences" },
            { id: "O.2", title: "Arithmetic sequences" },
            { id: "O.3", title: "Geometric sequences" },
            { id: "O.4", title: "Number sequences: mixed review" },
            { id: "O.5", title: "Number sequences: word problems" },
            { id: "O.6", title: "Evaluate variable expressions for arithmetic sequences" },
            { id: "O.7", title: "Evaluate variable expressions for geometric sequences" },
            { id: "O.8", title: "Write variable expressions for arithmetic sequences" }
          ]
        },
        {
          id: "P", title: "Expressions and properties",
          skills: [
            { id: "P.1", title: "Write variable expressions" },
            { id: "P.2", title: "Write variable expressions from diagrams" },
            { id: "P.3", title: "Evaluate one-variable expressions" },
            { id: "P.4", title: "Evaluate multi-variable expressions" },
            { id: "P.5", title: "Evaluate radical expressions" },
            { id: "P.6", title: "Evaluate rational expressions" },
            { id: "P.7", title: "Identify terms and coefficients" },
            { id: "P.8", title: "Properties of addition and multiplication" },
            { id: "P.9", title: "Add and subtract like terms" },
            { id: "P.10", title: "Multiply using the distributive property: area models" },
            { id: "P.11", title: "Multiply using the distributive property" },
            { id: "P.12", title: "Factors of linear expressions" },
            { id: "P.13", title: "Sort factors of expressions" },
            { id: "P.14", title: "Write equivalent expressions using properties" },
            { id: "P.15", title: "Simplify linear expressions" },
            { id: "P.16", title: "Identify equivalent linear expressions" },
            { id: "P.17", title: "Identify equivalent linear expressions: word problems" }
          ]
        },
        {
          id: "Q", title: "One-variable equations",
          skills: [
            { id: "Q.1", title: "Which x satisfies an equation?" },
            { id: "Q.2", title: "Write an equation from words" },
            { id: "Q.3", title: "Model and solve equations using algebra tiles" },
            { id: "Q.4", title: "Write and solve equations that represent diagrams" },
            { id: "Q.5", title: "Properties of equality" },
            { id: "Q.6", title: "Solve two-step equations" },
            { id: "Q.7", title: "Solve two-step equations: word problems" },
            { id: "Q.8", title: "Solve multi-step equations" },
            { id: "Q.9", title: "Solve multi-step equations with fractional coefficients" },
            { id: "Q.10", title: "Solve equations involving like terms" },
            { id: "Q.11", title: "Solve equations with variables on both sides" },
            { id: "Q.12", title: "Solve equations: mixed review" },
            { id: "Q.13", title: "Solve equations: complete the solution" },
            { id: "Q.14", title: "Rearrange multi-variable equations" }
          ]
        },
        {
          id: "R", title: "One-variable inequalities",
          skills: [
            { id: "R.1", title: "Solutions to inequalities" },
            { id: "R.2", title: "Graph inequalities on number lines" },
            { id: "R.3", title: "Write inequalities from number lines" },
            { id: "R.4", title: "Write and graph inequalities: word problems" },
            { id: "R.5", title: "Solve one-step inequalities" },
            { id: "R.6", title: "Graph solutions to one-step inequalities" },
            { id: "R.7", title: "One-step inequalities: word problems" },
            { id: "R.8", title: "Solve two-step linear inequalities" },
            { id: "R.9", title: "Graph solutions to two-step inequalities" },
            { id: "R.10", title: "Solve multi-step inequalities" },
            { id: "R.11", title: "Graph solutions to multi-step inequalities" }
          ]
        },
        {
          id: "S", title: "Functions",
          skills: [
            { id: "S.1", title: "Identify functions" },
            { id: "S.2", title: "Identify independent and dependent variables" },
            { id: "S.3", title: "Evaluate a linear function: word problems" },
            { id: "S.4", title: "Rate of change" },
            { id: "S.5", title: "Constant rate of change" },
            { id: "S.6", title: "Identify linear and nonlinear functions" },
            { id: "S.7", title: "Find values using function graphs" },
            { id: "S.8", title: "Complete a table for a function graph" }
          ]
        },
        {
          id: "T", title: "Linear functions",
          skills: [
            { id: "T.1", title: "Does (x, y) satisfy the linear equation?" },
            { id: "T.2", title: "Complete a table for a linear equation" },
            { id: "T.3", title: "Complete a table and graph a linear equation" },
            { id: "T.4", title: "Interpret points on the graph of a line: word problems" },
            { id: "T.5", title: "Find the gradient of a graph" },
            { id: "T.6", title: "Find the gradient from two points" },
            { id: "T.7", title: "Find a missing coordinate using gradient" },
            { id: "T.8", title: "Find the gradient and y-intercept of a linear equation" },
            { id: "T.9", title: "Graph a line using gradient" },
            { id: "T.10", title: "Graph an equation in y=mx+c form" },
            { id: "T.11", title: "Write an equation in y=mx+c form from a gradient and y-intercept" },
            { id: "T.12", title: "Write an equation in y=mx+c form from a graph" },
            { id: "T.13", title: "Write an equation in y=mx+c form from a gradient and a point" },
            { id: "T.14", title: "Write an equation in y=mx+c form from two points" },
            { id: "T.15", title: "Write a linear equation from a table" },
            { id: "T.16", title: "Write a linear equation: word problems" },
            { id: "T.17", title: "Compare linear functions: graphs, tables and equations" },
            { id: "T.18", title: "Equations of horizontal and vertical lines" },
            { id: "T.19", title: "Graph a horizontal or vertical line" },
            { id: "T.20", title: "Linear equations: solve for y" }
          ]
        },
        {
          id: "U", title: "Monomials and polynomials",
          skills: [
            { id: "U.1", title: "Identify monomials" },
            { id: "U.2", title: "Model polynomials with algebra tiles" },
            { id: "U.3", title: "Add and subtract polynomials using algebra tiles" },
            { id: "U.4", title: "Add and subtract polynomials" },
            { id: "U.5", title: "Add polynomials to find perimeter" },
            { id: "U.6", title: "Multiply monomials" },
            { id: "U.7", title: "Divide monomials" },
            { id: "U.8", title: "Multiply and divide monomials" },
            { id: "U.9", title: "Powers of monomials" },
            { id: "U.10", title: "Square and cube roots of monomials" },
            { id: "U.11", title: "Multiply a polynomial by a monomial" },
            { id: "U.12", title: "Multiply polynomials using algebra tiles" },
            { id: "U.13", title: "Multiply two binomials" },
            { id: "U.14", title: "Multiply two binomials: special cases" },
            { id: "U.15", title: "Multiply polynomials" },
            { id: "U.16", title: "Multiply polynomials to find area" }
          ]
        },
        {
          id: "V", title: "Quadratic functions",
          skills: [
            { id: "V.1", title: "Does (x, y) satisfy the quadratic equation?" },
            { id: "V.2", title: "Characteristics of quadratic functions: graphs" },
            { id: "V.3", title: "Characteristics of quadratic functions: equations" },
            { id: "V.4", title: "Complete a function table: quadratic functions" },
            { id: "V.5", title: "Match quadratic functions and graphs" }
          ]
        },
        {
          id: "W", title: "Two-dimensional figures",
          skills: [
            { id: "W.1", title: "Triangle inequality" },
            { id: "W.2", title: "Find missing angles in triangles and quadrilaterals" },
            { id: "W.3", title: "Exterior Angle Theorem" },
            { id: "W.4", title: "Interior angles of polygons" },
            { id: "W.5", title: "Identify complementary, supplementary, vertical, adjacent and congruent angles" },
            { id: "W.6", title: "Find measures of complementary, supplementary, vertical and adjacent angles" },
            { id: "W.7", title: "Identify alternate interior and alternate exterior angles" },
            { id: "W.8", title: "Transversals of parallel lines: name angle pairs" },
            { id: "W.9", title: "Transversals of parallel lines: find angle measures" },
            { id: "W.10", title: "Find lengths and measures of bisected line segments and angles" },
            { id: "W.11", title: "Parts of a circle" }
          ]
        },
        {
          id: "X", title: "Three-dimensional figures",
          skills: [
            { id: "X.1", title: "Parts of three-dimensional figures" },
            { id: "X.2", title: "Nets of three-dimensional figures" },
            { id: "X.3", title: "Front, side and top view" },
            { id: "X.4", title: "Base plans" }
          ]
        },
        {
          id: "Y", title: "Geometric measurement",
          skills: [
            { id: "Y.1", title: "Area of triangles and quadrilaterals" },
            { id: "Y.2", title: "Area and perimeter of squares and rectangles: word problems" },
            { id: "Y.3", title: "Area of compound figures with triangles" },
            { id: "Y.4", title: "Circumference of circles" },
            { id: "Y.5", title: "Area of circles" },
            { id: "Y.6", title: "Circles: word problems" },
            { id: "Y.7", title: "Semicircles: calculate area, perimeter, radius and diameter" },
            { id: "Y.8", title: "Quarter circles: calculate area, perimeter and radius" },
            { id: "Y.9", title: "Area of compound figures with triangles, semicircles and quarter circles" },
            { id: "Y.10", title: "Area between two shapes" },
            { id: "Y.11", title: "Volume of prisms and cylinders" },
            { id: "Y.12", title: "Volume of compound figures" },
            { id: "Y.13", title: "Surface area of prisms and cylinders" }
          ]
        },
        {
          id: "Z", title: "Transformations",
          skills: [
            { id: "Z.1", title: "Identify reflections, rotations and translations" },
            { id: "Z.2", title: "Translations: graph the image" },
            { id: "Z.3", title: "Translations: find the coordinates" },
            { id: "Z.4", title: "Translations: write the rule" },
            { id: "Z.5", title: "Reflections: graph the image" },
            { id: "Z.6", title: "Reflections: find the coordinates" },
            { id: "Z.7", title: "Rotations: graph the image" },
            { id: "Z.8", title: "Rotations: find the coordinates" },
            { id: "Z.9", title: "Reflections and rotations: write the rule" },
            { id: "Z.10", title: "Reflections, rotations and translations: graph the image" },
            { id: "Z.11", title: "Reflections, rotations and translations: find the coordinates" },
            { id: "Z.12", title: "Dilations: graph the image" },
            { id: "Z.13", title: "Dilations: find the coordinates" },
            { id: "Z.14", title: "Dilations: scale factor and classification" }
          ]
        },
        {
          id: "AA", title: "Congruence and similarity",
          skills: [
            { id: "AA.1", title: "Identify congruent figures" },
            { id: "AA.2", title: "Congruence statements and corresponding parts" },
            { id: "AA.3", title: "Side lengths and angle measures of congruent figures" },
            { id: "AA.4", title: "Congruent triangles: SSS, SAS and ASA" },
            { id: "AA.5", title: "Identify similar figures" },
            { id: "AA.6", title: "Ratios in similar figures" },
            { id: "AA.7", title: "Similarity statements" },
            { id: "AA.8", title: "Side lengths and angle measures of similar figures" },
            { id: "AA.9", title: "Similar figures and indirect measurement" }
          ]
        },
        {
          id: "BB", title: "Triangles and trigonometry",
          skills: [
            { id: "BB.1", title: "Pythagoras' theorem: find the length of the hypotenuse" },
            { id: "BB.2", title: "Pythagoras' theorem: find the missing leg length" },
            { id: "BB.3", title: "Pythagoras' theorem: find the missing leg or hypotenuse length" },
            { id: "BB.4", title: "Pythagoras' theorem: find the perimeter" },
            { id: "BB.5", title: "Pythagoras' theorem: word problems" },
            { id: "BB.6", title: "Converse of Pythagoras' theorem: is it a right triangle?" },
            { id: "BB.7", title: "Trigonometric ratios: sin, cos and tan" },
            { id: "BB.8", title: "Find trigonometric functions of special angles: sin, cos and tan" },
            { id: "BB.9", title: "Find trigonometric functions using a calculator" }
          ]
        },
        {
          id: "CC", title: "Constructions",
          skills: [
            { id: "CC.1", title: "Construct the midpoint or perpendicular bisector of a segment" },
            { id: "CC.2", title: "Construct an angle bisector" },
            { id: "CC.3", title: "Construct a perpendicular line" },
            { id: "CC.4", title: "Construct parallel lines" },
            { id: "CC.5", title: "Construct an equilateral triangle or regular hexagon" }
          ]
        },
        {
          id: "DD", title: "Data and graphs",
          skills: [
            { id: "DD.1", title: "Interpret tables" },
            { id: "DD.2", title: "Interpret bar graphs for categorical data" },
            { id: "DD.3", title: "Create bar graphs for categorical data" },
            { id: "DD.4", title: "Interpret line graphs" },
            { id: "DD.5", title: "Create line graphs" },
            { id: "DD.6", title: "Interpret line plots" },
            { id: "DD.7", title: "Create line plots" },
            { id: "DD.8", title: "Interpret stem-and-leaf plots" },
            { id: "DD.9", title: "Create stem-and-leaf plots" },
            { id: "DD.10", title: "Interpret bar graphs for grouped data" },
            { id: "DD.11", title: "Create bar graphs for grouped data" },
            { id: "DD.12", title: "Create frequency tables" },
            { id: "DD.13", title: "Interpret pie charts" },
            { id: "DD.14", title: "Pie charts and central angles" },
            { id: "DD.15", title: "Choose the best type of graph" }
          ]
        },
        {
          id: "EE", title: "Statistics",
          skills: [
            { id: "EE.1", title: "Calculate mean, median, mode and range" },
            { id: "EE.2", title: "Interpret charts to find mean, median, mode and range" },
            { id: "EE.3", title: "Mean, median, mode and range: find the missing number" },
            { id: "EE.4", title: "Changes in mean, median, mode and range" },
            { id: "EE.5", title: "Identify an outlier" },
            { id: "EE.6", title: "Identify an outlier and describe the effect of removing it" },
            { id: "EE.7", title: "Describe distributions in line plots" },
            { id: "EE.8", title: "Identify representative, random and biased samples" },
            { id: "EE.9", title: "Create scatter plots" },
            { id: "EE.10", title: "Identify trends with scatter plots" },
            { id: "EE.11", title: "Make predictions with scatter plots" },
            { id: "EE.12", title: "Outliers in scatter plots" }
          ]
        },
        {
          id: "FF", title: "Probability",
          skills: [
            { id: "FF.1", title: "Probability of simple events" },
            { id: "FF.2", title: "Probability of simple events and opposite events" },
            { id: "FF.3", title: "Probability of mutually exclusive events and overlapping events" },
            { id: "FF.4", title: "Experimental probability" },
            { id: "FF.5", title: "Make predictions using theoretical probability" },
            { id: "FF.6", title: "Make predictions using experimental probability" },
            { id: "FF.7", title: "Compound events: find the number of outcomes" },
            { id: "FF.8", title: "Probability of compound events" },
            { id: "FF.9", title: "Find the number of outcomes: word problems" },
            { id: "FF.10", title: "Find probabilities using two-way frequency tables" }
          ]
        }
      ],
    },
  },

  // === GRADE 10 (Geometry) ===
  // ==============================================================
  // GRADE 10 MATH
  // ==============================================================
  "10": {
    math: {
      title: "Year 10 Math (Geometry)",
      description: "Geometry, proofs, similarity, trigonometry, coordinate geometry, and quadratic equations.",
      stats: { skills: 600, videos: 450, games: 120 },
      topics: [
        {
          id: "A", title: "Numbers",
          skills: [
            { id: "A.1", title: "Prime or composite" },
            { id: "A.2", title: "Prime factorisation" },
            { id: "A.3", title: "Highest common factor" },
            { id: "A.4", title: "Lowest common multiple" },
            { id: "A.5", title: "HCF and LCM: word problems" },
            { id: "A.6", title: "Compare and order rational numbers" },
            { id: "A.7", title: "Number lines" },
            { id: "A.8", title: "Write a recurring decimal as a fraction" },
            { id: "A.9", title: "Convert between decimals and fractions" },
            { id: "A.10", title: "Square roots" },
            { id: "A.11", title: "Estimate square roots" },
            { id: "A.12", title: "Cube roots" },
            { id: "A.13", title: "Estimate cube roots" },
            { id: "A.14", title: "Classify numbers" }
          ]
        },
        {
          id: "B", title: "Operations",
          skills: [
            { id: "B.1", title: "Add, subtract, multiply and divide integers" },
            { id: "B.2", title: "Evaluate numerical expressions involving integers" },
            { id: "B.3", title: "Evaluate variable expressions involving integers" },
            { id: "B.4", title: "Add and subtract rational numbers" },
            { id: "B.5", title: "Multiply and divide rational numbers" },
            { id: "B.6", title: "Evaluate numerical expressions involving rational numbers" },
            { id: "B.7", title: "Evaluate variable expressions involving rational numbers" }
          ]
        },
        {
          id: "C", title: "Ratios, rates and proportions",
          skills: [
            { id: "C.1", title: "Identify equivalent ratios" },
            { id: "C.2", title: "Write an equivalent ratio" },
            { id: "C.3", title: "Unit rates" },
            { id: "C.4", title: "Unit rates with fractions" },
            { id: "C.5", title: "Unit prices" },
            { id: "C.6", title: "Solve proportions" },
            { id: "C.7", title: "Solve proportions: word problems" },
            { id: "C.8", title: "Estimate population size using proportions" },
            { id: "C.9", title: "Scale drawings: word problems" }
          ]
        },
        {
          id: "D", title: "Percents",
          skills: [
            { id: "D.1", title: "Convert between percents, fractions and decimals" },
            { id: "D.2", title: "Solve percent equations" },
            { id: "D.3", title: "Percent word problems" },
            { id: "D.4", title: "Percent of change" },
            { id: "D.5", title: "Percent of change: word problems" },
            { id: "D.6", title: "Percent of a number: VAT, discount and more" },
            { id: "D.7", title: "Find the percent: discount and mark-up" },
            { id: "D.8", title: "Multi-step problems with percents" }
          ]
        },
        {
          id: "E", title: "Expressions and properties",
          skills: [
            { id: "E.1", title: "Write variable expressions" },
            { id: "E.2", title: "Properties of addition and multiplication" },
            { id: "E.3", title: "Distributive property" },
            { id: "E.4", title: "Simplify variable expressions using properties" },
            { id: "E.5", title: "Write equivalent expressions using properties" },
            { id: "E.6", title: "Simplify variable expressions involving like terms and the distributive property" },
            { id: "E.7", title: "Identify equivalent linear expressions" }
          ]
        },
        {
          id: "F", title: "Solve equations",
          skills: [
            { id: "F.1", title: "Write variable equations" },
            { id: "F.2", title: "Identify expressions and equations" },
            { id: "F.3", title: "Properties of equality" },
            { id: "F.4", title: "Identify equivalent equations" },
            { id: "F.5", title: "Does x satisfy the equation?" },
            { id: "F.6", title: "Solve equations using order of operations" },
            { id: "F.7", title: "Model and solve equations using algebra tiles" },
            { id: "F.8", title: "Write and solve equations that represent diagrams" },
            { id: "F.9", title: "Solve one-step linear equations" },
            { id: "F.10", title: "Solve two-step linear equations" },
            { id: "F.11", title: "Solve advanced linear equations" },
            { id: "F.12", title: "Solve equations with variables on both sides" },
            { id: "F.13", title: "Solve equations: complete the solution" },
            { id: "F.14", title: "Find the number of solutions" },
            { id: "F.15", title: "Create equations with no solutions or infinitely many solutions" },
            { id: "F.16", title: "Solve linear equations: word problems" },
            { id: "F.17", title: "Solve linear equations: mixed review" },
            { id: "F.18", title: "Rearrange multi-variable equations" }
          ]
        },
        {
          id: "G", title: "Problem solving",
          skills: [
            { id: "G.1", title: "Word problems: mixed review" },
            { id: "G.2", title: "Word problems with money" },
            { id: "G.3", title: "Consecutive integer problems" },
            { id: "G.4", title: "Rate of travel: word problems" },
            { id: "G.5", title: "Weighted averages: word problems" }
          ]
        },
        {
          id: "H", title: "Single-variable inequalities",
          skills: [
            { id: "H.1", title: "Graph inequalities" },
            { id: "H.2", title: "Write inequalities from graphs" },
            { id: "H.3", title: "Identify solutions to inequalities" },
            { id: "H.4", title: "Solve one-step linear inequalities: addition and subtraction" },
            { id: "H.5", title: "Solve one-step linear inequalities: multiplication and division" },
            { id: "H.6", title: "Solve one-step linear inequalities" },
            { id: "H.7", title: "Graph solutions to one-step linear inequalities" },
            { id: "H.8", title: "Solve two-step linear inequalities" },
            { id: "H.9", title: "Graph solutions to two-step linear inequalities" },
            { id: "H.10", title: "Solve advanced linear inequalities" },
            { id: "H.11", title: "Graph solutions to advanced linear inequalities" },
            { id: "H.12", title: "Graph compound inequalities" },
            { id: "H.13", title: "Write compound inequalities from graphs" },
            { id: "H.14", title: "Solve compound inequalities" },
            { id: "H.15", title: "Graph solutions to compound inequalities" }
          ]
        },
        {
          id: "I", title: "Relations and functions",
          skills: [
            { id: "I.1", title: "Relations: convert between tables, graphs, mappings and lists of points" },
            { id: "I.2", title: "Domain and range of relations" },
            { id: "I.3", title: "Identify independent and dependent variables" },
            { id: "I.4", title: "Identify functions" },
            { id: "I.5", title: "Identify functions: vertical line test" },
            { id: "I.6", title: "Identify types of functions from graphs" },
            { id: "I.7", title: "Find values using function graphs" },
            { id: "I.8", title: "Evaluate a function" },
            { id: "I.9", title: "Evaluate a function: plug in an expression" },
            { id: "I.10", title: "Complete a function table from a graph" },
            { id: "I.11", title: "Complete a function table from an equation" },
            { id: "I.12", title: "Find solutions using a table" },
            { id: "I.13", title: "Approximate solutions using a table" },
            { id: "I.14", title: "Interpret functions using everyday language" }
          ]
        },
        {
          id: "J", title: "Direct and inverse variation",
          skills: [
            { id: "J.1", title: "Identify proportional relationships" },
            { id: "J.2", title: "Find the constant of variation" },
            { id: "J.3", title: "Graph a proportional relationship" },
            { id: "J.4", title: "Write direct variation equations" },
            { id: "J.5", title: "Write and solve direct variation equations" },
            { id: "J.6", title: "Identify direct variation and inverse variation" },
            { id: "J.7", title: "Write inverse variation equations" },
            { id: "J.8", title: "Write and solve inverse variation equations" }
          ]
        },
        {
          id: "K", title: "Linear functions",
          skills: [
            { id: "K.1", title: "Identify linear functions" },
            { id: "K.2", title: "Interpret points on the graph of a linear function" },
            { id: "K.3", title: "Find the gradient of a graph" },
            { id: "K.4", title: "Find the gradient from two points" },
            { id: "K.5", title: "Find a missing coordinate using gradient" },
            { id: "K.6", title: "Find the gradient and y-intercept of a linear equation" },
            { id: "K.7", title: "Graph an equation in y=mx+c form" },
            { id: "K.8", title: "Write an equation in y=mx+c form from a graph" },
            { id: "K.9", title: "Write an equation in y=mx+c form" },
            { id: "K.10", title: "Write an equation in y=mx+c form from a table" },
            { id: "K.11", title: "Write an equation in y=mx+c form from a word problem" },
            { id: "K.12", title: "Linear equations: solve for y" },
            { id: "K.13", title: "Write linear functions to solve word problems" },
            { id: "K.14", title: "Complete a table and graph a linear function" },
            { id: "K.15", title: "Compare linear functions: graphs, tables and equations" },
            { id: "K.16", title: "Find x- and y-intercepts for equations in ax + by = c form" },
            { id: "K.17", title: "Graph an equation in ax + by = c form" },
            { id: "K.18", title: "Equations of horizontal and vertical lines" },
            { id: "K.19", title: "Graph a horizontal or vertical line" },
            { id: "K.20", title: "Point-gradient form: graph an equation" },
            { id: "K.21", title: "Point-gradient form: write an equation" },
            { id: "K.22", title: "Point-gradient form: write an equation from a graph" },
            { id: "K.23", title: "Gradients of parallel lines" },
            { id: "K.24", title: "Write an equation for a parallel line" },
            { id: "K.25", title: "Transformations of linear functions" }
          ]
        },
        {
          id: "L", title: "Simultaneous equations",
          skills: [
            { id: "L.1", title: "Is (x, y) a solution to the simultaneous equations?" },
            { id: "L.2", title: "Solve simultaneous equations by graphing" },
            { id: "L.3", title: "Solve simultaneous equations by graphing: word problems" },
            { id: "L.4", title: "Find the number of solutions to simultaneous equations by graphing" },
            { id: "L.5", title: "Find the number of solutions to simultaneous equations" },
            { id: "L.6", title: "Solve simultaneous equations using substitution" },
            { id: "L.7", title: "Solve simultaneous equations using substitution: word problems" },
            { id: "L.8", title: "Solve simultaneous equations using elimination: matching coefficients" },
            { id: "L.9", title: "Solve simultaneous equations using elimination" },
            { id: "L.10", title: "Solve simultaneous equations using elimination: word problems" },
            { id: "L.11", title: "Solve simultaneous equations using any method" },
            { id: "L.12", title: "Solve simultaneous equations using any method: word problems" }
          ]
        },
        {
          id: "M", title: "Linear inequalities",
          skills: [
            { id: "M.1", title: "Does (x, y) satisfy the inequality?" },
            { id: "M.2", title: "Linear inequalities: solve for y" },
            { id: "M.3", title: "Graph a linear inequality in the coordinate plane" },
            { id: "M.4", title: "Linear inequalities: word problems" },
            { id: "M.5", title: "Is (x, y) a solution to the simultaneous inequalities?" },
            { id: "M.6", title: "Solve simultaneous linear inequalities by graphing" }
          ]
        },
        {
          id: "N", title: "Indices",
          skills: [
            { id: "N.1", title: "Indices with integer bases" },
            { id: "N.2", title: "Indices with decimal and fractional bases" },
            { id: "N.3", title: "Multiplication with positive indices" },
            { id: "N.4", title: "Power rule with positive indices" },
            { id: "N.5", title: "Evaluate expressions using properties of indices: positive indices" },
            { id: "N.6", title: "Negative indices" },
            { id: "N.7", title: "Multiplication with integer indices" },
            { id: "N.8", title: "Division with integer indices" },
            { id: "N.9", title: "Multiplication and division with integer indices" },
            { id: "N.10", title: "Power rule with integer indices" },
            { id: "N.11", title: "Evaluate expressions using properties of indices: integer indices" },
            { id: "N.12", title: "Identify equivalent expressions involving integer indices" },
            { id: "N.13", title: "Evaluate integers raised to positive unit fractions" },
            { id: "N.14", title: "Multiplication with positive unit fraction indices" }
          ]
        },
        {
          id: "O", title: "Number sequences",
          skills: [
            { id: "O.1", title: "Identify arithmetic and geometric sequences" },
            { id: "O.2", title: "Arithmetic sequences" },
            { id: "O.3", title: "Geometric sequences" },
            { id: "O.4", title: "Evaluate variable expressions for number sequences" },
            { id: "O.5", title: "Write variable expressions for arithmetic sequences" },
            { id: "O.6", title: "Write variable expressions for geometric sequences" },
            { id: "O.7", title: "Sequences of square and cube numbers" },
            { id: "O.8", title: "Fibonacci-type sequences" },
            { id: "O.9", title: "Number sequences: mixed review" }
          ]
        },
        {
          id: "P", title: "Standard form",
          skills: [
            { id: "P.1", title: "Convert between ordinary numbers and standard form" },
            { id: "P.2", title: "Compare numbers written in standard form" },
            { id: "P.3", title: "Add and subtract numbers written in standard form" },
            { id: "P.4", title: "Multiply numbers written in standard form" },
            { id: "P.5", title: "Divide numbers written in standard form" }
          ]
        },
        {
          id: "Q", title: "Exponential functions",
          skills: [
            { id: "Q.1", title: "Evaluate an exponential function" },
            { id: "Q.2", title: "Write exponential functions: word problems" },
            { id: "Q.3", title: "Match exponential functions and graphs I" },
            { id: "Q.4", title: "Match exponential functions and graphs II" },
            { id: "Q.5", title: "Domain and range of exponential functions" },
            { id: "Q.6", title: "Exponential growth and decay: word problems" },
            { id: "Q.7", title: "Compound interest" }
          ]
        },
        {
          id: "R", title: "Monomials",
          skills: [
            { id: "R.1", title: "Identify monomials" },
            { id: "R.2", title: "Multiply monomials" },
            { id: "R.3", title: "Divide monomials" },
            { id: "R.4", title: "Multiply and divide monomials" },
            { id: "R.5", title: "Powers of monomials" }
          ]
        },
        {
          id: "S", title: "Polynomials",
          skills: [
            { id: "S.1", title: "Polynomial vocabulary" },
            { id: "S.2", title: "Model polynomials with algebra tiles" },
            { id: "S.3", title: "Add and subtract polynomials using algebra tiles" },
            { id: "S.4", title: "Add and subtract polynomials" },
            { id: "S.5", title: "Add polynomials to find perimeter" },
            { id: "S.6", title: "Multiply a polynomial by a monomial" },
            { id: "S.7", title: "Multiply two polynomials using algebra tiles" },
            { id: "S.8", title: "Multiply two binomials" },
            { id: "S.9", title: "Multiply two binomials: special cases" },
            { id: "S.10", title: "Multiply polynomials" }
          ]
        },
        {
          id: "T", title: "Factorising",
          skills: [
            { id: "T.1", title: "HCF of monomials" },
            { id: "T.2", title: "Factorise out a monomial" },
            { id: "T.3", title: "Factorise quadratics using algebra tiles" },
            { id: "T.4", title: "Factorise quadratics with leading coefficient 1" },
            { id: "T.5", title: "Factorise quadratics with other leading coefficients" },
            { id: "T.6", title: "Factorise quadratics: special cases" }
          ]
        },
        {
          id: "U", title: "Quadratic equations",
          skills: [
            { id: "U.1", title: "Characteristics of quadratic functions: graphs" },
            { id: "U.2", title: "Characteristics of quadratic functions: equations" },
            { id: "U.3", title: "Complete a function table: quadratic functions" },
            { id: "U.4", title: "Match quadratic functions and graphs" },
            { id: "U.5", title: "Graph a quadratic function" },
            { id: "U.6", title: "Solve a quadratic equation using square roots" },
            { id: "U.7", title: "Solve a quadratic equation using the zero product property" },
            { id: "U.8", title: "Solve a quadratic equation with leading coefficient 1 by factorising" },
            { id: "U.9", title: "Solve a quadratic equation with other leading coefficients by factorising" },
            { id: "U.10", title: "Complete the square" },
            { id: "U.11", title: "Solve a quadratic equation by completing the square" },
            { id: "U.12", title: "Solve a quadratic equation using the quadratic formula" }
          ]
        },
        {
          id: "V", title: "Rational functions and expressions",
          skills: [
            { id: "V.1", title: "Rational functions: asymptotes and excluded values" },
            { id: "V.2", title: "Simplify complex fractions" },
            { id: "V.3", title: "Simplify rational expressions" },
            { id: "V.4", title: "Multiply and divide rational expressions" },
            { id: "V.5", title: "Divide polynomials" },
            { id: "V.6", title: "Add and subtract rational expressions" },
            { id: "V.7", title: "Solve rational equations" }
          ]
        },
        {
          id: "W", title: "Coordinate plane",
          skills: [
            { id: "W.1", title: "Coordinate plane review" },
            { id: "W.2", title: "Quadrants and axes" },
            { id: "W.3", title: "Midpoint formula: find the midpoint" },
            { id: "W.4", title: "Midpoint formula: find the endpoint" },
            { id: "W.5", title: "Distance between two points" }
          ]
        },
        {
          id: "X", title: "Transformations",
          skills: [
            { id: "X.1", title: "Identify reflections, rotations and translations" },
            { id: "X.2", title: "Translations: graph the image" },
            { id: "X.3", title: "Translations: find the coordinates" },
            { id: "X.4", title: "Translations: write the rule" },
            { id: "X.5", title: "Reflections: graph the image" },
            { id: "X.6", title: "Reflections: find the coordinates" },
            { id: "X.7", title: "Rotate polygons about a point" },
            { id: "X.8", title: "Rotations: graph the image" },
            { id: "X.9", title: "Rotations: find the coordinates" },
            { id: "X.10", title: "Reflections and rotations: write the rule" },
            { id: "X.11", title: "Reflections, rotations and translations: graph the image" },
            { id: "X.12", title: "Reflections, rotations and translations: find the coordinates" },
            { id: "X.13", title: "Dilations: graph the image" },
            { id: "X.14", title: "Dilations: find the coordinates" },
            { id: "X.15", title: "Dilations and scale factors" }
          ]
        },
        {
          id: "Y", title: "Logic",
          skills: [
            { id: "Y.1", title: "Identify hypotheses and conclusions" },
            { id: "Y.2", title: "Counterexamples" }
          ]
        },
        {
          id: "Z", title: "Congruence",
          skills: [
            { id: "Z.1", title: "Identify congruent figures" },
            { id: "Z.2", title: "Congruence statements and corresponding parts" },
            { id: "Z.3", title: "Congruent figures: side lengths and angle measures" },
            { id: "Z.4", title: "SSS and SAS Theorems" },
            { id: "Z.5", title: "ASA and AAS Theorems" },
            { id: "Z.6", title: "SSS, SAS, ASA and AAS Theorems" },
            { id: "Z.7", title: "Hypotenuse-Leg Theorem" }
          ]
        },
        {
          id: "AA", title: "Similarity",
          skills: [
            { id: "AA.1", title: "Identify similar figures" },
            { id: "AA.2", title: "Ratios in similar figures" },
            { id: "AA.3", title: "Similarity statements" },
            { id: "AA.4", title: "Determine if two figures are similar: justify your answer" },
            { id: "AA.5", title: "Similar figures: side lengths and angle measures" },
            { id: "AA.6", title: "Similar triangles and indirect measurement" }
          ]
        },
        {
          id: "BB", title: "Triangles and trigonometry",
          skills: [
            { id: "BB.1", title: "Pythagoras' theorem" },
            { id: "BB.2", title: "Pythagoras' theorem: word problems" },
            { id: "BB.3", title: "Converse of Pythagoras' theorem: is it a right triangle?" },
            { id: "BB.4", title: "Trigonometric ratios: sin, cos and tan" },
            { id: "BB.5", title: "Trigonometric ratios: csc, sec and cot" },
            { id: "BB.6", title: "Find trigonometric functions of special angles: sin, cos and tan" },
            { id: "BB.7", title: "Find trigonometric functions of special angles: csc, sec and cot" },
            { id: "BB.8", title: "Find trigonometric functions using a calculator" },
            { id: "BB.9", title: "Inverses of trigonometric functions" },
            { id: "BB.10", title: "Trigonometric ratios: find a side length" },
            { id: "BB.11", title: "Trigonometric ratios: find an angle measure" },
            { id: "BB.12", title: "Solve a right triangle" }
          ]
        },
        {
          id: "CC", title: "Perimeter and area",
          skills: [
            { id: "CC.1", title: "Perimeter" },
            { id: "CC.2", title: "Circumference of circles" },
            { id: "CC.3", title: "Perimeter of semicircles and quarter circles" },
            { id: "CC.4", title: "Area of triangles and quadrilaterals" },
            { id: "CC.5", title: "Area of circles" },
            { id: "CC.6", title: "Area of semicircles and quarter circles" },
            { id: "CC.7", title: "Area of compound figures with triangles, semicircles and quarter circles" },
            { id: "CC.8", title: "Area between two shapes" },
            { id: "CC.9", title: "Area and perimeter of similar figures" }
          ]
        },
        {
          id: "DD", title: "Three-dimensional figures",
          skills: [
            { id: "DD.1", title: "Parts of three-dimensional figures" },
            { id: "DD.2", title: "Three-dimensional figure vocabulary" },
            { id: "DD.3", title: "Front, side and top view" },
            { id: "DD.4", title: "Base plans" },
            { id: "DD.5", title: "Nets of three-dimensional figures" }
          ]
        },
        {
          id: "EE", title: "Surface area and volume",
          skills: [
            { id: "EE.1", title: "Surface area and volume of cuboids" },
            { id: "EE.2", title: "Surface area of prisms and cylinders" },
            { id: "EE.3", title: "Surface area of pyramids and cones" },
            { id: "EE.4", title: "Surface area of spheres" },
            { id: "EE.5", title: "Surface area: mixed review" },
            { id: "EE.6", title: "Volume of prisms and cylinders" },
            { id: "EE.7", title: "Volume of pyramids and cones" },
            { id: "EE.8", title: "Volume of spheres" },
            { id: "EE.9", title: "Volume of compound figures" },
            { id: "EE.10", title: "Volume: mixed review" },
            { id: "EE.11", title: "Similar solids" },
            { id: "EE.12", title: "Volume and surface area of similar solids" },
            { id: "EE.13", title: "Perimeter, area and volume: changes in scale" }
          ]
        },
        {
          id: "FF", title: "Circles",
          skills: [
            { id: "FF.1", title: "Parts of a circle" },
            { id: "FF.2", title: "Central angles" },
            { id: "FF.3", title: "Understand arc length and sector area of a circle" },
            { id: "FF.4", title: "Arc measure and arc length" },
            { id: "FF.5", title: "Area of sectors" },
            { id: "FF.6", title: "Circle measurements: mixed review" },
            { id: "FF.7", title: "Arcs and chords" },
            { id: "FF.8", title: "Tangent lines" },
            { id: "FF.9", title: "Angles formed by chords, secants, and tangents" },
            { id: "FF.10", title: "Segments formed by chords, secants, and tangents" }
          ]
        },
        {
          id: "GG", title: "Geometric constructions",
          skills: [
            { id: "GG.1", title: "Construct the midpoint or perpendicular bisector of a segment" },
            { id: "GG.2", title: "Construct an angle bisector" },
            { id: "GG.3", title: "Construct a perpendicular line" },
            { id: "GG.4", title: "Construct parallel lines" },
            { id: "GG.5", title: "Construct an equilateral triangle or regular hexagon" },
            { id: "GG.6", title: "Construct a square" }
          ]
        },
        {
          id: "HH", title: "Vectors",
          skills: [
            { id: "HH.1", title: "Compass directions and vectors" },
            { id: "HH.2", title: "Find the component form of a vector" },
            { id: "HH.3", title: "Graph a resultant vector using the triangle method" },
            { id: "HH.4", title: "Graph a resultant vector using the parallelogram method" },
            { id: "HH.5", title: "Add vectors" },
            { id: "HH.6", title: "Subtract vectors" }
          ]
        },
        {
          id: "II", title: "Measurement",
          skills: [
            { id: "II.1", title: "Convert rates and measurements: metric units" },
            { id: "II.2", title: "Metric mixed units" },
            { id: "II.3", title: "Convert rates and measurements: imperial units" },
            { id: "II.4", title: "Imperial mixed units" },
            { id: "II.5", title: "Convert between square metres and hectares" },
            { id: "II.6", title: "Convert square units of length" },
            { id: "II.7", title: "Convert between cubic metres and litres" },
            { id: "II.8", title: "Convert cubic units of length" },
            { id: "II.9", title: "Convert between metric and imperial units" },
            { id: "II.10", title: "Precision" },
            { id: "II.11", title: "Greatest possible error" },
            { id: "II.12", title: "Minimum and maximum area and volume" },
            { id: "II.13", title: "Percent error" },
            { id: "II.14", title: "Percent error: area and volume" },
            { id: "II.15", title: "Calculate density, mass and volume" }
          ]
        },
        {
          id: "JJ", title: "Data and graphs",
          skills: [
            { id: "JJ.1", title: "Interpret tables" },
            { id: "JJ.2", title: "Interpret line graphs" },
            { id: "JJ.3", title: "Create line graphs" },
            { id: "JJ.4", title: "Interpret bar graphs for categorical data" },
            { id: "JJ.5", title: "Create bar graphs for categorical data" },
            { id: "JJ.6", title: "Interpret bar graphs for grouped data" },
            { id: "JJ.7", title: "Create bar graphs for grouped data" },
            { id: "JJ.8", title: "Interpret line plots" },
            { id: "JJ.9", title: "Create line plots" },
            { id: "JJ.10", title: "Interpret pie charts" },
            { id: "JJ.11", title: "Interpret stem-and-leaf plots" },
            { id: "JJ.12", title: "Box plots" }
          ]
        },
        {
          id: "KK", title: "Statistics",
          skills: [
            { id: "KK.1", title: "Calculate mean, median, mode and range" },
            { id: "KK.2", title: "Interpret charts to find mean, median, mode and range" },
            { id: "KK.3", title: "Mean, median, mode and range: find the missing number" },
            { id: "KK.4", title: "Calculate quartiles and interquartile range" },
            { id: "KK.5", title: "Identify an outlier" },
            { id: "KK.6", title: "Identify an outlier and describe the effect of removing it" },
            { id: "KK.7", title: "Describe distributions in line plots" },
            { id: "KK.8", title: "Populations and samples" },
            { id: "KK.9", title: "Identify biased samples" },
            { id: "KK.10", title: "Create scatter plots" },
            { id: "KK.11", title: "Identify trends with scatter plots" },
            { id: "KK.12", title: "Make predictions with scatter plots" },
            { id: "KK.13", title: "Outliers in scatter plots" },
            { id: "KK.14", title: "Write an equation for a line of best fit" },
            { id: "KK.15", title: "Correlation and causation" }
          ]
        },
        {
          id: "LL", title: "Probability",
          skills: [
            { id: "LL.1", title: "Probability of simple events" },
            { id: "LL.2", title: "Probability of simple events and opposite events" },
            { id: "LL.3", title: "Probability of mutually exclusive events and overlapping events" },
            { id: "LL.4", title: "Experimental probability" },
            { id: "LL.5", title: "Make predictions using experimental probability" },
            { id: "LL.6", title: "Make predictions using theoretical probability" },
            { id: "LL.7", title: "Sample spaces for compound events" },
            { id: "LL.8", title: "Compound events: find the number of outcomes" },
            { id: "LL.9", title: "Probability of compound events" },
            { id: "LL.10", title: "Find the number of outcomes: word problems" },
            { id: "LL.11", title: "Find probabilities using two-way frequency tables" },
            { id: "LL.12", title: "Identify independent and dependent events" },
            { id: "LL.13", title: "Probability of independent and dependent events" },
            { id: "LL.14", title: "Find conditional probabilities using two-way frequency tables" }
          ]
        }
      ],
    },
  },

 // ==============================================================
  // GRADE 11 MATH
  // ==============================================================
  "11": {
    math: {
      title: "Year 11 Math (Algebra 2)",
      description: "Polynomials, complex numbers, exponential and logarithmic functions, and trigonometry.",
      stats: { skills: 650, videos: 500, games: 120 },
      topics: [
        {
          id: "A", title: "Numbers",
          skills: [
            { id: "A.1", title: "Prime or composite" },
            { id: "A.2", title: "Identify rational and irrational numbers" },
            { id: "A.3", title: "Compare and order rational numbers" },
            { id: "A.4", title: "Write a recurring decimal as a fraction" },
            { id: "A.5", title: "Square roots" },
            { id: "A.6", title: "Estimate square roots" },
            { id: "A.7", title: "Cube roots" },
            { id: "A.8", title: "Estimate cube roots" },
            { id: "A.9", title: "Add, subtract, multiply and divide rational numbers" },
            { id: "A.10", title: "Evaluate numerical expressions involving rational numbers" }
          ]
        },
        {
          id: "B", title: "Percents",
          skills: [
            { id: "B.1", title: "Percent of change" },
            { id: "B.2", title: "Percent of change: word problems" },
            { id: "B.3", title: "Percent of change: find the original amount word problems" },
            { id: "B.4", title: "Sale prices and VAT: find the original price" },
            { id: "B.5", title: "Multi-step problems with percents" }
          ]
        },
        {
          id: "C", title: "Expressions and properties",
          skills: [
            { id: "C.1", title: "Properties of addition and multiplication" },
            { id: "C.2", title: "Distributive property" },
            { id: "C.3", title: "Write equivalent expressions using properties" },
            { id: "C.4", title: "Simplify variable expressions involving like terms and the distributive property" },
            { id: "C.5", title: "Identify equivalent linear expressions" }
          ]
        },
        {
          id: "D", title: "Solve equations",
          skills: [
            { id: "D.1", title: "Solve one- and two-step linear equations" },
            { id: "D.2", title: "Solve advanced linear equations" },
            { id: "D.3", title: "Solve equations with variables on both sides" },
            { id: "D.4", title: "Solve equations: complete the solution" },
            { id: "D.5", title: "Find the number of solutions" },
            { id: "D.6", title: "Create equations with no solutions or infinitely many solutions" },
            { id: "D.7", title: "Solve linear equations: word problems" },
            { id: "D.8", title: "Solve linear equations: mixed review" },
            { id: "D.9", title: "Rearrange multi-variable equations" }
          ]
        },
        {
          id: "E", title: "Problem solving",
          skills: [
            { id: "E.1", title: "Consecutive integer problems" },
            { id: "E.2", title: "Rate of travel: word problems" },
            { id: "E.3", title: "Weighted averages: word problems" }
          ]
        },
        {
          id: "F", title: "Single-variable inequalities",
          skills: [
            { id: "F.1", title: "Solve one- and two-step linear inequalities" },
            { id: "F.2", title: "Graph solutions to one- and two-step linear inequalities" },
            { id: "F.3", title: "Solve advanced linear inequalities" },
            { id: "F.4", title: "Graph solutions to advanced linear inequalities" },
            { id: "F.5", title: "Graph compound inequalities" },
            { id: "F.6", title: "Write compound inequalities from graphs" },
            { id: "F.7", title: "Solve compound inequalities" },
            { id: "F.8", title: "Graph solutions to compound inequalities" }
          ]
        },
        {
          id: "G", title: "Relations and functions",
          skills: [
            { id: "G.1", title: "Relations: convert between tables, graphs, mappings and lists of points" },
            { id: "G.2", title: "Domain and range of relations" },
            { id: "G.3", title: "Find values using function graphs" },
            { id: "G.4", title: "Identify independent and dependent variables" },
            { id: "G.5", title: "Identify functions" },
            { id: "G.6", title: "Evaluate a function" },
            { id: "G.7", title: "Complete a function table from a graph" },
            { id: "G.8", title: "Complete a function table from an equation" },
            { id: "G.9", title: "Find solutions using a table" },
            { id: "G.10", title: "Approximate solutions using a table" },
            { id: "G.11", title: "Interpret functions using everyday language" },
            { id: "G.12", title: "Rate of change: tables" },
            { id: "G.13", title: "Rate of change: graphs" }
          ]
        },
        {
          id: "H", title: "Direct and inverse variation",
          skills: [
            { id: "H.1", title: "Identify proportional relationships" },
            { id: "H.2", title: "Find the constant of variation" },
            { id: "H.3", title: "Graph a proportional relationship" },
            { id: "H.4", title: "Write direct variation equations" },
            { id: "H.5", title: "Write and solve direct variation equations" },
            { id: "H.6", title: "Write inverse variation equations" },
            { id: "H.7", title: "Write and solve inverse variation equations" },
            { id: "H.8", title: "Identify direct variation and inverse variation" }
          ]
        },
        {
          id: "I", title: "Linear functions",
          skills: [
            { id: "I.1", title: "Identify linear functions" },
            { id: "I.2", title: "Interpret points on the graph of a linear function" },
            { id: "I.3", title: "Find the gradient of a graph" },
            { id: "I.4", title: "Find the gradient from two points" },
            { id: "I.5", title: "Find a missing coordinate using gradient" },
            { id: "I.6", title: "Find the gradient and y-intercept of a linear equation" },
            { id: "I.7", title: "Graph an equation in y=mx+c form" },
            { id: "I.8", title: "Write an equation in y=mx+c form from a graph" },
            { id: "I.9", title: "Write an equation in y=mx+c form" },
            { id: "I.10", title: "Linear equations: solve for y" },
            { id: "I.11", title: "Write an equation in y=mx+c form from a table" },
            { id: "I.12", title: "Write an equation in y=mx+c form from a word problem" },
            { id: "I.13", title: "Write linear functions to solve word problems" },
            { id: "I.14", title: "Complete a table and graph a linear function" },
            { id: "I.15", title: "Compare linear functions: graphs, tables and equations" },
            { id: "I.16", title: "Find x- and y-intercepts for equations in ax + by = c form" },
            { id: "I.17", title: "Graph an equation in ax + by = c form" },
            { id: "I.18", title: "Equations of horizontal and vertical lines" },
            { id: "I.19", title: "Graph a horizontal or vertical line" },
            { id: "I.20", title: "Point-gradient form: graph an equation" },
            { id: "I.21", title: "Point-gradient form: write an equation" },
            { id: "I.22", title: "Point-gradient form: write an equation from a graph" },
            { id: "I.23", title: "Gradients of parallel lines" },
            { id: "I.24", title: "Gradients of perpendicular lines" },
            { id: "I.25", title: "Gradients of parallel and perpendicular lines" },
            { id: "I.26", title: "Write an equation for a parallel line" },
            { id: "I.27", title: "Write an equation for a perpendicular line" },
            { id: "I.28", title: "Write an equation for a parallel or perpendicular line" },
            { id: "I.29", title: "Transformations of linear functions" }
          ]
        },
        {
          id: "J", title: "Simultaneous equations",
          skills: [
            { id: "J.1", title: "Is (x, y) a solution to the simultaneous equations?" },
            { id: "J.2", title: "Solve simultaneous equations by graphing" },
            { id: "J.3", title: "Solve simultaneous equations by graphing: word problems" },
            { id: "J.4", title: "Find the number of solutions to simultaneous equations by graphing" },
            { id: "J.5", title: "Find the number of solutions to simultaneous equations" },
            { id: "J.6", title: "Solve simultaneous equations using substitution" },
            { id: "J.7", title: "Solve simultaneous equations using substitution: word problems" },
            { id: "J.8", title: "Solve simultaneous equations using elimination" },
            { id: "J.9", title: "Solve simultaneous equations using elimination: word problems" },
            { id: "J.10", title: "Solve simultaneous equations using any method" },
            { id: "J.11", title: "Solve simultaneous equations using any method: word problems" }
          ]
        },
        {
          id: "K", title: "Linear inequalities",
          skills: [
            { id: "K.1", title: "Does (x, y) satisfy the inequality?" },
            { id: "K.2", title: "Linear inequalities: solve for y" },
            { id: "K.3", title: "Graph a linear inequality in the coordinate plane" },
            { id: "K.4", title: "Linear inequalities: word problems" },
            { id: "K.5", title: "Is (x, y) a solution to the simultaneous inequalities?" },
            { id: "K.6", title: "Solve simultaneous linear inequalities by graphing" }
          ]
        },
        {
          id: "L", title: "Indices",
          skills: [
            { id: "L.1", title: "Indices review" },
            { id: "L.2", title: "Negative indices" },
            { id: "L.3", title: "Multiplication with indices" },
            { id: "L.4", title: "Division with indices" },
            { id: "L.5", title: "Multiplication and division with indices" },
            { id: "L.6", title: "Power rule" },
            { id: "L.7", title: "Evaluate expressions using properties of indices" },
            { id: "L.8", title: "Identify equivalent expressions involving indices" }
          ]
        },
        {
          id: "M", title: "Number sequences",
          skills: [
            { id: "M.1", title: "Identify arithmetic and geometric sequences" },
            { id: "M.2", title: "Arithmetic sequences" },
            { id: "M.3", title: "Geometric sequences" },
            { id: "M.4", title: "Evaluate variable expressions for number sequences" },
            { id: "M.5", title: "Write variable expressions for arithmetic sequences" },
            { id: "M.6", title: "Write variable expressions for geometric sequences" },
            { id: "M.7", title: "Sequences of square and cube numbers" },
            { id: "M.8", title: "Fibonacci-type sequences" },
            { id: "M.9", title: "Number sequences: mixed review" }
          ]
        },
        {
          id: "N", title: "Standard form",
          skills: [
            { id: "N.1", title: "Convert between ordinary numbers and standard form" },
            { id: "N.2", title: "Compare numbers written in standard form" },
            { id: "N.3", title: "Add and subtract numbers written in standard form" },
            { id: "N.4", title: "Multiply and divide numbers written in standard form" }
          ]
        },
        {
          id: "O", title: "Exponential functions",
          skills: [
            { id: "O.1", title: "Evaluate an exponential function" },
            { id: "O.2", title: "Write exponential functions: word problems" },
            { id: "O.3", title: "Match exponential functions and graphs I" },
            { id: "O.4", title: "Match exponential functions and graphs II" },
            { id: "O.5", title: "Graph exponential functions" },
            { id: "O.6", title: "Domain and range of exponential functions" },
            { id: "O.7", title: "Exponential growth and decay: word problems" },
            { id: "O.8", title: "Compound interest" }
          ]
        },
        {
          id: "P", title: "Monomials",
          skills: [
            { id: "P.1", title: "Identify monomials" },
            { id: "P.2", title: "Multiply monomials" },
            { id: "P.3", title: "Divide monomials" },
            { id: "P.4", title: "Multiply and divide monomials" },
            { id: "P.5", title: "Powers of monomials" }
          ]
        },
        {
          id: "Q", title: "Polynomials",
          skills: [
            { id: "Q.1", title: "Polynomial vocabulary" },
            { id: "Q.2", title: "Model polynomials with algebra tiles" },
            { id: "Q.3", title: "Add and subtract polynomials using algebra tiles" },
            { id: "Q.4", title: "Add and subtract polynomials" },
            { id: "Q.5", title: "Add polynomials to find perimeter" },
            { id: "Q.6", title: "Multiply a polynomial by a monomial" },
            { id: "Q.7", title: "Multiply two polynomials using algebra tiles" },
            { id: "Q.8", title: "Multiply two binomials" },
            { id: "Q.9", title: "Multiply two binomials: special cases" },
            { id: "Q.10", title: "Multiply polynomials" }
          ]
        },
        {
          id: "R", title: "Factorising",
          skills: [
            { id: "R.1", title: "HCF of monomials" },
            { id: "R.2", title: "Factorise out a monomial" },
            { id: "R.3", title: "Factorise quadratics using algebra tiles" },
            { id: "R.4", title: "Factorise quadratics with leading coefficient 1" },
            { id: "R.5", title: "Factorise quadratics with other leading coefficients" },
            { id: "R.6", title: "Factorise quadratics: special cases" },
            { id: "R.7", title: "Factorise by grouping" },
            { id: "R.8", title: "Factorise polynomials" }
          ]
        },
        {
          id: "S", title: "Quadratic equations and inequalities",
          skills: [
            { id: "S.1", title: "Characteristics of quadratic functions: graphs" },
            { id: "S.2", title: "Characteristics of quadratic functions: equations" },
            { id: "S.3", title: "Complete a function table: quadratic functions" },
            { id: "S.4", title: "Match quadratic functions and graphs" },
            { id: "S.5", title: "Graph a quadratic function" },
            { id: "S.6", title: "Solve a quadratic equation using square roots" },
            { id: "S.7", title: "Solve a quadratic equation using the zero product property" },
            { id: "S.8", title: "Solve a quadratic equation with leading coefficient 1 by factorising" },
            { id: "S.9", title: "Solve a quadratic equation with other leading coefficients by factorising" },
            { id: "S.10", title: "Complete the square" },
            { id: "S.11", title: "Solve a quadratic equation by completing the square" },
            { id: "S.12", title: "Solve a quadratic equation using the quadratic formula" },
            { id: "S.13", title: "Solve simultaneous quadratic and linear equations by graphing" },
            { id: "S.14", title: "Solve simultaneous quadratic and linear equations" },
            { id: "S.15", title: "Graph solutions to quadratic inequalities" },
            { id: "S.16", title: "Solve quadratic inequalities" }
          ]
        },
        {
          id: "T", title: "Function types",
          skills: [
            { id: "T.1", title: "Identify linear, quadratic and cubic functions from graphs" },
            { id: "T.2", title: "Identify linear, quadratic, cubic and exponential functions from graphs" },
            { id: "T.3", title: "Identify linear, quadratic and exponential functions from tables" },
            { id: "T.4", title: "Write linear, quadratic and exponential functions" },
            { id: "T.5", title: "Linear functions over unit intervals" },
            { id: "T.6", title: "Exponential functions over unit intervals" },
            { id: "T.7", title: "Describe linear and exponential growth and decay" }
          ]
        },
        {
          id: "U", title: "Function operations",
          skills: [
            { id: "U.1", title: "Composition of linear functions: find a value" },
            { id: "U.2", title: "Composition of linear functions: find an equation" },
            { id: "U.3", title: "Composition of linear and quadratic functions: find a value" },
            { id: "U.4", title: "Composition of linear and quadratic functions: find an equation" },
            { id: "U.5", title: "Identify inverse functions" },
            { id: "U.6", title: "Find values of inverse functions from tables" },
            { id: "U.7", title: "Find values of inverse functions from graphs" },
            { id: "U.8", title: "Find inverse functions and relations" }
          ]
        },
        {
          id: "V", title: "Function transformations",
          skills: [
            { id: "V.1", title: "Translation and reflection rules" },
            { id: "V.2", title: "Translations of functions" },
            { id: "V.3", title: "Reflections of functions" },
            { id: "V.4", title: "Translations and reflections of functions" }
          ]
        },
        {
          id: "W", title: "Radical expressions",
          skills: [
            { id: "W.1", title: "Simplify radical expressions" },
            { id: "W.2", title: "Simplify radical expressions involving fractions" },
            { id: "W.3", title: "Multiply radical expressions" },
            { id: "W.4", title: "Add and subtract radical expressions" },
            { id: "W.5", title: "Simplify radical expressions using the distributive property" },
            { id: "W.6", title: "Simplify radical expressions using conjugates" },
            { id: "W.7", title: "Simplify radical expressions: mixed review" }
          ]
        },
        {
          id: "X", title: "Fractional indices",
          skills: [
            { id: "X.1", title: "Evaluate fractional indices" },
            { id: "X.2", title: "Multiplication with fractional indices" },
            { id: "X.3", title: "Division with fractional indices" },
            { id: "X.4", title: "Power rule with fractional indices" },
            { id: "X.5", title: "Simplify expressions involving fractional indices I" },
            { id: "X.6", title: "Simplify expressions involving fractional indices II" }
          ]
        },
        {
          id: "Y", title: "Rational functions and expressions",
          skills: [
            { id: "Y.1", title: "Rational functions: asymptotes and excluded values" },
            { id: "Y.2", title: "Simplify complex fractions" },
            { id: "Y.3", title: "Simplify rational expressions" },
            { id: "Y.4", title: "Multiply and divide rational expressions" },
            { id: "Y.5", title: "Divide polynomials" },
            { id: "Y.6", title: "Add and subtract rational expressions" },
            { id: "Y.7", title: "Solve rational equations" }
          ]
        },
        {
          id: "Z", title: "Midpoints and distance",
          skills: [
            { id: "Z.1", title: "Midpoints" },
            { id: "Z.2", title: "Distance between two points" },
            { id: "Z.3", title: "Distance to the origin in three dimensions" }
          ]
        },
        {
          id: "AA", title: "Transformations",
          skills: [
            { id: "AA.1", title: "Identify translations, reflections and rotations" },
            { id: "AA.2", title: "Translations: graph the image" },
            { id: "AA.3", title: "Translations: find the coordinates" },
            { id: "AA.4", title: "Translations: write the rule" },
            { id: "AA.5", title: "Reflections: graph the image" },
            { id: "AA.6", title: "Reflections: find the coordinates" },
            { id: "AA.7", title: "Rotate polygons about a point" },
            { id: "AA.8", title: "Rotations: graph the image" },
            { id: "AA.9", title: "Rotations: find the coordinates" },
            { id: "AA.10", title: "Describe transformations" },
            { id: "AA.11", title: "Reflections and rotations: write the rule" },
            { id: "AA.12", title: "Sequences of translations, reflections and rotations: graph the image" },
            { id: "AA.13", title: "Sequences of congruence transformations: choose the sequence" },
            { id: "AA.14", title: "Transformations that carry a polygon onto itself" },
            { id: "AA.15", title: "Translations, reflections and rotations: mixed review" },
            { id: "AA.16", title: "Dilations: graph the image" },
            { id: "AA.17", title: "Dilations: find the coordinates" },
            { id: "AA.18", title: "Dilations: find length, perimeter and area" },
            { id: "AA.19", title: "Dilations: scale factor and classification" },
            { id: "AA.20", title: "Dilations: find the scale factor and center of the dilation" },
            { id: "AA.21", title: "Dilations and parallel lines" }
          ]
        },
        {
          id: "BB", title: "Congruence",
          skills: [
            { id: "BB.1", title: "Identify congruent figures" },
            { id: "BB.2", title: "Congruence statements and corresponding parts" },
            { id: "BB.3", title: "Solve problems involving corresponding parts" },
            { id: "BB.4", title: "Determine if two figures are congruent: justify your answer" },
            { id: "BB.5", title: "SSS and SAS Theorems" },
            { id: "BB.6", title: "ASA and AAS Theorems" },
            { id: "BB.7", title: "SSS, SAS, ASA and AAS Theorems" },
            { id: "BB.8", title: "SSS Theorem in the coordinate plane" },
            { id: "BB.9", title: "Congruency in isosceles and equilateral triangles" },
            { id: "BB.10", title: "Hypotenuse-Leg Theorem" }
          ]
        },
        {
          id: "CC", title: "Similarity",
          skills: [
            { id: "CC.1", title: "Identify similar figures" },
            { id: "CC.2", title: "Ratios in similar figures" },
            { id: "CC.3", title: "Similarity statements" },
            { id: "CC.4", title: "Side lengths and angle measures in similar figures" },
            { id: "CC.5", title: "Similar triangles and indirect measurement" },
            { id: "CC.6", title: "Perimeters of similar figures" },
            { id: "CC.7", title: "Similarity rules for triangles" },
            { id: "CC.8", title: "Similar triangles and transformations" },
            { id: "CC.9", title: "Determine if two figures are similar: justify your answer" },
            { id: "CC.10", title: "Areas of similar figures" }
          ]
        },
        {
          id: "DD", title: "Right triangles",
          skills: [
            { id: "DD.1", title: "Pythagoras' Theorem" },
            { id: "DD.2", title: "Pythagoras' theorem: word problems" },
            { id: "DD.3", title: "Converse of Pythagoras' theorem" },
            { id: "DD.4", title: "Pythagoras' Inequality Theorems" },
            { id: "DD.5", title: "Special right triangles" }
          ]
        },
        {
          id: "EE", title: "Trigonometry",
          skills: [
            { id: "EE.1", title: "Trigonometric ratios: sin, cos and tan" },
            { id: "EE.2", title: "Trigonometric ratios: csc, sec and cot" },
            { id: "EE.3", title: "Find trigonometric functions of special angles: sin, cos and tan" },
            { id: "EE.4", title: "Find trigonometric functions of special angles: csc, sec and cot" },
            { id: "EE.5", title: "Find trigonometric functions using a calculator" },
            { id: "EE.6", title: "Inverses of trigonometric functions" },
            { id: "EE.7", title: "Trigonometric ratios: find a side length" },
            { id: "EE.8", title: "Trigonometric ratios: find an angle measure" },
            { id: "EE.9", title: "Solve a right triangle" },
            { id: "EE.10", title: "Law of Sines" },
            { id: "EE.11", title: "Law of Cosines" },
            { id: "EE.12", title: "Solve a triangle" },
            { id: "EE.13", title: "Area of a triangle: sine formula" },
            { id: "EE.14", title: "Graph sine functions" },
            { id: "EE.15", title: "Graph cosine functions" },
            { id: "EE.16", title: "Graph sine and cosine functions" }
          ]
        },
        {
          id: "FF", title: "Perimeter and area",
          skills: [
            { id: "FF.1", title: "Perimeter" },
            { id: "FF.2", title: "Area of triangles and quadrilaterals" },
            { id: "FF.3", title: "Area and perimeter in the coordinate plane I" },
            { id: "FF.4", title: "Area and perimeter in the coordinate plane II" },
            { id: "FF.5", title: "Area and circumference of circles" },
            { id: "FF.6", title: "Area of compound figures" },
            { id: "FF.7", title: "Area between two shapes" },
            { id: "FF.8", title: "Area and perimeter of similar figures" }
          ]
        },
        {
          id: "GG", title: "Three-dimensional figures",
          skills: [
            { id: "GG.1", title: "Parts of three-dimensional figures" },
            { id: "GG.2", title: "Three-dimensional figure vocabulary" },
            { id: "GG.3", title: "Front, side and top view" },
            { id: "GG.4", title: "Base plans" },
            { id: "GG.5", title: "Nets of three-dimensional figures" },
            { id: "GG.6", title: "Cross-sections of three-dimensional figures" },
            { id: "GG.7", title: "Solids of revolution" }
          ]
        },
        {
          id: "HH", title: "Surface area and volume",
          skills: [
            { id: "HH.1", title: "Surface area and volume of cuboids" },
            { id: "HH.2", title: "Surface area of prisms and cylinders" },
            { id: "HH.3", title: "Surface area of pyramids and cones" },
            { id: "HH.4", title: "Surface area of spheres" },
            { id: "HH.5", title: "Surface area: mixed review" },
            { id: "HH.6", title: "Volume of prisms and cylinders" },
            { id: "HH.7", title: "Volume of pyramids and cones" },
            { id: "HH.8", title: "Volume of spheres" },
            { id: "HH.9", title: "Volume of compound figures" },
            { id: "HH.10", title: "Volume: mixed review" },
            { id: "HH.11", title: "Similar solids" },
            { id: "HH.12", title: "Surface area of similar solids" },
            { id: "HH.13", title: "Volume of similar solids" },
            { id: "HH.14", title: "Surface area and volume of similar solids" }
          ]
        },
        {
          id: "II", title: "Circles",
          skills: [
            { id: "II.1", title: "Parts of a circle" },
            { id: "II.2", title: "Central angles" },
            { id: "II.3", title: "Understand arc length and sector area of a circle" },
            { id: "II.4", title: "Arc measure and arc length" },
            { id: "II.5", title: "Area of sectors" },
            { id: "II.6", title: "Circle measurements: mixed review" },
            { id: "II.7", title: "Arcs and chords" },
            { id: "II.8", title: "Tangent lines" },
            { id: "II.9", title: "Angles formed by chords, secants, and tangents" },
            { id: "II.10", title: "Segments formed by chords, secants, and tangents" },
            { id: "II.11", title: "Perimeter of polygons with an inscribed circle" },
            { id: "II.12", title: "Inscribed angles" },
            { id: "II.13", title: "Angles in inscribed right triangles" },
            { id: "II.14", title: "Angles in inscribed quadrilaterals I" },
            { id: "II.15", title: "Angles in inscribed quadrilaterals II" },
            { id: "II.16", title: "Write equations of circles centered at the origin from graphs" },
            { id: "II.17", title: "Write equations of circles centered at the origin from properties" },
            { id: "II.18", title: "Find properties of circles from equations" },
            { id: "II.19", title: "Graph circles centered at the origin" }
          ]
        },
        {
          id: "JJ", title: "Vectors",
          skills: [
            { id: "JJ.1", title: "Compass directions and vectors" },
            { id: "JJ.2", title: "Find the magnitude of a vector" },
            { id: "JJ.3", title: "Find the component form of a vector" },
            { id: "JJ.4", title: "Find the component form of a vector given its magnitude and direction angle" },
            { id: "JJ.5", title: "Graph a resultant vector using the triangle method" },
            { id: "JJ.6", title: "Graph a resultant vector using the parallelogram method" },
            { id: "JJ.7", title: "Add vectors" },
            { id: "JJ.8", title: "Subtract vectors" },
            { id: "JJ.9", title: "Multiply a vector by a scalar" },
            { id: "JJ.10", title: "Find the magnitude of a vector scalar multiple" },
            { id: "JJ.11", title: "Determine the direction of a vector scalar multiple" },
            { id: "JJ.12", title: "Linear combinations of vectors" }
          ]
        },
        {
          id: "KK", title: "Measurement",
          skills: [
            { id: "KK.1", title: "Convert rates and measurements: metric units" },
            { id: "KK.2", title: "Metric mixed units" },
            { id: "KK.3", title: "Convert rates and measurements: imperial units" },
            { id: "KK.4", title: "Imperial mixed units" },
            { id: "KK.5", title: "Convert between square metres and hectares" },
            { id: "KK.6", title: "Convert square units of length" },
            { id: "KK.7", title: "Convert between cubic metres and litres" },
            { id: "KK.8", title: "Convert cubic units of length" },
            { id: "KK.9", title: "Convert between metric and imperial units" },
            { id: "KK.10", title: "Precision" },
            { id: "KK.11", title: "Greatest possible error" },
            { id: "KK.12", title: "Minimum and maximum area and volume" },
            { id: "KK.13", title: "Percent error" },
            { id: "KK.14", title: "Percent error: area and volume" },
            { id: "KK.15", title: "Calculate density, mass and volume" }
          ]
        },
        {
          id: "LL", title: "Data and graphs",
          skills: [
            { id: "LL.1", title: "Interpret tables" },
            { id: "LL.2", title: "Interpret line graphs" },
            { id: "LL.3", title: "Create line graphs" },
            { id: "LL.4", title: "Interpret bar graphs for categorical data" },
            { id: "LL.5", title: "Create bar graphs for categorical data" },
            { id: "LL.6", title: "Interpret bar graphs for grouped data" },
            { id: "LL.7", title: "Create bar graphs for grouped data" },
            { id: "LL.8", title: "Interpret line plots" },
            { id: "LL.9", title: "Create line plots" },
            { id: "LL.10", title: "Interpret pie charts" },
            { id: "LL.11", title: "Interpret stem-and-leaf plots" },
            { id: "LL.12", title: "Box plots" }
          ]
        },
        {
          id: "MM", title: "Statistics",
          skills: [
            { id: "MM.1", title: "Mean, median, mode and range" },
            { id: "MM.2", title: "Quartiles and interquartile range" },
            { id: "MM.3", title: "Variance and standard deviation" },
            { id: "MM.4", title: "Describe distributions in line plots" },
            { id: "MM.5", title: "Populations and samples" },
            { id: "MM.6", title: "Identify biased samples" },
            { id: "MM.7", title: "Create scatter plots" },
            { id: "MM.8", title: "Identify trends with scatter plots" },
            { id: "MM.9", title: "Make predictions with scatter plots" },
            { id: "MM.10", title: "Outliers in scatter plots" },
            { id: "MM.11", title: "Write an equation for a line of best fit" },
            { id: "MM.12", title: "Correlation and causation" }
          ]
        },
        {
          id: "NN", title: "Probability",
          skills: [
            { id: "NN.1", title: "Theoretical probability" },
            { id: "NN.2", title: "Experimental probability" },
            { id: "NN.3", title: "Make predictions" },
            { id: "NN.4", title: "Sample spaces for compound events" },
            { id: "NN.5", title: "Compound events: find the number of outcomes" },
            { id: "NN.6", title: "Probability of compound events" },
            { id: "NN.7", title: "Find the number of outcomes: word problems" },
            { id: "NN.8", title: "Find probabilities using two-way frequency tables" },
            { id: "NN.9", title: "Identify independent and dependent events" },
            { id: "NN.10", title: "Probability of independent and dependent events" },
            { id: "NN.11", title: "Find conditional probabilities" },
            { id: "NN.12", title: "Independence and conditional probability" },
            { id: "NN.13", title: "Find conditional probabilities using two-way frequency tables" },
            { id: "NN.14", title: "Geometric probability" }
          ]
        }
      ],
    },
  },

  // === GRADE 12 (Calculus) ===
 // ==============================================================
  // GRADE 12 MATH
  // ==============================================================
  "12": {
    math: {
      title: "Year 12 Math (Pre-calculus & Calculus)",
      description: "Functions, trigonometry, complex numbers, vectors, matrices, limits, derivatives, and probability.",
      stats: { skills: 700, videos: 550, games: 130 },
      topics: [
        {
          id: "A", title: "Equations",
          skills: [
            { id: "A.1", title: "Solve linear equations" },
            { id: "A.2", title: "Solve linear equations: word problems" },
            { id: "A.3", title: "Solve absolute value equations" },
            { id: "A.4", title: "Graph solutions to absolute value equations" }
          ]
        },
        {
          id: "B", title: "Inequalities",
          skills: [
            { id: "B.1", title: "Graph a linear inequality in one variable" },
            { id: "B.2", title: "Graph a linear inequality in the coordinate plane" },
            { id: "B.3", title: "Write inequalities from graphs" },
            { id: "B.4", title: "Write a linear inequality: word problems" },
            { id: "B.5", title: "Solve linear inequalities" },
            { id: "B.6", title: "Graph solutions to linear inequalities" },
            { id: "B.7", title: "Solve absolute value inequalities" },
            { id: "B.8", title: "Graph solutions to absolute value inequalities" },
            { id: "B.9", title: "Graph solutions to quadratic inequalities" },
            { id: "B.10", title: "Solve quadratic inequalities" }
          ]
        },
        {
          id: "C", title: "Functions",
          skills: [
            { id: "C.1", title: "Domain and range" },
            { id: "C.2", title: "Identify functions" },
            { id: "C.3", title: "Evaluate functions" },
            { id: "C.4", title: "Find values using function graphs" },
            { id: "C.5", title: "Complete a table for a function graph" },
            { id: "C.6", title: "Find the gradient of a linear function" },
            { id: "C.7", title: "Gradients of parallel and perpendicular lines" },
            { id: "C.8", title: "Graph a linear function" },
            { id: "C.9", title: "Write linear equations in standard form" },
            { id: "C.10", title: "Write linear equations in point-gradient form" },
            { id: "C.11", title: "Write an equation for a parallel or perpendicular line" },
            { id: "C.12", title: "Linear functions over unit intervals" },
            { id: "C.13", title: "Complete a function table: absolute value functions" },
            { id: "C.14", title: "Graph an absolute value function" }
          ]
        },
        {
          id: "D", title: "Simultaneous equations",
          skills: [
            { id: "D.1", title: "Is (x, y) a solution to the simultaneous equations?" },
            { id: "D.2", title: "Solve simultaneous equations by graphing" },
            { id: "D.3", title: "Solve simultaneous equations by graphing: word problems" },
            { id: "D.4", title: "Find the number of solutions to simultaneous equations" },
            { id: "D.5", title: "Solve simultaneous equations using substitution" },
            { id: "D.6", title: "Solve simultaneous equations using substitution: word problems" },
            { id: "D.7", title: "Solve simultaneous equations using elimination" },
            { id: "D.8", title: "Solve simultaneous equations using elimination: word problems" },
            { id: "D.9", title: "Solve simultaneous equations using any method" },
            { id: "D.10", title: "Solve simultaneous equations using any method: word problems" },
            { id: "D.11", title: "Solve nonlinear simultaneous equations" }
          ]
        },
        {
          id: "E", title: "Factorising",
          skills: [
            { id: "E.1", title: "Factorise out a monomial" },
            { id: "E.2", title: "Factorise quadratics using algebra tiles" },
            { id: "E.3", title: "Factorise quadratics" },
            { id: "E.4", title: "Factorise using a quadratic pattern" },
            { id: "E.5", title: "Factorise by grouping" },
            { id: "E.6", title: "Factorise sums and differences of cubes" },
            { id: "E.7", title: "Factorise polynomials" }
          ]
        },
        {
          id: "F", title: "Quadratic functions",
          skills: [
            { id: "F.1", title: "Characteristics of quadratic functions" },
            { id: "F.2", title: "Complete a function table: quadratic functions" },
            { id: "F.3", title: "Find a quadratic function" },
            { id: "F.4", title: "Graph a quadratic function" },
            { id: "F.5", title: "Match quadratic functions and graphs" },
            { id: "F.6", title: "Solve a quadratic equation using square roots" },
            { id: "F.7", title: "Solve a quadratic equation using the zero product property" },
            { id: "F.8", title: "Solve a quadratic equation by factorising" },
            { id: "F.9", title: "Complete the square" },
            { id: "F.10", title: "Solve a quadratic equation using the quadratic formula" },
            { id: "F.11", title: "Modelling projectile motion with quadratic equations" },
            { id: "F.12", title: "Using the discriminant" }
          ]
        },
        {
          id: "G", title: "Complex numbers",
          skills: [
            { id: "G.1", title: "Introduction to complex numbers" },
            { id: "G.2", title: "Add and subtract complex numbers" },
            { id: "G.3", title: "Complex conjugates" },
            { id: "G.4", title: "Multiply and divide complex numbers" },
            { id: "G.5", title: "Add, subtract, multiply and divide complex numbers" },
            { id: "G.6", title: "Absolute values of complex numbers" },
            { id: "G.7", title: "Powers of i" }
          ]
        },
        {
          id: "H", title: "Polynomials",
          skills: [
            { id: "H.1", title: "Polynomial vocabulary" },
            { id: "H.2", title: "Add and subtract polynomials" },
            { id: "H.3", title: "Multiply polynomials" },
            { id: "H.4", title: "Divide polynomials using long division" },
            { id: "H.5", title: "Solve polynomial equations" },
            { id: "H.6", title: "Find the roots of factorised polynomials" },
            { id: "H.7", title: "Write a polynomial from its roots" },
            { id: "H.8", title: "Rational root theorem" },
            { id: "H.9", title: "Descartes' Rule of Signs" },
            { id: "H.10", title: "Match polynomials and graphs" },
            { id: "H.11", title: "Fundamental Theorem of Algebra" },
            { id: "H.12", title: "Pascal's triangle" },
            { id: "H.13", title: "Pascal's triangle and the Binomial Theorem" },
            { id: "H.14", title: "Binomial Theorem I" },
            { id: "H.15", title: "Binomial Theorem II" }
          ]
        },
        {
          id: "I", title: "Radical functions and expressions",
          skills: [
            { id: "I.1", title: "Roots of integers" },
            { id: "I.2", title: "Roots of rational numbers" },
            { id: "I.3", title: "Find roots using a calculator" },
            { id: "I.4", title: "Nth roots" },
            { id: "I.5", title: "Simplify radical expressions with variables I" },
            { id: "I.6", title: "Simplify radical expressions with variables II" },
            { id: "I.7", title: "Multiply radical expressions" },
            { id: "I.8", title: "Divide radical expressions" },
            { id: "I.9", title: "Add and subtract radical expressions" },
            { id: "I.10", title: "Simplify radical expressions using the distributive property" },
            { id: "I.11", title: "Simplify radical expressions using conjugates" },
            { id: "I.12", title: "Domain and range of radical functions" },
            { id: "I.13", title: "Solve radical equations" }
          ]
        },
        {
          id: "J", title: "Rational indices",
          skills: [
            { id: "J.1", title: "Evaluate rational indices" },
            { id: "J.2", title: "Multiplication with rational indices" },
            { id: "J.3", title: "Division with rational indices" },
            { id: "J.4", title: "Power rule" },
            { id: "J.5", title: "Simplify expressions involving rational indices I" },
            { id: "J.6", title: "Simplify expressions involving rational indices II" }
          ]
        },
        {
          id: "K", title: "Rational functions and expressions",
          skills: [
            { id: "K.1", title: "Rational functions: asymptotes and excluded values" },
            { id: "K.2", title: "Evaluate rational expressions I" },
            { id: "K.3", title: "Evaluate rational expressions II" },
            { id: "K.4", title: "Simplify rational expressions" },
            { id: "K.5", title: "Multiply and divide rational expressions" },
            { id: "K.6", title: "Add and subtract rational expressions" },
            { id: "K.7", title: "Solve rational equations" }
          ]
        },
        {
          id: "L", title: "Function operations",
          skills: [
            { id: "L.1", title: "Add and subtract functions" },
            { id: "L.2", title: "Multiply functions" },
            { id: "L.3", title: "Divide functions" },
            { id: "L.4", title: "Composition of linear functions: find a value" },
            { id: "L.5", title: "Composition of linear functions: find an equation" },
            { id: "L.6", title: "Composition of linear and quadratic functions: find a value" },
            { id: "L.7", title: "Composition of linear and quadratic functions: find an equation" },
            { id: "L.8", title: "Identify inverse functions" },
            { id: "L.9", title: "Find values of inverse functions from tables" },
            { id: "L.10", title: "Find values of inverse functions from graphs" },
            { id: "L.11", title: "Find inverse functions and relations" }
          ]
        },
        {
          id: "M", title: "Families of functions",
          skills: [
            { id: "M.1", title: "Translations of functions" },
            { id: "M.2", title: "Reflections of functions" },
            { id: "M.3", title: "Dilations of functions" },
            { id: "M.4", title: "Transformations of functions" },
            { id: "M.5", title: "Function transformation rules" },
            { id: "M.6", title: "Describe function transformations" }
          ]
        },
        {
          id: "N", title: "Logarithms",
          skills: [
            { id: "N.1", title: "Convert between exponential and logarithmic form: rational bases" },
            { id: "N.2", title: "Evaluate logarithms" },
            { id: "N.3", title: "Change of base formula" },
            { id: "N.4", title: "Identify properties of logarithms" },
            { id: "N.5", title: "Product property of logarithms" },
            { id: "N.6", title: "Quotient property of logarithms" },
            { id: "N.7", title: "Power property of logarithms" },
            { id: "N.8", title: "Properties of logarithms: mixed review" },
            { id: "N.9", title: "Evaluate logarithms: mixed review" }
          ]
        },
        {
          id: "O", title: "Exponential and logarithmic functions",
          skills: [
            { id: "O.1", title: "Domain and range of exponential and logarithmic functions" },
            { id: "O.2", title: "Evaluate exponential functions" },
            { id: "O.3", title: "Match exponential functions and graphs" },
            { id: "O.4", title: "Solve exponential equations by rewriting the base" },
            { id: "O.5", title: "Solve exponential equations using common logarithms" },
            { id: "O.6", title: "Solve logarithmic equations I" },
            { id: "O.7", title: "Solve logarithmic equations II" },
            { id: "O.8", title: "Identify linear and exponential functions" },
            { id: "O.9", title: "Exponential functions over unit intervals" },
            { id: "O.10", title: "Describe linear and exponential growth and decay" },
            { id: "O.11", title: "Exponential growth and decay: word problems" },
            { id: "O.12", title: "Compound interest: word problems" },
            { id: "O.13", title: "Continuously compounded interest: word problems" }
          ]
        },
        {
          id: "P", title: "Parabolas",
          skills: [
            { id: "P.1", title: "Identify the direction a parabola opens" },
            { id: "P.2", title: "Find the vertex of a parabola" },
            { id: "P.3", title: "Find the focus or directrix of a parabola" },
            { id: "P.4", title: "Find the axis of symmetry of a parabola" },
            { id: "P.5", title: "Write equations of parabolas in vertex form from graphs" },
            { id: "P.6", title: "Write equations of parabolas in vertex form using properties" },
            { id: "P.7", title: "Convert equations of parabolas from general to vertex form" },
            { id: "P.8", title: "Find properties of a parabola from equations in general form" },
            { id: "P.9", title: "Graph parabolas" }
          ]
        },
        {
          id: "Q", title: "Angle measures",
          skills: [
            { id: "Q.1", title: "Convert between radians and degrees" },
            { id: "Q.2", title: "Radians and arc length" },
            { id: "Q.3", title: "Quadrants" },
            { id: "Q.4", title: "Graphs of angles" },
            { id: "Q.5", title: "Coterminal angles" },
            { id: "Q.6", title: "Reference angles" }
          ]
        },
        {
          id: "R", title: "Trigonometry",
          skills: [
            { id: "R.1", title: "Pythagoras' Theorem and its converse" },
            { id: "R.2", title: "Special right triangles" },
            { id: "R.3", title: "Trigonometric ratios: sin, cos and tan" },
            { id: "R.4", title: "Trigonometric ratios: csc, sec and cot" },
            { id: "R.5", title: "Trigonometric ratios in similar right triangles" },
            { id: "R.6", title: "Find trigonometric ratios using the unit circle" },
            { id: "R.7", title: "Sin, cos and tan of special angles" },
            { id: "R.8", title: "Csc, sec and cot of special angles" },
            { id: "R.9", title: "Find trigonometric functions using a calculator" },
            { id: "R.10", title: "Inverses of sin, cos and tan" },
            { id: "R.11", title: "Inverses of csc, sec and cot" },
            { id: "R.12", title: "Solve trigonometric equations I" },
            { id: "R.13", title: "Solve trigonometric equations II" },
            { id: "R.14", title: "Trigonometric ratios: find a side length" },
            { id: "R.15", title: "Trigonometric ratios: find an angle measure" },
            { id: "R.16", title: "Solve a right triangle" },
            { id: "R.17", title: "Law of Sines" },
            { id: "R.18", title: "Law of Cosines" },
            { id: "R.19", title: "Solve a triangle" },
            { id: "R.20", title: "Area of a triangle: sine formula" },
            { id: "R.21", title: "Area of a triangle: Law of Sines" }
          ]
        },
        {
          id: "S", title: "Trigonometric functions",
          skills: [
            { id: "S.1", title: "Find properties of sine functions" },
            { id: "S.2", title: "Write equations of sine functions from graphs" },
            { id: "S.3", title: "Write equations of sine functions using properties" },
            { id: "S.4", title: "Graph sine functions" },
            { id: "S.5", title: "Find properties of cosine functions" },
            { id: "S.6", title: "Write equations of cosine functions from graphs" },
            { id: "S.7", title: "Write equations of cosine functions using properties" },
            { id: "S.8", title: "Graph cosine functions" },
            { id: "S.9", title: "Graph sine and cosine functions" }
          ]
        },
        {
          id: "T", title: "Trigonometric identities",
          skills: [
            { id: "T.1", title: "Complementary angle identities" },
            { id: "T.2", title: "Symmetry and periodicity of trigonometric functions" },
            { id: "T.3", title: "Find trigonometric ratios using a Pythagorean or reciprocal identity" },
            { id: "T.4", title: "Find trigonometric ratios using multiple identities" }
          ]
        },
        {
          id: "U", title: "Circles",
          skills: [
            { id: "U.1", title: "Central angles" },
            { id: "U.2", title: "Arcs and chords" },
            { id: "U.3", title: "Tangent lines" },
            { id: "U.4", title: "Inscribed angles" },
            { id: "U.5", title: "Angles in inscribed right triangles" },
            { id: "U.6", title: "Angles in inscribed quadrilaterals" }
          ]
        },
        {
          id: "V", title: "Circles in the coordinate plane",
          skills: [
            { id: "V.1", title: "Find the centre of a circle" },
            { id: "V.2", title: "Find the radius or diameter of a circle" },
            { id: "V.3", title: "Write equations of circles in standard form from graphs" },
            { id: "V.4", title: "Write equations of circles in standard form using properties" },
            { id: "V.5", title: "Convert equations of circles from general to standard form" },
            { id: "V.6", title: "Find properties of circles from equations in general form" },
            { id: "V.7", title: "Graph circles" }
          ]
        },
        {
          id: "W", title: "Sequences and series",
          skills: [
            { id: "W.1", title: "Classify formulas and sequences" },
            { id: "W.2", title: "Find terms of an arithmetic sequence" },
            { id: "W.3", title: "Find terms of a geometric sequence" },
            { id: "W.4", title: "Find terms of a recursive sequence" },
            { id: "W.5", title: "Evaluate formulas for sequences" },
            { id: "W.6", title: "Write a formula for an arithmetic sequence" },
            { id: "W.7", title: "Write a formula for a geometric sequence" },
            { id: "W.8", title: "Write a formula for a recursive sequence" },
            { id: "W.9", title: "Sequences: mixed review" },
            { id: "W.10", title: "Introduction to sigma notation" },
            { id: "W.11", title: "Identify arithmetic and geometric series" },
            { id: "W.12", title: "Find the sum of a finite arithmetic or geometric series" },
            { id: "W.13", title: "Introduction to partial sums" },
            { id: "W.14", title: "Partial sums of arithmetic series" },
            { id: "W.15", title: "Partial sums of geometric series" },
            { id: "W.16", title: "Partial sums: mixed review" },
            { id: "W.17", title: "Convergent and divergent geometric series" },
            { id: "W.18", title: "Find the value of an infinite geometric series" },
            { id: "W.19", title: "Write a repeating decimal as a fraction" }
          ]
        },
        {
          id: "X", title: "Probability",
          skills: [
            { id: "X.1", title: "Introduction to probability" },
            { id: "X.2", title: "Theoretical and experimental probability" },
            { id: "X.3", title: "Compound events: find the number of outcomes" },
            { id: "X.4", title: "Factorials" },
            { id: "X.5", title: "Calculate probabilities of events" },
            { id: "X.6", title: "Counting principle" },
            { id: "X.7", title: "Permutations" },
            { id: "X.8", title: "Permutation and combination notation" },
            { id: "X.9", title: "Find probabilities using permutations and combinations" },
            { id: "X.10", title: "Find probabilities using two-way frequency tables" },
            { id: "X.11", title: "Identify independent events" },
            { id: "X.12", title: "Probability of independent and dependent events" },
            { id: "X.13", title: "Geometric probability" },
            { id: "X.14", title: "Find conditional probabilities" },
            { id: "X.15", title: "Independence and conditional probability" },
            { id: "X.16", title: "Find conditional probabilities using two-way frequency tables" },
            { id: "X.17", title: "Find probabilities using the addition rule" }
          ]
        },
        {
          id: "Y", title: "Statistics",
          skills: [
            { id: "Y.1", title: "Mean, median, mode and range" },
            { id: "Y.2", title: "Quartiles" },
            { id: "Y.3", title: "Identify biased samples" },
            { id: "Y.4", title: "Mean absolute deviation" },
            { id: "Y.5", title: "Variance and standard deviation" }
          ]
        },
        {
          id: "Z", title: "Data and graphs",
          skills: [
            { id: "Z.1", title: "Interpret bar graphs for continuous data" },
            { id: "Z.2", title: "Create bar graphs for continuous data" },
            { id: "Z.3", title: "Interpret stem-and-leaf plots" },
            { id: "Z.4", title: "Interpret box-and-whisker plots" },
            { id: "Z.5", title: "Interpret a scatter plot" },
            { id: "Z.6", title: "Scatter plots: line of best fit" }
          ]
        },
        {
          id: "AA", title: "Introduction to limits",
          skills: [
            { id: "AA.1", title: "Find limits using graphs" },
            { id: "AA.2", title: "Find one-sided limits using graphs" },
            { id: "AA.3", title: "Determine if a limit exists" }
          ]
        },
        {
          id: "BB", title: "Calculate limits",
          skills: [
            { id: "BB.1", title: "Find limits using addition, subtraction and multiplication laws" },
            { id: "BB.2", title: "Find limits using the division law" },
            { id: "BB.3", title: "Find limits using power and root laws" },
            { id: "BB.4", title: "Find limits using limit laws" },
            { id: "BB.5", title: "Find limits of polynomials and rational functions" },
            { id: "BB.6", title: "Find limits involving factorisation and rationalisation" },
            { id: "BB.7", title: "Find limits involving absolute value functions" },
            { id: "BB.8", title: "Find limits involving trigonometric functions" }
          ]
        },
        {
          id: "CC", title: "Limits and rational functions",
          skills: [
            { id: "CC.1", title: "Find limits at vertical asymptotes using graphs" },
            { id: "CC.2", title: "Determine end behaviour using graphs" },
            { id: "CC.3", title: "Determine end behaviour of polynomial and rational functions" },
            { id: "CC.4", title: "Find the limit at a vertical asymptote of a rational function I" },
            { id: "CC.5", title: "Find the limit at a vertical asymptote of a rational function II" }
          ]
        },
        {
          id: "DD", title: "Continuity",
          skills: [
            { id: "DD.1", title: "Identify graphs of continuous functions" },
            { id: "DD.2", title: "Determine continuity using graphs" },
            { id: "DD.3", title: "Determine one-sided continuity using graphs" },
            { id: "DD.4", title: "Find and analyse points of discontinuity using graphs" },
            { id: "DD.5", title: "Determine continuity on an interval using graphs" },
            { id: "DD.6", title: "Determine the continuity of a piecewise function at a point" },
            { id: "DD.7", title: "Make a piecewise function continuous" },
            { id: "DD.8", title: "Intermediate Value Theorem" }
          ]
        },
        {
          id: "EE", title: "Introduction to derivatives",
          skills: [
            { id: "EE.1", title: "Average rate of change I" },
            { id: "EE.2", title: "Average rate of change II" },
            { id: "EE.3", title: "Find instantaneous rates of change" },
            { id: "EE.4", title: "Velocity as a rate of change" },
            { id: "EE.5", title: "Find values of derivatives using limits" },
            { id: "EE.6", title: "Find the gradient of a tangent line using limits" },
            { id: "EE.7", title: "Find equations of tangent lines using limits" },
            { id: "EE.8", title: "Power rule I" },
            { id: "EE.9", title: "Power rule II" },
            { id: "EE.10", title: "Find derivatives of polynomials" },
            { id: "EE.11", title: "Find second derivatives of polynomials" }
          ]
        }
      ],
    },
  },

  // ==============================================================
  // GRADE 13 MATH (Year 13)
  // ==============================================================
  "13": {
    math: {
      title: "Year 13 Math (Calculus & Advanced)",
      description: "Logarithmic functions, vectors, derivatives, integrals, complex numbers, and probability distributions.",
      stats: { skills: 850, videos: 600, games: 140 },
      topics: [
        {
          id: "A", title: "Functions",
          skills: [
            { id: "A.1", title: "Domain and range" },
            { id: "A.2", title: "Identify functions" },
            { id: "A.3", title: "Find the gradient of a linear function" },
            { id: "A.4", title: "Graph a linear function" },
            { id: "A.5", title: "Write the equation of a linear function" },
            { id: "A.6", title: "Linear functions over unit intervals" },
            { id: "A.7", title: "Evaluate functions" },
            { id: "A.8", title: "Find values using function graphs" },
            { id: "A.9", title: "Complete a table for a function graph" },
            { id: "A.10", title: "Add, subtract, multiply and divide functions" },
            { id: "A.11", title: "Composition of functions" },
            { id: "A.12", title: "Identify inverse functions" },
            { id: "A.13", title: "Find values of inverse functions from tables" },
            { id: "A.14", title: "Find values of inverse functions from graphs" },
            { id: "A.15", title: "Find inverse functions and relations" }
          ]
        },
        {
          id: "B", title: "Families of functions",
          skills: [
            { id: "B.1", title: "Translations of functions" },
            { id: "B.2", title: "Reflections of functions" },
            { id: "B.3", title: "Dilations of functions" },
            { id: "B.4", title: "Transformations of functions" },
            { id: "B.5", title: "Function transformation rules" },
            { id: "B.6", title: "Describe function transformations" }
          ]
        },
        {
          id: "C", title: "Quadratic functions",
          skills: [
            { id: "C.1", title: "Characteristics of quadratic functions" },
            { id: "C.2", title: "Find the maximum or minimum value of a quadratic function" },
            { id: "C.3", title: "Graph a quadratic function" },
            { id: "C.4", title: "Match quadratic functions and graphs" },
            { id: "C.5", title: "Solve a quadratic equation using square roots" },
            { id: "C.6", title: "Solve a quadratic equation by factorising" },
            { id: "C.7", title: "Solve a quadratic equation by completing the square" },
            { id: "C.8", title: "Solve a quadratic equation using the quadratic formula" },
            { id: "C.9", title: "Using the discriminant" }
          ]
        },
        {
          id: "D", title: "Polynomials",
          skills: [
            { id: "D.1", title: "Divide polynomials using long division" },
            { id: "D.2", title: "Write a polynomial from its roots" },
            { id: "D.3", title: "Find the roots of factorised polynomials" },
            { id: "D.4", title: "Rational root theorem" },
            { id: "D.5", title: "Complex conjugate theorem" },
            { id: "D.6", title: "Conjugate root theorems" },
            { id: "D.7", title: "Descartes' Rule of Signs" },
            { id: "D.8", title: "Fundamental Theorem of Algebra" },
            { id: "D.9", title: "Match polynomials and graphs" },
            { id: "D.10", title: "Factorise sums and differences of cubes" },
            { id: "D.11", title: "Solve equations with sums and differences of cubes" },
            { id: "D.12", title: "Factorise using a quadratic pattern" },
            { id: "D.13", title: "Solve equations using a quadratic pattern" },
            { id: "D.14", title: "Pascal's triangle" },
            { id: "D.15", title: "Pascal's triangle and the Binomial Theorem" },
            { id: "D.16", title: "Binomial Theorem I" },
            { id: "D.17", title: "Binomial Theorem II" }
          ]
        },
        {
          id: "E", title: "Rational functions",
          skills: [
            { id: "E.1", title: "Rational functions: asymptotes and excluded values" },
            { id: "E.2", title: "Solve rational equations" },
            { id: "E.3", title: "Check whether two rational functions are inverses" }
          ]
        },
        {
          id: "F", title: "Exponential and logarithmic functions",
          skills: [
            { id: "F.1", title: "Domain and range of exponential and logarithmic functions" },
            { id: "F.2", title: "Convert between exponential and logarithmic form" },
            { id: "F.3", title: "Evaluate logarithms" },
            { id: "F.4", title: "Change of base formula" },
            { id: "F.5", title: "Product property of logarithms" },
            { id: "F.6", title: "Quotient property of logarithms" },
            { id: "F.7", title: "Power property of logarithms" },
            { id: "F.8", title: "Evaluate logarithms using properties" },
            { id: "F.9", title: "Solve exponential equations by rewriting the base" },
            { id: "F.10", title: "Solve exponential equations using logarithms" },
            { id: "F.11", title: "Solve logarithmic equations with one logarithm" },
            { id: "F.12", title: "Solve logarithmic equations with multiple logarithms" },
            { id: "F.13", title: "Identify linear and exponential functions" },
            { id: "F.14", title: "Exponential functions over unit intervals" },
            { id: "F.15", title: "Describe linear and exponential growth and decay" },
            { id: "F.16", title: "Exponential growth and decay: word problems" },
            { id: "F.17", title: "Compound interest: word problems" }
          ]
        },
        {
          id: "G", title: "Radical functions",
          skills: [
            { id: "G.1", title: "Domain and range of radical functions" },
            { id: "G.2", title: "Solve radical equations" }
          ]
        },
        {
          id: "H", title: "Roots and rational indices",
          skills: [
            { id: "H.1", title: "Roots of integers" },
            { id: "H.2", title: "Roots of rational numbers" },
            { id: "H.3", title: "Find roots using a calculator" },
            { id: "H.4", title: "Evaluate rational indices" },
            { id: "H.5", title: "Operations with rational indices" },
            { id: "H.6", title: "Nth roots" },
            { id: "H.7", title: "Simplify radical expressions with variables" },
            { id: "H.8", title: "Simplify expressions involving rational indices" }
          ]
        },
        {
          id: "I", title: "Simultaneous equations",
          skills: [
            { id: "I.1", title: "Solve simultaneous equations by graphing" },
            { id: "I.2", title: "Solve simultaneous equations by graphing: word problems" },
            { id: "I.3", title: "Classify simultaneous equations" },
            { id: "I.4", title: "Solve simultaneous equations using substitution" },
            { id: "I.5", title: "Solve simultaneous equations using substitution: word problems" },
            { id: "I.6", title: "Solve simultaneous equations using elimination" },
            { id: "I.7", title: "Solve simultaneous equations using elimination: word problems" },
            { id: "I.8", title: "Solve simultaneous equations in three variables using substitution" },
            { id: "I.9", title: "Solve simultaneous equations in three variables using elimination" },
            { id: "I.10", title: "Determine the number of solutions to simultaneous equations in three variables" }
          ]
        },
        {
          id: "J", title: "Trigonometry",
          skills: [
            { id: "J.1", title: "Convert between radians and degrees" },
            { id: "J.2", title: "Radians and arc length" },
            { id: "J.3", title: "Quadrants" },
            { id: "J.4", title: "Coterminal and reference angles" },
            { id: "J.5", title: "Find trigonometric ratios using right triangles" },
            { id: "J.6", title: "Find trigonometric ratios using the unit circle" },
            { id: "J.7", title: "Find sin, cos and tan using reference angles" },
            { id: "J.8", title: "Find csc, sec and cot using reference angles" },
            { id: "J.9", title: "Inverses of sin, cos and tan" },
            { id: "J.10", title: "Inverses of csc, sec and cot" },
            { id: "J.11", title: "Solve trigonometric equations" },
            { id: "J.12", title: "Trigonometric ratios: find a side length" },
            { id: "J.13", title: "Trigonometric ratios: find an angle measure" },
            { id: "J.14", title: "Solve a right triangle" },
            { id: "J.15", title: "Law of Sines" },
            { id: "J.16", title: "Law of Cosines" },
            { id: "J.17", title: "Solve a triangle" },
            { id: "J.18", title: "Area of a triangle: sine formula" },
            { id: "J.19", title: "Area of a triangle: Heron's formula" }
          ]
        },
        {
          id: "K", title: "Trigonometric functions",
          skills: [
            { id: "K.1", title: "Find properties of sine functions" },
            { id: "K.2", title: "Write equations of sine functions from graphs" },
            { id: "K.3", title: "Write equations of sine functions using properties" },
            { id: "K.4", title: "Graph sine functions" },
            { id: "K.5", title: "Find properties of cosine functions" },
            { id: "K.6", title: "Write equations of cosine functions from graphs" },
            { id: "K.7", title: "Write equations of cosine functions using properties" },
            { id: "K.8", title: "Graph cosine functions" },
            { id: "K.9", title: "Graph sine and cosine functions" }
          ]
        },
        {
          id: "L", title: "Trigonometric identities",
          skills: [
            { id: "L.1", title: "Complementary angle identities" },
            { id: "L.2", title: "Symmetry and periodicity of trigonometric functions" },
            { id: "L.3", title: "Find trigonometric ratios using a Pythagorean or reciprocal identity" },
            { id: "L.4", title: "Find trigonometric ratios using multiple identities" }
          ]
        },
        {
          id: "M", title: "Parabolas and circles",
          skills: [
            { id: "M.1", title: "Find properties of parabolas" },
            { id: "M.2", title: "Write equations of parabolas in vertex form" },
            { id: "M.3", title: "Graph parabolas" },
            { id: "M.4", title: "Find properties of circles" },
            { id: "M.5", title: "Write equations of circles in standard form" },
            { id: "M.6", title: "Graph circles" }
          ]
        },
        {
          id: "N", title: "Two-dimensional vectors",
          skills: [
            { id: "N.1", title: "Find the magnitude of a vector" },
            { id: "N.2", title: "Find the direction angle of a vector" },
            { id: "N.3", title: "Find the component form of a vector" },
            { id: "N.4", title: "Find the component form of a vector from its magnitude and direction angle" },
            { id: "N.5", title: "Find a unit vector" },
            { id: "N.6", title: "Add and subtract vectors" },
            { id: "N.7", title: "Multiply a vector by a scalar" },
            { id: "N.8", title: "Find the magnitude or direction of a vector scalar multiple" },
            { id: "N.9", title: "Find the magnitude and direction of a vector sum" },
            { id: "N.10", title: "Linear combinations of vectors" },
            { id: "N.11", title: "Graph a resultant vector using the triangle method" },
            { id: "N.12", title: "Graph a resultant vector using the parallelogram method" }
          ]
        },
        {
          id: "O", title: "Three-dimensional vectors",
          skills: [
            { id: "O.1", title: "Find the magnitude of a three-dimensional vector" },
            { id: "O.2", title: "Find the component form of a three-dimensional vector" },
            { id: "O.3", title: "Find a three-dimensional unit vector" },
            { id: "O.4", title: "Add and subtract three-dimensional vectors" },
            { id: "O.5", title: "Scalar multiples of three-dimensional vectors" },
            { id: "O.6", title: "Linear combinations of three-dimensional vectors" }
          ]
        },
        {
          id: "P", title: "Sequences and series",
          skills: [
            { id: "P.1", title: "Find terms of a sequence" },
            { id: "P.2", title: "Find terms of a recursive sequence" },
            { id: "P.3", title: "Identify a sequence as explicit or recursive" },
            { id: "P.4", title: "Find a recursive formula" },
            { id: "P.5", title: "Find recursive and explicit formulas" },
            { id: "P.6", title: "Convert a recursive formula to an explicit formula" },
            { id: "P.7", title: "Convert an explicit formula to a recursive formula" },
            { id: "P.8", title: "Convert between explicit and recursive formulas" },
            { id: "P.9", title: "Introduction to sigma notation" },
            { id: "P.10", title: "Identify arithmetic and geometric series" },
            { id: "P.11", title: "Find the sum of a finite arithmetic or geometric series" },
            { id: "P.12", title: "Introduction to partial sums" },
            { id: "P.13", title: "Partial sums of arithmetic series" },
            { id: "P.14", title: "Partial sums of geometric series" },
            { id: "P.15", title: "Partial sums: mixed review" },
            { id: "P.16", title: "Convergent and divergent geometric series" },
            { id: "P.17", title: "Find the value of an infinite geometric series" },
            { id: "P.18", title: "Write a repeating decimal as a fraction" }
          ]
        },
        {
          id: "Q", title: "Probability",
          skills: [
            { id: "Q.1", title: "Introduction to probability" },
            { id: "Q.2", title: "Calculate probabilities of events" },
            { id: "Q.3", title: "Combinations and permutations" },
            { id: "Q.4", title: "Find probabilities using combinations and permutations" },
            { id: "Q.5", title: "Find probabilities using two-way frequency tables" },
            { id: "Q.6", title: "Identify independent events" },
            { id: "Q.7", title: "Find conditional probabilities" },
            { id: "Q.8", title: "Independence and conditional probability" },
            { id: "Q.9", title: "Find conditional probabilities using two-way frequency tables" },
            { id: "Q.10", title: "Find probabilities using the addition rule" }
          ]
        },
        {
          id: "R", title: "Probability distributions",
          skills: [
            { id: "R.1", title: "Identify discrete and continuous random variables" },
            { id: "R.2", title: "Write a discrete probability distribution" },
            { id: "R.3", title: "Graph a discrete probability distribution" },
            { id: "R.4", title: "Expected values of random variables" },
            { id: "R.5", title: "Variance of random variables" },
            { id: "R.6", title: "Standard deviation of random variables" },
            { id: "R.7", title: "Write the probability distribution for a game of chance" },
            { id: "R.8", title: "Expected values for a game of chance" },
            { id: "R.9", title: "Choose the better bet" },
            { id: "R.10", title: "Find probabilities using the binomial distribution" },
            { id: "R.11", title: "Mean, variance and standard deviation of binomial distributions" },
            { id: "R.12", title: "Find probabilities using the normal distribution I" },
            { id: "R.13", title: "Find probabilities using the normal distribution II" },
            { id: "R.14", title: "Find z-values" },
            { id: "R.15", title: "Find values of normal variables" },
            { id: "R.16", title: "Distributions of sample means" },
            { id: "R.17", title: "The Central Limit Theorem" },
            { id: "R.18", title: "Use normal distributions to approximate binomial distributions" }
          ]
        },
        {
          id: "S", title: "Statistics",
          skills: [
            { id: "S.1", title: "Identify biased samples" },
            { id: "S.2", title: "Variance and standard deviation" },
            { id: "S.3", title: "Identify an outlier" },
            { id: "S.4", title: "Identify an outlier and describe the effect of removing it" },
            { id: "S.5", title: "Outliers in scatter plots" },
            { id: "S.6", title: "Match correlation coefficients to scatter plots" },
            { id: "S.7", title: "Calculate correlation coefficients" },
            { id: "S.8", title: "Find the equation of a regression line" },
            { id: "S.9", title: "Interpret regression lines" },
            { id: "S.10", title: "Analyse a regression line of a data set" },
            { id: "S.11", title: "Analyse a regression line using statistics of a data set" },
            { id: "S.12", title: "Find confidence intervals for population means" },
            { id: "S.13", title: "Find confidence intervals for population proportions" }
          ]
        },
        {
          id: "T", title: "Introduction to derivatives",
          skills: [
            { id: "T.1", title: "Average rate of change I" },
            { id: "T.2", title: "Average rate of change II" },
            { id: "T.3", title: "Find instantaneous rates of change" },
            { id: "T.4", title: "Velocity as a rate of change" },
            { id: "T.5", title: "Find values of derivatives using limits" },
            { id: "T.6", title: "Find the gradient of a tangent line using limits" },
            { id: "T.7", title: "Find equations of tangent lines using limits" }
          ]
        },
        {
          id: "U", title: "Derivative rules",
          skills: [
            { id: "U.1", title: "Sum and difference rules" },
            { id: "U.2", title: "Product rule" },
            { id: "U.3", title: "Quotient rule" },
            { id: "U.4", title: "Power rule I" },
            { id: "U.5", title: "Power rule II" },
            { id: "U.6", title: "Chain rule" },
            { id: "U.7", title: "Inverse function rule" }
          ]
        },
        {
          id: "V", title: "Calculate derivatives",
          skills: [
            { id: "V.1", title: "Find derivatives of polynomials" },
            { id: "V.2", title: "Find derivatives of rational functions" },
            { id: "V.3", title: "Find derivatives of trigonometric functions I" },
            { id: "V.4", title: "Find derivatives of trigonometric functions II" },
            { id: "V.5", title: "Find derivatives of exponential functions" },
            { id: "V.6", title: "Find derivatives of logarithmic functions" },
            { id: "V.7", title: "Find derivatives of inverse trigonometric functions" },
            { id: "V.8", title: "Find derivatives of radical functions" },
            { id: "V.9", title: "Find derivatives using the product rule I" },
            { id: "V.10", title: "Find derivatives using the product rule II" },
            { id: "V.11", title: "Find derivatives using the quotient rule I" },
            { id: "V.12", title: "Find derivatives using the quotient rule II" },
            { id: "V.13", title: "Find derivatives using the chain rule I" },
            { id: "V.14", title: "Find derivatives using the chain rule II" }
          ]
        },
        {
          id: "W", title: "Derivative strategies",
          skills: [
            { id: "W.1", title: "Find derivatives using implicit differentiation" },
            { id: "W.2", title: "Find tangent lines using implicit differentiation" },
            { id: "W.3", title: "Find derivatives using logarithmic differentiation" }
          ]
        },
        {
          id: "X", title: "Calculate higher derivatives",
          skills: [
            { id: "X.1", title: "Find higher derivatives of polynomials" },
            { id: "X.2", title: "Find higher derivatives of rational and radical functions" },
            { id: "X.3", title: "Find second derivatives of trigonometric, exponential and logarithmic functions" },
            { id: "X.4", title: "Find higher derivatives using patterns" }
          ]
        },
        {
          id: "Y", title: "Rates of change",
          skills: [
            { id: "Y.1", title: "Relate position, velocity, speed and acceleration using derivatives" },
            { id: "Y.2", title: "Introduction to related rates" }
          ]
        },
        {
          id: "Z", title: "L'Hospital's rule",
          skills: [
            { id: "Z.1", title: "L'Hospital's rule: indeterminate forms involving quotients" }
          ]
        },
        {
          id: "AA", title: "Analyse functions using the first derivative",
          skills: [
            { id: "AA.1", title: "Mean Value Theorem" },
            { id: "AA.2", title: "Find absolute extrema on a closed interval" },
            { id: "AA.3", title: "Identify the graph of the derivative from the graph of the function" }
          ]
        },
        {
          id: "BB", title: "Analyse functions using the second derivative",
          skills: [
            { id: "BB.1", title: "Identify the graph of the second derivative from the graph of the function" }
          ]
        },
        {
          id: "CC", title: "Optimisation",
          skills: [
            { id: "CC.1", title: "Introduction to optimisation" }
          ]
        },
        {
          id: "DD", title: "Linear approximation",
          skills: [
            { id: "DD.1", title: "Linear approximation" }
          ]
        },
        {
          id: "EE", title: "Introduction to integration",
          skills: [
            { id: "EE.1", title: "Approximate the area under a curve: left and right endpoints" },
            { id: "EE.2", title: "Approximate the area under a curve: midpoints" },
            { id: "EE.3", title: "Approximate the area under a curve: trapeziums" },
            { id: "EE.4", title: "Definite integrals and net area" },
            { id: "EE.5", title: "Evaluate definite integrals using graphs" },
            { id: "EE.6", title: "Properties of definite integrals" }
          ]
        },
        {
          id: "FF", title: "Fundamental Theorem of Calculus",
          skills: [
            { id: "FF.1", title: "Fundamental Theorem of Calculus, Part 1" },
            { id: "FF.2", title: "Fundamental Theorem of Calculus, Part 2" }
          ]
        },
        {
          id: "GG", title: "Antiderivatives and indefinite integrals",
          skills: [
            { id: "GG.1", title: "Find antiderivatives" },
            { id: "GG.2", title: "Find indefinite integrals using the power rule" },
            { id: "GG.3", title: "Find indefinite integrals involving exponential and logarithmic functions" },
            { id: "GG.4", title: "Find indefinite integrals involving trigonometric functions" },
            { id: "GG.5", title: "Find indefinite integrals: mixed review" }
          ]
        },
        {
          id: "HH", title: "Definite integrals",
          skills: [
            { id: "HH.1", title: "Evaluate definite integrals using the power rule" },
            { id: "HH.2", title: "Evaluate definite integrals involving exponential and logarithmic functions" },
            { id: "HH.3", title: "Evaluate definite integrals involving trigonometric functions" },
            { id: "HH.4", title: "Evaluate definite integrals: mixed review" }
          ]
        },
        {
          id: "II", title: "Differential equations",
          skills: [
            { id: "II.1", title: "Solve first-order initial value problems" }
          ]
        },
        {
          id: "JJ", title: "Applications of integration",
          skills: [
            { id: "JJ.1", title: "Average value of a function" }
          ]
        }
      ],
    },
  },
};