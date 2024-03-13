const { response } = require("../../utils");
const { patchUserController } = require("../../controllers/UserController");

const patchUserHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedUser = await patchUserController(id, req.body);
        response(res, 200, updatedUser );
    } catch (error) {
        response(res, 400, null, error.message);
    }
};

module.exports = {
    patchUserHandler
};
