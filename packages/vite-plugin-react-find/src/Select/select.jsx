import React, { useCallback, useEffect, useState } from 'react'
import './select.css'

const keyCode = 'AltLeft'

function Select() {
  const [active, setActive] = useState(false)
  const [postion, setPotion] = useState({ x: 0, y: 0 })
  const [fileDetail, setFileDetail] = useState({ filePath: '', line: 0, column: 0 })
  const { x, y } = postion

  const eventCallBack = useCallback((e) => {
    const filePath = e.target.getAttribute('data-react-inspector')
    const SERVER_URL = '/__react-inspector-launch-editor'
    const fetchUrl = `${SERVER_URL}?file=${filePath}`
    fetch(fetchUrl)
  }, [])

  const mousemoveCallback = useCallback((e) => {
    e.preventDefault()

    const file = e.target.getAttribute('data-react-inspector')

    if (file) {
      const [rootPath, filePath, line, column] = file.split(':')
      const fileName = filePath.split('/').at(-1).split('.').at(0)

      const rect = e.target.getBoundingClientRect()

      setFileDetail({ filePath: `${rootPath}:${filePath}`, line, column, fileName })
      setPotion(
        { x: rect.x, y: rect.y, width: e.target.offsetWidth, height: e.target.offsetHeight })
    }
  }, [])

  useEffect(() => {
    if (active) {
      document.addEventListener('click', eventCallBack)
      document.addEventListener('mousemove', mousemoveCallback)
    }
    else {
      document.removeEventListener('click', eventCallBack)
      document.removeEventListener('mousemove', mousemoveCallback)
    }
    return () => {
      document.removeEventListener('click', eventCallBack)
      document.removeEventListener('mousemove', mousemoveCallback)
    }
  }, [active])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === keyCode && !active) setActive(true)
    }

    const onKeyUp = (e) => {
      if (e.code === keyCode) setActive(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.addEventListener('keyup', onKeyUp)
    }
  }, [active, setActive])

  return (<div className={'vite-plugin-wrap'}>
    {active && <>
      <div className="file-detail" style={{
			  top: `${y}px`,
			  left: `${x}px`,
			  transform: `translate(0%, ${y > 50 ? '-140%' : '150%'} )`,
			  width: `${postion.width}px`,
      }}>
        <div
          className={'file-detail-text'}
          style={{
					  display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '5px',
          }}
				>
          {fileDetail.fileName}
        </div>
      </div>
      <div className={'vite-plugin-select'} style={{
			  top: `${y}px`, left: `${x}px`, width: `${postion.width}px`, height: `${postion.height}px`,
      }}/>
    </>
		}
  </div>)
}

export default Select
