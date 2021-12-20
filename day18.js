const input = [
    [
        [
            [
                [8, 6],
                [0, 8],
            ],
            [5, 2],
        ],
        4,
    ],
    [
        [
            [9, [7, 7]],
            [6, 2],
        ],
        [
            [[5, 9], 5],
            [[7, 1], 6],
        ],
    ],
    [
        [
            [7, [6, 6]],
            [[8, 5], 8],
        ],
        [
            [
                [2, 9],
                [1, 6],
            ],
            [0, 6],
        ],
    ],
    [
        [
            [5, [7, 5]],
            [9, 2],
        ],
        [
            [
                [2, 4],
                [8, 1],
            ],
            [7, 1],
        ],
    ],
    [
        [
            [
                [9, 1],
                [4, 1],
            ],
            [
                [5, 9],
                [2, 0],
            ],
        ],
        [5, [8, [0, 3]]],
    ],
    [
        [
            [9, 5],
            [9, [1, 7]],
        ],
        [
            [
                [9, 9],
                [8, 9],
            ],
            4,
        ],
    ],
    [2, [[2, 4], 7]],
    [
        [
            [
                [8, 7],
                [9, 5],
            ],
            0,
        ],
        [
            [
                [6, 7],
                [9, 2],
            ],
            7,
        ],
    ],
    [
        [
            [[5, 5], 3],
            [4, [2, 3]],
        ],
        [7, [7, 7]],
    ],
    [8, [5, 5]],
    [
        [
            [0, [3, 4]],
            [
                [3, 4],
                [0, 3],
            ],
        ],
        [
            [
                [9, 6],
                [1, 1],
            ],
            [1, [8, 7]],
        ],
    ],
    [
        [[4, 8], 3],
        [3, [9, [8, 9]]],
    ],
    [
        [5, [2, [5, 2]]],
        [2, 9],
    ],
    [
        [
            [
                [5, 6],
                [1, 8],
            ],
            [3, 6],
        ],
        [
            3,
            [
                [4, 4],
                [3, 4],
            ],
        ],
    ],
    [
        [[1, 0], 3],
        [
            [1, [2, 1]],
            [
                [2, 5],
                [2, 0],
            ],
        ],
    ],
    [
        [
            [6, 7],
            [[0, 5], 9],
        ],
        [
            [0, 7],
            [[4, 7], 5],
        ],
    ],
    [
        [[4, [3, 1]], 7],
        [
            [5, 2],
            [3, 0],
        ],
    ],
    [
        [
            [6, 6],
            [9, [2, 6]],
        ],
        [
            9,
            [
                [3, 8],
                [2, 6],
            ],
        ],
    ],
    [
        [[9, 2], 0],
        [
            [3, [6, 6]],
            [7, [1, 7]],
        ],
    ],
    [
        [8, 0],
        [9, [[5, 5], 5]],
    ],
    [
        [2, 7],
        [
            [[8, 7], 0],
            [
                [1, 1],
                [6, 9],
            ],
        ],
    ],
    [[4, [7, [9, 3]]], 7],
    [
        [
            [5, 3],
            [[3, 2], 0],
        ],
        [7, 3],
    ],
    [[0, [8, [8, 6]]], 1],
    [
        [4, 5],
        [
            [[4, 6], 9],
            [3, 0],
        ],
    ],
    [
        [
            [[1, 5], 9],
            [[0, 4], 9],
        ],
        [
            [
                [8, 0],
                [4, 2],
            ],
            [0, [8, 6]],
        ],
    ],
    [
        [
            [6, 4],
            [5, 3],
        ],
        3,
    ],
    [
        [
            [
                [4, 0],
                [6, 6],
            ],
            9,
        ],
        [
            [[7, 0], 7],
            [[4, 5], 3],
        ],
    ],
    [
        [
            [[3, 5], 9],
            [
                [7, 4],
                [6, 8],
            ],
        ],
        [1, 7],
    ],
    [
        [
            [[2, 7], 2],
            [9, 3],
        ],
        [[[1, 2], 3], 7],
    ],
    [
        [
            [
                [9, 4],
                [7, 3],
            ],
            0,
        ],
        [
            [7, [5, 9]],
            [
                [7, 0],
                [0, 7],
            ],
        ],
    ],
    [
        [
            [5, 6],
            [
                [6, 5],
                [5, 3],
            ],
        ],
        [[4, [8, 5]], 1],
    ],
    [
        [[2, 6], 0],
        [
            [1, 0],
            [
                [7, 2],
                [1, 0],
            ],
        ],
    ],
    [[9, 3], 8],
    [
        [
            [5, 9],
            [2, [8, 5]],
        ],
        [
            [5, [4, 7]],
            [[1, 8], 9],
        ],
    ],
    [
        [
            [6, [6, 4]],
            [0, 1],
        ],
        [0, [[3, 9], 9]],
    ],
    [3, 9],
    [
        [
            [7, 5],
            [
                [9, 3],
                [1, 5],
            ],
        ],
        [
            [6, 3],
            [8, [6, 5]],
        ],
    ],
    [
        [0, [0, 5]],
        [7, 0],
    ],
    [
        [[[0, 9], 7], 3],
        [
            [8, 6],
            [8, 7],
        ],
    ],
    [6, [7, [4, [9, 0]]]],
    [
        [
            [
                [2, 4],
                [7, 7],
            ],
            4,
        ],
        [[1, 5], 5],
    ],
    [
        [3, 6],
        [8, 4],
    ],
    [
        [4, 1],
        [
            [
                [3, 9],
                [4, 6],
            ],
            [7, [3, 0]],
        ],
    ],
    [
        [
            [6, [9, 1]],
            [7, 4],
        ],
        [
            [
                [5, 7],
                [3, 5],
            ],
            [[2, 2], 5],
        ],
    ],
    [
        [
            [
                [9, 7],
                [8, 2],
            ],
            [0, [3, 7]],
        ],
        [
            [[8, 8], 4],
            [[5, 2], 5],
        ],
    ],
    [
        [7, [0, [2, 2]]],
        [4, [2, 4]],
    ],
    [
        [
            [0, 8],
            [
                [7, 7],
                [8, 0],
            ],
        ],
        [6, 1],
    ],
    [
        6,
        [
            [
                [4, 4],
                [3, 9],
            ],
            [
                [3, 0],
                [4, 3],
            ],
        ],
    ],
    [
        [
            [8, 8],
            [2, [4, 2]],
        ],
        [[8, [0, 1]], 9],
    ],
    [
        4,
        [
            [6, [4, 6]],
            [1, [6, 9]],
        ],
    ],
    [
        [
            [
                [8, 1],
                [3, 6],
            ],
            [[5, 3], 7],
        ],
        [[9, 6], 1],
    ],
    [
        [
            8,
            [
                [1, 5],
                [1, 7],
            ],
        ],
        [[[8, 6], 5], 7],
    ],
    [6, 3],
    [
        [
            [
                [7, 2],
                [9, 9],
            ],
            0,
        ],
        [
            [[9, 0], 8],
            [5, 7],
        ],
    ],
    [
        [
            [[1, 0], 3],
            [
                [7, 0],
                [1, 2],
            ],
        ],
        0,
    ],
    [
        2,
        [
            [0, 4],
            [6, [6, 8]],
        ],
    ],
    [
        [
            [
                [3, 2],
                [4, 1],
            ],
            3,
        ],
        6,
    ],
    [
        [[5, 6], 5],
        [
            [
                [3, 4],
                [5, 7],
            ],
            [[5, 5], 6],
        ],
    ],
    [
        1,
        [
            [8, [2, 2]],
            [4, 2],
        ],
    ],
    [
        5,
        [
            [[4, 7], 1],
            [[6, 6], 7],
        ],
    ],
    [
        [[[0, 3], 9], 9],
        [0, [2, 2]],
    ],
    [
        [[[8, 9], 3], 5],
        [
            [1, 6],
            [
                [6, 5],
                [1, 6],
            ],
        ],
    ],
    [
        [1, [[0, 1], 0]],
        [
            [[5, 8], 1],
            [1, [0, 0]],
        ],
    ],
    [
        [
            [
                [3, 5],
                [9, 4],
            ],
            [7, [0, 9]],
        ],
        [8, [9, [1, 9]]],
    ],
    [4, 4],
    [
        [7, [7, [0, 2]]],
        [
            [8, 8],
            [5, 5],
        ],
    ],
    [
        [
            [5, [2, 8]],
            [3, 3],
        ],
        [4, [8, 7]],
    ],
    [3, [8, [6, 4]]],
    [
        [8, [[7, 7], 2]],
        [
            [9, 1],
            [
                [5, 8],
                [8, 1],
            ],
        ],
    ],
    [
        [
            [4, [5, 2]],
            [
                [6, 0],
                [7, 7],
            ],
        ],
        [
            [
                [5, 4],
                [8, 3],
            ],
            [[5, 2], 8],
        ],
    ],
    [9, [2, 5]],
    [3, [5, 5]],
    [
        [
            [6, 6],
            [3, [0, 0]],
        ],
        [
            [5, [3, 3]],
            [8, 8],
        ],
    ],
    [
        [5, [2, [5, 2]]],
        [
            [[8, 7], 9],
            [[4, 1], 6],
        ],
    ],
    [
        [
            [
                [7, 2],
                [8, 5],
            ],
            8,
        ],
        [
            [1, [5, 5]],
            [0, 7],
        ],
    ],
    [
        [4, [6, 8]],
        [
            [
                [2, 4],
                [6, 2],
            ],
            [7, [3, 6]],
        ],
    ],
    [
        [8, 5],
        [[[5, 0], 3], 9],
    ],
    [
        [
            [[5, 2], 6],
            [7, 2],
        ],
        [[[7, 4], 9], 0],
    ],
    [
        [[4, [6, 5]], 8],
        [
            [9, [1, 5]],
            [8, 9],
        ],
    ],
    [
        [
            [5, [2, 4]],
            [8, [9, 4]],
        ],
        [[1, 5], 2],
    ],
    [
        [
            [[1, 4], 2],
            [3, [8, 9]],
        ],
        7,
    ],
    [
        [6, [1, 7]],
        [9, 2],
    ],
    [
        [
            [2, [9, 0]],
            [
                [4, 8],
                [3, 4],
            ],
        ],
        [
            [[6, 5], 0],
            [
                [3, 3],
                [4, 3],
            ],
        ],
    ],
    [
        [
            [
                [4, 4],
                [9, 7],
            ],
            [[4, 8], 7],
        ],
        [[5, [6, 6]], 0],
    ],
    [
        [
            [
                [5, 2],
                [2, 2],
            ],
            [[8, 3], 0],
        ],
        [2, [3, 5]],
    ],
    [
        [0, 4],
        [
            [
                [9, 0],
                [9, 3],
            ],
            [[1, 1], 6],
        ],
    ],
    [5, [[[2, 0], 2], 1]],
    [
        [
            [[1, 8], 3],
            [[3, 9], 4],
        ],
        [
            0,
            [
                [8, 2],
                [7, 4],
            ],
        ],
    ],
    [
        [
            [8, 6],
            [[3, 9], 1],
        ],
        0,
    ],
    [
        [[[5, 0], 2], 8],
        [
            4,
            [
                [3, 5],
                [7, 8],
            ],
        ],
    ],
    [
        [
            [7, [3, 3]],
            [
                [2, 5],
                [4, 6],
            ],
        ],
        [
            [
                [0, 9],
                [1, 1],
            ],
            [1, [4, 9]],
        ],
    ],
    [
        [
            [7, 5],
            [[7, 4], 9],
        ],
        [
            [[6, 3], 6],
            [2, 6],
        ],
    ],
    [[6, 2], 9],
    [
        0,
        [
            [6, [2, 0]],
            [[4, 5], 8],
        ],
    ],
    [
        [
            9,
            [
                [6, 2],
                [7, 2],
            ],
        ],
        [
            [[6, 5], 6],
            [8, 8],
        ],
    ],
    [
        [
            [
                [2, 0],
                [8, 4],
            ],
            [5, 4],
        ],
        [
            [3, 2],
            [7, 4],
        ],
    ],
    [
        [
            [
                [0, 1],
                [8, 2],
            ],
            3,
        ],
        [
            [6, [4, 9]],
            [[0, 2], 1],
        ],
    ],
    [
        2,
        [
            [8, [4, 9]],
            [7, 1],
        ],
    ],
    [
        [
            [[6, 4], 4],
            [0, 5],
        ],
        [[6, 0], 3],
    ],
];

