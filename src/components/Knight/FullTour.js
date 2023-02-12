import FindValidChildren from "./FindValidChildren";

const FullTour = (start) => {
    let currentPos = start;
    let nextPos = start;
    const path = [];
    let children = [];
    let grandChildren = [];
    const visited = [];
    const parent = [];

    parent[currentPos] = -1;

    do {
        currentPos = nextPos;
        let minChildren = 66;
        visited[currentPos] = 1;
        children = FindValidChildren(currentPos, visited);

        for (let i = 0; i < children.length; ++i) {
            grandChildren[i] = FindValidChildren(children[i], visited);
            let len = grandChildren[i].length;
            if (len <= minChildren) {
                nextPos = children[i];
                minChildren = len;
            }
        }
        if (nextPos !== currentPos) parent[nextPos] = currentPos;
    } while (nextPos !== currentPos)

    while (currentPos !== start) {
        path.push(currentPos);
        currentPos = parent[currentPos];
    }

    path.push(start);

    return path.reverse();
}

export default FullTour
