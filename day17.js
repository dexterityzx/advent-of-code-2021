//arget area: x=70..125, y=-159..-121
// part 1
const findLongestDistance = (initialSpeed) => {
    let distance = 0;
    for (let speed = initialSpeed; speed >= 0; speed--) {
        distance += speed;
    }
    return distance;
};

// The speed of the Y at y = 0 will -(initialYSpeed+1),
// and the next distance after y = 0 will be (initialYSpeed + 1).
// Therefore, We only need to set initialYSpeed to (maxDepth -1).
console.log(findLongestDistance(158));

// part2
const isInTargetArea = (x, y) => 70 <= x && x <= 125 && -159 <= y && y <= -121;
const isOutOfBoundary = (x, y) => x > 125 || y < -159;

const canHit = (initialX, initialY) => {
    let x = 0;
    let y = 0;
    let xSpeed = initialX;
    let ySpeed = initialY;
    let hit = false;
    while (!isOutOfBoundary(x, y) && !hit) {
        if (isInTargetArea(x, y)) {
            hit = true;
        }
        y += ySpeed--;
        x += Math.max(xSpeed--, 0);
    }
    return hit;
};

const count = () => {
    let results = [];
    for (let initialX = 0; initialX <= 125; initialX++) {
        for (let initialY = -159; initialY <= 159; initialY++) {
            if(canHit(initialX, initialY)){
                results.push([initialX, initialY]);
            }
        }
    }
    return results;
};

console.log(count().length);