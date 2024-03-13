const Saved = require('../models/Saved');
const Post = require('../models/Post');
const User = require('../models/User');
const Auth = require('../config/Auth');

async function authSave(req, res) {
    const { postId } = req.params;
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        let user = await User.findByPk(payload.sub);
        const post = await Post.findByPk(postId);
        await user.addSaved(post);
        await Saved.update(req.body, { where: { PostId: postId, UserId: payload.sub } })
        return res.status(200).json({ msg: "Publicação salva!" });

    } catch (error) {
        return res.status(500).json({ error: "Erro ao salvar publicação." });
    }
}

async function authRemove(req, res) {
    const { postId } = req.params;
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
    try {
        let user = await User.findByPk(payload.sub);
        const post = await Post.findByPk(postId);
        await user.removeSaved(post);
        return res.status(200).json({ msg: "Você removeu a publicação dos salvos." });
    } catch (err) {
        return res.status(500).json({ err: "Erro ao remover publicação." });

    }
}

async function authIndex(req, res) {
    const token = Auth.getToken(req);
    const payload = Auth.decodeJwt(token);
    try {
        const saved = await Saved.findAll({ where: { UserId: payload.sub } });

        const postArray = [];

        for (let i = 0; i < saved.length; i++) {
            const post = await Post.findByPk(saved[i].PostId);
            postArray.push(post);
        }

        return res.status(200).json({ saved: postArray });
    }
    catch (err) {
        return res.status(500).json({ err: "As publicações salvas não foram encontradas." });
    }
}

module.exports = {
    authSave,
    authRemove,
    authIndex,
};
