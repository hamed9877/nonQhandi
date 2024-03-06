function calculateDistance(point1, point2, param, num) {
  const xDist = Math.abs(point1.x - point2.x);
  const yDist = Math.abs(point1.y - point2.y);
  let result = 0;
  param == "distance"
    ? (result = Math.sqrt(xDist ** 2 + yDist ** 2) * num[0])
    : param == "comment"
    ? (result = Math.sqrt(xDist ** 2 + yDist ** 2) + (num[1] + 1) * 100)
    : (result = (Math.sqrt(xDist ** 2 + yDist ** 2) * num[2]) / 10);

  return result;
}

// Function to generate permutations of an array
function generatePermutations(arr) {
  const permutations = [];

  function permute(arr, start = 0) {
    if (start === arr.length - 1) {
      permutations.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      permute(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack
    }
  }

  permute(arr);
  return permutations;
}

// Function to calculate the total distance of a path
function calculateTotalDistance(path, distances) {
  let totalDistance = 0;
  for (let i = 0; i < path.length - 1; i++) {
    totalDistance += distances[path[i]][path[i + 1]];
  }
  return totalDistance;
}

// Main function to solve TSP
function solveTSP(points, radio, num) {
  const n = points.length;
  const distances = [];
  for (let i = 0; i < n; i++) {
    distances.push(new Array(n).fill(0));
  }

  // Calculate distances between each pair of points
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      distances[i][j] = calculateDistance(points[i], points[j], radio, [
        (num[i][0] + num[j][0]) / 2,
        (num[i][1] + num[j][1]) / 2,
        (num[i][2] + num[j][2]) / 2,
      ]);
    }
  }

  const indices = [...Array(n).keys()]; // [0, 1, 2, ..., n-1]
  const permutations = generatePermutations(indices);

  let minDistance = Infinity;
  let minPath = [];

  // Find the minimum distance path
  for (let i = 0; i < permutations.length; i++) {
    const distance = calculateTotalDistance(permutations[i], distances);
    if (distance < minDistance) {
      minDistance = distance;
      minPath = permutations[i];
    }
  }

  return { minDistance, minPath };
}

export const tsp = (data, radio) => {
  // const R = 6371e3; // metres
  // const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  // const φ2 = (lat2 * Math.PI) / 180;
  // const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  // const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  // const a =
  //   Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
  //   Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  // const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // const d = R * c; // in metres
  const newdata = data.map((item) => {
    return { x: item.lat, y: item.lan };
  });
  const num = data.map((item) => {
    return item.num;
  });

  const result = solveTSP(newdata, radio, num);
  console.log("Minimum Distance:", result.minDistance);
  console.log("Optimal Path:", result.minPath);
  return result.minPath;
};
