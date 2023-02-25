import PropTypes from 'prop-types'

function Card({children, reverse}) {
 /* This is a conditional class
 return (
    <div className={`card ${reverse && 'reverse'}`}>{children}
    </div>
  ) */
  return (
    //This is a conditional styling
    <div className='card' style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
    }}
    >
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: true,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
