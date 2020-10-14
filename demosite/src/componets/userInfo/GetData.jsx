class GetUserData {
  adminData() {
    var data = sessionStorage.getItem("admin");
    var data2 = JSON.parse(data);
    var name = "";
    //var detials=JSON.parse( data2.data)
    var i = "";
    for (i in data2.data) {
      name = data2.data[i].F_Name;
      name += " " + data2.data[i].L_Name;
      console.log(name);
    }
    return name;
  }
  doctorData() {
    var data = sessionStorage.getItem("doctor");
    var data2 = JSON.parse(data);
    var name = "";
    //var detials=JSON.parse( data2.data)
    var i = "";
    for (i in data2.data) {
      name = data2.data[i].F_Name;
      name += " " + data2.data[i].L_Name;
      console.log(name);
    }
    return name;
  }
  patientData() {
    var data = sessionStorage.getItem("patient");
    var data2 = JSON.parse(data);
    var name = "";
    //var detials=JSON.parse( data2.data)
    var i = "";
    for (i in data2.data) {
      name = data2.data[i].F_Name;
      name += " " + data2.data[i].L_Name;
      console.log(name);
    }
    return name;
  }
}

export default new GetUserData();
