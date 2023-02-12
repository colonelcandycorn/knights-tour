import FindChildren from "./FindChildren";

const FindValidChildren = (pos, alreadyVisited) => {
    const children = FindChildren(pos);
    const validChildren = [];
    for (const child of children) {
        if (alreadyVisited[child]) continue;

        validChildren.push(child);
    }
    return validChildren;
}

export default FindValidChildren;