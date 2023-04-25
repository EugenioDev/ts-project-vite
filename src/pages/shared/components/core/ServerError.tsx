interface ServerErrorProps {
    message: string,
}
export default function ServerError(props:ServerErrorProps){
    const {message} = props;
    return (
        <div className='bg-red-500 font-bold text-white p-2'>
            <p>{message}</p>
        </div>
    )
}