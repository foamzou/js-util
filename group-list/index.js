module.exports = (list, size) => {
    let groupList = [];
    let i = 0;
    while (i <= list.length - 1) {
        groupList.push(list.slice(i, i + size));
        i += size;
    }
    return groupList;
}
