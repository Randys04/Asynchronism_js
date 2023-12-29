const fnAsync = () => {
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve(`Async!!`), 2000)
            : reject(new Error(`Error!!`));
    });
}

async function asyncCall(){
    console.log(`calling...`);
    let finalResult = await fnAsync();
    console.log(`The final result is: ${finalResult}`);
}

asyncCall();