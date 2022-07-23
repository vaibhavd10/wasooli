import HoldModel from "../models/hold.js"

class holdCController{static getAllDoc = async (req, res) => {
    try {


      
      const result = await HoldModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  } 
}
 export default holdCController
