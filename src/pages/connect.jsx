import React from 'react'
import Form from "../components/ConnectUs/form/form";
import ConnectImage from "../components/ConnectUs/image/connectImage";

const Connect = () => {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Присоединиться в нашу команду!</h1>
      <div className="d-flex">
        <Form />
        <ConnectImage/>
      </div>
    </div>
  )
}

export default Connect
