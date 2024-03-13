const { response } = require("../../utils");
const {
    validatePasswordController
} = require("../../controllers/UserController");

const validatePasswordHandler = async (req, res) => {
    const { id, password } = req.body;
    try {
        const result = await validatePasswordController(id, password);
        res.status(result.status).json(result.data);
    } catch (error) {
        response(res, 400, error);
    }
}

module.exports = { validatePasswordHandler };
