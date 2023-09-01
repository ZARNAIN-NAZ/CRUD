var rollV, nameV, addressV;

function readForm() {
  rollV = document.getElementById("rollNo").value;
  nameV = document.getElementById("name").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV);
}
// create
document.getElementById("create").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      address: addressV,
    });
  alert("data created");
  document.getElementById("rollNo").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
};

//read
// document.getElementById("read").onclick = function () {
//   readForm();
//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .on("value", function (snap) {
//       document.getElementById("rollNo").value = snap.val().rollNo;
//       document.getElementById("name").value = snap.val().name;
//       document.getElementById("address").value = snap.val().address;
//     });
// };

//update
document.getElementById("update").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + rollV)
    .update({
      rollNo: rollV,
      name: nameV,
      address: addressV,
    });
  alert("successfully upadted");
  document.getElementById("rollNo").value = "";
  document.getElementById("name").value = "";

  document.getElementById("address").value = "";
};

//delete
document.getElementById("delete").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + rollV)
    .remove();
  alert("data deleted succesfully!");
  document.getElementById("rollNo").value = "";
  document.getElementById("rollNo").value = "";
  document.getElementById("rollNo").value = "";
};
