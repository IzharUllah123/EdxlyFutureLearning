import { SubjectData } from "./curriculum";

export const upperEnglishData: Record<string, Record<string, SubjectData>> = {
  
  // === YEAR 7 ===
  "7": {
  english: {
    title: "Year 7 English",
    description:
      "Reading strategies, writing skills, vocabulary development, grammar and mechanics.",
    stats: { skills: 420, videos: 250, games: 100 },

    topics: [
      // --------------------------
      // Reading Strategies
      // --------------------------
      {
        id: "A",
        title: "Main idea",
        skills: [
          { id: "A.1", title: "Determine the main idea of a passage" }
        ]
      },
      {
        id: "B",
        title: "Theme",
        skills: [
          { id: "B.1", title: "Match the quotations with their themes" },
          { id: "B.2", title: "Determine the themes of short stories" }
        ]
      },
      {
        id: "C",
        title: "Author's purpose and tone",
        skills: [
          { id: "C.1", title: "Which sentence is more formal?" },
          { id: "C.2", title: "Compare passages for tone" },
          { id: "C.3", title: "Identify the author's purpose" }
        ]
      },
      {
        id: "D",
        title: "Point of view",
        skills: [
          { id: "D.1", title: "Determine the author's point of view" }
        ]
      },
      {
        id: "E",
        title: "Text structure",
        skills: [
          { id: "E.1", title: "Compare and contrast in informational texts" },
          { id: "E.2", title: "Match causes and effects in informational texts" },
          { id: "E.3", title: "Match problems with their solutions" },
          { id: "E.4", title: "Identify text structures" }
        ]
      },
      {
        id: "F",
        title: "Literary devices",
        skills: [
          { id: "F.1", title: "Interpret figures of speech" },
          { id: "F.2", title: "Classify figures of speech" },
          {
            id: "F.3",
            title: "Analyse the effects of figures of speech on meaning and tone"
          }
        ]
      },
      {
        id: "G",
        title: "Analysing literature",
        skills: [{ id: "G.1", title: "Analyse short stories" }]
      },
      {
        id: "H",
        title: "Analysing informational texts",
        skills: [
          { id: "H.1", title: "Read and understand informational passages" },
          { id: "H.2", title: "Trace an argument" }
        ]
      },
      {
        id: "I",
        title: "Comparing texts",
        skills: [
          { id: "I.1", title: "Compare two texts with different genres" }
        ]
      },
      {
        id: "J",
        title: "Visual elements",
        skills: [
          {
            id: "J.1",
            title:
              "Compare illustrations of literary and historical subjects"
          }
        ]
      },

      // --------------------------
      // Writing Strategies
      // --------------------------
      {
        id: "K",
        title: "Organising writing",
        skills: [
          { id: "K.1", title: "Order topics from broadest to narrowest" },
          { id: "K.2", title: "Organise information by topic" },
          { id: "K.3", title: "Transitions with conjunctive adverbs" }
        ]
      },
      {
        id: "L",
        title: "Developing and supporting arguments",
        skills: [
          { id: "L.1", title: "Distinguish facts from opinions" },
          { id: "L.2", title: "Choose evidence to support a claim" },
          {
            id: "L.3",
            title: "Identify supporting details in informational texts"
          },
          { id: "L.4", title: "Identify supporting details in literary texts" },
          { id: "L.5", title: "Identify counterclaims" }
        ]
      },
      {
        id: "M",
        title: "Creative techniques",
        skills: [{ id: "M.1", title: "Use personification" }]
      },
      {
        id: "N",
        title: "Editing and revising",
        skills: [
          { id: "N.1", title: "Use the correct frequently confused word" },
          {
            id: "N.2",
            title: "Correct errors with frequently confused words"
          },
          { id: "N.3", title: "Suggest appropriate revisions" }
        ]
      },
      {
        id: "O",
        title: "Research skills",
        skills: [{ id: "O.1", title: "Identify and correct plagiarism" }]
      },

      // --------------------------
      // Vocabulary
      // --------------------------
      {
        id: "P",
        title: "Prefixes and suffixes",
        skills: [
          { id: "P.1", title: "Words with pre-" },
          { id: "P.2", title: "Words with re-" },
          { id: "P.3", title: "Words with sub-" },
          { id: "P.4", title: "Words with mis-" },
          {
            id: "P.5",
            title: "Words with un-, dis-, in-, im- and non-"
          },
          { id: "P.6", title: "Words with -ful" },
          { id: "P.7", title: "Words with -less" },
          { id: "P.8", title: "Words with -able and -ible" }
        ]
      },
      {
        id: "Q",
        title: "Greek and Latin roots",
        skills: [
          {
            id: "Q.1",
            title: "Use Greek and Latin roots as clues to the meanings of words"
          },
          {
            id: "Q.2",
            title:
              "Use the meanings of words as clues to the meanings of Greek and Latin roots"
          },
          {
            id: "Q.3",
            title: "Use words as clues to the meanings of Greek and Latin roots"
          },
          { id: "Q.4", title: "Determine the meanings of Greek and Latin roots" },
          {
            id: "Q.5",
            title: "Determine the meanings of words with Greek and Latin roots"
          }
        ]
      },
      {
        id: "R",
        title: "Synonyms and antonyms",
        skills: [
          { id: "R.1", title: "Choose the synonym" },
          { id: "R.2", title: "Find synonyms in context" },
          { id: "R.3", title: "Choose the antonym" },
          { id: "R.4", title: "Find antonyms in context" }
        ]
      },
      {
        id: "S",
        title: "Homophones",
        skills: [
          { id: "S.1", title: "Use the correct homophone" },
          { id: "S.2", title: "Which definition matches the sentence?" },
          { id: "S.3", title: "Which sentence matches the definition?" }
        ]
      },
      {
        id: "T",
        title: "Shades of meaning",
        skills: [
          {
            id: "T.1",
            title: "Describe the difference between related words"
          },
          { id: "T.2", title: "Positive and negative connotation" }
        ]
      },
      {
        id: "U",
        title: "Analogies",
        skills: [
          { id: "U.1", title: "Analogies" },
          { id: "U.2", title: "Analogies: challenge" }
        ]
      },
      {
        id: "V",
        title: "Context clues",
        skills: [
          { id: "V.1", title: "Find words using context" },
          {
            id: "V.2",
            title: "Determine the meaning of words using synonyms in context"
          },
          {
            id: "V.3",
            title: "Determine the meaning of words using antonyms in context"
          },
          { id: "V.4", title: "Use context to identify the meaning of a word" },
          {
            id: "V.5",
            title: "Determine the meaning of domain-specific words with pictures"
          }
        ]
      },
      {
        id: "W",
        title: "Reference skills",
        skills: [
          { id: "W.1", title: "Alphabetical order" },
          { id: "W.2", title: "Use guide words" },
          { id: "W.3", title: "Use dictionary entries" },
          { id: "W.4", title: "Use dictionary definitions" },
          { id: "W.5", title: "Use thesaurus entries" }
        ]
      },

      // --------------------------
      // Grammar & Mechanics
      // --------------------------
      {
        id: "X",
        title: "Sentences, fragments and run-ons",
        skills: [
          {
            id: "X.1",
            title:
              "Is the sentence declarative, interrogative, imperative or exclamatory?"
          },
          {
            id: "X.2",
            title:
              "Identify the complete subject or complete predicate of a sentence"
          },
          {
            id: "X.3",
            title:
              "Identify the simple subject or simple predicate of a sentence"
          },
          {
            id: "X.4",
            title:
              "Identify the compound subject or compound predicate of a sentence"
          },
          { id: "X.5", title: "Is it a complete sentence or a fragment?" },
          { id: "X.6", title: "Is it a complete sentence or a run-on?" },
          {
            id: "X.7",
            title: "Is it a complete sentence, a fragment or a run-on?"
          },
          {
            id: "X.8",
            title: "Identify dependent and independent clauses"
          },
          { id: "X.9", title: "Is the sentence simple, compound or complex?" }
        ]
      },
      {
        id: "Y",
        title: "Nouns",
        skills: [
          { id: "Y.1", title: "Identify common and proper nouns" },
          { id: "Y.2", title: "Form plurals of nouns ending in f, fe, o and y" },
          {
            id: "Y.3",
            title: "Form and use plurals of nouns ending in f, fe, o and y"
          },
          { id: "Y.4", title: "Form plurals: review" },
          { id: "Y.5", title: "Form and use plurals: review" },
          {
            id: "Y.6",
            title: "Identify plurals, singular possessives and plural possessives"
          },
          { id: "Y.7", title: "Form the singular or plural possessive" },
          {
            id: "Y.8",
            title: "Identify and correct errors with plural and possessive nouns"
          }
        ]
      },
      {
        id: "Z",
        title: "Pronouns and antecedents",
        skills: [
          { id: "Z.1", title: "Identify pronouns and their antecedents" },
          {
            id: "Z.2",
            title: "Use the pronoun that agrees with the antecedent"
          },
          { id: "Z.3", title: "Identify vague pronoun references" },
          {
            id: "Z.4",
            title: "Identify all of the possible antecedents"
          },
          {
            id: "Z.5",
            title:
              "Correct inappropriate shifts in pronoun number and person"
          }
        ]
      },
      {
        id: "AA",
        title: "Pronoun types",
        skills: [
          {
            id: "AA.1",
            title: "Choose between subject and object pronouns"
          },
          {
            id: "AA.2",
            title: "Compound subjects and objects with 'I' and 'me'"
          },
          {
            id: "AA.3",
            title: "Compound subjects and objects with pronouns"
          },
          { id: "AA.4", title: "Use possessive pronouns" },
          {
            id: "AA.5",
            title: "Choose between personal and reflexive pronouns"
          },
          { id: "AA.6", title: "Use reflexive pronouns" },
          { id: "AA.7", title: "Is the pronoun reflexive or intensive?" },
          { id: "AA.8", title: "Identify relative pronouns" },
          { id: "AA.9", title: "Use relative pronouns: who and whom" },
          {
            id: "AA.10",
            title:
              "Use relative pronouns: who, whom, whose, which and that"
          }
        ]
      },
      {
        id: "BB",
        title: "Verb types",
        skills: [
          { id: "BB.1", title: "Identify main verbs and helping verbs" },
          { id: "BB.2", title: "Identify transitive and intransitive verbs" },
          {
            id: "BB.3",
            title:
              "Identify linking verbs, predicate adjectives and predicate nouns"
          },
          { id: "BB.4", title: "What does the modal verb show?" },
          { id: "BB.5", title: "Use the correct modal verb" }
        ]
      },
      {
        id: "CC",
        title: "Subject-verb agreement",
        skills: [
          { id: "CC.1", title: "Use the correct subject or verb" },
          { id: "CC.2", title: "Use the correct verb – with compound subjects" }
        ]
      },
      {
        id: "DD",
        title: "Verb tense",
        skills: [
          { id: "DD.1", title: "Irregular past tense: review" },
          {
            id: "DD.2",
            title: "Simple past, present and future tense: review"
          },
          {
            id: "DD.3",
            title: "Correct inappropriate shifts in verb tense"
          },
          { id: "DD.4", title: "Use the progressive verb tenses" },
          { id: "DD.5", title: "Form the progressive verb tenses" },
          {
            id: "DD.6",
            title: "Choose between the past tense and past participle"
          },
          { id: "DD.7", title: "Use the perfect verb tenses" },
          { id: "DD.8", title: "Form the perfect verb tenses" }
        ]
      },
      {
        id: "EE",
        title: "Adjectives and adverbs",
        skills: [
          { id: "EE.1", title: "Identify adjectives" },
          { id: "EE.2", title: "Order adjectives" },
          { id: "EE.3", title: "Identify adverbs" },
          { id: "EE.4", title: "Use relative adverbs" },
          {
            id: "EE.5",
            title: "Choose between adjectives and adverbs"
          },
          {
            id: "EE.6",
            title: "Is the word an adjective or adverb?"
          },
          {
            id: "EE.7",
            title: "Form and use comparative and superlative adjectives"
          },
          {
            id: "EE.8",
            title: "Good, better, best, bad, worse and worst"
          },
          {
            id: "EE.9",
            title: "Form and use comparative and superlative adverbs"
          },
          {
            id: "EE.10",
            title: "Well, better, best, badly, worse and worst"
          }
        ]
      },
      {
        id: "FF",
        title: "Prepositions",
        skills: [
          { id: "FF.1", title: "Identify prepositions" },
          { id: "FF.2", title: "Identify prepositions and their objects" },
          { id: "FF.3", title: "Identify prepositional phrases" },
          { id: "FF.4", title: "Prepositions: review" }
        ]
      },
      {
        id: "GG",
        title: "Conjunctions",
        skills: [
          { id: "GG.1", title: "Use coordinating conjunctions" },
          { id: "GG.2", title: "Identify coordinating conjunctions" },
          { id: "GG.3", title: "Identify subordinating conjunctions" },
          {
            id: "GG.4",
            title: "Use the correct pair of correlative conjunctions"
          },
          {
            id: "GG.5",
            title: "Fill in the missing correlative conjunction"
          }
        ]
      },
      {
        id: "HH",
        title: "Contractions",
        skills: [
          { id: "HH.1", title: "Pronoun-verb contractions" },
          { id: "HH.2", title: "Contractions with 'not'" }
        ]
      },
      {
        id: "II",
        title: "Punctuation",
        skills: [
          {
            id: "II.1",
            title: "Commas with compound and complex sentences"
          },
          {
            id: "II.2",
            title:
              "Commas with direct addresses, introductory words, interjections and interrupters"
          },
          { id: "II.3", title: "Commas with coordinate adjectives" },
          { id: "II.4", title: "Commas with non-restrictive elements" },
          { id: "II.5", title: "Use dashes" }
        ]
      },
      {
        id: "JJ",
        title: "Capitalisation",
        skills: [
          { id: "JJ.1", title: "Correct capitalisation errors" },
          { id: "JJ.2", title: "Capitalising titles" }
        ]
      },
      {
        id: "KK",
        title: "Formatting",
        skills: [
          { id: "KK.1", title: "Formatting titles" },
          {
            id: "KK.2",
            title: "Formatting and capitalising titles: review"
          }
        ]
      }
    ]
  }
},


  // === YEAR 8 ===
  "8": {
  english: {
    title: "Year 8 English",
    description: "Reading strategies, writing techniques, vocabulary development, and advanced grammar skills.",
    stats: { skills: 0, videos: 0, games: 0 },
    topics: [
      {
        id: "A",
        title: "Main idea",
        skills: [
          { id: "A.1", title: "Determine the main idea of a passage" }
        ]
      },
      {
        id: "B",
        title: "Theme",
        skills: [
          { id: "B.1", title: "Match the quotations with their themes" },
          { id: "B.2", title: "Determine the themes of short stories" }
        ]
      },
      {
        id: "C",
        title: "Author's purpose and tone",
        skills: [
          { id: "C.1", title: "Identify the author's purpose" },
          { id: "C.2", title: "Which sentence is more formal?" },
          { id: "C.3", title: "Compare passages for tone" }
        ]
      },
      {
        id: "D",
        title: "Point of view",
        skills: [
          { id: "D.1", title: "Determine the author's point of view" }
        ]
      },
      {
        id: "E",
        title: "Text structure",
        skills: [
          { id: "E.1", title: "Compare and contrast in informational texts" },
          { id: "E.2", title: "Match causes and effects in informational texts" },
          { id: "E.3", title: "Match problems with their solutions" },
          { id: "E.4", title: "Identify text structures" }
        ]
      },
      {
        id: "F",
        title: "Literary devices",
        skills: [
          { id: "F.1", title: "Interpret the meaning of an allusion from its source" },
          { id: "F.2", title: "Recall the source of an allusion" },
          { id: "F.3", title: "Interpret figures of speech" },
          { id: "F.4", title: "Classify figures of speech" },
          { id: "F.5", title: "Analyse the effects of figures of speech on meaning and tone" }
        ]
      },
      {
        id: "G",
        title: "Analysing literature",
        skills: [
          { id: "G.1", title: "Analyse short stories" }
        ]
      },
      {
        id: "H",
        title: "Analysing informational texts",
        skills: [
          { id: "H.1", title: "Read and understand informational passages" },
          { id: "H.2", title: "Trace an argument" }
        ]
      },
      {
        id: "I",
        title: "Comparing texts",
        skills: [
          { id: "I.1", title: "Compare two texts with different genres" }
        ]
      },
      {
        id: "J",
        title: "Visual elements",
        skills: [
          { id: "J.1", title: "Compare illustrations of literary and historical subjects" }
        ]
      },
      {
        id: "K",
        title: "Organising writing",
        skills: [
          { id: "K.1", title: "Order topics from broadest to narrowest" },
          { id: "K.2", title: "Organise information by topic" },
          { id: "K.3", title: "Transitions with conjunctive adverbs" }
        ]
      },
      {
        id: "L",
        title: "Developing and supporting arguments",
        skills: [
          { id: "L.1", title: "Distinguish facts from opinions" },
          { id: "L.2", title: "Choose evidence to support a claim" },
          { id: "L.3", title: "Identify supporting details in informational texts" },
          { id: "L.4", title: "Identify supporting details in literary texts" },
          { id: "L.5", title: "Identify counterclaims" }
        ]
      },
      {
        id: "M",
        title: "Creative techniques",
        skills: [
          { id: "M.1", title: "Use personification" }
        ]
      },
      {
        id: "N",
        title: "Editing and revising",
        skills: [
          { id: "N.1", title: "Use parallel structure" },
          { id: "N.2", title: "Remove redundant words or phrases" },
          { id: "N.3", title: "Use the correct frequently confused word" },
          { id: "N.4", title: "Correct errors with frequently confused words" },
          { id: "N.5", title: "Suggest appropriate revisions" }
        ]
      },
      {
        id: "O",
        title: "Research skills",
        skills: [
          { id: "O.1", title: "Identify plagiarism" }
        ]
      },
      {
        id: "P",
        title: "Prefixes and suffixes",
        skills: [
          { id: "P.1", title: "Words with pre-" },
          { id: "P.2", title: "Words with re-" },
          { id: "P.3", title: "Words with sub-" },
          { id: "P.4", title: "Words with mis-" },
          { id: "P.5", title: "Words with un-, dis-, in-, im- and non-" },
          { id: "P.6", title: "Words with -ful" },
          { id: "P.7", title: "Words with -less" },
          { id: "P.8", title: "Words with -able and -ible" }
        ]
      },
      {
        id: "Q",
        title: "Greek and Latin roots",
        skills: [
          { id: "Q.1", title: "Use Greek and Latin roots as clues to the meanings of words" },
          { id: "Q.2", title: "Use words as clues to the meanings of Greek and Latin roots" },
          { id: "Q.3", title: "Determine the meanings of Greek and Latin roots" },
          { id: "Q.4", title: "Determine the meanings of words with Greek and Latin roots" }
        ]
      },
      {
        id: "R",
        title: "Synonyms and antonyms",
        skills: [
          { id: "R.1", title: "Choose the synonym" },
          { id: "R.2", title: "Choose the antonym" }
        ]
      },
      {
        id: "S",
        title: "Homophones",
        skills: [
          { id: "S.1", title: "Use the correct homophone" },
          { id: "S.2", title: "Which definition matches the sentence?" },
          { id: "S.3", title: "Which sentence matches the definition?" }
        ]
      },
      {
        id: "T",
        title: "Shades of meaning",
        skills: [
          { id: "T.1", title: "Describe the difference between related words" },
          { id: "T.2", title: "Positive and negative connotation" }
        ]
      },
      {
        id: "U",
        title: "Analogies",
        skills: [
          { id: "U.1", title: "Analogies" },
          { id: "U.2", title: "Analogies: challenge" }
        ]
      },
      {
        id: "V",
        title: "Context clues",
        skills: [
          { id: "V.1", title: "Find words using context" },
          { id: "V.2", title: "Determine the meaning of words using synonyms in context" },
          { id: "V.3", title: "Determine the meaning of words using antonyms in context" },
          { id: "V.4", title: "Use context to identify the meaning of a word" }
        ]
      },
      {
        id: "W",
        title: "Domain-specific vocabulary",
        skills: [
          { id: "W.1", title: "Determine the meaning of domain-specific words with pictures" }
        ]
      },
      {
        id: "X",
        title: "Reference skills",
        skills: [
          { id: "X.1", title: "Alphabetical order" },
          { id: "X.2", title: "Use guide words" },
          { id: "X.3", title: "Use dictionary entries" },
          { id: "X.4", title: "Use dictionary definitions" },
          { id: "X.5", title: "Use thesaurus entries" }
        ]
      },
      {
        id: "Y",
        title: "Sentences, fragments and run-ons",
        skills: [
          { id: "Y.1", title: "Is the sentence declarative, interrogative, imperative or exclamatory?" },
          { id: "Y.2", title: "Identify the complete subject or complete predicate of a sentence" },
          { id: "Y.3", title: "Identify the simple subject or simple predicate of a sentence" },
          { id: "Y.4", title: "Identify the compound subject or compound predicate of a sentence" },
          { id: "Y.5", title: "Is it a complete sentence or a fragment?" },
          { id: "Y.6", title: "Is it a complete sentence or a run-on?" },
          { id: "Y.7", title: "Is it a complete sentence, a fragment or a run-on?" }
        ]
      },
      {
        id: "Z",
        title: "Phrases and clauses",
        skills: [
          { id: "Z.1", title: "Is it a phrase or a clause?" },
          { id: "Z.2", title: "Identify appositives and appositive phrases" },
          { id: "Z.3", title: "Identify dependent and independent clauses" },
          { id: "Z.4", title: "Is the sentence simple, compound, complex or compound-complex?" },
          { id: "Z.5", title: "Combine sentences using relative clauses" }
        ]
      },
      {
        id: "AA",
        title: "Nouns",
        skills: [
          { id: "AA.1", title: "Form and use plurals: review" },
          { id: "AA.2", title: "Form and use plurals of compound nouns" },
          { id: "AA.3", title: "Identify plurals, singular possessives and plural possessives" },
          { id: "AA.4", title: "Form the singular or plural possessive" },
          { id: "AA.5", title: "Identify and correct errors with plural and possessive nouns" }
        ]
      },
      {
        id: "BB",
        title: "Pronouns and antecedents",
        skills: [
          { id: "BB.1", title: "Identify pronouns and their antecedents" },
          { id: "BB.2", title: "Use the pronoun that agrees with the antecedent" },
          { id: "BB.3", title: "Identify vague pronoun references" },
          { id: "BB.4", title: "Identify all of the possible antecedents" },
          { id: "BB.5", title: "Correct inappropriate shifts in pronoun number and person" }
        ]
      },
      {
        id: "CC",
        title: "Pronoun types",
        skills: [
          { id: "CC.1", title: "Choose between subject and object pronouns" },
          { id: "CC.2", title: "Compound subjects and objects with 'I' and 'me'" },
          { id: "CC.3", title: "Compound subjects and objects with pronouns" },
          { id: "CC.4", title: "Choose between personal and reflexive pronouns" },
          { id: "CC.5", title: "Use reflexive pronouns" },
          { id: "CC.6", title: "Is the pronoun reflexive or intensive?" },
          { id: "CC.7", title: "Use relative pronouns: who and whom" },
          { id: "CC.8", title: "Use relative pronouns: who, whom, whose, which and that" }
        ]
      },
      {
        id: "DD",
        title: "Verb types",
        skills: [
          { id: "DD.1", title: "Identify transitive and intransitive verbs" },
          { id: "DD.2", title: "Identify linking verbs, predicate adjectives and predicate nouns" }
        ]
      },
      {
        id: "EE",
        title: "Subject-verb agreement",
        skills: [
          { id: "EE.1", title: "Correct errors with subject-verb agreement" },
          { id: "EE.2", title: "Correct errors with indefinite pronoun-verb agreement" },
          { id: "EE.3", title: "Use the correct verb – with compound subjects" }
        ]
      },
      {
        id: "FF",
        title: "Verb tense",
        skills: [
          { id: "FF.1", title: "Irregular past tense: review" },
          { id: "FF.2", title: "Simple past, present and future tense: review" },
          { id: "FF.3", title: "Identify and correct inappropriate shifts in verb tense" },
          { id: "FF.4", title: "Form the progressive verb tenses" },
          { id: "FF.5", title: "Form the perfect verb tenses" }
        ]
      },
      {
        id: "GG",
        title: "Adjectives and adverbs",
        skills: [
          { id: "GG.1", title: "Identify adjectives" },
          { id: "GG.2", title: "Order adjectives" },
          { id: "GG.3", title: "Identify adverbs" },
          { id: "GG.4", title: "Choose between adjectives and adverbs" },
          { id: "GG.5", title: "Is the word an adjective or adverb?" },
          { id: "GG.6", title: "Form and use comparative and superlative adjectives" },
          { id: "GG.7", title: "Good, better, best, bad, worse and worst" },
          { id: "GG.8", title: "Form and use comparative and superlative adverbs" },
          { id: "GG.9", title: "Well, better, best, badly, worse and worst" }
        ]
      },
      {
        id: "HH",
        title: "Prepositions",
        skills: [
          { id: "HH.1", title: "Identify prepositional phrases" }
        ]
      },
      {
        id: "II",
        title: "Direct and indirect objects",
        skills: [
          { id: "II.1", title: "Is it a direct object or an indirect object?" }
        ]
      },
      {
        id: "JJ",
        title: "Conjunctions",
        skills: [
          { id: "JJ.1", title: "Use the correct pair of correlative conjunctions" }
        ]
      },
      {
        id: "KK",
        title: "Misplaced modifiers",
        skills: [
          { id: "KK.1", title: "Misplaced modifiers with pictures" },
          { id: "KK.2", title: "Select the misplaced or dangling modifier" },
          { id: "KK.3", title: "Are the modifiers used correctly?" }
        ]
      },
      {
        id: "LL",
        title: "Restrictive and non-restrictive elements",
        skills: [
          { id: "LL.1", title: "Commas with non-restrictive elements" }
        ]
      },
      {
        id: "MM",
        title: "Commas",
        skills: [
          { id: "MM.1", title: "Commas with compound and complex sentences" },
          { id: "MM.2", title: "Commas with direct addresses, introductory words, interjections and interrupters" },
          { id: "MM.3", title: "Commas with coordinate adjectives" }
        ]
      },
      {
        id: "NN",
        title: "Semicolons, colons and commas",
        skills: [
          { id: "NN.1", title: "Use semicolons and commas to separate clauses" },
          { id: "NN.2", title: "Use semicolons, colons and commas with lists" }
        ]
      },
      {
        id: "OO",
        title: "Dashes, hyphens and ellipses",
        skills: [
          { id: "OO.1", title: "Use dashes" },
          { id: "OO.2", title: "Use hyphens in compound adjectives" },
          { id: "OO.3", title: "Decide whether ellipses are used appropriately" }
        ]
      },
      {
        id: "PP",
        title: "Capitalisation",
        skills: [
          { id: "PP.1", title: "Correct capitalisation errors" },
          { id: "PP.2", title: "Capitalising titles" }
        ]
      },
      {
        id: "QQ",
        title: "Formatting",
        skills: [
          { id: "QQ.1", title: "Formatting titles" },
          { id: "QQ.2", title: "Formatting and capitalising titles: review" }
        ]
      }
    ]
  }
},


  // === YEAR 9 ===
  "9": {
    english: {
      title: "Year 9 English",
      description: "Advanced reading comprehension, literary analysis, writing strategies, vocabulary, and grammar.",
      stats: { skills: 0, videos: 0, games: 0 }, // you can update these
      topics: [
        {
          id: "A",
          title: "Main Idea",
          skills: [
            { id: "A.1", title: "Determine the main idea of a passage" }
          ]
        },
        {
          id: "B",
          title: "Theme",
          skills: [
            { id: "B.1", title: "Match the quotations with their themes" },
            { id: "B.2", title: "Determine the themes of short stories" }
          ]
        },
        {
          id: "C",
          title: "Author's Purpose and Tone",
          skills: [
            { id: "C.1", title: "Identify the author's purpose" },
            { id: "C.2", title: "Which sentence is more formal?" },
            { id: "C.3", title: "Compare passages for tone" }
          ]
        },
        {
          id: "D",
          title: "Point of View",
          skills: [
            { id: "D.1", title: "Determine the author's point of view" }
          ]
        },
        {
          id: "E",
          title: "Text Structure",
          skills: [
            { id: "E.1", title: "Compare and contrast in informational texts" },
            { id: "E.2", title: "Match causes and effects in informational texts" },
            { id: "E.3", title: "Match problems with their solutions" },
            { id: "E.4", title: "Identify text structures" }
          ]
        },
        {
          id: "F",
          title: "Literary Devices",
          skills: [
            { id: "F.1", title: "Interpret the meaning of an allusion from its source" },
            { id: "F.2", title: "Recall the source of an allusion" },
            { id: "F.3", title: "Interpret figures of speech" },
            { id: "F.4", title: "Classify figures of speech" },
            { id: "F.5", title: "Analyse the effects of figures of speech on meaning and tone" }
          ]
        },
        {
          id: "G",
          title: "Analysing Literature",
          skills: [
            { id: "G.1", title: "Analyse short stories" }
          ]
        },
        {
          id: "H",
          title: "Analysing Informational Texts",
          skills: [
            { id: "H.1", title: "Read and understand informational passages" },
            { id: "H.2", title: "Trace an argument" }
          ]
        },
        {
          id: "I",
          title: "Comparing Texts",
          skills: [
            { id: "I.1", title: "Compare two texts with different genres" }
          ]
        },
        {
          id: "J",
          title: "Visual Elements",
          skills: [
            { id: "J.1", title: "Compare illustrations of literary and historical subjects" }
          ]
        },

        /* Writing Strategies */

        {
          id: "K",
          title: "Organising Writing",
          skills: [
            { id: "K.1", title: "Order topics from broadest to narrowest" },
            { id: "K.2", title: "Organise information by topic" },
            { id: "K.3", title: "Transitions with conjunctive adverbs" }
          ]
        },
        {
          id: "L",
          title: "Developing and Supporting Arguments",
          skills: [
            { id: "L.1", title: "Distinguish facts from opinions" },
            { id: "L.2", title: "Choose evidence to support a claim" },
            { id: "L.3", title: "Identify supporting details in informational texts" },
            { id: "L.4", title: "Identify supporting details in literary texts" },
            { id: "L.5", title: "Identify counterclaims" }
          ]
        },
        {
          id: "M",
          title: "Creative Techniques",
          skills: [
            { id: "M.1", title: "Use personification" }
          ]
        },
        {
          id: "N",
          title: "Active and Passive Voice",
          skills: [
            { id: "N.1", title: "Identify active and passive voice" },
            { id: "N.2", title: "Rewrite the sentence in active voice" }
          ]
        },
        {
          id: "O",
          title: "Editing and Revising",
          skills: [
            { id: "O.1", title: "Use parallel structure" },
            { id: "O.2", title: "Remove redundant words or phrases" },
            { id: "O.3", title: "Use the correct frequently confused word" },
            { id: "O.4", title: "Correct errors with frequently confused words" },
            { id: "O.5", title: "Suggest appropriate revisions" }
          ]
        },
        {
          id: "P",
          title: "Research Skills",
          skills: [
            { id: "P.1", title: "Identify plagiarism" }
          ]
        },

        /* Vocabulary */

        {
          id: "Q",
          title: "Prefixes and Suffixes",
          skills: [
            { id: "Q.1", title: "Words with pre-" },
            { id: "Q.2", title: "Words with re-" },
            { id: "Q.3", title: "Words with sub-" },
            { id: "Q.4", title: "Words with mis-" },
            { id: "Q.5", title: "Words with un-, dis-, in-, im- and non-" },
            { id: "Q.6", title: "Words with -ful" },
            { id: "Q.7", title: "Words with -less" },
            { id: "Q.8", title: "Words with -able and -ible" }
          ]
        },
        {
          id: "R",
          title: "Greek and Latin Roots",
          skills: [
            { id: "R.1", title: "Use Greek and Latin roots as clues to meanings of words" },
            { id: "R.2", title: "Use words as clues to meanings of roots" },
            { id: "R.3", title: "Determine the meanings of Greek and Latin roots" },
            { id: "R.4", title: "Determine meanings of words with roots" }
          ]
        },
        {
          id: "S",
          title: "Synonyms and Antonyms",
          skills: [
            { id: "S.1", title: "Choose the synonym" },
            { id: "S.2", title: "Choose the antonym" }
          ]
        },
        {
          id: "T",
          title: "Word Choice and Usage",
          skills: [
            { id: "T.1", title: "Describe differences between related words" },
            { id: "T.2", title: "Positive and negative connotation" }
          ]
        },
        {
          id: "U",
          title: "Homophones",
          skills: [
            { id: "U.1", title: "Use the correct homophone" },
            { id: "U.2", title: "Which definition matches the sentence?" },
            { id: "U.3", title: "Which sentence matches the definition?" }
          ]
        },
        {
          id: "V",
          title: "Analogies",
          skills: [
            { id: "V.1", title: "Analogies" },
            { id: "V.2", title: "Analogies: challenge" }
          ]
        },
        {
          id: "W",
          title: "Context Clues",
          skills: [
            { id: "W.1", title: "Find words using context" },
            { id: "W.2", title: "Using synonyms in context" },
            { id: "W.3", title: "Using antonyms in context" },
            { id: "W.4", title: "Use context to identify word meaning" }
          ]
        },
        {
          id: "X",
          title: "Domain-Specific Vocabulary",
          skills: [
            { id: "X.1", title: "Determine meanings of domain-specific words with pictures" }
          ]
        },
        {
          id: "Y",
          title: "Reference Skills",
          skills: [
            { id: "Y.1", title: "Alphabetical order" },
            { id: "Y.2", title: "Use guide words" },
            { id: "Y.3", title: "Use dictionary entries" },
            { id: "Y.4", title: "Use dictionary definitions" },
            { id: "Y.5", title: "Use thesaurus entries" }
          ]
        },

        /* Grammar and Mechanics */

        {
          id: "Z",
          title: "Sentences, Fragments and Run-ons",
          skills: [
            { id: "Z.1", title: "Determine sentence type" },
            { id: "Z.2", title: "Identify complete subject or predicate" },
            { id: "Z.3", title: "Identify simple subject or predicate" },
            { id: "Z.4", title: "Identify compound subject or predicate" },
            { id: "Z.5", title: "Sentence or fragment?" },
            { id: "Z.6", title: "Sentence or run-on?" },
            { id: "Z.7", title: "Sentence, fragment or run-on?" }
          ]
        },
        {
          id: "AA",
          title: "Phrases and Clauses",
          skills: [
            { id: "AA.1", title: "Is it a phrase or a clause?" },
            { id: "AA.2", title: "Identify appositives and appositive phrases" },
            { id: "AA.3", title: "Identify dependent and independent clauses" },
            { id: "AA.4", title: "Simple, compound, complex or compound-complex?" },
            { id: "AA.5", title: "Combine sentences using relative clauses" }
          ]
        },
        {
          id: "BB",
          title: "Nouns",
          skills: [
            { id: "BB.1", title: "Plurals: review" },
            { id: "BB.2", title: "Plurals of compound nouns" },
            { id: "BB.3", title: "Plurals, singular possessives and plural possessives" },
            { id: "BB.4", title: "Form singular or plural possessive" },
            { id: "BB.5", title: "Correct errors with plural and possessive nouns" },
            { id: "BB.6", title: "Correct errors with compound and joint possession" }
          ]
        },
        {
          id: "CC",
          title: "Pronouns and Antecedents",
          skills: [
            { id: "CC.1", title: "Pronouns and their antecedents" },
            { id: "CC.2", title: "Pronoun-antecedent agreement" },
            { id: "CC.3", title: "Correct inappropriate shifts in pronoun number and person" },
            { id: "CC.4", title: "Identify vague pronoun references" },
            { id: "CC.5", title: "Identify all possible antecedents" }
          ]
        },
        {
          id: "DD",
          title: "Pronoun Types",
          skills: [
            { id: "DD.1", title: "Choose between subject and object pronouns" },
            { id: "DD.2", title: "Compound subjects and objects with 'I' and 'me'" },
            { id: "DD.3", title: "Compound subjects and objects with pronouns" },
            { id: "DD.4", title: "Choose between personal and reflexive pronouns" },
            { id: "DD.5", title: "Use reflexive pronouns" },
            { id: "DD.6", title: "Is the pronoun reflexive or intensive?" },
            { id: "DD.7", title: "Use relative pronouns: who and whom" },
            { id: "DD.8", title: "Use relative pronouns: who, whom, whose, which and that" }
          ]
        },
        {
          id: "EE",
          title: "Verb Types",
          skills: [
            { id: "EE.1", title: "Identify transitive and intransitive verbs" },
            { id: "EE.2", title: "Identify linking verbs, predicate adjectives and predicate nouns" }
          ]
        },
        {
          id: "FF",
          title: "Subject–Verb Agreement",
          skills: [
            { id: "FF.1", title: "Correct errors with subject–verb agreement" },
            { id: "FF.2", title: "Correct errors with indefinite pronoun–verb agreement" },
            { id: "FF.3", title: "Use the correct verb with compound subjects" }
          ]
        },
        {
          id: "GG",
          title: "Verb Tense",
          skills: [
            { id: "GG.1", title: "Irregular past tense: review" },
            { id: "GG.2", title: "Simple past, present and future tense: review" },
            { id: "GG.3", title: "Correct inappropriate shifts in verb tense" },
            { id: "GG.4", title: "Form progressive verb tenses" },
            { id: "GG.5", title: "Form perfect verb tenses" },
            { id: "GG.6", title: "Identify participles and what they modify" },
            { id: "GG.7", title: "Identify gerunds and their functions" },
            { id: "GG.8", title: "Identify infinitives and infinitive phrases" }
          ]
        },
        {
          id: "HH",
          title: "Adjectives and Adverbs",
          skills: [
            { id: "HH.1", title: "Identify adjectives" },
            { id: "HH.2", title: "Order adjectives" },
            { id: "HH.3", title: "Identify adverbs" },
            { id: "HH.4", title: "Choose between adjectives and adverbs" },
            { id: "HH.5", title: "Is it an adjective or adverb?" },
            { id: "HH.6", title: "Comparative and superlative adjectives" },
            { id: "HH.7", title: "Good, better, best; bad, worse, worst" },
            { id: "HH.8", title: "Comparative and superlative adverbs" },
            { id: "HH.9", title: "Well, better, best; badly, worse, worst" }
          ]
        },
        {
          id: "II",
          title: "Prepositions",
          skills: [
            { id: "II.1", title: "Identify prepositional phrases" }
          ]
        },
        {
          id: "JJ",
          title: "Direct and Indirect Objects",
          skills: [
            { id: "JJ.1", title: "Determine direct vs indirect objects" }
          ]
        },
        {
          id: "KK",
          title: "Conjunctions",
          skills: [
            { id: "KK.1", title: "Use the correct correlative conjunctions" }
          ]
        },
        {
          id: "LL",
          title: "Misplaced Modifiers",
          skills: [
            { id: "LL.1", title: "Misplaced modifiers with pictures" },
            { id: "LL.2", title: "Select the misplaced or dangling modifier" },
            { id: "LL.3", title: "Are the modifiers used correctly?" }
          ]
        },
        {
          id: "MM",
          title: "Restrictive and Non-Restrictive Elements",
          skills: [
            { id: "MM.1", title: "Commas with non-restrictive elements" }
          ]
        },
        {
          id: "NN",
          title: "Commas",
          skills: [
            { id: "NN.1", title: "Commas with compound and complex sentences" },
            { id: "NN.2", title: "Commas with direct addresses, introductory words, interjections, interrupters" },
            { id: "NN.3", title: "Commas with coordinate adjectives" }
          ]
        },
        {
          id: "OO",
          title: "Semicolons, Colons and Commas",
          skills: [
            { id: "OO.1", title: "Use semicolons and commas to separate clauses" },
            { id: "OO.2", title: "Use semicolons, colons and commas with lists" }
          ]
        },
        {
          id: "PP",
          title: "Dashes, Hyphens and Ellipses",
          skills: [
            { id: "PP.1", title: "Use dashes" },
            { id: "PP.2", title: "Use hyphens in compound adjectives" },
            { id: "PP.3", title: "Determine if ellipses are used appropriately" }
          ]
        },
        {
          id: "QQ",
          title: "Capitalisation",
          skills: [
            { id: "QQ.1", title: "Correct capitalisation errors" },
            { id: "QQ.2", title: "Capitalising titles" }
          ]
        },
        {
          id: "RR",
          title: "Formatting",
          skills: [
            { id: "RR.1", title: "Formatting titles" },
            { id: "RR.2", title: "Formatting and capitalising titles: review" }
          ]
        }
      ]
    }
  },


  // === YEAR 10 ===
 "10": {
  english: {
    title: "Year 10 English",
    description: "Reading strategies, writing skills, vocabulary development, grammar, and mechanics.",
    stats: { skills: 0, videos: 0, games: 0 }, // you can update these
    topics: [
      {
        id: "A",
        title: "Reading Strategies",
        skills: [
          { id: "A.1", title: "Determine the main idea of a passage" }
        ]
      },
      {
        id: "B",
        title: "Audience, Purpose and Tone",
        skills: [
          { id: "B.1", title: "Which text is most formal?" },
          { id: "B.2", title: "Identify audience and purpose" },
          { id: "B.3", title: "Compare passages for subjective and objective tone" },
          { id: "B.4", title: "Compare passages for tone" }
        ]
      },
      {
        id: "C",
        title: "Literary Devices",
        skills: [
          { id: "C.1", title: "Identify the narrative point of view" },
          { id: "C.2", title: "Interpret the meaning of an allusion from its source" },
          { id: "C.3", title: "Recall the source of an allusion" },
          { id: "C.4", title: "Interpret figures of speech" },
          { id: "C.5", title: "Classify figures of speech: euphemism, hyperbole, oxymoron, paradox" },
          { id: "C.6", title: "Classify figures of speech: review" },
          { id: "C.7", title: "Analyse the effects of figures of speech on meaning and tone" }
        ]
      },
      {
        id: "D",
        title: "Analysing Literature",
        skills: [
          { id: "D.1", title: "Match the quotations with their themes" },
          { id: "D.2", title: "Analyse short stories: set 1" },
          { id: "D.3", title: "Analyse short stories: set 2" }
        ]
      },
      {
        id: "E",
        title: "Analysing Informational Texts",
        skills: [
          { id: "E.1", title: "Analyse the development of informational passages: set 1" },
          { id: "E.2", title: "Analyse the development of informational passages: set 2" },
          { id: "E.3", title: "Trace an argument: set 1" },
          { id: "E.4", title: "Trace an argument: set 2" },
          { id: "E.5", title: "Analyse rhetorical strategies in historical texts: set 1" },
          { id: "E.6", title: "Analyse rhetorical strategies in historical texts: set 2" }
        ]
      },

      /* ------------------ WRITING STRATEGIES ------------------ */

      {
        id: "F",
        title: "Organising Writing",
        skills: [
          { id: "F.1", title: "Order topics from broadest to narrowest" },
          { id: "F.2", title: "Organise information by topic" }
        ]
      },
      {
        id: "G",
        title: "Topic Sentences",
        skills: [
          { id: "G.1", title: "Choose the topic sentence that best captures the main idea" }
        ]
      },
      {
        id: "H",
        title: "Developing and Supporting Arguments",
        skills: [
          { id: "H.1", title: "Distinguish facts from opinions" },
          { id: "H.2", title: "Identify stronger and weaker evidence to support a claim" },
          { id: "H.3", title: "Choose the best evidence to support a claim" },
          { id: "H.4", title: "Identify supporting evidence in a text" },
          { id: "H.5", title: "Evaluate counterclaims" },
          { id: "H.6", title: "Choose the analysis that logically connects the evidence to the claim" },
          { id: "H.7", title: "Transition logically between claims, evidence, analysis and counterclaims" }
        ]
      },
      {
        id: "I",
        title: "Persuasive Strategies",
        skills: [
          { id: "I.1", title: "Identify appeals to ethos, pathos and logos in advertisements" },
          { id: "I.2", title: "Use appeals to ethos, pathos and logos in persuasive writing" }
        ]
      },
      {
        id: "J",
        title: "Creative Techniques",
        skills: [
          { id: "J.1", title: "Use personification" }
        ]
      },
      {
        id: "K",
        title: "Writing Clearly and Concisely",
        skills: [
          { id: "K.1", title: "Transitions with conjunctive adverbs" },
          { id: "K.2", title: "Avoid double, illogical and unclear comparisons" },
          { id: "K.3", title: "Identify sentences with parallel structure" },
          { id: "K.4", title: "Use parallel structure" },
          { id: "K.5", title: "Remove redundant words or phrases" }
        ]
      },
      {
        id: "L",
        title: "Active and Passive Voice",
        skills: [
          { id: "L.1", title: "Identify active and passive voice" },
          { id: "L.2", title: "Rewrite the sentence in active voice" }
        ]
      },
      {
        id: "M",
        title: "Editing and Revising",
        skills: [
          { id: "M.1", title: "Use the correct frequently confused word" },
          { id: "M.2", title: "Identify and correct errors with frequently confused words" },
          { id: "M.3", title: "Identify and correct errors with frequently confused pronouns and contractions" },
          { id: "M.4", title: "Correct errors with commonly misspelled words" },
          { id: "M.5", title: "Correct errors in everyday use" },
          { id: "M.6", title: "Suggest appropriate revisions" }
        ]
      },
      {
        id: "N",
        title: "Research Skills",
        skills: [
          { id: "N.1", title: "Identify plagiarism" }
        ]
      },

      /* ------------------ VOCABULARY ------------------ */

      {
        id: "O",
        title: "Prefixes and Suffixes",
        skills: [
          { id: "O.1", title: "Word pattern analogies" },
          { id: "O.2", title: "Word pattern sentences" },
          { id: "O.3", title: "Words with pre-" },
          { id: "O.4", title: "Words with re-" },
          { id: "O.5", title: "Words with sub-" },
          { id: "O.6", title: "Words with mis-" },
          { id: "O.7", title: "Words with un-, dis-, in-, im- and non-" },
          { id: "O.8", title: "Words with -ful" },
          { id: "O.9", title: "Words with -less" },
          { id: "O.10", title: "Words with -able and -ible" }
        ]
      },
      {
        id: "P",
        title: "Greek and Latin Roots",
        skills: [
          { id: "P.1", title: "Sort words by shared Greek or Latin roots" },
          { id: "P.2", title: "Use Greek and Latin roots as clues to the meanings of words" },
          { id: "P.3", title: "Use words as clues to the meanings of Greek and Latin roots" },
          { id: "P.4", title: "Determine the meanings of Greek and Latin roots" },
          { id: "P.5", title: "Determine the meanings of words with Greek and Latin roots" }
        ]
      },
      {
        id: "Q",
        title: "Homophones",
        skills: [
          { id: "Q.1", title: "Use the correct homophone" },
          { id: "Q.2", title: "Identify and correct errors with homophones" }
        ]
      },
      {
        id: "R",
        title: "Foreign Words and Expressions",
        skills: [
          { id: "R.1", title: "Use etymologies to determine the meanings of words" },
          { id: "R.2", title: "Use context as a clue to the meanings of foreign expressions" },
          { id: "R.3", title: "Use the correct foreign expression" }
        ]
      },
      {
        id: "S",
        title: "Word Usage and Nuance",
        skills: [
          { id: "S.1", title: "Choose the word whose connotation and denotation best match the sentence" },
          { id: "S.2", title: "Use words accurately and precisely" },
          { id: "S.3", title: "Replace words using a thesaurus" }
        ]
      },
      {
        id: "T",
        title: "Analogies",
        skills: [
          { id: "T.1", title: "Analogies" },
          { id: "T.2", title: "Analogies: challenge" }
        ]
      },
      {
        id: "U",
        title: "Context Clues",
        skills: [
          { id: "U.1", title: "Determine the meaning of words using synonyms in context" },
          { id: "U.2", title: "Determine the meaning of words using antonyms in context" },
          { id: "U.3", title: "Use context to identify the meaning of a word" }
        ]
      },
      {
        id: "V",
        title: "Reference Skills",
        skills: [
          { id: "V.1", title: "Use dictionary entries" },
          { id: "V.2", title: "Use dictionary definitions" },
          { id: "V.3", title: "Use dictionary entries to determine correct usage" },
          { id: "V.4", title: "Use thesaurus entries" }
        ]
      },

      /* ------------------ GRAMMAR & MECHANICS ------------------ */

      {
        id: "W",
        title: "Sentences, Fragments and Run-ons",
        skills: [
          { id: "W.1", title: "Is the sentence declarative, interrogative, imperative or exclamatory?" },
          { id: "W.2", title: "Identify sentence fragments" },
          { id: "W.3", title: "Identify run-on sentences" },
          { id: "W.4", title: "Choose punctuation to avoid fragments and run-ons" }
        ]
      },
      {
        id: "X",
        title: "Phrases and Clauses",
        skills: [
          { id: "X.1", title: "Is it a phrase or a clause?" },
          { id: "X.2", title: "Identify prepositional phrases" },
          { id: "X.3", title: "Identify appositives and appositive phrases" },
          { id: "X.4", title: "Identify dependent and independent clauses" },
          { id: "X.5", title: "Is the sentence simple, compound, complex or compound-complex?" },
          { id: "X.6", title: "Combine sentences using relative clauses" }
        ]
      },
      {
        id: "Y",
        title: "Nouns",
        skills: [
          { id: "Y.1", title: "Form and use plurals: review" },
          { id: "Y.2", title: "Form and use plurals of compound nouns" }
        ]
      },
      {
        id: "Z",
        title: "Pronouns",
        skills: [
          { id: "Z.1", title: "Identify and correct errors with subject and object pronouns" },
          { id: "Z.2", title: "Subject and object pronouns review" },
          { id: "Z.3", title: "Pronouns after 'than' and 'as'" },
          { id: "Z.4", title: "Identify and correct pronoun errors with 'who'" },
          { id: "Z.5", title: "Use relative pronouns: who and whom" },
          { id: "Z.6", title: "Use relative pronouns: who, whom, whose, which and that" },
          { id: "Z.7", title: "Identify vague pronoun references" },
          { id: "Z.8", title: "Identify all of the possible antecedents" },
          { id: "Z.9", title: "Correct inappropriate shifts in pronoun number and person" }
        ]
      },
      {
        id: "AA",
        title: "Verb Types",
        skills: [
          { id: "AA.1", title: "Identify transitive and intransitive verbs" },
          { id: "AA.2", title: "Identify linking verbs, predicate adjectives and predicate nouns" },
          { id: "AA.3", title: "Identify participles and what they modify" },
          { id: "AA.4", title: "Identify gerunds and their functions" },
          { id: "AA.5", title: "Identify infinitives and infinitive phrases" }
        ]
      },
      {
        id: "BB",
        title: "Subject-Verb Agreement",
        skills: [
          { id: "BB.1", title: "Identify and correct errors with subject-verb agreement" },
          { id: "BB.2", title: "Identify and correct errors with indefinite pronoun-verb agreement" },
          { id: "BB.3", title: "Identify and correct verb agreement with compound subjects" }
        ]
      },
      {
        id: "CC",
        title: "Verb Tense",
        skills: [
          { id: "CC.1", title: "Form the progressive verb tenses" },
          { id: "CC.2", title: "Form the perfect verb tenses" },
          { id: "CC.3", title: "Identify and correct inappropriate shifts in verb tense" }
        ]
      },
      {
        id: "DD",
        title: "Adjectives and Adverbs",
        skills: [
          { id: "DD.1", title: "Form and use comparative and superlative adjectives" },
          { id: "DD.2", title: "Good, better, best, bad, worse and worst" },
          { id: "DD.3", title: "Form and use comparative and superlative adverbs" },
          { id: "DD.4", title: "Well, better, best, badly, worse and worst" }
        ]
      },
      {
        id: "EE",
        title: "Conjunctions",
        skills: [
          { id: "EE.1", title: "Use the correct pair of correlative conjunctions" }
        ]
      },
      {
        id: "FF",
        title: "Misplaced Modifiers",
        skills: [
          { id: "FF.1", title: "Misplaced modifiers with pictures" },
          { id: "FF.2", title: "Select the misplaced or dangling modifier" },
          { id: "FF.3", title: "Are the modifiers used correctly?" }
        ]
      },
      {
        id: "GG",
        title: "Restrictive and Non-restrictive Elements",
        skills: [
          { id: "GG.1", title: "Commas with non-restrictive elements" }
        ]
      },
      {
        id: "HH",
        title: "Commas",
        skills: [
          { id: "HH.1", title: "Commas with direct addresses, introductory words, interjections, interrupters and antithetical phrases" },
          { id: "HH.2", title: "Commas with compound and complex sentences" },
          { id: "HH.3", title: "Commas with coordinate adjectives" }
        ]
      },
      {
        id: "II",
        title: "Semicolons, Colons and Commas",
        skills: [
          { id: "II.1", title: "Use semicolons and commas to separate clauses" },
          { id: "II.2", title: "Use semicolons, colons and commas with lists" },
          { id: "II.3", title: "Semicolons, colons and commas: review" }
        ]
      },
      {
        id: "JJ",
        title: "Dashes, Hyphens and Ellipses",
        skills: [
          { id: "JJ.1", title: "Use dashes" },
          { id: "JJ.2", title: "Use hyphens in compound adjectives" },
          { id: "JJ.3", title: "Decide whether ellipses are used appropriately" }
        ]
      },
      {
        id: "KK",
        title: "Apostrophes",
        skills: [
          { id: "KK.1", title: "Identify and correct errors with plural and possessive nouns" },
          { id: "KK.2", title: "Identify and correct errors with compound and joint possession" }
        ]
      },
      {
        id: "LL",
        title: "Capitalisation",
        skills: [
          { id: "LL.1", title: "Correct capitalisation errors" }
        ]
      },
      {
        id: "MM",
        title: "Formatting",
        skills: [
          { id: "MM.1", title: "Capitalising titles" },
          { id: "MM.2", title: "Formatting titles" },
          { id: "MM.3", title: "Formatting and capitalising titles: review" }
        ]
      }
    ]
  }
},


  // === YEAR 11 ===

  
  "11": {
    "english": {
      "title": "Year 11 English",
      "description": "Reading comprehension, literary analysis, writing skills, grammar, vocabulary, and research techniques.",
      "stats": { "skills": 500, "videos": 320, "games": 110 },
      "topics": [
        {
          "id": "A",
          "title": "Reading Strategies: Main Idea",
          "skills": [
            { "id": "A.1", "title": "Determine the main idea of a passage" }
          ]
        },
        {
          "id": "B",
          "title": "Audience, Purpose and Tone",
          "skills": [
            { "id": "B.1", "title": "Identify the most formal text" },
            { "id": "B.2", "title": "Compare passages for subjective and objective tone" },
            { "id": "B.3", "title": "Identify audience and purpose" },
            { "id": "B.4", "title": "Compare passages for tone" }
          ]
        },
        {
          "id": "C",
          "title": "Literary Devices",
          "skills": [
            { "id": "C.1", "title": "Identify the narrative point of view" },
            { "id": "C.2", "title": "Interpret the meaning of an allusion" },
            { "id": "C.3", "title": "Recall the source of an allusion" },
            { "id": "C.4", "title": "Interpret figures of speech" },
            { "id": "C.5", "title": "Classify figures of speech: euphemism, hyperbole, oxymoron, paradox" },
            { "id": "C.6", "title": "Classify figures of speech: review" },
            { "id": "C.7", "title": "Analyse the effects of figures of speech on meaning and tone" }
          ]
        },
        {
          "id": "D",
          "title": "Analyzing Literature",
          "skills": [
            { "id": "D.1", "title": "Analyze short stories: set 1" },
            { "id": "D.2", "title": "Analyze short stories: set 2" }
          ]
        },
        {
          "id": "E",
          "title": "Analyzing Informational Texts",
          "skills": [
            { "id": "E.1", "title": "Analyze the development of informational passages: set 1" },
            { "id": "E.2", "title": "Analyze the development of informational passages: set 2" },
            { "id": "E.3", "title": "Trace an argument: set 1" },
            { "id": "E.4", "title": "Trace an argument: set 2" },
            { "id": "E.5", "title": "Analyze rhetorical strategies in historical texts: set 1" },
            { "id": "E.6", "title": "Analyze rhetorical strategies in historical texts: set 2" }
          ]
        },
        {
          "id": "F",
          "title": "Organizing Writing",
          "skills": [
            { "id": "F.1", "title": "Order topics from broadest to narrowest" },
            { "id": "F.2", "title": "Organize information by topic" }
          ]
        },
        {
          "id": "G",
          "title": "Topic Sentences",
          "skills": [
            { "id": "G.1", "title": "Choose the topic sentence that best captures the main idea" }
          ]
        },
        {
          "id": "H",
          "title": "Developing and Supporting Arguments",
          "skills": [
            { "id": "H.1", "title": "Distinguish facts from opinions" },
            { "id": "H.2", "title": "Identify stronger and weaker evidence to support a claim" },
            { "id": "H.3", "title": "Choose the best evidence to support a claim" },
            { "id": "H.4", "title": "Identify supporting evidence in a text" },
            { "id": "H.5", "title": "Evaluate counterclaims" },
            { "id": "H.6", "title": "Choose the analysis that logically connects evidence to the claim" },
            { "id": "H.7", "title": "Transition logically between claims, evidence, analysis and counterclaims" }
          ]
        },
        {
          "id": "I",
          "title": "Persuasive Strategies",
          "skills": [
            { "id": "I.1", "title": "Identify appeals to ethos, pathos and logos in advertisements" },
            { "id": "I.2", "title": "Use appeals to ethos, pathos and logos in persuasive writing" }
          ]
        },
        {
          "id": "J",
          "title": "Creative Techniques",
          "skills": [
            { "id": "J.1", "title": "Use personification" }
          ]
        },
        {
          "id": "K",
          "title": "Writing Clearly and Concisely",
          "skills": [
            { "id": "K.1", "title": "Use conjunctive adverbs for transitions" },
            { "id": "K.2", "title": "Avoid double, illogical and unclear comparisons" },
            { "id": "K.3", "title": "Identify sentences with parallel structure" },
            { "id": "K.4", "title": "Use parallel structure" },
            { "id": "K.5", "title": "Remove redundant words or phrases" }
          ]
        },
        {
          "id": "L",
          "title": "Active and Passive Voice",
          "skills": [
            { "id": "L.1", "title": "Identify active and passive voice" },
            { "id": "L.2", "title": "Rewrite sentences in active voice" }
          ]
        },
        {
          "id": "M",
          "title": "Editing and Revising",
          "skills": [
            { "id": "M.1", "title": "Use the correct frequently confused word" },
            { "id": "M.2", "title": "Correct errors with frequently confused words" },
            { "id": "M.3", "title": "Correct errors with frequently confused pronouns and contractions" },
            { "id": "M.4", "title": "Correct commonly misspelled words" },
            { "id": "M.5", "title": "Correct errors in everyday use" },
            { "id": "M.6", "title": "Suggest appropriate revisions" }
          ]
        },
        {
          "id": "N",
          "title": "Research Skills",
          "skills": [
            { "id": "N.1", "title": "Identify plagiarism" }
          ]
        },
        {
          "id": "O",
          "title": "Prefixes and Suffixes",
          "skills": [
            { "id": "O.1", "title": "Word pattern analogies" },
            { "id": "O.2", "title": "Word pattern sentences" },
            { "id": "O.3", "title": "Words with pre-" },
            { "id": "O.4", "title": "Words with re-" },
            { "id": "O.5", "title": "Words with sub-" },
            { "id": "O.6", "title": "Words with mis-" },
            { "id": "O.7", "title": "Words with un-, dis-, in-, im- and non-" },
            { "id": "O.8", "title": "Words with -ful" },
            { "id": "O.9", "title": "Words with -less" },
            { "id": "O.10", "title": "Words with -able and -ible" }
          ]
        },
        {
          "id": "P",
          "title": "Greek and Latin Roots",
          "skills": [
            { "id": "P.1", "title": "Sort words by shared Greek or Latin roots" },
            { "id": "P.2", "title": "Use Greek and Latin roots to determine meanings" },
            { "id": "P.3", "title": "Use words as clues to Greek and Latin roots" },
            { "id": "P.4", "title": "Determine the meanings of Greek and Latin roots" },
            { "id": "P.5", "title": "Determine meanings of words with Greek and Latin roots" }
          ]
        },
        {
          "id": "Q",
          "title": "Homophones",
          "skills": [
            { "id": "Q.1", "title": "Use the correct homophone" },
            { "id": "Q.2", "title": "Correct homophone errors" }
          ]
        },
        {
          "id": "R",
          "title": "Foreign Words and Expressions",
          "skills": [
            { "id": "R.1", "title": "Use etymologies to determine meanings" },
            { "id": "R.2", "title": "Use context to interpret foreign expressions" },
            { "id": "R.3", "title": "Use the correct foreign expression" }
          ]
        },
        {
          "id": "S",
          "title": "Word Usage and Nuance",
          "skills": [
            { "id": "S.1", "title": "Choose the word with the best connotation and denotation" },
            { "id": "S.2", "title": "Use words accurately and precisely" },
            { "id": "S.3", "title": "Replace words using a thesaurus" }
          ]
        },
        {
          "id": "T",
          "title": "Analogies",
          "skills": [
            { "id": "T.1", "title": "Analogies" },
            { "id": "T.2", "title": "Analogies: challenge" }
          ]
        },
        {
          "id": "U",
          "title": "Context Clues",
          "skills": [
            { "id": "U.1", "title": "Determine meanings using synonyms in context" },
            { "id": "U.2", "title": "Determine meanings using antonyms in context" },
            { "id": "U.3", "title": "Use context to identify word meaning" }
          ]
        },
        {
          "id": "V",
          "title": "Reference Skills",
          "skills": [
            { "id": "V.1", "title": "Use dictionary entries" },
            { "id": "V.2", "title": "Use dictionary definitions" },
            { "id": "V.3", "title": "Use dictionary entries to determine correct usage" },
            { "id": "V.4", "title": "Use thesaurus entries" }
          ]
        },
        {
          "id": "W",
          "title": "Sentences, Fragments and Run-Ons",
          "skills": [
            { "id": "W.1", "title": "Identify sentence types" },
            { "id": "W.2", "title": "Identify sentence fragments" },
            { "id": "W.3", "title": "Identify run-on sentences" },
            { "id": "W.4", "title": "Use punctuation to avoid fragments and run-ons" }
          ]
        },
        {
          "id": "X",
          "title": "Phrases and Clauses",
          "skills": [
            { "id": "X.1", "title": "Identify phrases and clauses" },
            { "id": "X.2", "title": "Identify prepositional phrases" },
            { "id": "X.3", "title": "Identify appositives and appositive phrases" },
            { "id": "X.4", "title": "Identify dependent and independent clauses" },
            { "id": "X.5", "title": "Identify sentence structures" },
            { "id": "X.6", "title": "Combine sentences using relative clauses" }
          ]
        },
        {
          "id": "Y",
          "title": "Nouns",
          "skills": [
            { "id": "Y.1", "title": "Form and use plurals: review" },
            { "id": "Y.2", "title": "Form and use plurals of compound nouns" }
          ]
        },
        {
          "id": "Z",
          "title": "Pronouns",
          "skills": [
            { "id": "Z.1", "title": "Correct errors with subject and object pronouns" },
            { "id": "Z.2", "title": "Subject and object pronouns: review" },
            { "id": "Z.3", "title": "Pronouns after 'than' and 'as'" },
            { "id": "Z.4", "title": "Correct pronoun errors with 'who'" },
            { "id": "Z.5", "title": "Use relative pronouns: who and whom" },
            { "id": "Z.6", "title": "Use relative pronouns: who, whom, whose, which and that" },
            { "id": "Z.7", "title": "Identify vague pronoun references" },
            { "id": "Z.8", "title": "Identify possible antecedents" },
            { "id": "Z.9", "title": "Correct inappropriate shifts in pronoun number and person" }
          ]
        },
        {
          "id": "AA",
          "title": "Verb Types",
          "skills": [
            { "id": "AA.1", "title": "Identify transitive and intransitive verbs" },
            { "id": "AA.2", "title": "Identify linking verbs, predicate adjectives and predicate nouns" },
            { "id": "AA.3", "title": "Identify participles and what they modify" },
            { "id": "AA.4", "title": "Identify gerunds and their functions" },
            { "id": "AA.5", "title": "Identify infinitives and infinitive phrases" }
          ]
        },
        {
          "id": "BB",
          "title": "Subject-Verb Agreement",
          "skills": [
            { "id": "BB.1", "title": "Correct subject-verb agreement errors" },
            { "id": "BB.2", "title": "Correct indefinite pronoun-verb agreement errors" },
            { "id": "BB.3", "title": "Correct verb agreement with compound subjects" }
          ]
        },
        {
          "id": "CC",
          "title": "Verb Tense",
          "skills": [
            { "id": "CC.1", "title": "Form progressive verb tenses" },
            { "id": "CC.2", "title": "Form perfect verb tenses" },
            { "id": "CC.3", "title": "Correct inappropriate shifts in verb tense" }
          ]
        },
        {
          "id": "DD",
          "title": "Adjectives and Adverbs",
          "skills": [
            { "id": "DD.1", "title": "Use comparative and superlative adjectives" },
            { "id": "DD.2", "title": "Good, better, best; bad, worse, worst" },
            { "id": "DD.3", "title": "Use comparative and superlative adverbs" },
            { "id": "DD.4", "title": "Well, better, best; badly, worse, worst" }
          ]
        },
        {
          "id": "EE",
          "title": "Conjunctions",
          "skills": [
            { "id": "EE.1", "title": "Use correct pairs of correlative conjunctions" }
          ]
        },
        {
          "id": "FF",
          "title": "Misplaced Modifiers",
          "skills": [
            { "id": "FF.1", "title": "Identify misplaced modifiers using pictures" },
            { "id": "FF.2", "title": "Select misplaced or dangling modifiers" },
            { "id": "FF.3", "title": "Check if modifiers are used correctly" }
          ]
        },
        {
          "id": "GG",
          "title": "Restrictive and Non-Restrictive Elements",
          "skills": [
            { "id": "GG.1", "title": "Use commas with non-restrictive elements" }
          ]
        },
        {
          "id": "HH",
          "title": "Commas",
          "skills": [
            { "id": "HH.1", "title": "Use commas with direct addresses, introductory words, interjections and interrupters" },
            { "id": "HH.2", "title": "Use commas with compound and complex sentences" },
            { "id": "HH.3", "title": "Use commas with coordinate adjectives" }
          ]
        },
        {
          "id": "II",
          "title": "Semicolons, Colons and Commas",
          "skills": [
            { "id": "II.1", "title": "Use semicolons and commas to separate clauses" },
            { "id": "II.2", "title": "Use semicolons, colons and commas with lists" },
            { "id": "II.3", "title": "Semicolons, colons and commas: review" }
          ]
        },
        {
          "id": "JJ",
          "title": "Dashes, Hyphens and Ellipses",
          "skills": [
            { "id": "JJ.1", "title": "Use dashes" },
            { "id": "JJ.2", "title": "Use hyphens in compound adjectives" },
            { "id": "JJ.3", "title": "Decide whether ellipses are used appropriately" }
          ]
        },
        {
          "id": "KK",
          "title": "Apostrophes",
          "skills": [
            { "id": "KK.1", "title": "Correct errors with plural and possessive nouns" },
            { "id": "KK.2", "title": "Correct errors with compound and joint possession" }
          ]
        },
        {
          "id": "LL",
          "title": "Capitalisation",
          "skills": [
            { "id": "LL.1", "title": "Correct capitalisation errors" }
          ]
        }
      ]
    }
  },


 
 





  // === YEAR 12 ===

  "12": {
    "english": {
      "title": "Year 12 English",
      "description": "Reading comprehension, literary analysis, writing skills, grammar, and vocabulary development.",
      "stats": { "skills": 0, "videos": 0, "games": 0 },
      "topics": [
        {
          "id": "A",
          "title": "Reading Strategies: Main Idea",
          "skills": [
            { "id": "A.1", "title": "Determine the main idea of a passage" }
          ]
        },
        {
          "id": "B",
          "title": "Audience, Purpose and Tone",
          "skills": [
            { "id": "B.1", "title": "Which text is most formal?" },
            { "id": "B.2", "title": "Compare passages for subjective and objective tone" },
            { "id": "B.3", "title": "Identify audience and purpose" },
            { "id": "B.4", "title": "Compare passages for tone" }
          ]
        },
        {
          "id": "C",
          "title": "Literary Devices",
          "skills": [
            { "id": "C.1", "title": "Identify the narrative point of view" },
            { "id": "C.2", "title": "Interpret the meaning of an allusion from its source" },
            { "id": "C.3", "title": "Recall the source of an allusion" },
            { "id": "C.4", "title": "Interpret the figure of speech" },
            { "id": "C.5", "title": "Classify the figure of speech: euphemism, hyperbole, oxymoron, paradox" },
            { "id": "C.6", "title": "Classify the figure of speech: anaphora, antithesis, apostrophe, assonance, chiasmus, understatement" },
            { "id": "C.7", "title": "Classify the figure of speech: review" },
            { "id": "C.8", "title": "Analyse the effects of figures of speech on meaning and tone" }
          ]
        },
        {
          "id": "D",
          "title": "Analysing Literature",
          "skills": [
            { "id": "D.1", "title": "Analyse short stories: set 1" },
            { "id": "D.2", "title": "Analyse short stories: set 2" }
          ]
        },
        {
          "id": "E",
          "title": "Analysing Informational Texts",
          "skills": [
            { "id": "E.1", "title": "Analyse the development of informational passages: set 1" },
            { "id": "E.2", "title": "Analyse the development of informational passages: set 2" },
            { "id": "E.3", "title": "Trace an argument: set 1" },
            { "id": "E.4", "title": "Trace an argument: set 2" },
            { "id": "E.5", "title": "Analyse rhetorical strategies in historical texts: set 1" },
            { "id": "E.6", "title": "Analyse rhetorical strategies in historical texts: set 2" }
          ]
        },
        {
          "id": "F",
          "title": "Organising Writing",
          "skills": [
            { "id": "F.1", "title": "Order topics from broadest to narrowest" },
            { "id": "F.2", "title": "Organise information by topic" }
          ]
        },
        {
          "id": "G",
          "title": "Topic Sentences",
          "skills": [
            { "id": "G.1", "title": "Choose the topic sentence that best captures the main idea" }
          ]
        },
        {
          "id": "H",
          "title": "Developing and Supporting Arguments",
          "skills": [
            { "id": "H.1", "title": "Distinguish facts from opinions" },
            { "id": "H.2", "title": "Identify stronger and weaker evidence to support a claim" },
            { "id": "H.3", "title": "Choose the best evidence to support a claim" },
            { "id": "H.4", "title": "Identify supporting evidence in a text" },
            { "id": "H.5", "title": "Evaluate counterclaims" },
            { "id": "H.6", "title": "Choose the analysis that logically connects the evidence to the claim" },
            { "id": "H.7", "title": "Transition logically between claims, evidence, analysis and counterclaims" }
          ]
        },
        {
          "id": "I",
          "title": "Persuasive Strategies",
          "skills": [
            { "id": "I.1", "title": "Identify appeals to ethos, pathos and logos in advertisements" },
            { "id": "I.2", "title": "Use appeals to ethos, pathos and logos in persuasive writing" }
          ]
        },
        {
          "id": "J",
          "title": "Writing Clearly and Concisely",
          "skills": [
            { "id": "J.1", "title": "Transitions with conjunctive adverbs" },
            { "id": "J.2", "title": "Avoid double, illogical and unclear comparisons" },
            { "id": "J.3", "title": "Identify sentences with parallel structure" },
            { "id": "J.4", "title": "Use parallel structure" },
            { "id": "J.5", "title": "Remove redundant words or phrases" }
          ]
        },
        {
          "id": "K",
          "title": "Editing and Revising",
          "skills": [
            { "id": "K.1", "title": "Use the correct frequently confused word" },
            { "id": "K.2", "title": "Identify and correct errors with frequently confused words" },
            { "id": "K.3", "title": "Identify and correct errors with frequently confused pronouns and contractions" },
            { "id": "K.4", "title": "Correct errors with commonly misspelled words" },
            { "id": "K.5", "title": "Correct errors in everyday use" },
            { "id": "K.6", "title": "Suggest appropriate revisions" }
          ]
        },
        {
          "id": "L",
          "title": "Research Skills",
          "skills": [
            { "id": "L.1", "title": "Identify plagiarism" }
          ]
        },
        {
          "id": "M",
          "title": "Prefixes and Suffixes",
          "skills": [
            { "id": "M.1", "title": "Prefixes" },
            { "id": "M.2", "title": "Suffixes" },
            { "id": "M.3", "title": "Word pattern analogies" },
            { "id": "M.4", "title": "Word pattern sentences" }
          ]
        },
        {
          "id": "N",
          "title": "Greek and Latin Roots",
          "skills": [
            { "id": "N.1", "title": "Sort words by shared Greek or Latin roots" },
            { "id": "N.2", "title": "Use Greek and Latin roots as clues to the meanings of words" },
            { "id": "N.3", "title": "Use words as clues to the meanings of Greek and Latin roots" },
            { "id": "N.4", "title": "Determine the meanings of Greek and Latin roots" },
            { "id": "N.5", "title": "Determine the meanings of words with Greek and Latin roots" }
          ]
        },
        {
          "id": "O",
          "title": "Homophones",
          "skills": [
            { "id": "O.1", "title": "Use the correct homophone" },
            { "id": "O.2", "title": "Identify and correct errors with homophones" }
          ]
        },
        {
          "id": "P",
          "title": "Foreign Words and Expressions",
          "skills": [
            { "id": "P.1", "title": "Use etymologies to determine the meanings of words" },
            { "id": "P.2", "title": "Use context as a clue to the meanings of foreign expressions" },
            { "id": "P.3", "title": "Use the correct foreign expression" }
          ]
        },
        {
          "id": "Q",
          "title": "Word Usage and Nuance",
          "skills": [
            { "id": "Q.1", "title": "Describe the difference between related words" },
            { "id": "Q.2", "title": "Choose the word whose connotation and denotation best match the sentence" },
            { "id": "Q.3", "title": "Use words accurately and precisely" },
            { "id": "Q.4", "title": "Replace words using a thesaurus" },
            { "id": "Q.5", "title": "Use dictionary entries to determine correct usage" }
          ]
        },
        {
          "id": "R",
          "title": "Analogies",
          "skills": [
            { "id": "R.1", "title": "Analogies" },
            { "id": "R.2", "title": "Analogies: challenge" }
          ]
        },
        {
          "id": "S",
          "title": "Context Clues",
          "skills": [
            { "id": "S.1", "title": "Determine the meaning of words using synonyms in context" },
            { "id": "S.2", "title": "Determine the meaning of words using antonyms in context" },
            { "id": "S.3", "title": "Use context to identify the meaning of a word" },
            { "id": "S.4", "title": "Domain-specific vocabulary in context: science and technical subjects" }
          ]
        },
        {
          "id": "T",
          "title": "Sentences, Fragments and Run-ons",
          "skills": [
            { "id": "T.1", "title": "Identify sentence fragments" },
            { "id": "T.2", "title": "Identify run-on sentences" },
            { "id": "T.3", "title": "Choose punctuation to avoid fragments and run-ons" }
          ]
        },
        {
          "id": "U",
          "title": "Phrases and Clauses",
          "skills": [
            { "id": "U.1", "title": "Is it a phrase or a clause?" },
            { "id": "U.2", "title": "Identify prepositional phrases" },
            { "id": "U.3", "title": "Identify appositives and appositive phrases" },
            { "id": "U.4", "title": "Identify dependent and independent clauses" },
            { "id": "U.5", "title": "Is the sentence simple, compound, complex or compound-complex?" },
            { "id": "U.6", "title": "Combine sentences using relative clauses" }
          ]
        },
        {
          "id": "V",
          "title": "Pronouns",
          "skills": [
            { "id": "V.1", "title": "Identify and correct errors with subject and object pronouns" },
            { "id": "V.2", "title": "Subject and object pronouns review" },
            { "id": "V.3", "title": "Pronouns after 'than' and 'as'" },
            { "id": "V.4", "title": "Identify and correct errors with 'who'" },
            { "id": "V.5", "title": "Use relative pronouns: who and whom" },
            { "id": "V.6", "title": "Use relative pronouns: who, whom, whose, which and that" },
            { "id": "V.7", "title": "Identify vague pronoun references" },
            { "id": "V.8", "title": "Identify all of the possible antecedents" },
            { "id": "V.9", "title": "Correct inappropriate shifts in pronoun number and person" }
          ]
        },
        {
          "id": "W",
          "title": "Verb Types",
          "skills": [
            { "id": "W.1", "title": "Identify transitive and intransitive verbs" },
            { "id": "W.2", "title": "Identify linking verbs, predicate adjectives and predicate nouns" },
            { "id": "W.3", "title": "Identify participles and what they modify" },
            { "id": "W.4", "title": "Identify gerunds and their functions" },
            { "id": "W.5", "title": "Identify infinitives and infinitive phrases" }
          ]
        },
        {
          "id": "X",
          "title": "Subject-Verb Agreement",
          "skills": [
            { "id": "X.1", "title": "Identify and correct errors with subject-verb agreement" },
            { "id": "X.2", "title": "Identify and correct errors with indefinite pronoun-verb agreement" },
            { "id": "X.3", "title": "Identify and correct verb agreement with compound subjects" }
          ]
        },
        {
          "id": "Y",
          "title": "Verb Tense",
          "skills": [
            { "id": "Y.1", "title": "Form the progressive verb tenses" },
            { "id": "Y.2", "title": "Form the perfect verb tenses" },
            { "id": "Y.3", "title": "Identify and correct inappropriate shifts in verb tense" }
          ]
        },
        {
          "id": "Z",
          "title": "Adjectives and Adverbs",
          "skills": [
            { "id": "Z.1", "title": "Form and use comparative and superlative adjectives" },
            { "id": "Z.2", "title": "Good, better, best, bad, worse and worst" },
            { "id": "Z.3", "title": "Form and use comparative and superlative adverbs" },
            { "id": "Z.4", "title": "Well, better, best, badly, worse and worst" }
          ]
        },
        {
          "id": "AA",
          "title": "Misplaced Modifiers",
          "skills": [
            { "id": "AA.1", "title": "Misplaced modifiers with pictures" },
            { "id": "AA.2", "title": "Select the misplaced or dangling modifier" },
            { "id": "AA.3", "title": "Are the modifiers used correctly?" }
          ]
        },
        {
          "id": "BB",
          "title": "Restrictive and Non-Restrictive Elements",
          "skills": [
            { "id": "BB.1", "title": "Commas with non-restrictive elements" }
          ]
        },
        {
          "id": "CC",
          "title": "Commas",
          "skills": [
            { "id": "CC.1", "title": "Commas with direct addresses, introductory elements, absolute phrases, interjections, interrupters and antithetical phrases" },
            { "id": "CC.2", "title": "Commas with compound, complex and compound-complex sentences" },
            { "id": "CC.3", "title": "Commas with coordinate adjectives" },
            { "id": "CC.4", "title": "Commas: review" }
          ]
        },
        {
          "id": "DD",
          "title": "Semicolons, Colons and Commas",
          "skills": [
            { "id": "DD.1", "title": "Join sentences with semicolons, colons and commas" },
            { "id": "DD.2", "title": "Use colons and commas to introduce lists, quotations and appositives" },
            { "id": "DD.3", "title": "Use semicolons and commas to separate items in a series" },
            { "id": "DD.4", "title": "Semicolons, colons and commas: review" }
          ]
        },
        {
          "id": "EE",
          "title": "Dashes, Hyphens and Ellipses",
          "skills": [
            { "id": "EE.1", "title": "Use dashes" },
            { "id": "EE.2", "title": "Use hyphens in compound adjectives" },
            { "id": "EE.3", "title": "Decide whether ellipses are used appropriately" }
          ]
        },
        {
          "id": "FF",
          "title": "Apostrophes",
          "skills": [
            { "id": "FF.1", "title": "Identify and correct errors with plural and possessive nouns" },
            { "id": "FF.2", "title": "Identify and correct errors with compound and joint possession" }
          ]
        },
        {
          "id": "GG",
          "title": "Capitalisation",
          "skills": [
            { "id": "GG.1", "title": "Correct capitalisation errors" }
          ]
        }
      ]
    }
  },




  // === YEAR 13 ===

  "13": {
  english: {
    title: "Year 13 English",
    description: "Reading strategies, writing skills, vocabulary development, grammar and mechanics.",
    stats: { skills: 420, videos: 250, games: 100 },

    topics: [
      /* --------------------------
         Reading Strategies
      -------------------------- */

      {
        id: "A",
        title: "Main idea",
        skills: [
          { id: "A.1", title: "Determine the main idea of a passage" }
        ]
      },

      {
        id: "B",
        title: "Audience, purpose and tone",
        skills: [
          { id: "B.1", title: "Which text is most formal?" },
          { id: "B.2", title: "Compare passages for subjective and objective tone" },
          { id: "B.3", title: "Identify audience and purpose" },
          { id: "B.4", title: "Compare passages for tone" }
        ]
      },

      {
        id: "C",
        title: "Literary devices",
        skills: [
          { id: "C.1", title: "Identify the narrative point of view" },
          { id: "C.2", title: "Interpret the meaning of an allusion from its source" },
          { id: "C.3", title: "Recall the source of an allusion" },
          { id: "C.4", title: "Interpret the figure of speech" },
          { id: "C.5", title: "Classify the figure of speech: euphemism, hyperbole, oxymoron, paradox" },
          { id: "C.6", title: "Classify anaphora, antithesis, apostrophe, assonance, chiasmus, understatement" },
          { id: "C.7", title: "Classify the figure of speech: review" },
          { id: "C.8", title: "Analyse the effects of figures of speech on meaning and tone" }
        ]
      },

      {
        id: "D",
        title: "Analysing literature",
        skills: [
          { id: "D.1", title: "Analyse short stories: set 1" },
          { id: "D.2", title: "Analyse short stories: set 2" }
        ]
      },

      {
        id: "E",
        title: "Analysing informational texts",
        skills: [
          { id: "E.1", title: "Analyse the development of informational passages: set 1" },
          { id: "E.2", title: "Analyse the development of informational passages: set 2" },
          { id: "E.3", title: "Trace an argument: set 1" },
          { id: "E.4", title: "Trace an argument: set 2" },
          { id: "E.5", title: "Analyse rhetorical strategies in historical texts: set 1" },
          { id: "E.6", title: "Analyse rhetorical strategies in historical texts: set 2" }
        ]
      },

      /* --------------------------
         Writing Strategies
      -------------------------- */

      {
        id: "F",
        title: "Organising writing",
        skills: [
          { id: "F.1", title: "Order topics from broadest to narrowest" },
          { id: "F.2", title: "Organise information by topic" }
        ]
      },

      {
        id: "G",
        title: "Topic sentences",
        skills: [
          { id: "G.1", title: "Choose the topic sentence that best captures the main idea" }
        ]
      },

      {
        id: "H",
        title: "Developing and supporting arguments",
        skills: [
          { id: "H.1", title: "Distinguish facts from opinions" },
          { id: "H.2", title: "Identify stronger and weaker evidence to support a claim" },
          { id: "H.3", title: "Choose the best evidence to support a claim" },
          { id: "H.4", title: "Identify supporting evidence in a text" },
          { id: "H.5", title: "Evaluate counterclaims" },
          { id: "H.6", title: "Choose the analysis that logically connects the evidence to the claim" },
          { id: "H.7", title: "Transition logically between claims, evidence, analysis and counterclaims" }
        ]
      },

      {
        id: "I",
        title: "Persuasive strategies",
        skills: [
          { id: "I.1", title: "Identify appeals to ethos, pathos and logos in advertisements" },
          { id: "I.2", title: "Use appeals to ethos, pathos and logos in persuasive writing" }
        ]
      },

      {
        id: "J",
        title: "Writing clearly and concisely",
        skills: [
          { id: "J.1", title: "Transitions with conjunctive adverbs" },
          { id: "J.2", title: "Avoid double, illogical and unclear comparisons" },
          { id: "J.3", title: "Identify sentences with parallel structure" },
          { id: "J.4", title: "Use parallel structure" },
          { id: "J.5", title: "Remove redundant words or phrases" }
        ]
      },

      {
        id: "K",
        title: "Editing and revising",
        skills: [
          { id: "K.1", title: "Use the correct frequently confused word" },
          { id: "K.2", title: "Identify and correct errors with frequently confused words" },
          { id: "K.3", title: "Identify and correct errors with frequently confused pronouns and contractions" },
          { id: "K.4", title: "Correct errors with commonly misspelled words" },
          { id: "K.5", title: "Correct errors in everyday use" },
          { id: "K.6", title: "Suggest appropriate revisions" }
        ]
      },

      {
        id: "L",
        title: "Research skills",
        skills: [
          { id: "L.1", title: "Identify plagiarism" }
        ]
      },

      /* --------------------------
         Vocabulary
      -------------------------- */

      {
        id: "M",
        title: "Prefixes and suffixes",
        skills: [
          { id: "M.1", title: "Prefixes" },
          { id: "M.2", title: "Suffixes" },
          { id: "M.3", title: "Word pattern analogies" },
          { id: "M.4", title: "Word pattern sentences" }
        ]
      },

      {
        id: "N",
        title: "Greek and Latin roots",
        skills: [
          { id: "N.1", title: "Sort words by shared Greek or Latin roots" },
          { id: "N.2", title: "Use Greek and Latin roots as clues to word meanings" },
          { id: "N.3", title: "Use words as clues to the meanings of Greek and Latin roots" },
          { id: "N.4", title: "Determine the meanings of Greek and Latin roots" },
          { id: "N.5", title: "Determine meanings of words with Greek and Latin roots" }
        ]
      },

      {
        id: "O",
        title: "Homophones",
        skills: [
          { id: "O.1", title: "Use the correct homophone" },
          { id: "O.2", title: "Identify and correct errors with homophones" }
        ]
      },

      {
        id: "P",
        title: "Foreign words and expressions",
        skills: [
          { id: "P.1", title: "Use etymologies to determine meaning" },
          { id: "P.2", title: "Use context clues for foreign expressions" },
          { id: "P.3", title: "Use the correct foreign expression" }
        ]
      },

      {
        id: "Q",
        title: "Word usage and nuance",
        skills: [
          { id: "Q.1", title: "Describe differences between related words" },
          { id: "Q.2", title: "Choose the correct connotation/denotation" },
          { id: "Q.3", title: "Use words accurately and precisely" },
          { id: "Q.4", title: "Replace words using a thesaurus" },
          { id: "Q.5", title: "Use dictionary entries to determine usage" }
        ]
      },

      {
        id: "R",
        title: "Analogies",
        skills: [
          { id: "R.1", title: "Analogies" },
          { id: "R.2", title: "Analogies: challenge" }
        ]
      },

      {
        id: "S",
        title: "Context clues",
        skills: [
          { id: "S.1", title: "Use synonyms in context to determine meaning" },
          { id: "S.2", title: "Use antonyms in context to determine meaning" },
          { id: "S.3", title: "Use context to identify meaning" },
          { id: "S.4", title: "Domain-specific vocabulary (science & technical)" }
        ]
      },

      /* --------------------------
         Grammar and Mechanics
      -------------------------- */

      {
        id: "T",
        title: "Sentences, fragments and run-ons",
        skills: [
          { id: "T.1", title: "Identify sentence fragments" },
          { id: "T.2", title: "Identify run-on sentences" },
          { id: "T.3", title: "Choose punctuation to avoid fragments and run-ons" }
        ]
      },

      {
        id: "U",
        title: "Phrases and clauses",
        skills: [
          { id: "U.1", title: "Is it a phrase or a clause?" },
          { id: "U.2", title: "Identify prepositional phrases" },
          { id: "U.3", title: "Identify appositives and appositive phrases" },
          { id: "U.4", title: "Identify dependent and independent clauses" },
          { id: "U.5", title: "Identify simple, compound, complex and compound-complex sentences" },
          { id: "U.6", title: "Combine sentences using relative clauses" }
        ]
      },

      {
        id: "V",
        title: "Pronouns",
        skills: [
          { id: "V.1", title: "Correct errors with subject and object pronouns" },
          { id: "V.2", title: "Subject and object pronouns review" },
          { id: "V.3", title: "Pronouns after 'than' and 'as'" },
          { id: "V.4", title: "Correct errors with 'who'" },
          { id: "V.5", title: "Use relative pronouns: who, whom" },
          { id: "V.6", title: "Use relative pronouns: who, whom, whose, which, that" },
          { id: "V.7", title: "Identify vague pronoun references" },
          { id: "V.8", title: "Identify possible antecedents" },
          { id: "V.9", title: "Correct inappropriate pronoun shifts" }
        ]
      },

      {
        id: "W",
        title: "Verb types",
        skills: [
          { id: "W.1", title: "Identify transitive and intransitive verbs" },
          { id: "W.2", title: "Identify linking verbs, predicate adjectives and nouns" },
          { id: "W.3", title: "Identify participles and what they modify" },
          { id: "W.4", title: "Identify gerunds and their functions" },
          { id: "W.5", title: "Identify infinitives and infinitive phrases" }
        ]
      },

      {
        id: "X",
        title: "Subject-verb agreement",
        skills: [
          { id: "X.1", title: "Correct subject-verb agreement errors" },
          { id: "X.2", title: "Correct indefinite pronoun-verb agreement" },
          { id: "X.3", title: "Correct agreement with compound subjects" }
        ]
      },

      {
        id: "Y",
        title: "Verb tense",
        skills: [
          { id: "Y.1", title: "Form progressive tenses" },
          { id: "Y.2", title: "Form perfect tenses" },
          { id: "Y.3", title: "Correct inappropriate tense shifts" }
        ]
      },

      {
        id: "Z",
        title: "Adjectives and adverbs",
        skills: [
          { id: "Z.1", title: "Form comparative and superlative adjectives" },
          { id: "Z.2", title: "Good, better, best; bad, worse, worst" },
          { id: "Z.3", title: "Form comparative and superlative adverbs" },
          { id: "Z.4", title: "Well, better, best; badly, worse, worst" }
        ]
      },

      {
        id: "AA",
        title: "Misplaced modifiers",
        skills: [
          { id: "AA.1", title: "Misplaced modifiers with pictures" },
          { id: "AA.2", title: "Select the misplaced or dangling modifier" },
          { id: "AA.3", title: "Determine whether modifiers are used correctly" }
        ]
      },

      {
        id: "BB",
        title: "Restrictive and non-restrictive elements",
        skills: [
          { id: "BB.1", title: "Commas with non-restrictive elements" }
        ]
      },

      {
        id: "CC",
        title: "Commas",
        skills: [
          { id: "CC.1", title: "Commas with direct addresses, introductory elements, interjections and interrupters" },
          { id: "CC.2", title: "Commas with compound, complex and compound-complex sentences" },
          { id: "CC.3", title: "Commas with coordinate adjectives" },
          { id: "CC.4", title: "Commas: review" }
        ]
      },

      {
        id: "DD",
        title: "Semicolons, colons and commas",
        skills: [
          { id: "DD.1", title: "Join sentences with semicolons, colons and commas" },
          { id: "DD.2", title: "Use colons and commas to introduce lists, quotations and appositives" },
          { id: "DD.3", title: "Use semicolons and commas to separate items in a series" },
          { id: "DD.4", title: "Semicolons, colons and commas: review" }
        ]
      },

      {
        id: "EE",
        title: "Dashes, hyphens and ellipses",
        skills: [
          { id: "EE.1", title: "Use dashes" },
          { id: "EE.2", title: "Use hyphens in compound adjectives" },
          { id: "EE.3", title: "Determine whether ellipses are used appropriately" }
        ]
      },

      {
        id: "FF",
        title: "Apostrophes",
        skills: [
          { id: "FF.1", title: "Correct plural and possessive nouns" },
          { id: "FF.2", title: "Correct compound and joint possession" }
        ]
      },

      {
        id: "GG",
        title: "Capitalisation",
        skills: [
          { id: "GG.1", title: "Correct capitalisation errors" }
        ]
      }
    ]
  }
}


};