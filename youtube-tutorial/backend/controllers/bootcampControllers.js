exports.getAllBootCamps = (req, res, next) =>{
    res.send('get all bootcamps...');
};

exports.createNewBootCamp = (req, res, next) =>{
    res.send('create new bootcamp');
}

exports.updateBootcampById = (req, res, next) =>{
    res.send('update a bootcamp by id route');
}

exports.deleteBootCampById = (req, res, next)=>{
    res.send('delete a bootcamp by id route');
}