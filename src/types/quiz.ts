export interface Question {
  id: number;
  type:string;
  problem: string;      // "_______ 은(는) 물가가 지속적으로 상승하는 현상이다."
  options: string[];  // ["답1", "답2", "답3", "답4"]
  answer: string;
  optionDescriptions: string[];
}