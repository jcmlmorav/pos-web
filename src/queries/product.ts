import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      code
      name
      inventory
      available
    }
  }
`

export const CREATE_PRODUCT = gql`
  mutation AddProduct(
    $code: String!,
    $name: String!,
    $inventory: Int,
    $available: Boolean
  ) {
    addProduct(content: {
      code: $code,
      name: $name,
      inventory: $inventory,
      available: $available
    }) {
      id
    }
  }
`
