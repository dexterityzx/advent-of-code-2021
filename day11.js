const input = [
  6111821767, 1763611615, 3512683131, 8582771473, 8214813874, 2325823217,
  2222482823, 5471356782, 3738671287, 8675226574,
];
const testInput1 = [
  5483143223, 2745854711, 5264556173, 6141336146, 6357385478, 4167524645,
  2176841721, 6882881134, 4846848554, 5283751526,
];
const testInput2 = [11111, 19991, 19191, 19991, 11111];

const initialEnergyLevelMap = input.map((n) => {
  const digits = [];
  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  return digits.reverse();
});

const R = initialEnergyLevelMap.length;

const C = initialEnergyLevelMap[0].length;

const levelUpAll = (map) => {
  const readyToFlash = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      map[r][c] = (map[r][c] + 1) % 10;
      if (map[r][c] == 0) readyToFlash.push([r, c]);
    }
  }
  return readyToFlash;
};

const getCoordKey = (coord) => coord.join("_");

const isValidCoord = (coord) =>
  0 <= coord[0] && coord[0] < R && 0 <= coord[1] && coord[1] < C;

const levelUpNeighbors = (map, coord, ignore) => {
  const flashed = [];
  const delta = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ];
  const curR = coord[0];
  const curC = coord[1];
  for (let i = 0; i < delta.length; i++) {
    const nextR = curR + delta[i][0];
    const nextC = curC + delta[i][1];
    const nextCoord = [nextR, nextC];
    const nextCoordKey = getCoordKey(nextCoord);
    if (isValidCoord(nextCoord) && !ignore.has(nextCoordKey)) {
      map[nextR][nextC] = (map[nextR][nextC] + 1) % 10;
      if (map[nextR][nextC] == 0) flashed.push(nextCoord);
    }
  }
  return flashed;
};

const oneStep = (map) => {
  const lastFlashed = levelUpAll(map); 
  // initial
  const hasFlashed = new Set(lastFlashed.map(getCoordKey));
  let flashCount = lastFlashed.length;

  while (lastFlashed.length) {
    let l = lastFlashed.length;
    while (l--) {
      const coord = lastFlashed.shift();
      // level up neighbors and ignore already flashed
      const flashed = levelUpNeighbors(map, coord, hasFlashed);
      flashed.forEach((c) => {
        lastFlashed.push(c);
        hasFlashed.add(getCoordKey(c));
      });
    }
    flashCount += lastFlashed.length;
  }

  return flashCount;
};

//part 1
const countFlash = (map, steps) => {
  let flashCount = 0;
  while (steps-- > 0) flashCount += oneStep(map);
  return flashCount;
};
const energyLevelMap1 = initialEnergyLevelMap.map((x) => x.slice());
const flashCount = countFlash(energyLevelMap1, 100);
console.log(flashCount);

//part 2
const findSyncStep = (map) => {
  let step = 0;
  const targetFlashCount = R * C;
  while (true) {
    const flashCount = oneStep(map);
    step++;
    if (targetFlashCount === flashCount) return step;
  }
};
const energyLevelMap2 = initialEnergyLevelMap.map((x) => x.slice());
console.log(findSyncStep(energyLevelMap2));
