
 function toast(type){

    if(type === 'success'){
       return { background: '#00A300', text: "#FFFFFF" };
    }
    else if(type === 'error'){
        return { background: '#FF0000', text: "#FFFFFF" };     
    } 
    else if(type === 'info'){
        return { background: '#A9A9A9', text: "#FFFFFF" };     
    } 
    else if(type === 'warning'){
        return { background: '#FFFF00', text: "#FFFFFF" };     
    } 
 }

 
 export default toast;