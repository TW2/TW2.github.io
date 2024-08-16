function applcur(id,value){
    if(value == 1){
        document.getElementById(id).style.cursor = 'pointer';
    }else{
        document.getElementById(id).style.cursor = 'auto';
    }
}