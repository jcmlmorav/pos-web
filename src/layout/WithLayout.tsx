import React from 'react'
import Header from '../components/header'

// eslint-disable-next-line react/display-name
const WithLayout = (Component: React.FC) => () => {
  return (
    <>
      <Header />
      <Component />
    </>
  )
}

export default WithLayout
