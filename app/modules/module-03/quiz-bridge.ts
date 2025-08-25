// @ts-nocheck
// Normalizes whatever app/modules/module-03/quiz.ts exports into a plain array
import * as q from "./quiz";
const arr = (q as any)?.default ?? (q as any)?.quiz ?? (q as any)?.questions ?? [];
export default Array.isArray(arr) ? arr : [];
