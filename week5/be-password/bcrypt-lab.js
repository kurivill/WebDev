const bcrypt = require('bcrypt');
/*
async function hashPassword() {
    const password = "wataa";

    try {
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(password);
        console.log(salt)
        console.log(hashedPassword);
    } catch (error) {
        console.error(error);
    } 
}
*/
async function comparePassword() {
    const inputPassword = "wataa";
    const hashedPassword = "$2b$10$Jw4cxNK7Fi0ROxAH/MpUmu32QWDRhsf5dO4Ik9qOtV7EBQ6ioSJEm";

    try {
        const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
        
        if (isMatch) {
            console.log("Correct");
        } else {
            console.log("Wrong");
        }
    } catch (error) {
        console.error(error);
    }
}

comparePassword();