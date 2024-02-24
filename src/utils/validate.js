export const checkValidaData = (email, password, userName) => {
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    let passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if(userName !== undefined && !userName) {
        return "User Name can't be empty"
    }

    if(!emailRegex.test(email)) {
        return "Email address is not valid"
    } 
    if(!passwordRegex.test(password)) {
        return "Password is not valid";
    }
    return null;
}