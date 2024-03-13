
const User = require("../models/User");
const Auth = require("../config/Auth");
const {validationResult} = require("express-validator");

async function create (req, res) {
    try {
        validationResult(req).throw();
        const { password } = req.body;
        const HashSalt = Auth.generatePassword(password);
        const salt = HashSalt.salt;
        const hash = HashSalt.hash;
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            cpf: req.body.cpf,
            hash: hash,
            salt: salt
        };
        const user = await User.create(newUser);
        console.log(user);
        return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user})
    }
    catch(err) {
        return res.status(500).json(err+"!");
    }
}

async function show (req,res) {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        if(user) {
            return res.status(200).json({message: " Informações do usuário "+ id, user: user});
        }
        throw new Error ();
    }
    catch(err) {
        return res.status(500).json("Usuário não encontrado.");

    }
}


async function index (req, res) {
    try {
        const users = await User.findAll();
        return res.status(200).json({message: "Todos os usuários listados.", users: users});
    }
    catch(err) {
        return res.status(500).json(err);
    }
}

async function destroy (req,res) {
    const {id} = req.params;

    try {
        const deleted = await User.destroy({where: {id:id}});
        
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso!");

        }
        throw new Error ();
    }
    catch(err) {
        return res.status(500).json(err+"!");
    }
}


async function update (req,res) {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).json({message: "Usuário atualizado!", user});

        }
        throw new Error();
    } catch(err) {
        return res.status(500).json("Usuário não encontrado.");
    }
}

async function authUpdate(req, res) {
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const [updated] = await User.update(req.body, { where: { id: payload.sub } });
        if (updated) {
            const user = await User.findByPk(payload.sub);
            return res.status(202).send(user);
        }
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}



module.exports = {
    create, 
    show,
    index,
    destroy,
    update,
    authUpdate
}