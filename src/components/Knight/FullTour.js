import FindValidChildren from "./FindValidChildren";
import FindChildren from "./FindChildren";

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
        console.log("before valid children")
        console.log("children of current Pos, " + currentPos + ", are" +  FindChildren(currentPos));
        children = FindValidChildren(currentPos, visited);

        for (let i = 0; i < children.length; ++i) {
            console.log("before 2nd valid children")
            grandChildren[i] = FindValidChildren(children[i], visited);
            let len = grandChildren[i].length;
            if (len <= minChildren) {
                nextPos = children[i];
                minChildren = len;
                console.log("min children of " + children[i] + " is " + len );
            }
        }
        if (nextPos !== currentPos) parent[nextPos] = currentPos;
        console.log("moving to " + nextPos);
    } while (nextPos !== currentPos)

    console.log(parent);
}

export default FullTour