function TreeNode(number, parent, level) {
    this.number = number;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.level = level;
}

const toTree = (element, prev, level) => {
    let root = new TreeNode(null, prev, level);
    if (Array.isArray(element)) {
        root.left = toTree(element[0], root, level + 1);
        root.left.parent = root;

        root.right = toTree(element[1], root, level + 1);
        root.right.parent = root;
    } else {
        root.number = element;
    }
    return root;
};

const add = (node1, node2) => {
    let newNode = new TreeNode(null, null, 0);
    newNode.left = node1;
    newNode.right = node2;
    node1.parent = newNode;
    node2.parent = newNode;
    increaseLevel(node1);
    increaseLevel(node2);
    return newNode;
};

const increaseLevel = (node) => {
    if (!node) return;
    node.level += 1;
    increaseLevel(node.left);
    increaseLevel(node.right);
};

const findNodeToExplode = (root) => {
    if (!root) return null;
    if (root.level === 4 && root.number === null) return root;
    let left = findNodeToExplode(root.left);
    if (left) return left;
    let right = findNodeToExplode(root.right);
    if (right) return right;
    return null;
};

const explode = (node, root) => {
    const nodes = traverseAllNodes(root);

    const prevNumberNode = findPreviousNode(nodes, node.left);
    if (prevNumberNode) prevNumberNode.number += node.left.number;
    node.left = null;

    const nextNumberNode = findNextNode(nodes, node.right);
    if (nextNumberNode) nextNumberNode.number += node.right.number;
    node.right = null;

    node.number = 0;
};

