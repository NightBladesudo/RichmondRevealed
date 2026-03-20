import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, RefreshCw, ChevronRight, CheckCircle, XCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allQuestions = [
  {
    question: "What year was Richmond, Virginia founded?",
    options: ["1707", "1737", "1607", "1781"],
    answer: "1737",
    correctIndex: 1,
    fact: "Richmond was founded in 1737 by William Byrd II, who named it after Richmond upon Thames in England."
  },
  {
    question: "Richmond served as the capital of which Confederate state during the Civil War?",
    options: ["The Confederate States of America", "The Union", "The Republic of Virginia", "The Commonwealth of the South"],
    answer: "The Confederate States of America",
    correctIndex: 0,
    fact: "Richmond was the capital of the Confederacy from 1861 until it fell to Union forces in April 1865."
  },
  {
    question: "What river runs through Richmond?",
    options: ["Potomac River", "Shenandoah River", "James River", "Rappahannock River"],
    answer: "James River",
    correctIndex: 2,
    fact: "The James River runs right through Richmond and is famous for its urban whitewater rapids — one of the few cities in the U.S. with such features."
  },
  {
    question: "Which famous American patriot declared 'Give me liberty, or give me death!' at St. John's Church in Richmond?",
    options: ["Thomas Jefferson", "George Washington", "Patrick Henry", "Benjamin Franklin"],
    answer: "Patrick Henry",
    correctIndex: 2,
    fact: "Patrick Henry delivered his famous speech at the Second Virginia Convention held at St. John's Church in Richmond on March 23, 1775."
  },
  {
    question: "What is Richmond's airport code?",
    options: ["RVA", "RIC", "RCH", "RMD"],
    answer: "RIC",
    correctIndex: 1,
    fact: "Richmond International Airport (RIC) is located about 7 miles east of downtown Richmond."
  },
  {
    question: "Which famous Richmond neighborhood is known for its Victorian rowhouses and art scene?",
    options: ["Church Hill", "The Fan District", "Scott's Addition", "Manchester"],
    answer: "The Fan District",
    correctIndex: 1,
    fact: "The Fan District gets its name from its streets fanning outward from Monroe Park. It's one of the largest intact Victorian neighborhoods in the U.S."
  },
  {
    question: "What is the name of Richmond's world-class art museum?",
    options: ["Richmond Art Institute", "Virginia Museum of Fine Arts", "Commonwealth Gallery", "James River Museum of Art"],
    answer: "Virginia Museum of Fine Arts",
    correctIndex: 1,
    fact: "The VMFA is one of the largest art museums in the U.S. and is free to enter its permanent collection."
  },
  {
    question: "Richmond is sometimes called the 'craft beer capital' of which state?",
    options: ["North Carolina", "Maryland", "Virginia", "West Virginia"],
    answer: "Virginia",
    correctIndex: 2,
    fact: "Richmond's Scott's Addition neighborhood alone has over a dozen breweries, making it one of the densest brewery districts on the East Coast."
  },
  {
    question: "Which historic Richmond cemetery is the burial site of U.S. Presidents James Monroe and John Tyler?",
    options: ["Shockoe Hill Cemetery", "Maury Cemetery", "Hollywood Cemetery", "Hebrew Confederate Cemetery"],
    answer: "Hollywood Cemetery",
    correctIndex: 2,
    fact: "Hollywood Cemetery, perched on hills overlooking the James River, is the resting place of two U.S. Presidents, Confederate President Jefferson Davis, and over 18,000 Confederate soldiers."
  },
  {
    question: "What popular Richmond park features a Japanese garden, a petting zoo, and a nature center?",
    options: ["Bryan Park", "Byrd Park", "Maymont", "Chimborazo Park"],
    answer: "Maymont",
    correctIndex: 2,
    fact: "Maymont is a 100-acre Victorian estate and nature center — and it's completely free to visit!"
  },
  {
    question: "Richmond's Jackson Ward neighborhood is historically known as what?",
    options: ["The Harlem of the South", "Little Italy of Virginia", "The French Quarter of Richmond", "Tobacco Row"],
    answer: "The Harlem of the South",
    correctIndex: 0,
    fact: "Jackson Ward was a thriving center of African American culture, business, and entertainment in the early 20th century, earning it the nickname 'The Harlem of the South.'"
  },
  {
    question: "Which Richmond-born entrepreneur is known as the 'Maggie Walker' who became the first Black woman to charter a bank in the U.S.?",
    options: ["Mary Church Terrell", "Maggie Lena Walker", "Ida B. Wells", "Nannie Helen Burroughs"],
    answer: "Maggie Lena Walker",
    correctIndex: 1,
    fact: "Maggie Lena Walker founded the St. Luke Penny Savings Bank in Richmond in 1903. Her home is now a National Historic Site in Jackson Ward."
  },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

const TOTAL_QUESTIONS = 8;

export default function Trivia() {
  const [questions] = useState(() => shuffle(allQuestions).slice(0, TOTAL_QUESTIONS));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [key, setKey] = useState(0);

  const q = questions[current];
  const isCorrect = selected === q?.correctIndex;

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === q.correctIndex;
    if (correct) setScore(s => s + 1);
    setAnswers(prev => [...prev, { correct }]);
  };

  const handleNext = () => {
    if (current + 1 >= TOTAL_QUESTIONS) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setKey(k => k + 1);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const pct = Math.round((score / TOTAL_QUESTIONS) * 100);
  const grade =
    pct === 100 ? { label: 'Perfect Score! 🏆', color: 'text-yellow-500' } :
    pct >= 75 ? { label: 'Richmond Expert! 🌟', color: 'text-green-600' } :
    pct >= 50 ? { label: 'Local in Training 📚', color: 'text-blue-600' } :
    { label: 'Keep Exploring! 🗺️', color: 'text-[#a63d2f]' };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=1280)' }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/85" />
        </div>
        <div className="relative h-full max-w-4xl mx-auto px-4 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Test Your Knowledge</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-3">Richmond Trivia</h1>
            <p className="text-gray-200 text-lg max-w-xl">
              How well do you know the River City? Answer {TOTAL_QUESTIONS} questions and find out!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div key={`q-${current}-${key}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}>
                {/* Progress */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">Question {current + 1} of {TOTAL_QUESTIONS}</span>
                  <span className="text-sm font-semibold text-[#1e3a5f]">Score: {score}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                  <div
                    className="bg-[#a63d2f] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((current) / TOTAL_QUESTIONS) * 100}%` }}
                  />
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 mb-6">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#c9a227]" />
                    </div>
                    <h2 className="font-display text-xl text-[#1e3a5f] font-bold leading-snug">{q.question}</h2>
                  </div>

                  <div className="space-y-3">
                    {q.options.map((opt, idx) => {
                      let style = 'border-gray-200 bg-gray-50 hover:border-[#1e3a5f] hover:bg-blue-50 cursor-pointer';
                      if (selected !== null) {
                        if (idx === q.correctIndex) style = 'border-green-500 bg-green-50 cursor-default';
                        else if (idx === selected) style = 'border-red-400 bg-red-50 cursor-default';
                        else style = 'border-gray-200 bg-gray-50 opacity-50 cursor-default';
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelect(idx)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${style}`}
                        >
                          <span className="font-medium text-gray-800">{opt}</span>
                          {selected !== null && idx === q.correctIndex && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                          {selected !== null && idx === selected && idx !== q.correctIndex && <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fun Fact */}
                <AnimatePresence>
                  {selected !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-xl p-5 mb-6 border-2 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}
                    >
                      <p className="text-sm font-semibold mb-1">{isCorrect ? '✅ Correct!' : '❌ Not quite!'}</p>
                      <p className="text-sm text-gray-700 leading-relaxed"><span className="font-semibold">Fun fact:</span> {q.fact}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {selected !== null && (
                  <Button
                    onClick={handleNext}
                    className="w-full bg-[#1e3a5f] hover:bg-[#2a4f7c] text-white py-6 text-base font-semibold rounded-xl flex items-center justify-center gap-2"
                  >
                    {current + 1 >= TOTAL_QUESTIONS ? 'See My Results' : 'Next Question'}
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                )}
              </motion.div>
            ) : (
              <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="text-center">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10">
                  <Trophy className="w-16 h-16 text-[#c9a227] mx-auto mb-4" />
                  <h2 className="font-display text-4xl text-[#1e3a5f] font-bold mb-2">Quiz Complete!</h2>
                  <p className={`text-2xl font-bold mb-1 ${grade.color}`}>{grade.label}</p>
                  <p className="text-gray-500 text-lg mb-8">You scored <span className="font-bold text-[#1e3a5f]">{score} out of {TOTAL_QUESTIONS}</span> ({pct}%)</p>

                  {/* Answer breakdown */}
                  <div className="flex justify-center gap-2 mb-8">
                    {answers.map((a, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${a.correct ? 'bg-green-500' : 'bg-red-400'}`}>
                        {a.correct ? '✓' : '✗'}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleRestart}
                    className="bg-[#a63d2f] hover:bg-[#8b3426] text-white px-10 py-6 text-base font-semibold rounded-xl flex items-center gap-2 mx-auto"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Play Again
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}