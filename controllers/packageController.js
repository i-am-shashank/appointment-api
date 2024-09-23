import appointmentModel from "../models/appointmentModel.js";
import packageModel from "../models/packageModel.js";


// API to get all Packages list for Frontend
const packageList = async (req, res) => {
    try {

        const packages = await packageModel.find({});
        res.json({ success: true, packages })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to complete appointment
const appointmentComplete = async (req, res) => {
    try {

        const { packId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.packId === packId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        }

        res.json({ success: false, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to change package availablity from Admin Panel
const changeAvailablity = async (req, res) => {
    try {

        const { packId } = req.body

        const packData = await packageModel.findById(packId)
        await packageModel.findByIdAndUpdate(packId, { available: !packData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    packageList,
    appointmentComplete,
    changeAvailablity
}