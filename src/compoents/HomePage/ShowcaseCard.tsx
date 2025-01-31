import {useEffect, useRef, useState} from "react";

interface Props {
    title: string;
    text: string;
    image: string;

}

function ShowcaseCard(props: Props) {
    const [showDetails, setShowDetails] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!cardRef.current) return;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const rect = cardRef.current?.getBoundingClientRect();
            const cardTop = rect ? rect.bottom + rect.y : 100000;

            if (scrollPosition > cardTop) {
                setShowDetails(true);
            } else {
                setShowDetails(false);
            }

        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [cardRef]);

    return (<>
        <div ref={cardRef}
            className={`transition hover:-translate-y-2 flex flex-col cursor-pointer items-center rounded-lg w-100 backdrop-blur-2xl shadow-xl p-4 text-center text-wrap`}
        >
            <img className={"rounded-lg w-fit h-64"} src={props.image} alt={props.title}/>

            <div className={`transition-all backdrop-blur overflow-hidden ${showDetails ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <p className={"font-semibold"}>{props.title}</p>
                <p className={"p-2"}>{props.text}</p>
            </div>
        </div>
    </>);
}

export default ShowcaseCard;