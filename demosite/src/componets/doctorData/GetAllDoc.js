class GetAllDoc {
  async allDoc() {
    var user;

    await fetch(`users/alldoctors`)
      .then((respone) => respone.json())
      .then((Result) => {
        var alldoctors = JSON.stringify(Result.data);
        var name = [],
          email = [],
          cnic = [],
          address = [];
        var i,
          j = 0;
        for (i in Result.data) {
          name[j] = Result.data[i].fname;
          name[j] += " " + Result.data[i].lname;
          email[j] = Result.data[i].email;
          cnic[j] = Result.data[i].cnic;
          //address = Result.data[i].adress;
          console.log(name[j], email[j], cnic[j]);
          j++;
        }
        user = {
          names: name,
          emails: email,
          cnic: cnic,
        };

        //console.log("obj value" + user.email[1]);

        //allData = Result;
      });
    console.log("here is all datajosaboif" );
    return user;
  }
}

export default new GetAllDoc();
