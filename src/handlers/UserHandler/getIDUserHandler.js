const { response } = require("../../utils");
const {
    getIdUserController
} = require("../../controllers/UserController");


const getIDUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getIdUserController(id);
        if (!user) {
            return  response(res, 400, null, "No se encontro el usuario")
        }
        response(res, 200, user);
    } catch (error) {
        response(res, 400, null, error.message);
    }
};

module.exports = {
    getIDUserHandler
};
