import * as q from "./quiz";
const raw =
  Array.isArray((q as any).default)   ? (q as any).default :
  Array.isArray((q as any).quiz)      ? (q as any).quiz :
  Array.isArray((q as any).questions) ? (q as any).questions :
  [];
// Enforce 15 questions (Module 2 parity)
const questions = raw.slice(0, 15);
export default questions;
