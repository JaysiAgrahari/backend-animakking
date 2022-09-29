import AnimalModel from '../model/animal_model'
const AnimalModel= require('../model/animal_model')
exports.showIndex=(req,res) =>{
    res.send("Running Node API")
}



exports.addAnimal= (req,res) => {
    const animal = new AnimalsModel({
        id:req.body.id,
        name:req.body.name,
        animal:req.body.animal,
        city:req.body.city,
        state:req.body.state,
        description:req.body.description,
        breeds:req.body.breeds,
    })
    animal.save()
    .then(
        data => {
        res.send(data)
    })
    .catch(err => {res.send(err)})
}

exports.showanimals = (req,res) => {
    animalsModel.find() // fetches all the 
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

exports.getCategoryItems = (req,res) => {
    animalsModel.findById(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.send(err)
    })
}
export default post_controller