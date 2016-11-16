const Location = require('../models/location');

// INDEX
function locationsIndex(req, res) {
  Location.find((err, locations) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(locations);
  });
}
// CREATE
function locationsCreate(req, res) {
  Location.create(req.body, (err, location) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(location);
  });
}
// SHOW
function locationsShow(req, res) {
  Location.findById(req.params.id, (err, location) => {
    if(err) return res.status(500).json({ error: err });
    if(!location) return res.status(404).json({ error: 'Not found' });
    return res.json(location);
  });
}
// UPDATE
function locationsUpdate(req, res) {
  Location.findById(req.params.id, (err, location) => {
    if(err) return res.status(500).json({ error: err });
    if(!location) return res.status(404).json({ error: 'Not found' });
    for(const key in req.body) {
      location[key] = req.body[key];
    }
    location.save((err, location) => {
      if(err) return res.status(400).json({ error: err });
      res.json(location);
    });
  });
}
// DELETE
function locationsDelete(req, res) {
  Location.findById(req.params.id, (err, location) => {
    if(err) return res.status(500).json({ error: err });
    if(!location) return res.status(404).json({ error: 'Not found' });
    location.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}
module.exports = {
  index: locationsIndex,
  create: locationsCreate,
  show: locationsShow,
  update: locationsUpdate,
  delete: locationsDelete
};
