class PeopleServiceApi {

    static getUser() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(Object.assign({}, {
               email : "andresmijares@gmail.com",
               repository: "https://github.com/andresmijares/distributed-async-react-redux-saga"
          }));
        }, 3000);
      });
    }

   }

   export default PeopleServiceApi