const Bootcamp = require('../models/Bootcamp');
const asyncHanlder = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const { findByIdAndUpdate } = require('../models/Bootcamp');

exports.getAllBootCamps = asyncHanlder(async (req, res, next) =>{
    //res.send('get all bootcamps...') with smart filterning and sorting mechanism; 
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
        success: true,
        data: bootcamps
    })
});

exports.createNewBootCamp = asyncHanlder(async(req, res, next) =>{
    //res.send('create new bootcamp');
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    })
})

exports.updateBootcampById = asyncHanlder(async(req, res, next) =>{
    //res.send('update a bootcamp by id route');
    let bootcamp = await Bootcamp.findById(req.params.id);

    if(!bootcamp){
        return next(new ErrorResponse(`Bootcamp ${req.params.id} was not found`, 404));
    }

    bootcamp = await findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    res.status(201).json({
        success: true,
        data: bootcamp
    }) 
})

exports.deleteBootCampById = asyncHanlder(async(req, res, next)=>{
    //res.send('delete a bootcamp by id route');
    let bootcamp = await Bootcamp.findById(req.params.id);

    if(!bootcamp){
        return next(new ErrorResponse(`Bootcamp ${req.params.id} was not found`, 404));
    }

    await bootcamp.remove();

    res.status(201).json({
        success: true,
        data: bootcamp
    })

})