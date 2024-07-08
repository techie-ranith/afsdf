const JobModel = require('../Models/Job');
const BaseController = require('./BaseController');

class JobController extends BaseController {
    constructor() {
        super(JobModel);
    }

    async getSingleJob(req, res) {
        const id = req.params.id;
        if (!this.validateId(id, res)) {
            return;
        }
        await this.getSingleItem(id, res);
    }

    async getAllJobs(req, res) {
        await this.getAllItems(req, res);
    }

    async createNewJob(req, res) {
        const data = req.body;
        await this.createNewItem(data, res);
    }

    async updateJob(req, res) {
        const id = req.params.id;
        if (!this.validateId(id, res)) {
            return;
        }
        const data = req.body;
        await this.updateExistingItem(id, data, res);
    }

    async deleteSingleJob(req, res) {
        const id = req.params.id;
        if (!this.validateId(id, res)) {
            return;
        }
        await this.deleteSingleItem(id, res);
    }

    async deleteAllJobs(req, res) {
        await this.deleteAllItems(req, res);
    }

    async secondaryJobCard(req, res) {
        const id = req.params.id;
        if (!this.validateId(id, res)) {
            return;
        }
        await this.getSingleItem(id, res);
    }
    async jobDescription(req, res) {
        const id = req.params.id;
        if (!this.validateId(id, res)) {
            return;
        }
        await this.getSingleItem(id, res);
    }
    async primaryJobSearch(req, res) {
        const id = req.params.id;
            data = await JobModel.jobSchema.find(req.query)
        await this.getSingleItem(id, res);
    }

}

module.exports = new JobController();
