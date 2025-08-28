// @ts-nocheck
// Robust bridge: accepts default, quiz, or questions export shapes
import * as q from "./quiz";
const arr = (q as any)?.default ?? (q as any)?.quiz ?? (q as any)?.questions ?? [];
export default Array.isArray(arr) ? arr : [];
