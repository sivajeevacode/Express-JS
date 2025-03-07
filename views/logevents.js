const { format } = require('date-fns');
const { v4: uuid} = require('uuid');

const fs = require('fs')
const fsPromises = require('fs').promises
const path =require('path');

const logevents = async(message)=>{
    const datetime = `${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logitem=`${datetime}\t${uuid}\t${message}\n`

    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','logevents.txt'),logitem)

    }
    catch (err){
        console.log(err)
    }

}

module.exports = logevents