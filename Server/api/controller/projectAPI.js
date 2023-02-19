const router = require('express').Router();
const projectSchema = require("../models/projectSchema");

//Create Or Modify Project
router.post(("/create"), async (req, res, next) => {
    const projectId = req.body.projectId;
    const projectName = req.body.projectName;
    const leaderId = req.body.leaderId;
    const memberId = req.body.memberId;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const status = req.body.status;
    const company = req.body.company;
    const description = req.body.description;
    projectSchema.findOne({ projectId: projectId }, async (err, doc) => {
        if (err) throw err;
        if (doc) {
            projectSchema.findOneAndUpdate({ projectId: projectId }, {
                $set: {
                    projectId: projectId,
                    projectName: projectName,
                    leaderId: leaderId,
                    memberId: memberId,
                    startDate: startDate,
                    endDate: endDate,
                    status: status,
                    description: description,
                }
            }, function (err, docs) {
                if (err) throw err;
                else {
                    res.send("Updated Succesfully")
                }
            })
        }
        if (!doc) {
            const project = new projectSchema({
                projectId: projectId,
                projectName: projectName,
                leaderId: leaderId,
                memberId: memberId,
                startDate: startDate,
                endDate: endDate,
                status: status,
                description: description,
            })
            await project.save();
            return res.status(200).json({ msg: "Project Added SuccessFully" })
        }
    })

})


module.exports = router;