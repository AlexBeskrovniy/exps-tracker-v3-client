import { gql } from "@apollo/client";

// Auth
export const ADD_USER = gql`
  mutation register($input: RegisterUserInput) {
    register(input: $input) {
        id
        name
        email
        token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($input: LoginUserInput) {
    login(input: $input) {
        id
        name
        email
        token
    }
  }
`;

//Categories
export const ADD_CATEGORY = gql`
    mutation createCategory($input: CategoryInput) {
        createCategory(input: $input) {
            id
            name
            description
        }
    }
`;

export const DELETE_CATEGORY = gql`
    mutation deleteCategory($id: ID!) {
        deleteCategory(id: $id) {
            id
            name
            description
        }
    }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID!, $input: CategoryInput) {
    updateCategory(id: $id, input: $input) {
      id
      description
      name
    }
  }
`;

//Records
export const ADD_RECORD = gql`
  mutation createRecord($input: RecordInput) {
    createRecord(input: $input) {
        id
        money
        description
        categoryID
        categoryName
        createdAt
    }
  }
`;

export const DELETE_RECORD = gql`
  mutation deleteRecord($id: ID!) {
    deleteRecord(id: $id) {
        id
        money
        categoryID
        categoryName
        description
        createdAt
    }
  }
`;

export const UPDATE_RECORD = gql`
  mutation updateRecord($id: ID!, $input: RecordInput) {
    updateRecord(id: $id, input: $input) {
      id
      money
      categoryID
      categoryName
      description
      createdAt
    }
  }
`;