import React, { useState } from 'react'
import PortalModal from './PortalModal'

const Title = ({ uiColor, ...children }) => {
  const styles = {
    padding: '16px',
    color: children.textColor,
    backgroundColor: uiColor,
    borderRadius: '25px',
    fontSize: '50px'
  }

  return (
    <h1
      style={styles}
    >
      {children.children}
    </h1>
  )
}

function Modal () {
  const [uiColor, setUiColor] = useState('purple')
  const textColor = 'red'
  return (
    <>
      <h3>Probando</h3>
      <Title
        uiColor={uiColor}
        textColor={textColor}
      >
        Contenido <em>Web</em>
      </Title>

      <PortalModal />
    </>
  )
}

export default Modal
