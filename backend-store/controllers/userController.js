import User from "../services/userService"


 class  User{
  static async  register(req, res)  {
    try {
      const data = req.body;
      const response = await User.register(data); 
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
      const response = await User.login(email, password);
      return res.json({ response });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
    
  };
}




export default User







