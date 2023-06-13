// after 5 second
// setTimeout(()=>{console.log("After 5 Sec....")},5000)
// every 5 second
// setInterval(()=>{console.log("GOT!!!!!")},2000)

function resolvedAfter2sec(){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve('response');
    },2000);
    });
}

async function asyncCall(){
    console.log('Start');
    const result= await resolvedAfter2sec();
    console.log(result,"-result");
    console.log('End');
}

asyncCall();