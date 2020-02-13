function message(status,message){
    $.notify({
        message: message 
    },{
        type: status
    });
}
