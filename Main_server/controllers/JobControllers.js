const JobModel = require('../Models/Job');
const {primaryJobCard, secondaryJobCard, jobDescription} = require('../Models/jobSearch');
const BaseController = require('./BaseController');
const { validationResult, query } = require('express-validator');

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

    async primaryJobCard(req, res) {
        const data = await JobModel.jobSchema.find(req.query)
        res.json(data);
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
        const data = await JobModel.find(req.query)
        res.json(data);
    }

    async jobSearch(req, res) {
        const id = req.params.id;
        if (!this.validateId(id, res)) {
            return;
        }
        await this.getSingleItem(id, res);
    }

}

module.exports = new JobController();
