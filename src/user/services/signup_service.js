module.exports = (data) => {
    try {
        return data.Students.map((_) => _.Name)
    } catch (error) {
        console.log(error)
    }
}
