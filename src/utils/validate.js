export const checkValidaData = (email, password, userName) => {
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if(userName !== undefined && !userName) {
        return "User Name can't be empty"
    }

    if(userName !== undefined && userName.length > 20) {
        return "User Name can have max 20 characters"
    }

    if(!emailRegex.test(email)) {
        return "Email address is not valid"
    } 
    if(!passwordRegex.test(password)) {
        return "Password must have atleast one lowercase, one uppercase, one special charater and one digit in it!";
    }
    return null;
}