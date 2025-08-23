// @ts-nocheck
import * as q from "./quiz";
const out = (q as any).default ?? (q as any).quiz ?? (q as any).questions ?? [];
export default Array.isArray(out) ? out : [];
