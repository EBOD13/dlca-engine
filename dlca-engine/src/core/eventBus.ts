// src/core/types.ts

export type EventPayloads = {
  // Input events
  USER_STARTED_SPEAKING: { timestamp: number };
  USER_STOPPED_SPEAKING: { timestamp: number };
  USER_PARTIAL_TRANSCRIPT: { text: string; timestamp: number };
  USER_FINAL_TRANSCRIPT: { text: string; timestamp: number };

  // Reasoning / Subconscious
  NEW_INTENT_DETECTED: { intentId: string; confidence: number };
  PRIORITY_UPDATED: { threadId: string; priority: number };
  INTERRUPT_REQUESTED: { reason: string };
  RESPONSE_READY: { responseId: string; text: string; audioChunks?: string[] };

  // Output / Conscious
  START_SPEAKING: { responseId: string };
  STOP_SPEAKING: { responseId: string };
  AUDIO_CHUNK_READY: { responseId: string; chunkIndex: number; chunkData: string };
  SPEECH_FINISHED: { responseId: string };

  // System / session
  SESSION_STARTED: { sessionId: string };
  SESSION_ENDED: { sessionId: string };
  ERROR: { message: string; code?: number; data?: any };
};

// Convenience type
export type EventType = keyof EventPayloads;
