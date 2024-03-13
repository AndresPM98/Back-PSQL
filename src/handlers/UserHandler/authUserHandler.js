const { response } = require("../../utils");
const {
    authenticationUserController
} = require("../../controllers/UserController");

const authenticationUserHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await authenticationUserController(email, password);
        response(res, result.status, result.data);
    } catch (error) {
        response(res, 400, error);
    }
}

module.exports = { authenticationUserHandler };
