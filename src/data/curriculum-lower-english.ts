import { SubjectData } from "./curriculum";

export const lowerEnglishData: Record<string, Record<string, SubjectData>> = {
  
  // ==============================================================
  // RECEPTION ENGLISH (Full Curriculum A-X)
  // ==============================================================
  reception: {
    english: {
      title: "Reception English",
      description: "Reading foundations, phonics, vocabulary, and early reading strategies.",
      stats: { skills: 200, videos: 150, games: 80 },
      topics: [
        {
          id: "A", title: "Letter identification",
          skills: [
            { id: "A.1", title: "Find the letter in the alphabet: uppercase" },
            { id: "A.2", title: "Find the letter in the alphabet: lowercase" },
            { id: "A.3", title: "Choose the letter that you hear: uppercase" },
            { id: "A.4", title: "Choose the letter that you hear: lowercase" },
            { id: "A.5", title: "Frequently confused letters: find the letter" },
            { id: "A.6", title: "Frequently confused letters: find all the letters" }
          ]
        },
        {
          id: "B", title: "Lowercase and uppercase letters",
          skills: [
            { id: "B.1", title: "Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z" },
            { id: "B.2", title: "Choose the lowercase letter that matches: f, i, j, l, m, t, y" },
            { id: "B.3", title: "Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r" },
            { id: "B.4", title: "Find all the lowercase letters" },
            { id: "B.5", title: "Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z" },
            { id: "B.6", title: "Choose the uppercase letter that matches: F, I, J, L, M, T, Y" },
            { id: "B.7", title: "Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R" },
            { id: "B.8", title: "Find all the uppercase letters" }
          ]
        },
        {
          id: "C", title: "Word recognition",
          skills: [
            { id: "C.1", title: "Choose the two words that are the same" },
            { id: "C.2", title: "Choose the sentence that is spaced correctly" },
            { id: "C.3", title: "Find a word in a sentence" }
          ]
        },
        {
          id: "D", title: "Rhyming",
          skills: [
            { id: "D.1", title: "Which word has the same ending?" },
            { id: "D.2", title: "Which two words have the same ending?" },
            { id: "D.3", title: "Choose the picture that rhymes with the word" }
          ]
        },
        {
          id: "E", title: "Blending and segmenting",
          skills: [
            { id: "E.1", title: "Blend onset and rime together to make a word" },
            { id: "E.2", title: "Blend each sound in a word together" },
            { id: "E.3", title: "Identify the first sound in a word" },
            { id: "E.4", title: "Put the sounds in order" }
          ]
        },
        {
          id: "F", title: "Beginning and ending sounds",
          skills: [
            { id: "F.1", title: "Which two words start with the same sound?" },
            { id: "F.2", title: "Which two words end with the same sound?" },
            { id: "F.3", title: "Which word ends with the same sound?" }
          ]
        },
        {
          id: "G", title: "Letter-sound associations: uppercase",
          skills: [
            { id: "G.1", title: "Choose the letter that matches the consonant sound: B, D, J, K, P, T, V, Z" },
            { id: "G.2", title: "Choose the letter that matches the consonant sound: F, L, M, N, R, S" },
            { id: "G.3", title: "Choose the letter that matches the consonant sound: C, G, H, W" },
            { id: "G.4", title: "Choose the uppercase letter that matches the consonant sound: review" }
          ]
        },
        {
          id: "H", title: "Letter-sound associations: lowercase",
          skills: [
            { id: "H.1", title: "Find the word that begins with a given sound" },
            { id: "H.2", title: "Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z" },
            { id: "H.3", title: "Choose the letter that matches the consonant sound: f, l, m, n, r, s" },
            { id: "H.4", title: "Choose the letter that matches the consonant sound: c, g, h, w" },
            { id: "H.5", title: "Choose the lowercase letter that matches the consonant sound: review" }
          ]
        },
        {
          id: "I", title: "Short a",
          skills: [
            { id: "I.1", title: "Find the short a word" },
            { id: "I.2", title: "Choose the short a word that matches the picture: lowercase" }
          ]
        },
        {
          id: "J", title: "Short e",
          skills: [
            { id: "J.1", title: "Find the short e word" },
            { id: "J.2", title: "Choose the picture that matches the short e word: lowercase" }
          ]
        },
        {
          id: "K", title: "Short i",
          skills: [
            { id: "K.1", title: "Find the short i word" },
            { id: "K.2", title: "Choose the short i word that matches the picture: lowercase" }
          ]
        },
        {
          id: "L", title: "Short o",
          skills: [
            { id: "L.1", title: "Find the short o word" },
            { id: "L.2", title: "Choose the short o word that matches the picture: lowercase" }
          ]
        },
        {
          id: "M", title: "Short u",
          skills: [
            { id: "M.1", title: "Find the short u word" },
            { id: "M.2", title: "Choose the picture that matches the short u word: lowercase" }
          ]
        },
        {
          id: "N", title: "Sight words",
          skills: [
            { id: "N.1", title: "Choose the two sight words that are the same" },
            { id: "N.2", title: "Read sight words set 1: a, in, run, the, you" },
            { id: "N.3", title: "Read sight words set 2: and, had, is, let, to" },
            { id: "N.4", title: "Read sight words set 3: at, for, I, one, said" },
            { id: "N.5", title: "Read sight words: review sets 1, 2, 3" },
            { id: "N.6", title: "Read sight words set 4: can, it, not, up, yes" },
            { id: "N.7", title: "Read sight words set 5: an, do, jump, look, make" },
            { id: "N.8", title: "Read sight words set 6: down, go, out, so, two" },
            { id: "N.9", title: "Read sight words: review sets 4, 5, 6" },
            { id: "N.10", title: "Read sight words set 7: find, my, no, red, see" },
            { id: "N.11", title: "Read sight words set 8: come, funny, little, me, sit" },
            { id: "N.12", title: "Read sight words set 9: big, help, play, three, yellow" },
            { id: "N.13", title: "Read sight words set 10: away, blue, here, us, where" },
            { id: "N.14", title: "Read sight words: review sets 7, 8, 9, 10" },
            { id: "N.15", title: "Read sight words: review sets 1–10" }
          ]
        },
        {
          id: "O", title: "Text features",
          skills: [
            { id: "O.1", title: "Identify book parts and features" }
          ]
        },
        {
          id: "P", title: "Reality vs fiction",
          skills: [
            { id: "P.1", title: "Which could happen in real life?" }
          ]
        },
        {
          id: "Q", title: "Inference and analysis",
          skills: [
            { id: "Q.1", title: "Which feeling matches the picture?" },
            { id: "Q.2", title: "What will happen next?" }
          ]
        },
        {
          id: "R", title: "Colour and number words",
          skills: [
            { id: "R.1", title: "Use colour words" },
            { id: "R.2", title: "Use number words: one to five" },
            { id: "R.3", title: "Use number words: six to ten" },
            { id: "R.4", title: "Use number words: one to ten" }
          ]
        },
        {
          id: "S", title: "Nouns",
          skills: [
            { id: "S.1", title: "Choose the singular or plural noun that matches the picture" }
          ]
        },
        {
          id: "T", title: "Verbs",
          skills: [
            { id: "T.1", title: "Find the picture that matches the action verb" }
          ]
        },
        {
          id: "U", title: "Adjectives",
          skills: [
            { id: "U.1", title: "Compare pictures using adjectives" }
          ]
        },
        {
          id: "V", title: "Location words",
          skills: [
            { id: "V.1", title: "Inside and outside" },
            { id: "V.2", title: "Above and below" },
            { id: "V.3", title: "Next to and beside" }
          ]
        },
        {
          id: "W", title: "Antonyms",
          skills: [
            { id: "W.1", title: "Match antonyms to pictures" }
          ]
        },
        {
          id: "X", title: "Categories",
          skills: [
            { id: "X.1", title: "Sort objects into categories" },
            { id: "X.2", title: "Which one is not like the others?" }
          ]
        }
      ]
    }
  },

  // === YEAR 1 (Existing) ===
 // ==============================================================
  // YEAR 1 ENGLISH (Full Curriculum A-HH)
  // ==============================================================
  "1": {
    english: {
      title: "Year 1 English",
      description: "Reading foundations, grammar, vocabulary, and reading strategies.",
      stats: { skills: 450, videos: 300, games: 100 },
      topics: [
        {
          id: "A", title: "Letter identification",
          skills: [
            { id: "A.1", title: "Find the letter in the alphabet: uppercase" },
            { id: "A.2", title: "Find the letter in the alphabet: lowercase" },
            { id: "A.3", title: "Choose the letter that you hear: uppercase" },
            { id: "A.4", title: "Choose the letter that you hear: lowercase" },
            { id: "A.5", title: "Frequently confused letters: find the letter" },
            { id: "A.6", title: "Frequently confused letters: find all the letters" }
          ]
        },
        {
          id: "B", title: "Lowercase and uppercase letters",
          skills: [
            { id: "B.1", title: "Choose the lowercase letter that matches: c, k, o, p, s, u, v, w, x, z" },
            { id: "B.2", title: "Choose the lowercase letter that matches: f, i, j, l, m, t, y" },
            { id: "B.3", title: "Choose the lowercase letter that matches: a, b, d, e, g, h, n, q, r" },
            { id: "B.4", title: "Choose the lowercase letter that matches: review" },
            { id: "B.5", title: "Find the lowercase letters" },
            { id: "B.6", title: "Choose the uppercase letter that matches: C, K, O, P, S, U, V, W, X, Z" },
            { id: "B.7", title: "Choose the uppercase letter that matches: F, I, J, L, M, T, Y" },
            { id: "B.8", title: "Choose the uppercase letter that matches: A, B, D, E, G, H, N, Q, R" },
            { id: "B.9", title: "Choose the uppercase letter that matches: review" },
            { id: "B.10", title: "Find the uppercase letters" },
            { id: "B.11", title: "Put the letters in ABC order" }
          ]
        },
        {
          id: "C", title: "Word recognition",
          skills: [
            { id: "C.1", title: "Choose the two words that are the same" },
            { id: "C.2", title: "Choose the sentence that is spaced correctly" },
            { id: "C.3", title: "Find a word in a sentence" }
          ]
        },
        {
          id: "D", title: "Consonants and vowels",
          skills: [
            { id: "D.1", title: "Sort consonants and vowels" },
            { id: "D.2", title: "Find the vowel in the word" }
          ]
        },
        {
          id: "E", title: "Syllables",
          skills: [
            { id: "E.1", title: "How many syllables does the word have?" },
            { id: "E.2", title: "Which word has more syllables?" },
            { id: "E.3", title: "Sort by the number of syllables" }
          ]
        },
        {
          id: "F", title: "Rhyming",
          skills: [
            { id: "F.1", title: "Which word has the same ending?" },
            { id: "F.2", title: "Which two words have the same ending?" },
            { id: "F.3", title: "Choose the picture that rhymes with the word" },
            { id: "F.4", title: "Which word does not rhyme?" },
            { id: "F.5", title: "Complete the rhyme" }
          ]
        },
        {
          id: "G", title: "Blending and segmenting",
          skills: [
            { id: "G.1", title: "Blend onset and rime together to make a word" },
            { id: "G.2", title: "Blend each sound in a word together" },
            { id: "G.3", title: "Identify the first, second and last sound in a word" },
            { id: "G.4", title: "Put the sounds in order" }
          ]
        },
        {
          id: "H", title: "Beginning and ending sounds",
          skills: [
            { id: "H.1", title: "Which two words start with the same sound?" },
            { id: "H.2", title: "Which word ends with the same sound?" },
            { id: "H.3", title: "Which two words end with the same sound?" }
          ]
        },
        {
          id: "I", title: "Letter-sound associations",
          skills: [
            { id: "I.1", title: "Find the words that begin with a given sound" },
            { id: "I.2", title: "Choose the letter that matches the consonant sound: b, d, j, k, p, t, v, z" },
            { id: "I.3", title: "Choose the letter that matches the consonant sound: f, l, m, n, r, s" },
            { id: "I.4", title: "Choose the letter that matches the consonant sound: c, g, h, w" },
            { id: "I.5", title: "Choose the letter that matches the consonant sound: review" },
            { id: "I.6", title: "Which letter does the word start with?" },
            { id: "I.7", title: "Which letter does the word end with?" }
          ]
        },
        {
          id: "J", title: "Consonant blends and digraphs",
          skills: [
            { id: "J.1", title: "Which consonant blend does the word start with?" },
            { id: "J.2", title: "Complete the word with the right initial consonant blend" },
            { id: "J.3", title: "Does the word start with a consonant blend?" },
            { id: "J.4", title: "Which consonant blend does the word end with?" },
            { id: "J.5", title: "Complete the word with the right final consonant blend" },
            { id: "J.6", title: "Does the word end with a consonant blend?" },
            { id: "J.7", title: "Choose the word that matches the picture: -ss, -ll, -ff, -zz, -ck" },
            { id: "J.8", title: "Choose the correct digraph" }
          ]
        },
        {
          id: "K", title: "Short a",
          skills: [
            { id: "K.1", title: "Find the short a word" },
            { id: "K.2", title: "Choose the short a word that matches the picture" },
            { id: "K.3", title: "Complete the short a word" },
            { id: "K.4", title: "Choose the short a sentence that matches the picture" }
          ]
        },
        {
          id: "L", title: "Short e",
          skills: [
            { id: "L.1", title: "Find the short e word" },
            { id: "L.2", title: "Choose the picture that matches the short e word" },
            { id: "L.3", title: "Complete the short e word" },
            { id: "L.4", title: "Choose the short e sentence that matches the picture" }
          ]
        },
        {
          id: "M", title: "Short i",
          skills: [
            { id: "M.1", title: "Find the short i word" },
            { id: "M.2", title: "Choose the short i word that matches the picture" },
            { id: "M.3", title: "Complete the short i words" },
            { id: "M.4", title: "Choose the short i sentence that matches the picture" }
          ]
        },
        {
          id: "N", title: "Short o",
          skills: [
            { id: "N.1", title: "Find the short o word" },
            { id: "N.2", title: "Choose the short o word that matches the picture" },
            { id: "N.3", title: "Complete the short o word" },
            { id: "N.4", title: "Choose the short o sentence that matches the picture" }
          ]
        },
        {
          id: "O", title: "Short u",
          skills: [
            { id: "O.1", title: "Find the short u word" },
            { id: "O.2", title: "Choose the picture that matches the short u word" },
            { id: "O.3", title: "Complete the short u word" },
            { id: "O.4", title: "Choose the short u sentence that matches the picture" }
          ]
        },
        {
          id: "P", title: "Short vowels",
          skills: [
            { id: "P.1", title: "Identify the short vowel sound in a word" },
            { id: "P.2", title: "Complete the word with the right short vowel" },
            { id: "P.3", title: "Spell the short vowel word" },
            { id: "P.4", title: "Complete the sentence with the correct short vowel word" },
            { id: "P.5", title: "Read questions with short vowel words" }
          ]
        },
        {
          id: "Q", title: "Long vowels",
          skills: [
            { id: "Q.1", title: "Find the word with the same vowel sound" },
            { id: "Q.2", title: "Which two words have the same vowel sound?" },
            { id: "Q.3", title: "Find the long a word" },
            { id: "Q.4", title: "Find the long e word" },
            { id: "Q.5", title: "Find the long i word" },
            { id: "Q.6", title: "Find the long o word" },
            { id: "Q.7", title: "Find the long u word" },
            { id: "Q.8", title: "Sort short and long vowel words" }
          ]
        },
        {
          id: "R", title: "Sight words",
          skills: [
            { id: "R.1", title: "Choose the two sight words that are the same" },
            { id: "R.2", title: "Read sight words set 1: ate, he, of, that, was" },
            { id: "R.3", title: "Read sight words set 2: are, green, on, please, they" },
            { id: "R.4", title: "Read sight words set 3: be, have, or, pretty, this" },
            { id: "R.5", title: "Read sight words: review sets 1, 2, 3" },
            { id: "R.6", title: "Read sight words set 4: all, but, ride, saw, what" },
            { id: "R.7", title: "Read sight words set 5: about, like, she, under, we" },
            { id: "R.8", title: "Read sight words set 6: black, into, made, ran, white" },
            { id: "R.9", title: "Read sight words: review sets 4, 5, 6" },
            { id: "R.10", title: "Read sight words set 7: am, did, get, now, well" },
            { id: "R.11", title: "Read sight words set 8: fast, good, him, take, will" },
            { id: "R.12", title: "Read sight words set 9: came, going, say, too, with" },
            { id: "R.13", title: "Read sight words set 10: brown, does, eat, must, went" },
            { id: "R.14", title: "Read sight words: review sets 7, 8, 9, 10" },
            { id: "R.15", title: "Read sight words: review sets 1–10" },
            { id: "R.16", title: "Complete the sentence with the correct sight word" },
            { id: "R.17", title: "Spell the sight word" }
          ]
        },
        {
          id: "S", title: "Text features",
          skills: [
            { id: "S.1", title: "Identify book parts and features" }
          ]
        },
        {
          id: "T", title: "Reality vs fiction",
          skills: [
            { id: "T.1", title: "Which could happen in real life?" }
          ]
        },
        {
          id: "U", title: "Main idea",
          skills: [
            { id: "U.1", title: "What is the picture about?" }
          ]
        },
        {
          id: "V", title: "Inference and analysis",
          skills: [
            { id: "V.1", title: "Which feeling matches the picture?" },
            { id: "V.2", title: "What will happen next?" }
          ]
        },
        {
          id: "W", title: "Riddles",
          skills: [
            { id: "W.1", title: "What am I?" }
          ]
        },
        {
          id: "X", title: "Colour and number words",
          skills: [
            { id: "X.1", title: "Use number words: one to ten" },
            { id: "X.2", title: "Use colour words" }
          ]
        },
        {
          id: "Y", title: "Adjectives and verbs",
          skills: [
            { id: "Y.1", title: "Compare pictures using adjectives" },
            { id: "Y.2", title: "Find the picture that matches the action verb" }
          ]
        },
        {
          id: "Z", title: "Location words",
          skills: [
            { id: "Z.1", title: "Inside and outside, above and below, next to and beside" },
            { id: "Z.2", title: "Choose the best location word to match the picture" }
          ]
        },
        {
          id: "AA", title: "Question words",
          skills: [
            { id: "AA.1", title: "Who, what, when, where or why?" }
          ]
        },
        {
          id: "BB", title: "Synonyms and antonyms",
          skills: [
            { id: "BB.1", title: "Match antonyms to pictures" },
            { id: "BB.2", title: "Match synonyms" }
          ]
        },
        {
          id: "CC", title: "Categories",
          skills: [
            { id: "CC.1", title: "Sort objects into categories" },
            { id: "CC.2", title: "Which one is not like the others?" }
          ]
        },
        {
          id: "DD", title: "Multiple-meaning words",
          skills: [
            { id: "DD.1", title: "Multiple-meaning words with pictures" }
          ]
        },
        {
          id: "EE", title: "Sentences",
          skills: [
            { id: "EE.1", title: "Is it a telling sentence or an asking sentence?" },
            { id: "EE.2", title: "Identify and use end marks" },
            { id: "EE.3", title: "Find the complete sentence" },
            { id: "EE.4", title: "Unscramble the words to make a complete sentence" }
          ]
        },
        {
          id: "FF", title: "Capitalisation",
          skills: [
            { id: "FF.1", title: "Capitalise the first letter of a sentence" },
            { id: "FF.2", title: "Capitalise the pronoun 'I'" }
          ]
        },
        {
          id: "GG", title: "Nouns",
          skills: [
            { id: "GG.1", title: "Is the noun a person, animal, place or thing?" },
            { id: "GG.2", title: "Choose the singular or plural noun that matches the picture" }
          ]
        },
        {
          id: "HH", title: "Verbs",
          skills: [
            { id: "HH.1", title: "Find the action verb with images" },
            { id: "HH.2", title: "Find the action verb" },
            { id: "HH.3", title: "Complete the sentence with an action verb to match the picture" }
          ]
        }
      ]
    }
  },

  // === YEAR 2 (Existing) ===
  "2": {
    english: {
      title: "Year 2 English",
      description: "Reading foundations, grammar, vocabulary, and reading strategies.",
      stats: { skills: 450, videos: 300, games: 100 },
      topics: [
        {
          id: "A", title: "Consonants and vowels",
          skills: [
            { id: "A.1", title: "Sort consonants and vowels" },
            { id: "A.2", title: "Find the vowels in a word" }
          ]
        },
        {
          id: "B", title: "Syllables",
          skills: [
            { id: "B.1", title: "How many syllables does the word have?" },
            { id: "B.2", title: "Sort by the number of syllables" }
          ]
        },
        {
          id: "C", title: "Rhyming",
          skills: [
            { id: "C.1", title: "Choose the picture that rhymes with the word" },
            { id: "C.2", title: "Which word does not rhyme?" },
            { id: "C.3", title: "Complete the rhyme" },
            { id: "C.4", title: "Complete the poem with a word that rhymes" }
          ]
        },
        {
          id: "D", title: "Blending and segmenting",
          skills: [
            { id: "D.1", title: "Blend each sound in a word together" },
            { id: "D.2", title: "Identify each sound in a word" },
            { id: "D.3", title: "Put the sounds in order" }
          ]
        },
        {
          id: "E", title: "Consonant sounds and letters",
          skills: [
            { id: "E.1", title: "Which two words start with the same sound?" },
            { id: "E.2", title: "Which two words end with the same sound?" },
            { id: "E.3", title: "Which letter does the word start with?" },
            { id: "E.4", title: "Which letter does the word end with?" }
          ]
        },
        {
          id: "F", title: "Consonant blends and digraphs",
          skills: [
            { id: "F.1", title: "Complete the word with the right initial consonant blend" },
            { id: "F.2", title: "Does the word start with a consonant blend?" },
            { id: "F.3", title: "Complete the word with the right final consonant blend" },
            { id: "F.4", title: "Does the word end with a consonant blend?" },
            { id: "F.5", title: "Fill in the missing consonant blend" },
            { id: "F.6", title: "Complete the word to match the picture: -ss, -ll, -ff, -zz, -ck" },
            { id: "F.7", title: "Choose the correct digraph" },
            { id: "F.8", title: "Complete the word with the right digraph" },
            { id: "F.9", title: "Spell the digraph word" },
            { id: "F.10", title: "Sort by initial consonant blend or digraph" }
          ]
        },
        {
          id: "G", title: "Short a",
          skills: [
            { id: "G.1", title: "Choose the short a word that matches the picture" },
            { id: "G.2", title: "Complete the short a word" },
            { id: "G.3", title: "Choose the short a sentence that matches the picture" }
          ]
        },
        {
          id: "H", title: "Short e",
          skills: [
            { id: "H.1", title: "Choose the picture that matches the short e word" },
            { id: "H.2", title: "Complete the short e word" },
            { id: "H.3", title: "Choose the short e sentence that matches the picture" }
          ]
        },
        {
          id: "I", title: "Short i",
          skills: [
            { id: "I.1", title: "Choose the short i word that matches the picture" },
            { id: "I.2", title: "Complete the short i words" },
            { id: "I.3", title: "Choose the short i sentence that matches the picture" }
          ]
        },
        {
          id: "J", title: "Short o",
          skills: [
            { id: "J.1", title: "Choose the short o word that matches the picture" },
            { id: "J.2", title: "Complete the short o word" },
            { id: "J.3", title: "Choose the short o sentence that matches the picture" }
          ]
        },
        {
          id: "K", title: "Short u",
          skills: [
            { id: "K.1", title: "Choose the picture that matches the short u word" },
            { id: "K.2", title: "Complete the short u word" },
            { id: "K.3", title: "Choose the short u sentence that matches the picture" }
          ]
        },
        {
          id: "L", title: "Short vowels",
          skills: [
            { id: "L.1", title: "Identify the short vowel sound in a word" },
            { id: "L.2", title: "Complete the word with the right short vowel" },
            { id: "L.3", title: "Spell the short vowel word" },
            { id: "L.4", title: "Complete the sentence with the correct short vowel word" }
          ]
        },
        {
          id: "M", title: "Short and long vowel sounds",
          skills: [
            { id: "M.1", title: "Find the word with the same vowel sound" },
            { id: "M.2", title: "Which two words have the same vowel sound?" },
            { id: "M.3", title: "Sort short and long vowel words" }
          ]
        },
        {
          id: "N", title: "Silent e",
          skills: [
            { id: "N.1", title: "Choose the silent e word that matches the picture" },
            { id: "N.2", title: "Complete the silent e words" },
            { id: "N.3", title: "Spell the silent e word" },
            { id: "N.4", title: "Choose the silent e sentence that matches the picture" }
          ]
        },
        {
          id: "O", title: "Vowel digraphs",
          skills: [
            { id: "O.1", title: "Choose the picture that matches the vowel digraph word" },
            { id: "O.2", title: "Complete the vowel digraph words" },
            { id: "O.3", title: "Complete the word with the right vowel digraph" },
            { id: "O.4", title: "Choose the vowel digraph sentence that matches the picture" }
          ]
        },
        {
          id: "P", title: "Short and long vowel patterns",
          skills: [
            { id: "P.1", title: "Match the short a and long a words to pictures" },
            { id: "P.2", title: "Match the short e and long e words to pictures" },
            { id: "P.3", title: "Choose the short i or long i word that matches the picture" },
            { id: "P.4", title: "Choose the short o or long o word that matches the picture" },
            { id: "P.5", title: "Choose the short u or long u word that matches the picture" },
            { id: "P.6", title: "Use spelling patterns to sort long and short vowel words" }
          ]
        },
        {
          id: "Q", title: "Diphthongs: oi, oy, ou, ow",
          skills: [
            { id: "Q.1", title: "Choose the diphthong word that matches the picture" },
            { id: "Q.2", title: "Complete the word with the right diphthong: oi, oy, ou, ow" }
          ]
        },
        {
          id: "R", title: "Two-syllable words",
          skills: [
            { id: "R.1", title: "Put two syllables together to create a word: easier" },
            { id: "R.2", title: "Put two syllables together to create a word: harder" },
            { id: "R.3", title: "Complete the two-syllable words" },
            { id: "R.4", title: "Complete the sentence with a two-syllable word" }
          ]
        },
        {
          id: "S", title: "Sight words",
          skills: [
            { id: "S.1", title: "Read sight words set 1: again, each, from, may, stop, than, when" },
            { id: "S.2", title: "Read sight words set 2: after, best, gave, has, once, them, were" },
            { id: "S.3", title: "Read sight words set 3: as, by, four, her, more, some, think, way" },
            { id: "S.4", title: "Read sight words: review sets 1, 2, 3" },
            { id: "S.5", title: "Read sight words set 4: every, could, how, over, put, there, who" },
            { id: "S.6", title: "Read sight words set 5: ask, five, just, long, read, then, want" },
            { id: "S.7", title: "Read sight words set 6: any, give, his, new, open, sleep, wish" },
            { id: "S.8", title: "Read sight words set 7: also, fly, know, live, old, soon, why" },
            { id: "S.9", title: "Read sight words: review sets 4, 5, 6, 7" },
            { id: "S.10", title: "Read sight words: review sets 1–7" },
            { id: "S.11", title: "Complete the sentence with the correct sight word" },
            { id: "S.12", title: "Spell the sight word" }
          ]
        },
        {
          id: "T", title: "Reality vs fiction",
          skills: [
            { id: "T.1", title: "Which could happen in real life?" }
          ]
        },
        {
          id: "U", title: "Main idea",
          skills: [
            { id: "U.1", title: "What is the picture about?" }
          ]
        },
        {
          id: "V", title: "Inference and analysis",
          skills: [
            { id: "V.1", title: "Which feeling matches the picture?" },
            { id: "V.2", title: "What will happen next?" },
            { id: "V.3", title: "What am I?" },
            { id: "V.4", title: "Use actions and dialogue to understand characters" }
          ]
        },
        {
          id: "W", title: "Nouns and adjectives",
          skills: [
            { id: "W.1", title: "Complete the sentence with a noun to match the picture" },
            { id: "W.2", title: "Compare pictures using adjectives" },
            { id: "W.3", title: "Use number words" }
          ]
        },
        {
          id: "X", title: "Categories",
          skills: [
            { id: "X.1", title: "Sort words into categories" },
            { id: "X.2", title: "Which word is not like the others?" }
          ]
        },
        {
          id: "Y", title: "Synonyms and antonyms",
          skills: [
            { id: "Y.1", title: "Choose the synonyms" },
            { id: "Y.2", title: "Choose the antonyms" }
          ]
        },
        {
          id: "Z", title: "Multiple-meaning words",
          skills: [
            { id: "Z.1", title: "Multiple-meaning words with pictures" }
          ]
        },
        {
          id: "AA", title: "Shades of meaning",
          skills: [
            { id: "AA.1", title: "Find the words with related meanings" },
            { id: "AA.2", title: "Describe the difference between related words" },
            { id: "AA.3", title: "Order related words based on meaning" }
          ]
        },
        {
          id: "BB", title: "Prefixes and suffixes",
          skills: [
            { id: "BB.1", title: "Use words with prefixes and suffixes" },
            { id: "BB.2", title: "Understand words with prefixes and suffixes" }
          ]
        },
        {
          id: "CC", title: "Context clues",
          skills: [
            { id: "CC.1", title: "Use context to identify the meaning of a word" }
          ]
        },
        {
          id: "DD", title: "Reference skills",
          skills: [
            { id: "DD.1", title: "Put the letters in ABC order" },
            { id: "DD.2", title: "Put the words in ABC order" }
          ]
        },
        {
          id: "EE", title: "Sentences",
          skills: [
            { id: "EE.1", title: "Identify statements" },
            { id: "EE.2", title: "Identify questions" },
            { id: "EE.3", title: "Identify exclamations" },
            { id: "EE.4", title: "Identify commands" },
            { id: "EE.5", title: "Choose the right end mark" },
            { id: "EE.6", title: "Statement, question, command or exclamation?" },
            { id: "EE.7", title: "Who, what, when, where or why?" },
            { id: "EE.8", title: "Is it the naming or action part of the sentence?" },
            { id: "EE.9", title: "Find the complete sentences" },
            { id: "EE.10", title: "Complete the sentence" },
            { id: "EE.11", title: "Unscramble the words to make a complete sentence" }
          ]
        },
        {
          id: "FF", title: "Nouns",
          skills: [
            { id: "FF.1", title: "Is the noun a person, animal, place or thing?" },
            { id: "FF.2", title: "Select the nouns" },
            { id: "FF.3", title: "Identify nouns in a sentence" },
            { id: "FF.4", title: "Sort common and proper nouns" },
            { id: "FF.5", title: "Identify proper nouns" },
            { id: "FF.6", title: "Regular plurals: select the word that matches the picture" },
            { id: "FF.7", title: "Form regular plurals with -s and -es" },
            { id: "FF.8", title: "Use singular and plural nouns" },
            { id: "FF.9", title: "Irregular plurals: select the word that matches the picture" },
            { id: "FF.10", title: "Select the possessive noun that matches the picture" },
            { id: "FF.11", title: "Form the singular possessive" }
          ]
        },
        {
          id: "GG", title: "Pronouns",
          skills: [
            { id: "GG.1", title: "Choose between subject and object personal pronouns" },
            { id: "GG.2", title: "Choose the correct personal pronoun" },
            { id: "GG.3", title: "Complete the sentence with the correct personal pronoun" },
            { id: "GG.4", title: "Choose the correct possessive pronoun" },
            { id: "GG.5", title: "Use the correct possessive pronoun" }
          ]
        },
        {
          id: "HH", title: "Verbs",
          skills: [
            { id: "HH.1", title: "Complete the sentence with an action verb to match the picture" },
            { id: "HH.2", title: "Identify action verbs" },
            { id: "HH.3", title: "Use action verbs" }
          ]
        },
        {
          id: "II", title: "Subject-verb agreement",
          skills: [
            { id: "II.1", title: "One or more than one?" },
            { id: "II.2", title: "Complete the sentence with the best verb" },
            { id: "II.3", title: "Complete the sentence with the best subject" },
            { id: "II.4", title: "Pronoun-verb agreement: Complete the sentence with the best verb" },
            { id: "II.5", title: "Pronoun-verb agreement: Complete the sentence with the best subject" }
          ]
        },
        {
          id: "JJ", title: "Verb tense",
          skills: [
            { id: "JJ.1", title: "Select the sentence that tells about the present" },
            { id: "JJ.2", title: "Select the sentence that tells about the past" },
            { id: "JJ.3", title: "Select the sentence that tells about the future" },
            { id: "JJ.4", title: "Place sentences on a timeline" },
            { id: "JJ.5", title: "Form and use the regular past tense" },
            { id: "JJ.6", title: "Identify the irregular past tense" },
            { id: "JJ.7", title: "Place sentences with irregular verbs on a timeline" },
            { id: "JJ.8", title: "Complete the verb with the ending that you hear" },
            { id: "JJ.9", title: "Match the -ed and -ing sentences to the pictures" },
            { id: "JJ.10", title: "To be: use the correct present tense form" },
            { id: "JJ.11", title: "To be: use the correct past tense form" },
            { id: "JJ.12", title: "To be: use the correct form" },
            { id: "JJ.13", title: "To have: use the correct form" }
          ]
        },
        {
          id: "KK", title: "Articles",
          skills: [
            { id: "KK.1", title: "Use the correct article: a or an" },
            { id: "KK.2", title: "Identify articles" }
          ]
        },
        {
          id: "LL", title: "Adjectives",
          skills: [
            { id: "LL.1", title: "Use sense words" },
            { id: "LL.2", title: "Does the adjective tell you what kind or how many?" },
            { id: "LL.3", title: "Identify adjectives" },
            { id: "LL.4", title: "Compare pictures using comparative and superlative adjectives" },
            { id: "LL.5", title: "Identify comparative and superlative adjectives" },
            { id: "LL.6", title: "Does the adjective compare two or more than two?" }
          ]
        },
        {
          id: "MM", title: "Prepositions",
          skills: [
            { id: "MM.1", title: "Select the best preposition to match the picture" },
            { id: "MM.2", title: "Select the best preposition to complete the sentence" }
          ]
        },
        {
          id: "NN", title: "Linking words",
          skills: [
            { id: "NN.1", title: "Use conjunctions" },
            { id: "NN.2", title: "Identify time-order words" },
            { id: "NN.3", title: "Put the sentences in order" }
          ]
        },
        {
          id: "OO", title: "Contractions",
          skills: [
            { id: "OO.1", title: "Match the contractions" },
            { id: "OO.2", title: "Form pronoun-verb contractions" },
            { id: "OO.3", title: "Form contractions with 'not'" },
            { id: "OO.4", title: "Complete the sentence with the correct contraction" }
          ]
        },
        {
          id: "PP", title: "Capitalisation",
          skills: [
            { id: "PP.1", title: "Capitalise the names of people and pets" },
            { id: "PP.2", title: "Capitalise days and months" },
            { id: "PP.3", title: "Capitalise sentences and the pronoun 'I'" }
          ]
        }
      ]
    }
  },

  // === YEAR 3 (Existing) ===
  // ==============================================================

  "3": {
    english: {
      title: "Year 3 English",
      description: "Reading foundations, grammar, vocabulary, and reading strategies.",
      stats: { skills: 450, videos: 300, games: 100 },
      topics: [
        {
          id: "A", title: "Consonants and vowels",
          skills: [
            { id: "A.1", title: "Sort consonants and vowels" },
            { id: "A.2", title: "Find the vowels in a word" }
          ]
        },
        {
          id: "B", title: "Syllables",
          skills: [
            { id: "B.1", title: "How many syllables does the word have?" },
            { id: "B.2", title: "Sort by the number of syllables" }
          ]
        },
        {
          id: "C", title: "Rhyming",
          skills: [
            { id: "C.1", title: "Choose the picture that rhymes with the word" },
            { id: "C.2", title: "Which word does not rhyme?" },
            { id: "C.3", title: "Complete the rhyme" },
            { id: "C.4", title: "Complete the poem with a word that rhymes" }
          ]
        },
        {
          id: "D", title: "Blending and segmenting",
          skills: [
            { id: "D.1", title: "Blend each sound in a word together" },
            { id: "D.2", title: "Identify each sound in a word" },
            { id: "D.3", title: "Put the sounds in order" }
          ]
        },
        {
          id: "E", title: "Consonant sounds and letters",
          skills: [
            { id: "E.1", title: "Which two words start with the same sound?" },
            { id: "E.2", title: "Which two words end with the same sound?" },
            { id: "E.3", title: "Which letter does the word start with?" },
            { id: "E.4", title: "Which letter does the word end with?" }
          ]
        },
        {
          id: "F", title: "Consonant blends and digraphs",
          skills: [
            { id: "F.1", title: "Complete the word with the right initial consonant blend" },
            { id: "F.2", title: "Does the word start with a consonant blend?" },
            { id: "F.3", title: "Complete the word with the right final consonant blend" },
            { id: "F.4", title: "Does the word end with a consonant blend?" },
            { id: "F.5", title: "Fill in the missing consonant blend" },
            { id: "F.6", title: "Complete the word to match the picture: -ss, -ll, -ff, -zz, -ck" },
            { id: "F.7", title: "Choose the correct digraph" },
            { id: "F.8", title: "Complete the word with the right digraph" },
            { id: "F.9", title: "Spell the digraph word" },
            { id: "F.10", title: "Sort by initial consonant blend or digraph" }
          ]
        },
        {
          id: "G", title: "Short a",
          skills: [
            { id: "G.1", title: "Choose the short a word that matches the picture" },
            { id: "G.2", title: "Complete the short a word" },
            { id: "G.3", title: "Choose the short a sentence that matches the picture" }
          ]
        },
        {
          id: "H", title: "Short e",
          skills: [
            { id: "H.1", title: "Choose the picture that matches the short e word" },
            { id: "H.2", title: "Complete the short e word" },
            { id: "H.3", title: "Choose the short e sentence that matches the picture" }
          ]
        },
        {
          id: "I", title: "Short i",
          skills: [
            { id: "I.1", title: "Choose the short i word that matches the picture" },
            { id: "I.2", title: "Complete the short i words" },
            { id: "I.3", title: "Choose the short i sentence that matches the picture" }
          ]
        },
        {
          id: "J", title: "Short o",
          skills: [
            { id: "J.1", title: "Choose the short o word that matches the picture" },
            { id: "J.2", title: "Complete the short o word" },
            { id: "J.3", title: "Choose the short o sentence that matches the picture" }
          ]
        },
        {
          id: "K", title: "Short u",
          skills: [
            { id: "K.1", title: "Choose the picture that matches the short u word" },
            { id: "K.2", title: "Complete the short u word" },
            { id: "K.3", title: "Choose the short u sentence that matches the picture" }
          ]
        },
        {
          id: "L", title: "Short vowels",
          skills: [
            { id: "L.1", title: "Identify the short vowel sound in a word" },
            { id: "L.2", title: "Complete the word with the right short vowel" },
            { id: "L.3", title: "Spell the short vowel word" },
            { id: "L.4", title: "Complete the sentence with the correct short vowel word" }
          ]
        },
        {
          id: "M", title: "Short and long vowel sounds",
          skills: [
            { id: "M.1", title: "Find the word with the same vowel sound" },
            { id: "M.2", title: "Which two words have the same vowel sound?" },
            { id: "M.3", title: "Sort short and long vowel words" }
          ]
        },
        {
          id: "N", title: "Silent e",
          skills: [
            { id: "N.1", title: "Choose the silent e word that matches the picture" },
            { id: "N.2", title: "Complete the silent e words" },
            { id: "N.3", title: "Spell the silent e word" },
            { id: "N.4", title: "Choose the silent e sentence that matches the picture" }
          ]
        },
        {
          id: "O", title: "Vowel digraphs",
          skills: [
            { id: "O.1", title: "Choose the picture that matches the vowel digraph word" },
            { id: "O.2", title: "Complete the vowel digraph words" },
            { id: "O.3", title: "Complete the word with the right vowel digraph" },
            { id: "O.4", title: "Choose the vowel digraph sentence that matches the picture" }
          ]
        },
        {
          id: "P", title: "Short and long vowel patterns",
          skills: [
            { id: "P.1", title: "Match the short a and long a words to pictures" },
            { id: "P.2", title: "Match the short e and long e words to pictures" },
            { id: "P.3", title: "Choose the short i or long i word that matches the picture" },
            { id: "P.4", title: "Choose the short o or long o word that matches the picture" },
            { id: "P.5", title: "Choose the short u or long u word that matches the picture" },
            { id: "P.6", title: "Use spelling patterns to sort long and short vowel words" }
          ]
        },
        {
          id: "Q", title: "Diphthongs: oi, oy, ou, ow",
          skills: [
            { id: "Q.1", title: "Choose the diphthong word that matches the picture" },
            { id: "Q.2", title: "Complete the word with the right diphthong: oi, oy, ou, ow" }
          ]
        },
        {
          id: "R", title: "Two-syllable words",
          skills: [
            { id: "R.1", title: "Put two syllables together to create a word: easier" },
            { id: "R.2", title: "Put two syllables together to create a word: harder" },
            { id: "R.3", title: "Complete the two-syllable words" },
            { id: "R.4", title: "Complete the sentence with a two-syllable word" }
          ]
        },
        {
          id: "S", title: "Sight words",
          skills: [
            { id: "S.1", title: "Read sight words set 1: again, each, from, may, stop, than, when" },
            { id: "S.2", title: "Read sight words set 2: after, best, gave, has, once, them, were" },
            { id: "S.3", title: "Read sight words set 3: as, by, four, her, more, some, think, way" },
            { id: "S.4", title: "Read sight words: review sets 1, 2, 3" },
            { id: "S.5", title: "Read sight words set 4: every, could, how, over, put, there, who" },
            { id: "S.6", title: "Read sight words set 5: ask, five, just, long, read, then, want" },
            { id: "S.7", title: "Read sight words set 6: any, give, his, new, open, sleep, wish" },
            { id: "S.8", title: "Read sight words set 7: also, fly, know, live, old, soon, why" },
            { id: "S.9", title: "Read sight words: review sets 4, 5, 6, 7" },
            { id: "S.10", title: "Read sight words: review sets 1–7" },
            { id: "S.11", title: "Complete the sentence with the correct sight word" },
            { id: "S.12", title: "Spell the sight word" }
          ]
        },
        {
          id: "T", title: "Reality vs fiction",
          skills: [
            { id: "T.1", title: "Which could happen in real life?" }
          ]
        },
        {
          id: "U", title: "Main idea",
          skills: [
            { id: "U.1", title: "What is the picture about?" }
          ]
        },
        {
          id: "V", title: "Inference and analysis",
          skills: [
            { id: "V.1", title: "Which feeling matches the picture?" },
            { id: "V.2", title: "What will happen next?" },
            { id: "V.3", title: "What am I?" },
            { id: "V.4", title: "Use actions and dialogue to understand characters" }
          ]
        },
        {
          id: "W", title: "Nouns and adjectives",
          skills: [
            { id: "W.1", title: "Complete the sentence with a noun to match the picture" },
            { id: "W.2", title: "Compare pictures using adjectives" },
            { id: "W.3", title: "Use number words" }
          ]
        },
        {
          id: "X", title: "Categories",
          skills: [
            { id: "X.1", title: "Sort words into categories" },
            { id: "X.2", title: "Which word is not like the others?" }
          ]
        },
        {
          id: "Y", title: "Synonyms and antonyms",
          skills: [
            { id: "Y.1", title: "Choose the synonyms" },
            { id: "Y.2", title: "Choose the antonyms" }
          ]
        },
        {
          id: "Z", title: "Multiple-meaning words",
          skills: [
            { id: "Z.1", title: "Multiple-meaning words with pictures" }
          ]
        },
        {
          id: "AA", title: "Shades of meaning",
          skills: [
            { id: "AA.1", title: "Find the words with related meanings" },
            { id: "AA.2", title: "Describe the difference between related words" },
            { id: "AA.3", title: "Order related words based on meaning" }
          ]
        },
        {
          id: "BB", title: "Prefixes and suffixes",
          skills: [
            { id: "BB.1", title: "Use words with prefixes and suffixes" },
            { id: "BB.2", title: "Understand words with prefixes and suffixes" }
          ]
        },
        {
          id: "CC", title: "Context clues",
          skills: [
            { id: "CC.1", title: "Use context to identify the meaning of a word" }
          ]
        },
        {
          id: "DD", title: "Reference skills",
          skills: [
            { id: "DD.1", title: "Put the letters in ABC order" },
            { id: "DD.2", title: "Put the words in ABC order" }
          ]
        },
        {
          id: "EE", title: "Sentences",
          skills: [
            { id: "EE.1", title: "Identify statements" },
            { id: "EE.2", title: "Identify questions" },
            { id: "EE.3", title: "Identify exclamations" },
            { id: "EE.4", title: "Identify commands" },
            { id: "EE.5", title: "Choose the right end mark" },
            { id: "EE.6", title: "Statement, question, command or exclamation?" },
            { id: "EE.7", title: "Who, what, when, where or why?" },
            { id: "EE.8", title: "Is it the naming or action part of the sentence?" },
            { id: "EE.9", title: "Find the complete sentences" },
            { id: "EE.10", title: "Complete the sentence" },
            { id: "EE.11", title: "Unscramble the words to make a complete sentence" }
          ]
        },
        {
          id: "FF", title: "Nouns",
          skills: [
            { id: "FF.1", title: "Is the noun a person, animal, place or thing?" },
            { id: "FF.2", title: "Select the nouns" },
            { id: "FF.3", title: "Identify nouns in a sentence" },
            { id: "FF.4", title: "Sort common and proper nouns" },
            { id: "FF.5", title: "Identify proper nouns" },
            { id: "FF.6", title: "Regular plurals: select the word that matches the picture" },
            { id: "FF.7", title: "Form regular plurals with -s and -es" },
            { id: "FF.8", title: "Use singular and plural nouns" },
            { id: "FF.9", title: "Irregular plurals: select the word that matches the picture" },
            { id: "FF.10", title: "Select the possessive noun that matches the picture" },
            { id: "FF.11", title: "Form the singular possessive" }
          ]
        },
        {
          id: "GG", title: "Pronouns",
          skills: [
            { id: "GG.1", title: "Choose between subject and object personal pronouns" },
            { id: "GG.2", title: "Choose the correct personal pronoun" },
            { id: "GG.3", title: "Complete the sentence with the correct personal pronoun" },
            { id: "GG.4", title: "Choose the correct possessive pronoun" },
            { id: "GG.5", title: "Use the correct possessive pronoun" }
          ]
        },
        {
          id: "HH", title: "Verbs",
          skills: [
            { id: "HH.1", title: "Complete the sentence with an action verb to match the picture" },
            { id: "HH.2", title: "Identify action verbs" },
            { id: "HH.3", title: "Use action verbs" }
          ]
        },
        {
          id: "II", title: "Subject-verb agreement",
          skills: [
            { id: "II.1", title: "One or more than one?" },
            { id: "II.2", title: "Complete the sentence with the best verb" },
            { id: "II.3", title: "Complete the sentence with the best subject" },
            { id: "II.4", title: "Pronoun-verb agreement: Complete the sentence with the best verb" },
            { id: "II.5", title: "Pronoun-verb agreement: Complete the sentence with the best subject" }
          ]
        },
        {
          id: "JJ", title: "Verb tense",
          skills: [
            { id: "JJ.1", title: "Select the sentence that tells about the present" },
            { id: "JJ.2", title: "Select the sentence that tells about the past" },
            { id: "JJ.3", title: "Select the sentence that tells about the future" },
            { id: "JJ.4", title: "Place sentences on a timeline" },
            { id: "JJ.5", title: "Form and use the regular past tense" },
            { id: "JJ.6", title: "Identify the irregular past tense" },
            { id: "JJ.7", title: "Place sentences with irregular verbs on a timeline" },
            { id: "JJ.8", title: "Complete the verb with the ending that you hear" },
            { id: "JJ.9", title: "Match the -ed and -ing sentences to the pictures" },
            { id: "JJ.10", title: "To be: use the correct present tense form" },
            { id: "JJ.11", title: "To be: use the correct past tense form" },
            { id: "JJ.12", title: "To be: use the correct form" },
            { id: "JJ.13", title: "To have: use the correct form" }
          ]
        },
        {
          id: "KK", title: "Articles",
          skills: [
            { id: "KK.1", title: "Use the correct article: a or an" },
            { id: "KK.2", title: "Identify articles" }
          ]
        },
        {
          id: "LL", title: "Adjectives",
          skills: [
            { id: "LL.1", title: "Use sense words" },
            { id: "LL.2", title: "Does the adjective tell you what kind or how many?" },
            { id: "LL.3", title: "Identify adjectives" },
            { id: "LL.4", title: "Compare pictures using comparative and superlative adjectives" },
            { id: "LL.5", title: "Identify comparative and superlative adjectives" },
            { id: "LL.6", title: "Does the adjective compare two or more than two?" }
          ]
        },
        {
          id: "MM", title: "Prepositions",
          skills: [
            { id: "MM.1", title: "Select the best preposition to match the picture" },
            { id: "MM.2", title: "Select the best preposition to complete the sentence" }
          ]
        },
        {
          id: "NN", title: "Linking words",
          skills: [
            { id: "NN.1", title: "Use conjunctions" },
            { id: "NN.2", title: "Identify time-order words" },
            { id: "NN.3", title: "Put the sentences in order" }
          ]
        },
        {
          id: "OO", title: "Contractions",
          skills: [
            { id: "OO.1", title: "Match the contractions" },
            { id: "OO.2", title: "Form pronoun-verb contractions" },
            { id: "OO.3", title: "Form contractions with 'not'" },
            { id: "OO.4", title: "Complete the sentence with the correct contraction" }
          ]
        },
        {
          id: "PP", title: "Capitalisation",
          skills: [
            { id: "PP.1", title: "Capitalise the names of people and pets" },
            { id: "PP.2", title: "Capitalise days and months" },
            { id: "PP.3", title: "Capitalise sentences and the pronoun 'I'" }
          ]
        }
      ]
    }
  },

  // === YEAR 4 (Existing) ===
  // ==============================================================
  // YEAR 4 ENGLISH (Full Curriculum A-XX)
  // ==============================================================
  "4": {
    english: {
      title: "Year 4 English",
      description: "Reading foundations, strategies, vocabulary, grammar, and mechanics.",
      stats: { skills: 450, videos: 300, games: 100 },
      topics: [
        {
          id: "A", title: "Short and long vowels",
          skills: [
            { id: "A.1", title: "Use spelling patterns to sort long and short vowel words" },
            { id: "A.2", title: "Spell rhyming words to answer riddles" },
            { id: "A.3", title: "Spell the long a word: silent e, ai, ay, ea, ey, eigh" },
            { id: "A.4", title: "Spell the long e word: silent e, ee, ea, ie" },
            { id: "A.5", title: "Spell the long i word: silent e, ie, y, igh, ind, ild" },
            { id: "A.6", title: "Spell the long o word: silent e, oa, ow, old, ost, olt" },
            { id: "A.7", title: "Spell the long u word: silent e, ue, oo, ew, ui" }
          ]
        },
        {
          id: "B", title: "Blends",
          skills: [
            { id: "B.1", title: "Complete the word with a three-letter consonant blend" }
          ]
        },
        {
          id: "C", title: "Multisyllabic words",
          skills: [
            { id: "C.1", title: "Spell words with open and closed syllables" },
            { id: "C.2", title: "Spell consonant-l-e words" }
          ]
        },
        {
          id: "D", title: "Diphthongs and r vowel patterns",
          skills: [
            { id: "D.1", title: "Spell words with vowel diphthong patterns" },
            { id: "D.2", title: "Spell words with r vowel patterns" }
          ]
        },
        {
          id: "E", title: "Irregular words",
          skills: [
            { id: "E.1", title: "Spell the sight word" }
          ]
        },
        {
          id: "F", title: "Main idea",
          skills: [
            { id: "F.1", title: "Use key details to determine the main idea" },
            { id: "F.2", title: "Determine the main idea of a passage" }
          ]
        },
        {
          id: "G", title: "Theme",
          skills: [
            { id: "G.1", title: "Determine the themes of myths, fables and folktales" }
          ]
        },
        {
          id: "H", title: "Author's purpose",
          skills: [
            { id: "H.1", title: "Identify the author's purpose: mixed media" },
            { id: "H.2", title: "Identify the author's purpose: passages" }
          ]
        },
        {
          id: "I", title: "Text structure",
          skills: [
            { id: "I.1", title: "Determine the order of events in informational texts" },
            { id: "I.2", title: "Compare and contrast in informational texts" },
            { id: "I.3", title: "Match causes with effects" },
            { id: "I.4", title: "Match causes and effects in informational texts" },
            { id: "I.5", title: "Match problems with their solutions" },
            { id: "I.6", title: "Identify text structures" }
          ]
        },
        {
          id: "J", title: "Sensory details",
          skills: [
            { id: "J.1", title: "Sort sensory details" }
          ]
        },
        {
          id: "K", title: "Literary devices",
          skills: [
            { id: "K.1", title: "Determine the meanings of similes" }
          ]
        },
        {
          id: "L", title: "Point of view",
          skills: [
            { id: "L.1", title: "Distinguish points of view" }
          ]
        },
        {
          id: "M", title: "Inference",
          skills: [
            { id: "M.1", title: "Use actions and dialogue to understand characters" },
            { id: "M.2", title: "Draw inferences from a text" },
            { id: "M.3", title: "Make predictions about a story" }
          ]
        },
        {
          id: "N", title: "Story elements",
          skills: [
            { id: "N.1", title: "Identify story elements" }
          ]
        },
        {
          id: "O", title: "Visual elements",
          skills: [
            { id: "O.1", title: "Compare mythological illustrations" }
          ]
        },
        {
          id: "P", title: "Literary texts: level 1",
          skills: [
            { id: "P.1", title: "Read fantasy with illustrations" },
            { id: "P.2", title: "Read historical fiction with illustrations" },
            { id: "P.3", title: "Read science fiction with illustrations" },
            { id: "P.4", title: "Read realistic fiction with illustrations" }
          ]
        },
        {
          id: "Q", title: "Literary texts: level 2",
          skills: [
            { id: "Q.1", title: "Read realistic fiction: set 1" },
            { id: "Q.2", title: "Read realistic fiction: set 2" },
            { id: "Q.3", title: "Read poetry" }
          ]
        },
        {
          id: "R", title: "Informational texts: level 1",
          skills: [
            { id: "R.1", title: "Read about animals" },
            { id: "R.2", title: "Read about food" },
            { id: "R.3", title: "Read about art, music and traditions" },
            { id: "R.4", title: "Read about sports and hobbies" }
          ]
        },
        {
          id: "S", title: "Informational texts: level 2",
          skills: [
            { id: "S.1", title: "Read about famous people" },
            { id: "S.2", title: "Read about famous places" },
            { id: "S.3", title: "Read about business and technology" },
            { id: "S.4", title: "Read about science and nature" }
          ]
        },
        {
          id: "T", title: "Organising writing",
          skills: [
            { id: "T.1", title: "Put the sentences in order" },
            { id: "T.2", title: "Order items from most general to most specific" },
            { id: "T.3", title: "Organise information by topic" }
          ]
        },
        {
          id: "U", title: "Topic sentences",
          skills: [
            { id: "U.1", title: "Choose topic sentences for narrative paragraphs" },
            { id: "U.2", title: "Choose topic sentences for expository paragraphs" }
          ]
        },
        {
          id: "V", title: "Writer's purpose",
          skills: [
            { id: "V.1", title: "Choose the text that matches the writer's purpose" }
          ]
        },
        {
          id: "W", title: "Linking words",
          skills: [
            { id: "W.1", title: "Identify time-order words" },
            { id: "W.2", title: "Use time-order words" },
            { id: "W.3", title: "Use coordinating conjunctions" },
            { id: "W.4", title: "Use subordinating conjunctions" },
            { id: "W.5", title: "Choose the best transition" }
          ]
        },
        {
          id: "X", title: "Opinion writing",
          skills: [
            { id: "X.1", title: "Distinguish facts from opinions" },
            { id: "X.2", title: "Identify an author's statement of opinion" },
            { id: "X.3", title: "Choose reasons to support an opinion" },
            { id: "X.4", title: "Complete the opinion passage with an example" },
            { id: "X.5", title: "Complete the opinion passage with a reason" },
            { id: "X.6", title: "Complete the opinion-reason-example table" }
          ]
        },
        {
          id: "Y", title: "Descriptive details",
          skills: [
            { id: "Y.1", title: "Add descriptive details to sentences" },
            { id: "Y.2", title: "Show character emotions and traits" },
            { id: "Y.3", title: "Revise the sentence using a stronger verb" }
          ]
        },
        {
          id: "Z", title: "Prefixes and suffixes",
          skills: [
            { id: "Z.1", title: "Identify base words, prefixes and suffixes" },
            { id: "Z.2", title: "Determine the meaning of a word with pre-, re- or mis-" },
            { id: "Z.3", title: "Use the prefixes pre-, re- and mis-" },
            { id: "Z.4", title: "Determine the meaning of a word with -ful or -less" },
            { id: "Z.5", title: "Determine the meaning of a word with -ly or -ness" },
            { id: "Z.6", title: "Determine the meaning of a word with -able or -ment" },
            { id: "Z.7", title: "Determine the meaning of a word with a suffix: review" },
            { id: "Z.8", title: "Determine the meanings of words with prefixes and suffixes: review" }
          ]
        },
        {
          id: "AA", title: "Greek and Latin roots",
          skills: [
            { id: "AA.1", title: "Use Greek and Latin roots as clues to the meanings of words" },
            { id: "AA.2", title: "Determine the meanings of Greek and Latin roots" },
            { id: "AA.3", title: "Determine the meanings of words with Greek and Latin roots" }
          ]
        },
        {
          id: "BB", title: "Compound words",
          skills: [
            { id: "BB.1", title: "Form compound words" },
            { id: "BB.2", title: "Form and use compound words" }
          ]
        },
        {
          id: "CC", title: "Categories",
          skills: [
            { id: "CC.1", title: "Select the members of a group" },
            { id: "CC.2", title: "Select the words that don't belong" }
          ]
        },
        {
          id: "DD", title: "Synonyms and antonyms",
          skills: [
            { id: "DD.1", title: "Choose the synonym" },
            { id: "DD.2", title: "Which sentence has the same meaning?" },
            { id: "DD.3", title: "Find synonyms in context" },
            { id: "DD.4", title: "Choose the antonym" },
            { id: "DD.5", title: "Which sentence uses an antonym?" },
            { id: "DD.6", title: "Find antonyms in context" }
          ]
        },
        {
          id: "EE", title: "Homophones",
          skills: [
            { id: "EE.1", title: "Homophones with pictures" },
            { id: "EE.2", title: "Identify homophones" },
            { id: "EE.3", title: "Use the correct homophone" }
          ]
        },
        {
          id: "FF", title: "Multiple-meaning words",
          skills: [
            { id: "FF.1", title: "Which definition matches the sentence?" },
            { id: "FF.2", title: "Which sentence matches the definition?" }
          ]
        },
        {
          id: "GG", title: "Shades of meaning",
          skills: [
            { id: "GG.1", title: "Describe the difference between related words" },
            { id: "GG.2", title: "Positive and negative connotation" }
          ]
        },
        {
          id: "HH", title: "Idioms",
          skills: [
            { id: "HH.1", title: "Choose the picture that matches the idiomatic expression" }
          ]
        },
        {
          id: "II", title: "Context clues",
          skills: [
            { id: "II.1", title: "Determine the meaning of words using synonyms in context" },
            { id: "II.2", title: "Use context to identify the meaning of a word" }
          ]
        },
        {
          id: "JJ", title: "Reference skills",
          skills: [
            { id: "JJ.1", title: "Order alphabetically based on the first letter" },
            { id: "JJ.2", title: "Order alphabetically based on the first two letters" },
            { id: "JJ.3", title: "Order alphabetically based on the first three letters" },
            { id: "JJ.4", title: "Order alphabetically: challenge" },
            { id: "JJ.5", title: "Use guide words" },
            { id: "JJ.6", title: "Use dictionary entries" },
            { id: "JJ.7", title: "Use dictionary definitions" }
          ]
        },
        {
          id: "KK", title: "Sentences, fragments and run-ons",
          skills: [
            { id: "KK.1", title: "Is the sentence a statement, question, command or exclamation?" },
            { id: "KK.2", title: "Identify the complete subject of a sentence" },
            { id: "KK.3", title: "Identify the complete predicate of a sentence" },
            { id: "KK.4", title: "Identify the simple subject or predicate of a sentence" },
            { id: "KK.5", title: "Is it a complete sentence or a fragment?" },
            { id: "KK.6", title: "Is it a complete sentence or a run-on?" },
            { id: "KK.7", title: "Is it a complete sentence, a fragment or a run-on?" },
            { id: "KK.8", title: "Is the sentence simple or compound?" },
            { id: "KK.9", title: "Order the words to create a sentence" }
          ]
        },
        {
          id: "LL", title: "Nouns",
          skills: [
            { id: "LL.1", title: "Which word is a noun?" },
            { id: "LL.2", title: "Identify nouns" },
            { id: "LL.3", title: "Identify nouns – with abstract nouns" },
            { id: "LL.4", title: "Identify common and proper nouns" },
            { id: "LL.5", title: "Form regular plurals with -s, -es and -ies" },
            { id: "LL.6", title: "Use regular plurals with -s, -es and -ies" },
            { id: "LL.7", title: "Is the noun singular or plural?" },
            { id: "LL.8", title: "Form and use irregular plurals" },
            { id: "LL.9", title: "Identify plurals, singular possessives and plural possessives" },
            { id: "LL.10", title: "Form the singular or plural possessive" },
            { id: "LL.11", title: "Identify and correct errors with plural and possessive nouns" }
          ]
        },
        {
          id: "MM", title: "Pronouns",
          skills: [
            { id: "MM.1", title: "Identify personal pronouns" },
            { id: "MM.2", title: "Choose between subject and object personal pronouns" },
            { id: "MM.3", title: "Replace the noun with a personal pronoun" },
            { id: "MM.4", title: "Compound subjects and objects with 'I' and 'me'" },
            { id: "MM.5", title: "Identify possessive pronouns" },
            { id: "MM.6", title: "Use possessive pronouns" },
            { id: "MM.7", title: "Choose between personal and reflexive pronouns" },
            { id: "MM.8", title: "Use reflexive pronouns" }
          ]
        },
        {
          id: "NN", title: "Verb types",
          skills: [
            { id: "NN.1", title: "Use action verbs" },
            { id: "NN.2", title: "Identify action verbs" },
            { id: "NN.3", title: "Identify main verbs and helping verbs" }
          ]
        },
        {
          id: "OO", title: "Subject-verb agreement",
          skills: [
            { id: "OO.1", title: "Is the subject singular or plural?" },
            { id: "OO.2", title: "Use the correct subject or verb" },
            { id: "OO.3", title: "Pronoun-verb agreement" }
          ]
        },
        {
          id: "PP", title: "Verb tense",
          skills: [
            { id: "PP.1", title: "Which sentence is in the regular past tense?" },
            { id: "PP.2", title: "Identify verbs in the regular past tense" },
            { id: "PP.3", title: "Form and use the regular past tense" },
            { id: "PP.4", title: "Identify the irregular past tense I" },
            { id: "PP.5", title: "Identify the irregular past tense II" },
            { id: "PP.6", title: "Form and use the irregular past tense: set 1" },
            { id: "PP.7", title: "Form and use the irregular past tense: set 2" },
            { id: "PP.8", title: "Form and use the irregular past tense: set 3" },
            { id: "PP.9", title: "Form and use the irregular past tense: set 4" },
            { id: "PP.10", title: "Form and use the irregular past tense: set 5" },
            { id: "PP.11", title: "To be: use the correct form" },
            { id: "PP.12", title: "To have: use the correct form" },
            { id: "PP.13", title: "Is the sentence in the past, present or future tense?" },
            { id: "PP.14", title: "Change the sentence to future tense" }
          ]
        },
        {
          id: "QQ", title: "Articles",
          skills: [
            { id: "QQ.1", title: "Use the correct article: a or an" },
            { id: "QQ.2", title: "Use the correct article: a, an or the" },
            { id: "QQ.3", title: "Identify articles" }
          ]
        },
        {
          id: "RR", title: "Adjectives and adverbs",
          skills: [
            { id: "RR.1", title: "Does the adjective tell you what kind or how many?" },
            { id: "RR.2", title: "Identify the adjective that describes the noun" },
            { id: "RR.3", title: "Identify adjectives" },
            { id: "RR.4", title: "Does the adverb tell you how, when or where?" },
            { id: "RR.5", title: "Identify adverbs" },
            { id: "RR.6", title: "Choose between adjectives and adverbs" },
            { id: "RR.7", title: "Is the word an adjective or adverb?" },
            { id: "RR.8", title: "Use adjectives to compare" },
            { id: "RR.9", title: "Spell adjectives that compare" },
            { id: "RR.10", title: "Use adverbs to compare" }
          ]
        },
        {
          id: "SS", title: "Prepositions",
          skills: [
            { id: "SS.1", title: "Identify prepositions" },
            { id: "SS.2", title: "Identify prepositions and their objects" },
            { id: "SS.3", title: "Identify prepositional phrases" },
            { id: "SS.4", title: "Prepositions: review" }
          ]
        },
        {
          id: "TT", title: "Conjunctions",
          skills: [
            { id: "TT.1", title: "Identify coordinating conjunctions" },
            { id: "TT.2", title: "Identify subordinating conjunctions" }
          ]
        },
        {
          id: "UU", title: "Contractions",
          skills: [
            { id: "UU.1", title: "Pronoun-verb contractions" },
            { id: "UU.2", title: "Contractions with 'not'" }
          ]
        },
        {
          id: "VV", title: "Commas",
          skills: [
            { id: "VV.1", title: "Commas with direct addresses and after introductory words" }
          ]
        },
        {
          id: "WW", title: "Capitalisation",
          skills: [
            { id: "WW.1", title: "Capitalising the names of people and pets and titles of respect" },
            { id: "WW.2", title: "Capitalising days, months and holidays" },
            { id: "WW.3", title: "Capitalising the names of places and geographic features" }
          ]
        },
        {
          id: "XX", title: "Formatting",
          skills: [
            { id: "XX.1", title: "Greetings and closings of letters" },
            { id: "XX.2", title: "Capitalising titles" },
            { id: "XX.3", title: "Formatting titles" },
            { id: "XX.4", title: "Formatting and capitalising titles" }
          ]
        }
      ]
    }
  },

  // === YEAR 5 (Existing) ===
// ==============================================================

  "5": {
    english: {
      title: "Year 5 English",
      description: "Reading foundations, strategies, vocabulary, grammar, and mechanics.",
      stats: { skills: 450, videos: 300, games: 100 },
      topics: [
        {
          id: "A", title: "Short and long vowels",
          skills: [
            { id: "A.1", title: "Use spelling patterns to sort long and short vowel words" },
            { id: "A.2", title: "Spell rhyming words to answer riddles" },
            { id: "A.3", title: "Spell the long a word: silent e, ai, ay, ea, ey, eigh" },
            { id: "A.4", title: "Spell the long e word: silent e, ee, ea, ie" },
            { id: "A.5", title: "Spell the long i word: silent e, ie, y, igh, ind, ild" },
            { id: "A.6", title: "Spell the long o word: silent e, oa, ow, old, ost, olt" },
            { id: "A.7", title: "Spell the long u word: silent e, ue, oo, ew, ui" }
          ]
        },
        {
          id: "B", title: "Blends",
          skills: [
            { id: "B.1", title: "Complete the word with a three-letter consonant blend" }
          ]
        },
        {
          id: "C", title: "Multisyllabic words",
          skills: [
            { id: "C.1", title: "Spell words with open and closed syllables" },
            { id: "C.2", title: "Spell consonant-l-e words" }
          ]
        },
        {
          id: "D", title: "Diphthongs and r vowel patterns",
          skills: [
            { id: "D.1", title: "Spell words with vowel diphthong patterns" },
            { id: "D.2", title: "Spell words with r vowel patterns" }
          ]
        },
        {
          id: "E", title: "Irregular words",
          skills: [
            { id: "E.1", title: "Spell the sight word" }
          ]
        },
        {
          id: "F", title: "Main idea",
          skills: [
            { id: "F.1", title: "Use key details to determine the main idea" },
            { id: "F.2", title: "Determine the main idea of a passage" }
          ]
        },
        {
          id: "G", title: "Theme",
          skills: [
            { id: "G.1", title: "Determine the themes of myths, fables and folktales" }
          ]
        },
        {
          id: "H", title: "Author's purpose",
          skills: [
            { id: "H.1", title: "Identify the author's purpose: mixed media" },
            { id: "H.2", title: "Identify the author's purpose: passages" }
          ]
        },
        {
          id: "I", title: "Text structure",
          skills: [
            { id: "I.1", title: "Determine the order of events in informational texts" },
            { id: "I.2", title: "Compare and contrast in informational texts" },
            { id: "I.3", title: "Match causes with effects" },
            { id: "I.4", title: "Match causes and effects in informational texts" },
            { id: "I.5", title: "Match problems with their solutions" },
            { id: "I.6", title: "Identify text structures" }
          ]
        },
        {
          id: "J", title: "Sensory details",
          skills: [
            { id: "J.1", title: "Sort sensory details" }
          ]
        },
        {
          id: "K", title: "Literary devices",
          skills: [
            { id: "K.1", title: "Determine the meanings of similes" }
          ]
        },
        {
          id: "L", title: "Point of view",
          skills: [
            { id: "L.1", title: "Distinguish points of view" }
          ]
        },
        {
          id: "M", title: "Inference",
          skills: [
            { id: "M.1", title: "Use actions and dialogue to understand characters" },
            { id: "M.2", title: "Draw inferences from a text" },
            { id: "M.3", title: "Make predictions about a story" }
          ]
        },
        {
          id: "N", title: "Story elements",
          skills: [
            { id: "N.1", title: "Identify story elements" }
          ]
        },
        {
          id: "O", title: "Visual elements",
          skills: [
            { id: "O.1", title: "Compare mythological illustrations" }
          ]
        },
        {
          id: "P", title: "Literary texts: level 1",
          skills: [
            { id: "P.1", title: "Read fantasy with illustrations" },
            { id: "P.2", title: "Read historical fiction with illustrations" },
            { id: "P.3", title: "Read science fiction with illustrations" },
            { id: "P.4", title: "Read realistic fiction with illustrations" }
          ]
        },
        {
          id: "Q", title: "Literary texts: level 2",
          skills: [
            { id: "Q.1", title: "Read realistic fiction: set 1" },
            { id: "Q.2", title: "Read realistic fiction: set 2" },
            { id: "Q.3", title: "Read poetry" }
          ]
        },
        {
          id: "R", title: "Informational texts: level 1",
          skills: [
            { id: "R.1", title: "Read about animals" },
            { id: "R.2", title: "Read about food" },
            { id: "R.3", title: "Read about art, music and traditions" },
            { id: "R.4", title: "Read about sports and hobbies" }
          ]
        },
        {
          id: "S", title: "Informational texts: level 2",
          skills: [
            { id: "S.1", title: "Read about famous people" },
            { id: "S.2", title: "Read about famous places" },
            { id: "S.3", title: "Read about business and technology" },
            { id: "S.4", title: "Read about science and nature" }
          ]
        },
        {
          id: "T", title: "Organising writing",
          skills: [
            { id: "T.1", title: "Put the sentences in order" },
            { id: "T.2", title: "Order items from most general to most specific" },
            { id: "T.3", title: "Organise information by topic" }
          ]
        },
        {
          id: "U", title: "Topic sentences",
          skills: [
            { id: "U.1", title: "Choose topic sentences for narrative paragraphs" },
            { id: "U.2", title: "Choose topic sentences for expository paragraphs" }
          ]
        },
        {
          id: "V", title: "Writer's purpose",
          skills: [
            { id: "V.1", title: "Choose the text that matches the writer's purpose" }
          ]
        },
        {
          id: "W", title: "Linking words",
          skills: [
            { id: "W.1", title: "Identify time-order words" },
            { id: "W.2", title: "Use time-order words" },
            { id: "W.3", title: "Use coordinating conjunctions" },
            { id: "W.4", title: "Use subordinating conjunctions" },
            { id: "W.5", title: "Choose the best transition" }
          ]
        },
        {
          id: "X", title: "Opinion writing",
          skills: [
            { id: "X.1", title: "Distinguish facts from opinions" },
            { id: "X.2", title: "Identify an author's statement of opinion" },
            { id: "X.3", title: "Choose reasons to support an opinion" },
            { id: "X.4", title: "Complete the opinion passage with an example" },
            { id: "X.5", title: "Complete the opinion passage with a reason" },
            { id: "X.6", title: "Complete the opinion-reason-example table" }
          ]
        },
        {
          id: "Y", title: "Descriptive details",
          skills: [
            { id: "Y.1", title: "Add descriptive details to sentences" },
            { id: "Y.2", title: "Show character emotions and traits" },
            { id: "Y.3", title: "Revise the sentence using a stronger verb" }
          ]
        },
        {
          id: "Z", title: "Prefixes and suffixes",
          skills: [
            { id: "Z.1", title: "Identify base words, prefixes and suffixes" },
            { id: "Z.2", title: "Determine the meaning of a word with pre-, re- or mis-" },
            { id: "Z.3", title: "Use the prefixes pre-, re- and mis-" },
            { id: "Z.4", title: "Determine the meaning of a word with -ful or -less" },
            { id: "Z.5", title: "Determine the meaning of a word with -ly or -ness" },
            { id: "Z.6", title: "Determine the meaning of a word with -able or -ment" },
            { id: "Z.7", title: "Determine the meaning of a word with a suffix: review" },
            { id: "Z.8", title: "Determine the meanings of words with prefixes and suffixes: review" }
          ]
        },
        {
          id: "AA", title: "Greek and Latin roots",
          skills: [
            { id: "AA.1", title: "Use Greek and Latin roots as clues to the meanings of words" },
            { id: "AA.2", title: "Determine the meanings of Greek and Latin roots" },
            { id: "AA.3", title: "Determine the meanings of words with Greek and Latin roots" }
          ]
        },
        {
          id: "BB", title: "Compound words",
          skills: [
            { id: "BB.1", title: "Form compound words" },
            { id: "BB.2", title: "Form and use compound words" }
          ]
        },
        {
          id: "CC", title: "Categories",
          skills: [
            { id: "CC.1", title: "Select the members of a group" },
            { id: "CC.2", title: "Select the words that don't belong" }
          ]
        },
        {
          id: "DD", title: "Synonyms and antonyms",
          skills: [
            { id: "DD.1", title: "Choose the synonym" },
            { id: "DD.2", title: "Which sentence has the same meaning?" },
            { id: "DD.3", title: "Find synonyms in context" },
            { id: "DD.4", title: "Choose the antonym" },
            { id: "DD.5", title: "Which sentence uses an antonym?" },
            { id: "DD.6", title: "Find antonyms in context" }
          ]
        },
        {
          id: "EE", title: "Homophones",
          skills: [
            { id: "EE.1", title: "Homophones with pictures" },
            { id: "EE.2", title: "Identify homophones" },
            { id: "EE.3", title: "Use the correct homophone" }
          ]
        },
        {
          id: "FF", title: "Multiple-meaning words",
          skills: [
            { id: "FF.1", title: "Which definition matches the sentence?" },
            { id: "FF.2", title: "Which sentence matches the definition?" }
          ]
        },
        {
          id: "GG", title: "Shades of meaning",
          skills: [
            { id: "GG.1", title: "Describe the difference between related words" },
            { id: "GG.2", title: "Positive and negative connotation" }
          ]
        },
        {
          id: "HH", title: "Idioms",
          skills: [
            { id: "HH.1", title: "Choose the picture that matches the idiomatic expression" }
          ]
        },
        {
          id: "II", title: "Context clues",
          skills: [
            { id: "II.1", title: "Determine the meaning of words using synonyms in context" },
            { id: "II.2", title: "Use context to identify the meaning of a word" }
          ]
        },
        {
          id: "JJ", title: "Reference skills",
          skills: [
            { id: "JJ.1", title: "Order alphabetically based on the first letter" },
            { id: "JJ.2", title: "Order alphabetically based on the first two letters" },
            { id: "JJ.3", title: "Order alphabetically based on the first three letters" },
            { id: "JJ.4", title: "Order alphabetically: challenge" },
            { id: "JJ.5", title: "Use guide words" },
            { id: "JJ.6", title: "Use dictionary entries" },
            { id: "JJ.7", title: "Use dictionary definitions" }
          ]
        },
        {
          id: "KK", title: "Sentences, fragments and run-ons",
          skills: [
            { id: "KK.1", title: "Is the sentence a statement, question, command or exclamation?" },
            { id: "KK.2", title: "Identify the complete subject of a sentence" },
            { id: "KK.3", title: "Identify the complete predicate of a sentence" },
            { id: "KK.4", title: "Identify the simple subject or predicate of a sentence" },
            { id: "KK.5", title: "Is it a complete sentence or a fragment?" },
            { id: "KK.6", title: "Is it a complete sentence or a run-on?" },
            { id: "KK.7", title: "Is it a complete sentence, a fragment or a run-on?" },
            { id: "KK.8", title: "Is the sentence simple or compound?" },
            { id: "KK.9", title: "Order the words to create a sentence" }
          ]
        },
        {
          id: "LL", title: "Nouns",
          skills: [
            { id: "LL.1", title: "Which word is a noun?" },
            { id: "LL.2", title: "Identify nouns" },
            { id: "LL.3", title: "Identify nouns – with abstract nouns" },
            { id: "LL.4", title: "Identify common and proper nouns" },
            { id: "LL.5", title: "Form regular plurals with -s, -es and -ies" },
            { id: "LL.6", title: "Use regular plurals with -s, -es and -ies" },
            { id: "LL.7", title: "Is the noun singular or plural?" },
            { id: "LL.8", title: "Form and use irregular plurals" },
            { id: "LL.9", title: "Identify plurals, singular possessives and plural possessives" },
            { id: "LL.10", title: "Form the singular or plural possessive" },
            { id: "LL.11", title: "Identify and correct errors with plural and possessive nouns" }
          ]
        },
        {
          id: "MM", title: "Pronouns",
          skills: [
            { id: "MM.1", title: "Identify personal pronouns" },
            { id: "MM.2", title: "Choose between subject and object personal pronouns" },
            { id: "MM.3", title: "Replace the noun with a personal pronoun" },
            { id: "MM.4", title: "Compound subjects and objects with 'I' and 'me'" },
            { id: "MM.5", title: "Identify possessive pronouns" },
            { id: "MM.6", title: "Use possessive pronouns" },
            { id: "MM.7", title: "Choose between personal and reflexive pronouns" },
            { id: "MM.8", title: "Use reflexive pronouns" }
          ]
        },
        {
          id: "NN", title: "Verb types",
          skills: [
            { id: "NN.1", title: "Use action verbs" },
            { id: "NN.2", title: "Identify action verbs" },
            { id: "NN.3", title: "Identify main verbs and helping verbs" }
          ]
        },
        {
          id: "OO", title: "Subject-verb agreement",
          skills: [
            { id: "OO.1", title: "Is the subject singular or plural?" },
            { id: "OO.2", title: "Use the correct subject or verb" },
            { id: "OO.3", title: "Pronoun-verb agreement" }
          ]
        },
        {
          id: "PP", title: "Verb tense",
          skills: [
            { id: "PP.1", title: "Which sentence is in the regular past tense?" },
            { id: "PP.2", title: "Identify verbs in the regular past tense" },
            { id: "PP.3", title: "Form and use the regular past tense" },
            { id: "PP.4", title: "Identify the irregular past tense I" },
            { id: "PP.5", title: "Identify the irregular past tense II" },
            { id: "PP.6", title: "Form and use the irregular past tense: set 1" },
            { id: "PP.7", title: "Form and use the irregular past tense: set 2" },
            { id: "PP.8", title: "Form and use the irregular past tense: set 3" },
            { id: "PP.9", title: "Form and use the irregular past tense: set 4" },
            { id: "PP.10", title: "Form and use the irregular past tense: set 5" },
            { id: "PP.11", title: "To be: use the correct form" },
            { id: "PP.12", title: "To have: use the correct form" },
            { id: "PP.13", title: "Is the sentence in the past, present or future tense?" },
            { id: "PP.14", title: "Change the sentence to future tense" }
          ]
        },
        {
          id: "QQ", title: "Articles",
          skills: [
            { id: "QQ.1", title: "Use the correct article: a or an" },
            { id: "QQ.2", title: "Use the correct article: a, an or the" },
            { id: "QQ.3", title: "Identify articles" }
          ]
        },
        {
          id: "RR", title: "Adjectives and adverbs",
          skills: [
            { id: "RR.1", title: "Does the adjective tell you what kind or how many?" },
            { id: "RR.2", title: "Identify the adjective that describes the noun" },
            { id: "RR.3", title: "Identify adjectives" },
            { id: "RR.4", title: "Does the adverb tell you how, when or where?" },
            { id: "RR.5", title: "Identify adverbs" },
            { id: "RR.6", title: "Choose between adjectives and adverbs" },
            { id: "RR.7", title: "Is the word an adjective or adverb?" },
            { id: "RR.8", title: "Use adjectives to compare" },
            { id: "RR.9", title: "Spell adjectives that compare" },
            { id: "RR.10", title: "Use adverbs to compare" }
          ]
        },
        {
          id: "SS", title: "Prepositions",
          skills: [
            { id: "SS.1", title: "Identify prepositions" },
            { id: "SS.2", title: "Identify prepositions and their objects" },
            { id: "SS.3", title: "Identify prepositional phrases" },
            { id: "SS.4", title: "Prepositions: review" }
          ]
        },
        {
          id: "TT", title: "Conjunctions",
          skills: [
            { id: "TT.1", title: "Identify coordinating conjunctions" },
            { id: "TT.2", title: "Identify subordinating conjunctions" }
          ]
        },
        {
          id: "UU", title: "Contractions",
          skills: [
            { id: "UU.1", title: "Pronoun-verb contractions" },
            { id: "UU.2", title: "Contractions with 'not'" }
          ]
        },
        {
          id: "VV", title: "Commas",
          skills: [
            { id: "VV.1", title: "Commas with direct addresses and after introductory words" }
          ]
        },
        {
          id: "WW", title: "Capitalisation",
          skills: [
            { id: "WW.1", title: "Capitalising the names of people and pets and titles of respect" },
            { id: "WW.2", title: "Capitalising days, months and holidays" },
            { id: "WW.3", title: "Capitalising the names of places and geographic features" }
          ]
        },
        {
          id: "XX", title: "Formatting",
          skills: [
            { id: "XX.1", title: "Greetings and closings of letters" },
            { id: "XX.2", title: "Capitalising titles" },
            { id: "XX.3", title: "Formatting titles" },
            { id: "XX.4", title: "Formatting and capitalising titles" }
          ]
        }
      ]
    }
  },
 // ==============================================================

  // YEAR 6 ENGLISH (Full Curriculum A-XX)
  // ==============================================================
  "6": {
    english: {
      title: "Year 6 English",
      description: "Reading foundations, strategies, vocabulary, grammar, and mechanics.",
      stats: { skills: 450, videos: 300, games: 100 },
      topics: [
        {
          id: "A", title: "Short and long vowels",
          skills: [
            { id: "A.1", title: "Use spelling patterns to sort long and short vowel words" },
            { id: "A.2", title: "Spell rhyming words to answer riddles" },
            { id: "A.3", title: "Spell the long a word: silent e, ai, ay, ea, ey, eigh" },
            { id: "A.4", title: "Spell the long e word: silent e, ee, ea, ie" },
            { id: "A.5", title: "Spell the long i word: silent e, ie, y, igh, ind, ild" },
            { id: "A.6", title: "Spell the long o word: silent e, oa, ow, old, ost, olt" },
            { id: "A.7", title: "Spell the long u word: silent e, ue, oo, ew, ui" }
          ]
        },
        {
          id: "B", title: "Blends",
          skills: [
            { id: "B.1", title: "Complete the word with a three-letter consonant blend" }
          ]
        },
        {
          id: "C", title: "Multisyllabic words",
          skills: [
            { id: "C.1", title: "Spell words with open and closed syllables" },
            { id: "C.2", title: "Spell consonant-l-e words" }
          ]
        },
        {
          id: "D", title: "Diphthongs and r vowel patterns",
          skills: [
            { id: "D.1", title: "Spell words with vowel diphthong patterns" },
            { id: "D.2", title: "Spell words with r vowel patterns" }
          ]
        },
        {
          id: "E", title: "Irregular words",
          skills: [
            { id: "E.1", title: "Spell the sight word" }
          ]
        },
        {
          id: "F", title: "Main idea",
          skills: [
            { id: "F.1", title: "Use key details to determine the main idea" },
            { id: "F.2", title: "Determine the main idea of a passage" }
          ]
        },
        {
          id: "G", title: "Theme",
          skills: [
            { id: "G.1", title: "Determine the themes of myths, fables and folktales" }
          ]
        },
        {
          id: "H", title: "Author's purpose",
          skills: [
            { id: "H.1", title: "Identify the author's purpose: mixed media" },
            { id: "H.2", title: "Identify the author's purpose: passages" }
          ]
        },
        {
          id: "I", title: "Text structure",
          skills: [
            { id: "I.1", title: "Determine the order of events in informational texts" },
            { id: "I.2", title: "Compare and contrast in informational texts" },
            { id: "I.3", title: "Match causes with effects" },
            { id: "I.4", title: "Match causes and effects in informational texts" },
            { id: "I.5", title: "Match problems with their solutions" },
            { id: "I.6", title: "Identify text structures" }
          ]
        },
        {
          id: "J", title: "Sensory details",
          skills: [
            { id: "J.1", title: "Sort sensory details" }
          ]
        },
        {
          id: "K", title: "Literary devices",
          skills: [
            { id: "K.1", title: "Determine the meanings of similes" }
          ]
        },
        {
          id: "L", title: "Point of view",
          skills: [
            { id: "L.1", title: "Distinguish points of view" }
          ]
        },
        {
          id: "M", title: "Inference",
          skills: [
            { id: "M.1", title: "Use actions and dialogue to understand characters" },
            { id: "M.2", title: "Draw inferences from a text" },
            { id: "M.3", title: "Make predictions about a story" }
          ]
        },
        {
          id: "N", title: "Story elements",
          skills: [
            { id: "N.1", title: "Identify story elements" }
          ]
        },
        {
          id: "O", title: "Visual elements",
          skills: [
            { id: "O.1", title: "Compare mythological illustrations" }
          ]
        },
        {
          id: "P", title: "Literary texts: level 1",
          skills: [
            { id: "P.1", title: "Read fantasy with illustrations" },
            { id: "P.2", title: "Read historical fiction with illustrations" },
            { id: "P.3", title: "Read science fiction with illustrations" },
            { id: "P.4", title: "Read realistic fiction with illustrations" }
          ]
        },
        {
          id: "Q", title: "Literary texts: level 2",
          skills: [
            { id: "Q.1", title: "Read realistic fiction: set 1" },
            { id: "Q.2", title: "Read realistic fiction: set 2" },
            { id: "Q.3", title: "Read poetry" }
          ]
        },
        {
          id: "R", title: "Informational texts: level 1",
          skills: [
            { id: "R.1", title: "Read about animals" },
            { id: "R.2", title: "Read about food" },
            { id: "R.3", title: "Read about art, music and traditions" },
            { id: "R.4", title: "Read about sports and hobbies" }
          ]
        },
        {
          id: "S", title: "Informational texts: level 2",
          skills: [
            { id: "S.1", title: "Read about famous people" },
            { id: "S.2", title: "Read about famous places" },
            { id: "S.3", title: "Read about business and technology" },
            { id: "S.4", title: "Read about science and nature" }
          ]
        },
        {
          id: "T", title: "Organising writing",
          skills: [
            { id: "T.1", title: "Put the sentences in order" },
            { id: "T.2", title: "Order items from most general to most specific" },
            { id: "T.3", title: "Organise information by topic" }
          ]
        },
        {
          id: "U", title: "Topic sentences",
          skills: [
            { id: "U.1", title: "Choose topic sentences for narrative paragraphs" },
            { id: "U.2", title: "Choose topic sentences for expository paragraphs" }
          ]
        },
        {
          id: "V", title: "Writer's purpose",
          skills: [
            { id: "V.1", title: "Choose the text that matches the writer's purpose" }
          ]
        },
        {
          id: "W", title: "Linking words",
          skills: [
            { id: "W.1", title: "Identify time-order words" },
            { id: "W.2", title: "Use time-order words" },
            { id: "W.3", title: "Use coordinating conjunctions" },
            { id: "W.4", title: "Use subordinating conjunctions" },
            { id: "W.5", title: "Choose the best transition" }
          ]
        },
        {
          id: "X", title: "Opinion writing",
          skills: [
            { id: "X.1", title: "Distinguish facts from opinions" },
            { id: "X.2", title: "Identify an author's statement of opinion" },
            { id: "X.3", title: "Choose reasons to support an opinion" },
            { id: "X.4", title: "Complete the opinion passage with an example" },
            { id: "X.5", title: "Complete the opinion passage with a reason" },
            { id: "X.6", title: "Complete the opinion-reason-example table" }
          ]
        },
        {
          id: "Y", title: "Descriptive details",
          skills: [
            { id: "Y.1", title: "Add descriptive details to sentences" },
            { id: "Y.2", title: "Show character emotions and traits" },
            { id: "Y.3", title: "Revise the sentence using a stronger verb" }
          ]
        },
        {
          id: "Z", title: "Prefixes and suffixes",
          skills: [
            { id: "Z.1", title: "Identify base words, prefixes and suffixes" },
            { id: "Z.2", title: "Determine the meaning of a word with pre-, re- or mis-" },
            { id: "Z.3", title: "Use the prefixes pre-, re- and mis-" },
            { id: "Z.4", title: "Determine the meaning of a word with -ful or -less" },
            { id: "Z.5", title: "Determine the meaning of a word with -ly or -ness" },
            { id: "Z.6", title: "Determine the meaning of a word with -able or -ment" },
            { id: "Z.7", title: "Determine the meaning of a word with a suffix: review" },
            { id: "Z.8", title: "Determine the meanings of words with prefixes and suffixes: review" }
          ]
        },
        {
          id: "AA", title: "Greek and Latin roots",
          skills: [
            { id: "AA.1", title: "Use Greek and Latin roots as clues to the meanings of words" },
            { id: "AA.2", title: "Determine the meanings of Greek and Latin roots" },
            { id: "AA.3", title: "Determine the meanings of words with Greek and Latin roots" }
          ]
        },
        {
          id: "BB", title: "Compound words",
          skills: [
            { id: "BB.1", title: "Form compound words" },
            { id: "BB.2", title: "Form and use compound words" }
          ]
        },
        {
          id: "CC", title: "Categories",
          skills: [
            { id: "CC.1", title: "Select the members of a group" },
            { id: "CC.2", title: "Select the words that don't belong" }
          ]
        },
        {
          id: "DD", title: "Synonyms and antonyms",
          skills: [
            { id: "DD.1", title: "Choose the synonym" },
            { id: "DD.2", title: "Which sentence has the same meaning?" },
            { id: "DD.3", title: "Find synonyms in context" },
            { id: "DD.4", title: "Choose the antonym" },
            { id: "DD.5", title: "Which sentence uses an antonym?" },
            { id: "DD.6", title: "Find antonyms in context" }
          ]
        },
        {
          id: "EE", title: "Homophones",
          skills: [
            { id: "EE.1", title: "Homophones with pictures" },
            { id: "EE.2", title: "Identify homophones" },
            { id: "EE.3", title: "Use the correct homophone" }
          ]
        },
        {
          id: "FF", title: "Multiple-meaning words",
          skills: [
            { id: "FF.1", title: "Which definition matches the sentence?" },
            { id: "FF.2", title: "Which sentence matches the definition?" }
          ]
        },
        {
          id: "GG", title: "Shades of meaning",
          skills: [
            { id: "GG.1", title: "Describe the difference between related words" },
            { id: "GG.2", title: "Positive and negative connotation" }
          ]
        },
        {
          id: "HH", title: "Idioms",
          skills: [
            { id: "HH.1", title: "Choose the picture that matches the idiomatic expression" }
          ]
        },
        {
          id: "II", title: "Context clues",
          skills: [
            { id: "II.1", title: "Determine the meaning of words using synonyms in context" },
            { id: "II.2", title: "Use context to identify the meaning of a word" }
          ]
        },
        {
          id: "JJ", title: "Reference skills",
          skills: [
            { id: "JJ.1", title: "Order alphabetically based on the first letter" },
            { id: "JJ.2", title: "Order alphabetically based on the first two letters" },
            { id: "JJ.3", title: "Order alphabetically based on the first three letters" },
            { id: "JJ.4", title: "Order alphabetically: challenge" },
            { id: "JJ.5", title: "Use guide words" },
            { id: "JJ.6", title: "Use dictionary entries" },
            { id: "JJ.7", title: "Use dictionary definitions" }
          ]
        },
        {
          id: "KK", title: "Sentences, fragments and run-ons",
          skills: [
            { id: "KK.1", title: "Is the sentence a statement, question, command or exclamation?" },
            { id: "KK.2", title: "Identify the complete subject of a sentence" },
            { id: "KK.3", title: "Identify the complete predicate of a sentence" },
            { id: "KK.4", title: "Identify the simple subject or predicate of a sentence" },
            { id: "KK.5", title: "Is it a complete sentence or a fragment?" },
            { id: "KK.6", title: "Is it a complete sentence or a run-on?" },
            { id: "KK.7", title: "Is it a complete sentence, a fragment or a run-on?" },
            { id: "KK.8", title: "Is the sentence simple or compound?" },
            { id: "KK.9", title: "Order the words to create a sentence" }
          ]
        },
        {
          id: "LL", title: "Nouns",
          skills: [
            { id: "LL.1", title: "Which word is a noun?" },
            { id: "LL.2", title: "Identify nouns" },
            { id: "LL.3", title: "Identify nouns – with abstract nouns" },
            { id: "LL.4", title: "Identify common and proper nouns" },
            { id: "LL.5", title: "Form regular plurals with -s, -es and -ies" },
            { id: "LL.6", title: "Use regular plurals with -s, -es and -ies" },
            { id: "LL.7", title: "Is the noun singular or plural?" },
            { id: "LL.8", title: "Form and use irregular plurals" },
            { id: "LL.9", title: "Identify plurals, singular possessives and plural possessives" },
            { id: "LL.10", title: "Form the singular or plural possessive" },
            { id: "LL.11", title: "Identify and correct errors with plural and possessive nouns" }
          ]
        },
        {
          id: "MM", title: "Pronouns",
          skills: [
            { id: "MM.1", title: "Identify personal pronouns" },
            { id: "MM.2", title: "Choose between subject and object personal pronouns" },
            { id: "MM.3", title: "Replace the noun with a personal pronoun" },
            { id: "MM.4", title: "Compound subjects and objects with 'I' and 'me'" },
            { id: "MM.5", title: "Identify possessive pronouns" },
            { id: "MM.6", title: "Use possessive pronouns" },
            { id: "MM.7", title: "Choose between personal and reflexive pronouns" },
            { id: "MM.8", title: "Use reflexive pronouns" }
          ]
        },
        {
          id: "NN", title: "Verb types",
          skills: [
            { id: "NN.1", title: "Use action verbs" },
            { id: "NN.2", title: "Identify action verbs" },
            { id: "NN.3", title: "Identify main verbs and helping verbs" }
          ]
        },
        {
          id: "OO", title: "Subject-verb agreement",
          skills: [
            { id: "OO.1", title: "Is the subject singular or plural?" },
            { id: "OO.2", title: "Use the correct subject or verb" },
            { id: "OO.3", title: "Pronoun-verb agreement" }
          ]
        },
        {
          id: "PP", title: "Verb tense",
          skills: [
            { id: "PP.1", title: "Which sentence is in the regular past tense?" },
            { id: "PP.2", title: "Identify verbs in the regular past tense" },
            { id: "PP.3", title: "Form and use the regular past tense" },
            { id: "PP.4", title: "Identify the irregular past tense I" },
            { id: "PP.5", title: "Identify the irregular past tense II" },
            { id: "PP.6", title: "Form and use the irregular past tense: set 1" },
            { id: "PP.7", title: "Form and use the irregular past tense: set 2" },
            { id: "PP.8", title: "Form and use the irregular past tense: set 3" },
            { id: "PP.9", title: "Form and use the irregular past tense: set 4" },
            { id: "PP.10", title: "Form and use the irregular past tense: set 5" },
            { id: "PP.11", title: "To be: use the correct form" },
            { id: "PP.12", title: "To have: use the correct form" },
            { id: "PP.13", title: "Is the sentence in the past, present or future tense?" },
            { id: "PP.14", title: "Change the sentence to future tense" }
          ]
        },
        {
          id: "QQ", title: "Articles",
          skills: [
            { id: "QQ.1", title: "Use the correct article: a or an" },
            { id: "QQ.2", title: "Use the correct article: a, an or the" },
            { id: "QQ.3", title: "Identify articles" }
          ]
        },
        {
          id: "RR", title: "Adjectives and adverbs",
          skills: [
            { id: "RR.1", title: "Does the adjective tell you what kind or how many?" },
            { id: "RR.2", title: "Identify the adjective that describes the noun" },
            { id: "RR.3", title: "Identify adjectives" },
            { id: "RR.4", title: "Does the adverb tell you how, when or where?" },
            { id: "RR.5", title: "Identify adverbs" },
            { id: "RR.6", title: "Choose between adjectives and adverbs" },
            { id: "RR.7", title: "Is the word an adjective or adverb?" },
            { id: "RR.8", title: "Use adjectives to compare" },
            { id: "RR.9", title: "Spell adjectives that compare" },
            { id: "RR.10", title: "Use adverbs to compare" }
          ]
        },
        {
          id: "SS", title: "Prepositions",
          skills: [
            { id: "SS.1", title: "Identify prepositions" },
            { id: "SS.2", title: "Identify prepositions and their objects" },
            { id: "SS.3", title: "Identify prepositional phrases" },
            { id: "SS.4", title: "Prepositions: review" }
          ]
        },
        {
          id: "TT", title: "Conjunctions",
          skills: [
            { id: "TT.1", title: "Identify coordinating conjunctions" },
            { id: "TT.2", title: "Identify subordinating conjunctions" }
          ]
        },
        {
          id: "UU", title: "Contractions",
          skills: [
            { id: "UU.1", title: "Pronoun-verb contractions" },
            { id: "UU.2", title: "Contractions with 'not'" }
          ]
        },
        {
          id: "VV", title: "Commas",
          skills: [
            { id: "VV.1", title: "Commas with direct addresses and after introductory words" }
          ]
        },
        {
          id: "WW", title: "Capitalisation",
          skills: [
            { id: "WW.1", title: "Capitalising the names of people and pets and titles of respect" },
            { id: "WW.2", title: "Capitalising days, months and holidays" },
            { id: "WW.3", title: "Capitalising the names of places and geographic features" }
          ]
        },
        {
          id: "XX", title: "Formatting",
          skills: [
            { id: "XX.1", title: "Greetings and closings of letters" },
            { id: "XX.2", title: "Capitalising titles" },
            { id: "XX.3", title: "Formatting titles" },
            { id: "XX.4", title: "Formatting and capitalising titles" }
          ]
        }
      ]
    }
  },
};