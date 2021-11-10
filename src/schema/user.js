module.exports = `
type Message {
    success:Boolean,
    message:String,
    data:User
}
type User {
  id: String
  name: String
  job_title: String
}
type Query {
  getUsers: [User],
  getUser(id:String): Message
}
type Mutation {
    addUser(name:String, job_title:String): Message,
    deleteUser(id:String): Message,
    updateUser(id:String, name:String, job_title:String): Message
}
`;
