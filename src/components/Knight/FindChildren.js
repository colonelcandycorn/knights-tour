

const FindChildren = (pos) => {
    const children = [];

    if (pos < 0 || pos >= 64) return children;

    let leftOver = pos % 8; // if the value is 0, 1, 6, 7 this can affect what moves the Knight can make
    let temp; // variable for moves we are testing to add to the children array

    temp = pos + 17;

    if (temp < 64 && leftOver < 7) {
        children.push(temp);
    }

    temp = pos + 15;

    if (temp < 64  && leftOver > 0) {
        children.push(temp);
    }

    temp = pos + 10;

    if (temp < 64 && leftOver < 6) {
        children.push(temp);
    }

    temp = pos + 6;

    if (temp < 64 && leftOver > 1) {
        children.push(temp);
    }

    temp = pos - 6;

    if (temp >= 0 && leftOver < 6) {
        children.push(temp);
    }

    temp = pos - 10;

    if (temp >= 0 && leftOver > 1) {
        children.push(temp);
    }

    temp = pos - 15;

    if (temp >= 0 && leftOver < 7) {
        children.push(temp);
    }

    temp = pos - 17;

    if (temp >= 0 && leftOver > 0) {
        children.push(temp);
    }

    return children;
}


export default FindChildren;