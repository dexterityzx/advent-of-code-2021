const input = [
  "XW-ed",
  "cc-tk",
  "eq-ed",
  "ns-eq",
  "cc-ed",
  "LA-kl",
  "II-tk",
  "LA-end",
  "end-II",
  "SQ-kl",
  "cc-kl",
  "XW-eq",
  "ed-LA",
  "XW-tk",
  "cc-II",
  "tk-LA",
  "eq-II",
  "SQ-start",
  "LA-start",
  "XW-end",
  "ed-tk",
  "eq-JR",
  "start-kl",
  "ed-II",
  "SQ-tk",
];

const testInput = ["start-A", "start-b", "A-c", "A-b", "b-d", "A-end", "b-end"];

const getRoutes = (input) => {
  const routeMap = new Map();
  input.forEach((routeString) => {
    const nodes = routeString.split("-");
    if (!routeMap.has(nodes[0])) routeMap.set(nodes[0], new Set());
    routeMap.get(nodes[0]).add(nodes[1]);

    if (!routeMap.has(nodes[1])) routeMap.set(nodes[1], new Set());
    routeMap.get(nodes[1]).add(nodes[0]);
  });
  return routeMap;
};

const isSmallCave = (cave) => cave.toLowerCase() === cave;

const isLastCaveSmall = (route) => isSmallCave(route[route.length - 1]);

const isLargeCave = (cave) => !isSmallCave(cave);

const traverse1 = (routeMap) => {
  let count = 0;

  const dfs = (cave, visited) => {
    if (cave == "end") {
      count++;
      return;
    }

    if (visited.has(cave)) return;

    if (isSmallCave(cave)) visited.add(cave); //only mark small cave as visited

    routeMap.get(cave).forEach((nextCave) => dfs(nextCave, visited));

    if (isSmallCave(cave)) visited.delete(cave);
  };

  dfs("start", new Set());

  return count;
};

console.log(traverse1(getRoutes(input)));

//part 2

const traverse2 = (routeMap) => {
  let uniqueRoutes = new Set();
  const getRouteKey = (route) => route.join(",");

  const dfs = (cave, currentRoute, visited, chosenCave, chosenCaveVisitedTime) => {
    //console.log(currentRoute);
    if (cave == "end") {
      currentRoute.push(cave);
      uniqueRoutes.add(getRouteKey(currentRoute));
      currentRoute.pop();
      return;
    }

    if (visited.has(cave)) {
      if (cave !== chosenCave) return;
      if (chosenCaveVisitedTime == 2) return;
    }

    if (isSmallCave(cave)) visited.add(cave);

    if (cave == chosenCave) chosenCaveVisitedTime++;

    currentRoute.push(cave);

    routeMap
      .get(cave)
      .forEach((nextCave) =>
        dfs(nextCave, currentRoute, visited, chosenCave, chosenCaveVisitedTime)
      );

    if (isSmallCave(cave)) visited.delete(cave);

    currentRoute.pop();
  };

  [...routeMap.keys()]
    .filter((cave) => isSmallCave(cave) && cave !== "start" && cave !== "end")
    .forEach((chosenCave) => dfs("start", [], new Set(), chosenCave, 0));
  
    return uniqueRoutes.size;
};

console.log(traverse2(getRoutes(input)));
