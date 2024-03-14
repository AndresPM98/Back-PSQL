const { getAllUsersController } = require("../../controllers/UserController");
const { response } = require("../../utils");

const getAllUsersHandler = async (req, res) => {
    try {
        const usersData = await getAllUsersController();
        const { users, count } = usersData;

        if (users.length === 0) {
            response(res, 400, null, "No registered users");
        } else {
            response(res, 200, { count, users });
        }
    } catch (error) {
        response(res, 400, null, error.message);
    }
};

module.exports = {
    getAllUsersHandler
};