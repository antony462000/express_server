const signup_service = require("../services/signup_service")

module.exports = (req, res) => {
    try {
      
      const variable= signup_service(req.body)
      res.send(variable)
    } catch (error) {
        console.log(error)
    }
}