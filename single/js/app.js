const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    if(str !== ""){
        let num = parseInt(str);
        let c = 0, i, sum = 0, counter = 0;
        for(i=1; i<=num; i++){
            if(num%i == 0){
                c++;
            }
        }
        if(c==2){
            let ar = str.split("");
            for(i=0; i<ar.length; i++){
                sum = sum + parseInt(ar[i]);
            }

            for(i=1; i<=sum; i++){
                if(sum%i == 0){
                    counter++;
                }
            }
            
            if(counter == 2){
                document.getElementById('opText').innerHTML = "Howling Prime";        
            }
            else{
                document.getElementById('opText').innerHTML = "Not a Howling Prime";
            }
        }
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
