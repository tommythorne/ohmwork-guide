// @ts-nocheck
import * as quizMod from "./quiz";

// Grab the first exported array (your quiz), whatever it's named
const candidates = Object.values(quizMod);
const found = candidates.find((v: any) => Array.isArray(v)) || [];
export default found as any[];
