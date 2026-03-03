import { lowerGradeData } from "./curriculum-lower";
import { upperGradeData } from "./curriculum-upper";
import { lowerEnglishData } from "./curriculum-lower-english";
import { upperEnglishData } from "./curriculum-upper-english";

// --- 1. TYPES ---
export interface Skill {
  id: string;
  title: string;
}

export interface Topic {
  id: string;
  title: string;
  skills: Skill[];
}

export interface SubjectData {
  title: string;
  description: string;
  stats: { skills: number; videos: number; games: number };
  topics: Topic[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface AILesson {
  topicIntro: string;
  questions: QuizQuestion[];
}

// --- 2. HELPER TO MERGE DATA ---
// This function combines Math (e.g. lowerGradeData) and English (lowerEnglishData)
// into a single object for each grade.
const mergeCurriculum = (
  mathData: Record<string, Record<string, SubjectData>>,
  englishData: Record<string, Record<string, SubjectData>>
) => {
  const merged: Record<string, Record<string, SubjectData>> = { ...mathData };

  // Iterate through English data and merge it into the existing Math objects
  Object.keys(englishData).forEach((grade) => {
    if (merged[grade]) {
      // If grade exists (it has math), add english to it
      merged[grade] = { ...merged[grade], ...englishData[grade] };
    } else {
      // If grade didn't exist in math (unlikely), just add english
      merged[grade] = englishData[grade];
    }
  });

  return merged;
};

// --- 3. MERGE EVERYTHING ---
const allLower = mergeCurriculum(lowerGradeData, lowerEnglishData);
const allUpper = mergeCurriculum(upperGradeData, upperEnglishData);

export const curriculumDatabase: Record<string, Record<string, SubjectData>> = {
  ...allLower,
  ...allUpper,
};