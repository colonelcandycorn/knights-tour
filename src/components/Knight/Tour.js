import FindChildren from "./FindChildren";


const Tour = (start, end) => {
    let currentPos = start;
    const path = [];
    let children = []; // variable because we will reassign with each call to find children
    const visited = [];
    const parent = [];
    const q = [];

    while(!visited[end]) {
        children = FindChildren(currentPos);

        for (const child of children) {
            if (visited[child]) continue;

            visited[child] = 1;
            parent[child] = currentPos;
            q.push(child);
        }

        currentPos = q.shift();
    }

    currentPos = end;
    while (currentPos !== start) {
        path.push(currentPos);
        currentPos = parent[currentPos];
    }

    path.push(start);

    return path.reverse();
}

export default Tour;