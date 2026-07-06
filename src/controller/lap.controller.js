const Lap= require('../model/lap.model');

const createLap = async (req, res) => {
    try {
        const lap = new Lap(req.body);
        await lap.save();
        res.status(201).json({
            success: true,
            message: 'Lap created successfully',
            data: lap  ,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating lap',
            data: error,
        });
    }
};

const getAllLaps = async (req, res) => {
    try {
        const laps = await Lap.find();
        res.status(200).json({
            success: true,
            message: 'Laps retrieved successfully',
            data: laps,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error retrieving laps',
            data: error,
        });
    }
};
const updateLap = async (req, res) => {
    try {
        const lap = await Lap.findByIdAndUpdate(req.params.id ,req.body, {new: true});
        if (!lap) {
            return res.status(404).json({
                success: false,
                message: 'Lap not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Lap updated successfully',
            data: lap,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating lap',
            data: error,
        });
    }
};
const deleteLap = async (req, res) => {
    try {
        const lap = await Lap.findByIdAndDelete(req.params.id);
        if (!lap) {
            return res.status(404).json({
                success: false,
                message: 'Lap not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Lap deleted successfully',
            data: lap,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error deleting lap',
            data: error,
        });
    }
};
module.exports = {
    createLap,
    getAllLaps,
    updateLap,
    deleteLap
};
