import React from 'react'



const WaterMark = () => {
    const styles = {
        waterMark: {
            position: 'absolute',
            top: '50px',
        },
    }
  
    return (
    <div style={styles.waterMark}>ООО "ДОНСКОЙ МЯСНИК"</div>
  )
}

export default WaterMark