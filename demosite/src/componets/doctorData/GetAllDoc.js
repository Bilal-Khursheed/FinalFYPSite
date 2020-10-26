class GetAllDoc {
  async allDoc() {
    var user;

    await fetch(`users/alldoctors`)
      .then((respone) => respone.json())
      .then((Result) => {
        //var alldoctors = JSON.stringify(Result.data);
        var name = [],
          email = [],
          cnic = [],
          address = [];
        var i,
          j = 0;
        for (i in Result.data) {
          name[j] = Result.data[i].F_Name;
          name[j] += " " + Result.data[i].L_Name;
          email[j] = Result.data[i].Email;
          cnic[j] = Result.data[i].CNIC;
          address[j] = Result.data[i].Street;
          address[j] += ", " + Result.data[i].City;
          address[j] += ", " + Result.data[i].State;
          address[j] += ", " + Result.data[i].Country;
          //address = Result.data[i].adress;Country
          console.log(name[j], email[j], cnic[j]);
          j++;
        }
        user = {
          names: name,
          emails: email,
          cnic: cnic,
          address: address,
        };

        //console.log("obj value" + user.email[1]);

        //allData = Result;
      });
    console.log("here is all data");
    return user;
  }
}

export default new GetAllDoc();
