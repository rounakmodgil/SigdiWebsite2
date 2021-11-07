import { gql } from "@apollo/client";

const me = gql`
  query {
    me
  }
`;
const contactsubmit = gql`
  mutation(
    $name: String!
    $phone: String!
    $email: String!
    $description: String
  ) {
    contactSubmit(
      name: $name
      email: $email
      phone: $phone
      description: $description
    )
  }
`;
const login = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken

    }
  }
`;
const logout = gql`
  mutation {
    logout
  }
`;
const findallcontacts=gql`
query{
  findallcontacts{
    id
    name
    phone
    email
    description
  }
}
`;
const removeContact=gql`
mutation($id:ID!){
  removeContact(id:$id)
}
`;
export { me, contactsubmit, login , findallcontacts, logout, removeContact};
