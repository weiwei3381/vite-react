import React, { createContext, useState } from 'react'

export const demoContext = createContext({})
export const { Provider, Consumer } = demoContext

const Context = (props) => {
  const [name, setName] = useState("Mr.He")
  const handleNameClick = (params: string) => setName(params)
  const initValue = {
    name,
    handleNameClick
  }
  return <Provider value={initValue}>{props.children}</Provider>
}

export default Context


