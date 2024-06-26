// Mission: Task Master 3000 - Task 1: The Phantom Task
function deleteRow(rows,id){
    for(var i=0; i<rows.length; i++){
        if(rows[i].id == id){
            rows.splice(i,1);
            break;
        }
    }
    return rows;
}

// this is a
module.exports = deleteRow;