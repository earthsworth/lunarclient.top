interface Props {
    text: string;
}

function Divider(props: Props) {
    return (
        <div className="flex items-center my-4 m-10 overflow-hidden">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-4 text-gray-500 dark:text-white">{props.text}</span>
            <hr className="flex-grow border-t border-gray-300" />
        </div>
    );
}

export default Divider;