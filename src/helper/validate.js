 
 export  let validate = (name , setName , setErrorName) => {
    
    if (!name.trim()) {
       setErrorName( 'Username required')
      setName('')

       return false 
     }else if (!/^[A-Za-z]+/.test(name.trim()) ) {
      setErrorName( 'Enter a valid name')
      return false 
    } else if (/\d/.test(name)) {
      setErrorName( 'Must not contain any number')
      return false 

    }
    return true 
  }

