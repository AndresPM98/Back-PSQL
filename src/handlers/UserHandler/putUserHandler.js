const { response } = require("../../utils");
const { putUserController } = require("../../controllers/UserController");

const putUserHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await putUserController(id, req.body);
        const message = "User information updated";
        response(res, 200, { message, updatedUser: req.body });
    } catch (error) {
        response(res, 400, null, error.message);
    }
};

module.exports = {
    putUserHandler
};