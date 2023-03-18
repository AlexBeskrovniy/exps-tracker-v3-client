import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query categories {
        categories {
            id
            name
            description
        }
    }
`

export const GET_RECORDS = gql`
    query records {
        records {
            id
            money
            categoryID
            categoryName
            description
            createdAt
        }
    }
`