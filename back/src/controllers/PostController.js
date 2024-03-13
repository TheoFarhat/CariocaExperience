const Post = require("../models/Post");
const fsPromise = require("fs").promises;
const path = require("path");


async function create (req, res) {
    try {
        const post = await Post.create(req.body);
        return res.status(201).json({message: "Publicação postada com sucesso!", Post: post})

    }
    catch(err) {
        return res.status(500).json(err);
    }
}

async function show (req,res) {
    const {id} = req.params;
    try {
        const post = await Post.findByPk(id);
        if(post) {
            return res.status(200).json({message: " Informações da Publicação "+ id, Post: post});
        }
        throw new Error ();
    }
    catch(err) {
        return res.status(500).json("Publicação não encontrada.");

    }
}


async function index (req, res) {
    try {
        const posts = await Post.findAll();
        return res.status(200).json({message: "Todas as publicações listadas.", posts: posts});
    }
    catch(err) {
        return res.status(500).json(err);
    }
}

async function destroy (req,res) {
    const {id} = req.params;
    try {
        const deleted = await Post.destroy({where: {id:id}});
        if(deleted) {
            return res.status(200).json("Publicação deletada com sucesso!");

        }
        throw new Error ();
    }
    catch(err) {
        return res.status(500).json("Publicação não encontrada.");
    }
}


async function update (req,res) {
    const {id} = req.params;
    try {
        const [updated] = await Post.update(req.body, {where: {id: id}});
        if(updated) {
            const post = await Post.findByPk(id);
            return res.status(200).json({message: "Publicação atualizada!", post});

        }
        throw new Error();
    } catch(err) {
        return res.status(500).json("Publicação não encontrada.");
    }
}

async function createWithFiles(req, res) {
  try {
    const { title, description, data, place, is_paid, price } = req.body;
    const { files } = req;

    let photoPath = '';

    if (files && files.photo) {
      photoPath = process.env.APP_URL + "/uploads/" + files.photo[0].filename;
    }

    const post = await Post.create({
      title,
      description,
      data,
      place,
      is_paid,
      price,
      photo: photoPath
    });

    return res.status(201).json({ message: "Publicação postada com sucesso!", Post: post });
  } catch (err) {
    return res.status(500).json(err);
  }
}


module.exports = {
    create, 
    show,
    index,
    destroy,
    update,
    createWithFiles
    
}