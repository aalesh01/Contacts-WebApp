if (localStorage.getItem("contactList") == undefined) var contactsObj = [];
else contactsObj = JSON.parse(localStorage.getItem("contactList"));

 document.querySelector("#form1").addEventListener("submit", function () {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var type = document.querySelector("select").value;
    contactsObj.push({ "Name": name, "Mobile": number, "Type": type });
    console.log(contactsObj)
    localStorage.setItem("contactList", JSON.stringify(contactsObj));
    alert("Contact Added");
});
