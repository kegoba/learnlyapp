const userService = require("../services/userService")


 class  userController{
  static async  register(req, res)  {
    try {
      const data = req.body;
      
      const response = await userService.register(data); 
      if (response.success) {
        res.status(200).json({ msg: "registration Succussful" });
      } else {
        res.status(400).json({ msg: response.message });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
  };


  static async login(req, res){
    const { email, password } = req.body;
    try {
      const token = await userService.login(email, password);
      return res.json({ token });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
    
  };
}




module.exports = userController







