

class changePass {
  async changePassword(email, oldPassword, newPassword, role) {
      console.log("pass in midle ware " + oldPassword);
      console.log("pass in midle ware " + newPassword);
    await fetch(
      `/users/changepass/?email=${email}&&oldPassword=${oldPassword}&&newPassword=${newPassword}&&role=${role}`
    )
      .then((respone) => respone.json())
      .then((Result) => {
        if (Result.status === "passChange") {
          console.log("password is changed");
        } else {
          console.log("password did not changed");
        }
      });
  }
}
export default new changePass();
