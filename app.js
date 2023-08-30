var rollV ,nameV,addressV;

function readForm(){
    rollV =document.getElementById('rollno').ariaValueMax;
    nameV= document.getElementById('name').ariaValueMax;
    addressV = document.getElementById('address').ariaValueMax;
    console.log(rollV ,nameV , addressV);
}

//create
document.getElementById('create').onclick=function(){
    readForm();
firebase.database()
.ref("student/" +rollV)//ref used to communicate with Db with unique id rollvalue
.set({
    rollNo:rollV,
    name:nameV,
    address : addressV
});
alert("data created")
document.getElementById("rollNo").value=''
document.getElementById("name").value=''
document.getElementById("address").value=''

}

//read
document.getElementById('read').onclick=function(){
    readForm();
firebase.database()
.ref("student/" +rollV)//ref used to communicate with Db with unique id rollvalue
.on("value" ,function(snap){
        document.getElementById('rollNo').value=snap.val().rollNo
        document.getElementById('name').value=snap.val().name;
        document.getElementById('address').value=snap.val().address;
    }

);
}
//Update
document.getElementById('update').onclick=function(){
    readForm();
firebase.database()
.ref("student/" +rollV)//ref used to communicate with Db with unique id rollvalue
.update({
    rollNo:rollV,
    name:nameV,
    address : addressV
});
alert("data updated")
document.getElementById("rollNo").value=''
document.getElementById("name").value=''
document.getElementById("address").value=''

}

//delete
document.getElementById('delete').onclick=function(){
    readForm();
firebase.database()
.ref("student/" +rollV)//ref used to communicate with Db with unique id rollvalue
.remove({
    rollNo:rollV,
    name:nameV,
    address : addressV
});
alert("data deleted")
document.getElementById("rollNo").value=''
document.getElementById("name").value=''
document.getElementById("address").value=''

}
