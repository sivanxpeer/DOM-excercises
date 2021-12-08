function func(num){
return new Promise((resolve,reject)=>{
    if(num>10){
        resolve();
    }
    else{reject();}
})
}

func(11).then(()=>{console.log("resolve")}).catch(()=>{console.log("reject")});
func(5).then(()=>{console.log("resolve")}).catch(()=>{console.log("reject")});