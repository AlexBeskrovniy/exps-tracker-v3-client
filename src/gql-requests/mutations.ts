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
    mutation deleteCategory($deleteCategoryId: ID!) {
        deleteCategory(id: $deleteCategoryId) {
            id
            name
            description
        }
    }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($updateCategoryId: ID!, $input: CategoryInput) {
    updateCategory(id: $updateCategoryId, input: $input) {
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