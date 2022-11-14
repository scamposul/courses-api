const VideosServices = require("../services/videos.service");

const createVideo = async (req, res, next) => {
    try {
        const newVideo = req.body;
        const result = VideosServices.addVideo(newVideo);
        res.status(201).json("Video created");
    } catch (error) {
        throw(error);
    }
};

const deleteVideo = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = VideosServices.removeVideo(id);
        res.status(200).json("Video deleted");
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    createVideo,
    deleteVideo
}