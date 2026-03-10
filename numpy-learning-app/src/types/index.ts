export interface Topic {
  id: string;
  title: string;
  order: number;
  category: string;
  description: string;
  content: {
    explanation: string;
    keyPoints: string[];
  };
  examples: CodeExample[];
  exercises: Exercise[];
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  expectedOutput?: string;
}

export interface Exercise {
  id: string;
  title: string;
  instructions: string;
  starterCode: string;
  solution: string;
  hints: string[];
  validation?: string;
}

export interface PyodideState {
  isLoading: boolean;
  isReady: boolean;
  error: string | null;
}

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  success: boolean;
  error?: string;
}