const findNodeToSplit = (root) => {
    if (!root) return null;
    if (root.number !== null && root.number >= 10) return root;
    let left = findNodeToSplit(root.left);
    if (left) return left;
    let right = findNodeToSplit(root.right);
    if (right) return right;
    return null;
};

const split = (node) => {
    node.left = new TreeNode(Math.floor(node.number / 2), node, node.level + 1);
    node.right = new TreeNode(Math.ceil(node.number / 2), node, node.level + 1);
    node.number = null;
};

const traverseAllNodes = (root) => {
    const nodes = [];
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        if (node.number !== null) nodes.push(node);
        dfs(node.right);
    };
    dfs(root);
    return nodes;
};

const findPreviousNode = (nodes, target) => {
    let index = -1;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] === target) {
            index = i - 1;
            break;
        }
    }
    return index >= 0 ? nodes[index] : null;
};

const findNextNode = (nodes, target) => {
    let index = nodes.length;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] === target) {
            index = i + 1;
            break;
        }
    }
    return index < nodes.length ? nodes[index] : null;
};

// this is for debug purpose
const toArray = (node) => {
    if (!node) return null;
    if (node.number !== null) return node.number;

    let result = [];
    let left = toArray(node.left);
    if (left !== null) result.push(left);

    let right = toArray(node.right);
    if (right !== null) result.push(right);

    return result;
};

