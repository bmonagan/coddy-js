function isValid(username, password){
    if (username == "admin"){
        return true;
    }
    if (username == "user"){
        if (password == "qweasd"){
            return true;
        }
    }
    return false;
}