const skills = [
    { id: 1, skill: 'javascript', skilled: true},
    {id: 2, skill: 'html', skilled: true},
    {id: 3, skill: 'css', skilled: true},
    {id: 4, skill: 'express', skilled: false}
]

module.exports = {
    getAll
}
function getAll() {
    return skills;
}
