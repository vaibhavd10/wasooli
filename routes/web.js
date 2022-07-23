import express from 'express'
import ProviderController from '../controllers/providerController.js'
import CustomerController from '../controllers/customerController.js'
import CustomerIdController from "../controllers/customeridController.js" 
import HoldController from '../controllers/holdController.js'
import UpdateProviderController from "../controllers/updateProviderController.js"
import ProviderIdController from '../controllers/provideridController.js'
import LoginController from '../controllers/loginController.js'
import HoldidController from '../controllers/holdidController.js'
import holdCController from '../controllers/holdCController.js'
import HoldModel from '../models/hold.js'
import UpdateHoldController from '../controllers/updateHoldController.js'
const router = express.Router()

router.get('/provider', ProviderController.getAllDoc)
router.get('/provider/:id', ProviderIdController.getAllDoc)
router.post('/login', LoginController.userLogin)
router.get('/customer', CustomerController.getAllDoc)
router.get('/customer/:id', CustomerIdController.getAllDoc)
router.post('/hold', HoldController.createDoc)
router.get('/hold', holdCController.getAllDoc)
router.get('/hold/:id', HoldidController.getAllDoc)

router.get("/search/:key", async(req,resp)=>{

    let data = await HoldModel.find(
        {
            "$or" :[
                {borrowername : {$regex:req.params.key}},
                {borroweremail : {$regex:req.params.key}},

            ]
        }
    )
    resp.send(data);
  })


router.put('/provider/:id', UpdateProviderController.getAllDoc)
router.put('/hold/:id', UpdateHoldController.getAllDoc)





export default router