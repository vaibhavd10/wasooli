import HoldModel from "../models/hold.js"


class HoldidController{static getAllDoc = async (req, res) => {
    try {

      
      const result = await HoldModel.findById(req.params.id)
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  } 
}
 export default HoldidController
