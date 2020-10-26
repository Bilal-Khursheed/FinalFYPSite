class GetEmail {
  email() {
    var admin = sessionStorage.getItem("admin");
    var doctor = sessionStorage.getItem("doctor");
    var patient = sessionStorage.getItem("patient");
    var email1 = "";
    var cnic=""
    var role = 0;
    if (admin!= undefined) {
      var data2 = JSON.parse(admin);

      //var detials=JSON.parse( data2.data)
      var i = "";
      for (i in data2.data) {
        email1 = data2.data[i].Email;
        cnic = data2.data[i].CNIC;
        console.log(email1);
        role = 1;
        return [email1, role,cnic];
      }
    } //end of if
    else if (doctor != null) {
      var data2 = JSON.parse(doctor);

      //var detials=JSON.parse( data2.data)
      var i = "";
      for (i in data2.data) {
        email1 = data2.data[i].Email;
        cnic = data2.data[i].CNIC;
        console.log(email1);
        role = 2;
        return [email1, role,cnic];
      }
    } else if(patient != null){
      var data2 = JSON.parse(patient);

      //var detials=JSON.parse( data2.data)
      var i = "";
      for (i in data2.data) {
        email1 = data2.data[i].Email;
        cnic = data2.data[i].CNIC;
        console.log(email1);
        role = 3;
        return [email1, role,cnic];
      }
    }
  }
}

export default new GetEmail();
