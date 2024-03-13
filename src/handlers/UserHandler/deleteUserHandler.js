const { response } = require("../../utils");
const {
    deleteUserController
} = require("../../controllers/UserController");

const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
    const result = await deleteUserController(id);

    if (!result) {
        response(res, 400, null, "User not found");
    } else {
        response(res, 200, result);
    }
};

module.exports = {
    deleteUserHandler
};
