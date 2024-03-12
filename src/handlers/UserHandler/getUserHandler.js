const { getUserController } = require("../../controllers/UserController");
const { response } = require("../../utils");

const getUserHandler = async (req, res) => {
    try {
        const users = await getUserController();
        if (users.length === 0) {
            response(res, 400, null, "No hay usuarios registrados");
        } else {
            response(res, 200, users);
        }
    } catch (error) {
        response(res, 400, null, error.message);
    }
};

module.exports = {
    getUserHandler
};
