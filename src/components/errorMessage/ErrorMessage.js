import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img src={img} alt="Error"  style={{display: 'block', width: 250, height: 250, objectFit: 'contain', margin: '0 auto'}}/>
    )
}

export default ErrorMessage;