import HoldModel from "../models/hold.js"

class UpdateHoldController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await HoldModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default UpdateHoldController