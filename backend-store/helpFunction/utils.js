const bcrypt = require('bcrypt');


  const comparePassword = async  (enteredPassword,dbPassword)=>{

    const isPasswordCorrect = await bcrypt.compare(enteredPassword,dbPassword);

    return isPasswordCorrect
}


  const  hashPassword = async (dbPassword)=>{

    const hashedPassword = await bcrypt.hash(dbPassword, 10);
    
    return hashedPassword

}


module.exports ={
    comparePassword,
    hashPassword

}