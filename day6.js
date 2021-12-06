const initialStates = [
  3, 5, 3, 5, 1, 3, 1, 1, 5, 5, 1, 1, 1, 2, 2, 2, 3, 1, 1, 5, 1, 1, 5, 5, 3, 2,
  2, 5, 4, 4, 1, 5, 1, 4, 4, 5, 2, 4, 1, 1, 5, 3, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1,
  1, 1, 2, 1, 1, 4, 1, 1, 1, 2, 3, 5, 5, 1, 1, 3, 1, 4, 1, 3, 4, 5, 1, 4, 5, 1,
  1, 4, 1, 3, 1, 5, 1, 2, 1, 1, 2, 1, 4, 1, 1, 1, 4, 4, 3, 1, 1, 1, 1, 1, 4, 1,
  4, 5, 2, 1, 4, 5, 4, 1, 1, 1, 2, 2, 1, 4, 4, 1, 1, 4, 1, 1, 1, 2, 3, 4, 2, 4,
  1, 1, 5, 4, 2, 1, 5, 1, 1, 5, 1, 2, 1, 1, 1, 5, 5, 2, 1, 4, 3, 1, 2, 2, 4, 1,
  2, 1, 1, 5, 1, 3, 2, 4, 3, 1, 4, 3, 1, 2, 1, 1, 1, 1, 1, 4, 3, 3, 1, 3, 1, 1,
  5, 1, 1, 1, 1, 3, 3, 1, 3, 5, 1, 5, 5, 2, 1, 2, 1, 4, 2, 3, 4, 1, 4, 2, 4, 2,
  5, 3, 4, 3, 5, 1, 2, 1, 1, 4, 1, 3, 5, 1, 4, 1, 2, 4, 3, 1, 5, 1, 1, 2, 2, 4,
  2, 3, 1, 1, 1, 5, 2, 1, 4, 1, 1, 1, 4, 1, 3, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 1,
  4, 1, 3, 1, 2, 5, 5, 4, 1, 2, 3, 3, 2, 2, 1, 3, 3, 1, 4, 4, 1, 1, 4, 1, 1, 5,
  1, 2, 4, 2, 1, 4, 1, 1, 4, 3, 5, 1, 2, 1
];

//const initialStates = [3,4,3,1,2];

const stateCounts = new Array(9).fill(0); // 0 => 8

const increaseStateCount = (state, n) => {
    stateCounts[state] += n
}

const decreaseStateCount = (state, n) => {
    stateCounts[state] = Math.max(0, stateCounts[state]-n);
}

const leftShift = () => {
    for(let i=0; i<stateCounts.length-1; i++){
        stateCounts[i] = stateCounts[i+1];
    }
    stateCounts[stateCounts.length-1] = 0;
}

const countStates = () => stateCounts.reduce((sum, cur)=> sum + cur, 0);

initialStates.forEach(state => increaseStateCount(state, 1));

const runGeneration = (n) => {
    let day = 1
    while(day <= n){
        var generated = stateCounts[0];
        leftShift();
        stateCounts[6] += generated;
        stateCounts[8] += generated;
        day++;
    }
}

//part1
runGeneration(80);

console.log(countStates())

//part2 - since the first 80 day has been run
runGeneration(256-80);

console.log(countStates())

/*
use an array to remember the counts of the state, which has 0 to 8

[0 1 2 3 4 5 6 7 8] states - state 0 at index 0, state 1 at index 1, etc.
----------------------------
[0 1 1 2 1 0 0 0 0] initial state count
[1 1 2 1 0 0 0 0 0] day 1 state count
[1 2 1 0 0 0 1 0 1] day 2 state count

for each day
    1. set X = state[0], which is the numbers of the generated fish and reset fish
    2. left shift array by 1 index. Left-shifting array equals to shifting states.
    3. add state[6](reset) and state[8](generated) by X
*/