const sumNodes = (inputNodes) => {
    let root = inputNodes[0];
    for (let i = 1; i < inputNodes.length; i++) {
        //console.log(toArray(root));
        root = add(root, inputNodes[i]);

        let nodeToExplode = findNodeToExplode(root);
        let nodeToSplit = findNodeToSplit(root);
        while (nodeToExplode !== null || nodeToSplit !== null) {
            //console.log(toArray(root));
            if (nodeToExplode !== null) {
                explode(nodeToExplode, root);
                //console.log(toArray(root));
            }
            nodeToExplode = findNodeToExplode(root);
            if (nodeToExplode !== null) continue;

            nodeToSplit = findNodeToSplit(root);
            if (nodeToSplit !== null) split(nodeToSplit);
            nodeToExplode = findNodeToExplode(root);
        }
    }
    return root;
};

const getFinalScore = (root) => {
    if (!root) return 0;
    if (root.number !== null) return root.number;
    return 3 * getFinalScore(root.left) + 2 * getFinalScore(root.right);
};


//part 1
const inputNodes1 = input.map((x) => toTree(x, null, 0));
const finalNumber = sumNodes(inputNodes1);
const finalScore = getFinalScore(finalNumber);
//console.log(toArray(finalNumber));
console.log(finalScore);

//part 2
const getMax = (inputs) => {
    let maxScore = 0;
    for(let i=0; i<inputs.length; i++){
        for(let j=0; j<inputs.length; j++){
            if(i===j) continue;
            const nodes = [toTree(inputs[i], null, 0), toTree(inputs[j], null, 0)];
            const root = sumNodes(nodes);
            const score = getFinalScore(root);
            maxScore = Math.max(maxScore, score);
        }
    }
    return maxScore;
};

console.log(getMax(input));
