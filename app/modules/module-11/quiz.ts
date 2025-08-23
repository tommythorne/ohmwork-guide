// placeholder 15-question quiz for Module $m
const quiz = Array.from({length:15}, (_,i)=>({
  id: i+1,
  stem: `Sample question \${i+1} for Module $m`,
  choices: [
    { key: "A", text: "Option A" },
    { key: "B", text: "Option B" },
    { key: "C", text: "Option C" },
    { key: "D", text: "Option D" }
  ],
  answer: "A",
  why: "Replace with real explanation"
}));
export default quiz;
