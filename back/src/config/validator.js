const { body, validationResult } = require("express-validator");

const validationUser = (method) => {
    switch(method) {
        case "create": {
            return [
                body("name").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("email").isEmail().withMessage("Deve seguir o modelo: exemplo@exemplo.com"),
                body("cpf").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),


            ]
        }
        case "update": {
            return [
                body("name").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("email").isEmail().withMessage("Deve seguir o modelo: exemplo@exemplo.com"),
                body("cpf").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
            ]
        }
    }
};



const validationPost = (method) => {
    switch(method) {
        case "create": {
            return [
                body("title").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("description").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("data").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("place").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("is_paid").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("price").isLength({min: 1}).withMessage("Esse campo deve ser preenchido.")
            ]
        }
        case "update": {
            return [
                body("title").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("description").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("data").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("place").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("is_paid").isLength({min: 1}).withMessage("Esse campo deve ser preenchido."),
                body("price").isLength({min: 1}).withMessage("Esse campo deve ser preenchido.")
            ]
        }    
    }
}



const errorTreatment = (req,res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()});

    }
    next();
};

module.exports = {
    validationUser,
    validationPost,
    errorTreatment
}