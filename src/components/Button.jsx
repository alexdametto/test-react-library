import PropTypes from 'prop-types';

export default function Button({ className }) {
   return <button className={`bg-pink-500 p-2 rounded-sm ${className}`}>Hello Button</button>
}

Button.propTypes = {
    className: PropTypes.string
}

Button.defaultProps = {
    className: ""
}