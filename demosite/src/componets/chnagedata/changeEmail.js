class changeEmail {
  async ChangeEmail(email, newEmail, oldPassword, role) {
    console.log("pass in midle ware " + oldPassword);
    console.log("pass in midle ware " + newEmail);
    await fetch(
      `/users/changeEmail?email=${email}&&oldPassword=${oldPassword}&&NewEmail=${newEmail}&&role=${role}`
    )
      .then((respone) => respone.json())
      .then((Result) => {
        if (Result.status === "passChange") {
          console.log("Email is changed");
          alert("Emailed is Changed");
        } else {
          console.log("Email did not changed");
        }
      });
  }
}
export default new changeEmail();
