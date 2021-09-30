const Bootcamp = require('../models/Bootcamp');
const asyncHanlder = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const { findByIdAndUpdate } = require('../models/Bootcamp');

exports.getAllBootCamps = asyncHanlder(async (req, res, next) =>{
    //res.send('get all bootcamps...') with smart filterning and sorting mechanism; 
    // nodemon => price[lte] -> 1000 , sort -> -price,rating

    let query; 

    // we have to pass ui values as a separate object
    let uiValues = {
        filtering:{},
        sorting:{},
        minValue: 0,
        maxValue: 0
    }

    const reqQuery = {...req.query};
    console.log(reqQuery);
    const removeFields = ["sort"];
    removeFields.forEach((val) => delete reqQuery[val]);    // {price: {lte : 1000}, sort: '-price'} => {price: {lte : 1000}}

    const filterKeys = Object.keys(reqQuery);
    const filterValues = Object.values(reqQuery);

    filterKeys.forEach((val, idx) => uiValues.filtering[val] = filterValues[idx]);

    let queryStr = JSON.stringify(reqQuery);                // {"price": {"lte" : "1000"}}
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g,(match)=> `$${match}`);     // {"price": {"$lte" : "1000"}}


    query = Bootcamp.find(JSON.parse(queryStr));

    // check wether sort attribute is comming under the captured object
    if(req.query.sort){
        const sortByArr = req.query.sort.split(',');

        sortByArr.forEach((val)=> {
            let order;
            if(val[0] === '-'){
                order = "descending";
            }else{
                order = "ascending";
            }

            uiValues.sorting[val.replace("-","")] = order;
        })

        const sortByStr = sortByArr.join(' ');
        query = query.sort(sortByStr);          // Bootcamp.find({price: {lte: 1000}}).sort('-price rating')
    }else{
        query = query.sort('-price');
    }

    const bootcamps = await query;

    const maxPrice = await Bootcamp.find().sort({price: -1}).limit(1).select("-_id price");
    const minPrice = await Bootcamp.find().sort({price: 1}).limit(1).select("-_id price");

    uiValues.maxValue = maxPrice[0].price;
    uiValues.minValue = minPrice[0].price;

    res.status(200).json({ 
        success: true,
        data: bootcamps,
        uiValues
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