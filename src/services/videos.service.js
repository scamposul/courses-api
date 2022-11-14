const Videos = require("../models/videos.model");


class VideosServices {
    static async addVideo(newVideo) {
        try {
            const result = await Videos.create(newVideo);
            return result;
        } catch (error) {
            throw(error);
        }
    }
    static async removeVideo(id) {
        try {
            const result = await Videos.destroy({
                where: {id}
            });
            return result; 
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = VideosServices;