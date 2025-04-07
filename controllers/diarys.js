const Diary = require('../models/Diary');

//@desc    Get all diaries
//@route   GET /api/v1/diarys
//@access  Public

exports.getDiarys = (req, res, next) => {
    
    res.status(200).json({success: true, message: 'Get all diary! from a certain User' });//welcome: req.welcome, ->this is an examp,e of using middleware.
    }


//@desc    Get secret
//@route   GET /api/v1/diarys/secret
//@access  Private

exports.getSecret = (req, res, next) => {
    res.status(200).json({success: true, message: 'Get secret diarys from a certain User'});
    }



//@desc    Get single diary
//@route   GET /api/v1/diarys/:id
//@access  Public


exports.getDiary = (req, res, next) => {
    res.status(200).json({success: true, message: `Get a single diary of id:${req.params.id}`});
    }

//@desc    Create new diary
//@route   POST /api/v1/diarys
//@access  Private

exports.createDiary =async (req, res, next) => {
    const diary = await Diary.create(req.body);
    res.status(201).json({success: true, data: diary});
    
    }

//@desc    Update diary
//@route   PUT /api/v1/diarys/:id
//@access  Private

exports.updateDiary = async(req, res, next) => {

    res.status(200).json({success: true, message: `Update diary ${req.params.id}`});
    }

//@desc    Delete diary
//@route   DELETE /api/v1/diarys/:id
//@access  Private

exports.deleteDiary = (req, res, next) => {
    res.status(200).json({success: true, message: `Delete diary ${req.params.id}`});
    }


//@desc    Get all diaries
//@route   GET /api/v1/diarys
//@access  Public
exports.getDiarys = (req, res, next) => {
    res.status(200).json({success: true, message: 'Get all diary! from a certain User' });//welcome: req.welcome, ->this is an examp,e of using middleware.
    }
//@desc    Get secret
//@route   GET /api/v1/diarys/secret
//@access  Private
exports.getSecret = (req, res, next) => {
    res.status(200).json({success: true, message: 'Get secret diarys from a certain User'});
    }

    





