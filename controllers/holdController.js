import HoldModel from "../models/hold.js"

class HoldController {




    static createDoc = async (req, res) => {
      try {
        const {borrowername,borroweremail,borrowerno,tenure,amount,interest,si,mi,resultt,date,duedate} = req.body
        const doc =new HoldModel({
          borrowername:borrowername,
          borroweremail:borroweremail,
          borrowerno:borrowerno,
          tenure:tenure,
          amount:amount,
          interest:interest,
          si:si,
          mi:mi,
          resultt:resultt,
          date:date,
          duedate:duedate

            
        })
        const result = await doc.save()
        res.status(201).send(result)
      } catch (error) {
        console.log(error)
      }
    }
    
  }


  export default HoldController;