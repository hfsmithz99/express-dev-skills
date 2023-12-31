 const Skill = require('../models/skills'); 
 
 module.exports = {
    index,
    show,
    new: newSkill,
    create
  };


function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  } 

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    })
}

function newSkill(req, res){
  res.render('skills/new', {title: 'New Skill'});
}

function create(req, res){
  console.log(req.body)
  Skill.create(req.body)
  res.redirect('/skills')
}
