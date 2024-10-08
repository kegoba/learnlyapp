
 const emailValidation = (email) => {
    
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
   const passwordValidation = (password) => {
  
    return password.length >= 4;
  };

   const inputValidation = (input) => {

    return input.length >= 3;
  };

 
   const phoneValidation = (phone) => {
    const regex = /^\d+$/;
    return (phone.length === 11) && (regex.test(phone));
  
  }

  const  validateAmount = (amount)=> {
    const regex = /^\d+$/ ;
    return regex.test(amount) && amount > 100;
  }




  module.exports = {
    emailValidation,
    passwordValidation,
    inputValidation,
    phoneValidation,
    validateAmount
  }
  