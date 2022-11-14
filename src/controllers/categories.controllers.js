const CategoriesServices = require("../services/categories.service");


const createCategory = async (req, res, next) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.addCategory(newCategory);
        res.status(201).json("Category added");
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await CategoriesServices.removeCategory(id);
        res.status(200).json("Category deleted");
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    createCategory,
    deleteCategory
};