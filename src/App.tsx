import React from 'react'
import { CallbackTest } from './learn-callback/main';
import useWindowSize from './userHook/useWindowSize';


export default function App() {
  const size = useWindowSize()

  return (
    <>
      <div className="App">
        主页
        <span>实时窗口的高为：{size.height}，宽为{size.width}</span>
      </div>

      <CallbackTest />
    </>
  )
}
