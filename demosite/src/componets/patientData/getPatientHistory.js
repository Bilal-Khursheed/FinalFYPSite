import GetEmail from "../userInfo/GetEmail";

class getPatientHistory {
  async getpatientHistory() {
    var user;
    var Userdata = GetEmail.email();
    var cnic = Userdata[2];
    console.log("emial is " + cnic);
    await fetch(`/users/patientshistory?cnic=${cnic}`)
      .then((respone) => respone.json())
      .then((Result) => {
        //var alldoctors = JSON.stringify(Result.data);
        var dname = [],
          Report_ID = [],
          Hospital = [],
          Dated = [],
          Report_URL = [];
        var i,
          j = 0;
        for (i in Result.data) {
          dname[j] = Result.data[i].Name;
          Report_ID[j] = Result.data[i].Report_ID;
          Dated[j] = Result.data[i].Dated;
          Report_URL[j] = Result.data[i].Report_URL;
          Hospital[j] = Result.data[i].Hospital;
          j++;
        }
        user = {
          names: dname,
          Report_ID: Report_ID,
          Hospital: Hospital,
          Dated: Dated,
          Report_URL: Report_URL,
        };

        //console.log("obj value" + user.email[1]);

        //allData = Result;
      });
    console.log("here is all data");
    return user;
  }
}

export default new getPatientHistory();
