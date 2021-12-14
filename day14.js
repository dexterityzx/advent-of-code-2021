const initialPolymer = "CVKKFSSNNHNPSPPKBHPB";

const templates = new Map([
  ["OF", "S"],
  ["VO", "F"],
  ["BP", "S"],
  ["FC", "S"],
  ["PN", "K"],
  ["HC", "P"],
  ["PP", "N"],
  ["FK", "V"],
  ["KN", "C"],
  ["BO", "O"],
  ["KS", "B"],
  ["FF", "S"],
  ["KC", "B"],
  ["FV", "C"],
  ["VF", "N"],
  ["HS", "H"],
  ["OS", "F"],
  ["VC", "S"],
  ["VP", "P"],
  ["BC", "O"],
  ["HF", "F"],
  ["HO", "F"],
  ["PC", "B"],
  ["CC", "K"],
  ["NB", "N"],
  ["KK", "N"],
  ["KP", "V"],
  ["BH", "H"],
  ["BF", "O"],
  ["OB", "F"],
  ["VK", "P"],
  ["FB", "O"],
  ["NP", "B"],
  ["CB", "C"],
  ["PS", "S"],
  ["KO", "V"],
  ["SP", "C"],
  ["BK", "O"],
  ["NN", "O"],
  ["OC", "F"],
  ["VB", "B"],
  ["ON", "K"],
  ["NK", "B"],
  ["CK", "H"],
  ["NH", "N"],
  ["CV", "C"],
  ["PF", "P"],
  ["PV", "V"],
  ["CP", "N"],
  ["FP", "N"],
  ["SB", "B"],
  ["SN", "N"],
  ["KF", "F"],
  ["HP", "S"],
  ["BN", "V"],
  ["NF", "B"],
  ["PO", "O"],
  ["CH", "O"],
  ["VV", "S"],
  ["OV", "V"],
  ["SF", "P"],
  ["BV", "S"],
  ["FH", "V"],
  ["CN", "H"],
  ["VH", "V"],
  ["HB", "B"],
  ["FN", "P"],
  ["OH", "S"],
  ["SK", "H"],
  ["OP", "H"],
  ["VN", "V"],
  ["HN", "P"],
  ["BS", "S"],
  ["CF", "B"],
  ["PB", "H"],
  ["SS", "K"],
  ["NV", "P"],
  ["FS", "N"],
  ["CS", "O"],
  ["OK", "B"],
  ["CO", "O"],
  ["VS", "F"],
  ["OO", "B"],
  ["NO", "H"],
  ["SO", "F"],
  ["HH", "K"],
  ["FO", "H"],
  ["SH", "O"],
  ["HV", "B"],
  ["SV", "N"],
  ["PH", "F"],
  ["BB", "P"],
  ["KV", "B"],
  ["KB", "H"],
  ["KH", "N"],
  ["NC", "P"],
  ["SC", "S"],
  ["PK", "B"],
  ["NS", "V"],
  ["HK", "B"],
]);
//console.log(templates);

const produce = (currentPolymer, templates) => {
  const nextPolymer = [currentPolymer[0]];

  for (let i = 1; i < currentPolymer.length; i++) {
    const last = currentPolymer[i - 1];
    const current = currentPolymer[i];

    const pattern = `${last}${current}`;
    if (templates.has(pattern)) nextPolymer.push(templates.get(pattern));

    nextPolymer.push(current);
  }
  return nextPolymer;
};

const step = (n, initialPolymer, templates) => {
  let currentPolymer = initialPolymer.split("");
  while (n-- > 0) {
    currentPolymer = produce(currentPolymer, templates);
    //console.log(currentPolymer.join(''), currentPolymer.length);
  }
  return currentPolymer;
};

const calculateScore = (polymer) => {
  const counts = new Array(26).fill(0);

  const toIndex = (char) => char.charCodeAt(0) - 65;

  for (const char of polymer) {
    counts[toIndex(char)]++;
  }

  const max = Math.max(...counts);
  const min = Math.min(...counts.filter((x) => x > 0));

  return max - min;
};

console.log(calculateScore(step(10, initialPolymer, templates)));

// However, when the steps are large, the following code would exceed max memory limitation
// since we can not generate such a big string in memory

// console.log(calculateScore(step(40, initialPolymer, templates)));

// Therefore, instead of building the string and count,
// we can count the patterns and count the pattern-generated letter

const addCount = (key, count, map) => {
  if (!map.has(key)) map.set(key, 0);
  map.set(key, map.get(key) + count);
};

const calculateScore2 = (initialPolymer, templates, steps) => {

  const lettersCount = new Map();
  const addLetterCount = (letter, count) => addCount(letter, count, lettersCount);

  let patternsCount = new Map();
  
  for (let i = 0; i < initialPolymer.length; i++) addLetterCount(initialPolymer[i], 1);

  for (let i = 1; i < initialPolymer.length; i++) 
    addCount(`${initialPolymer[i-1]}${initialPolymer[i]}`, 1, patternsCount);

  while (steps-- > 0) {
    const nextPatternsCount = new Map();
    patternsCount.forEach((count, pattern) => {
      const addedLetter = templates.get(pattern);
      addLetterCount(addedLetter, count);

      const addedPattern1 = pattern[0] + addedLetter;
      addCount(addedPattern1, count, nextPatternsCount);

      const addedPattern2 = addedLetter + pattern[1];
      addCount(addedPattern2, count, nextPatternsCount);
    });
    patternsCount = nextPatternsCount;
  }

  const max = Math.max(...lettersCount.values());
  const min = Math.min(...lettersCount.values());
  return max - min;
};

console.log(calculateScore2(initialPolymer, templates, 10));
console.log(calculateScore2(initialPolymer, templates, 40));
