const mongoose = require('mongoose');

class BaseController {
    constructor(model) {
        this.model = model;
    }

    handleErrors(res, error) {
        res.status(500).json({ error: error.message });
    }

    validateId(id, res) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ error: "Invalid item id" });
            return false;
        }
        return true;
    }

    async getAllItems(req, res) {
        try {
            const items = await this.model.find();
            res.status(200).json({ items });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async getSingleItem(id, res) {
        try {
            const item = await this.model.findById(id);
            if (!item) {
                res.status(404).json({ msg: "Item not found" });
                return;
            }
            res.status(200).json({ item });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async createNewItem(data, res) {
        try {
            const item = await this.model.create(data);
            res.status(200).json({ item });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateExistingItem(id, data, res) {
        try {
            const updatedItem = await this.model.findByIdAndUpdate(id, data, { new: true });
            res.status(200).json({ item: updatedItem });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async deleteSingleItem(id, res) {
        try {
            const deletedItem = await this.model.findByIdAndDelete(id);
            if (!deletedItem) {
                res.status(404).json({ msg: "Item not found" });
                return;
            }
            res.status(200).json({ msg: "Item deleted successfully" });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }

    async deleteAllItems(req, res) {
        try {
            await this.model.deleteMany({}); // Deletes all items from the collection
            res.status(200).json({ msg: "All items deleted successfully" });
        } catch (error) {
            this.handleErrors(res, error);
        }
    }
}

module.exports = BaseController;
