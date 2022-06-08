import ProviderModel from "../models/provider.js"
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

class LoginController {
    static userLogin = async (req, res) => {
      if(req.body.password && req.body.username)
     { 
       let user = await ProviderModel.findOne(req.body)
      if(user){
        res.send(user)
      }else{
        res.send({result:"no user found"})
      }
    }else{
      res.send({result:"no user found"})
    }

}
}

export default LoginController;