//Exception Handling
try {
  function throwError() {
    console.log("Hello");
    throw new Error("padh lo exams aa gye");
    // throw {
    //   toString: function () {
    //     return "I am error";
    //   },
    // };
  }
  throwError();
} catch (err) {
  console.log(err.message);
} finally {
  console.log("I will always execute");
}
//User Defined Exception

//create a object type UserException
function UserException(message) {
  this.message = message;
  this.name = "User Exception";
}
//make the object of userexception to string
UserException.prototype.toString = () => {
  return `${this.name}: ${this.message}`;
};

//throw user exception
throw new UserException("This is my exception");
