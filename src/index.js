function mins(list){
    return Math.min.apply(Math, list);
}
function maxs(list){
    return Math.max.apply(Math, list);
}

module.exports = {
    mins,
    maxs
};