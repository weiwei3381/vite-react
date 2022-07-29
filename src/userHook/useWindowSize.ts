import { useEffect, useState } from 'react'

// 定义窗口大小的接口，用于状态函数中
interface WindowSize {
  width: number,
  height: number
}

const useWindowSize = () => {
  // 创建窗口大小的变量
  const [size, setSize] = useState<WindowSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  useEffect(() => {
    // 定义修改类型的函数，必须为命名函数方便之后移除
    const setSizeFun = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
    // 增加事件监听
    window.addEventListener('resize', setSizeFun)

    // 返回函数，以便移除监听
    return () => {
      window.removeEventListener('resize', setSizeFun)
    }
  }, [])
  // 返回窗口大小
  return size;

}

export default useWindowSize
