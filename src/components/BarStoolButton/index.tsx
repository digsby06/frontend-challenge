
type ButtonProps = {
	handleClick: () => void;
    loading?: boolean;
    loadingText?: string;
    text: string;
}

const BarStoolButton = ({
	text,
	loading = false,
	loadingText = 'Loading...',
	handleClick,
}: ButtonProps) => {

	return (
		<button className={`flex justify-center w-full items-center px-4 py-3 text-white ${loading ? 'bg-gray-500' : 'bg-red-500'} hover:bg-red`} onClick={handleClick}>
			{loading && (<>{loadingText}</>)}

			{!loading && (<>{text}</>)}
		</button>
	)
}

export default BarStoolButton
