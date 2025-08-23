// @ts-nocheck
import * as quizMod from "./quiz";
const candidates = Object.values(quizMod);
const found = candidates.find((v) => Array.isArray(v)) || [];
export default found as any[];
