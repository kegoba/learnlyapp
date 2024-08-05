const bcrypt = require('bcrypt');


export const comparePassword = async  ()=>{

    const isPasswordCorrect = await bcrypt.compare(dbPassword, enteredPassword);

    return isPasswordCorrect
}


export const  hashPassword = async (dbPassword)=>{

    const hashedPassword = await bcrypt.hash(dbPassword, 10);
    
    return hashedPassword

}

