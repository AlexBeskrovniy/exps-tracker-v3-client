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
    mutation Mutation($deleteCategoryId: ID!) {
        deleteCategory(id: $deleteCategoryId) {
            id
            name
            description
        }
    }
`;