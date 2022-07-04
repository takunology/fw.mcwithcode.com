type Props = {
    title: string;
    category: string;
    imgSrc: string;
    href: string;
}

function CollectionCard(props: Props){
    let collectionTag;
    if (props.href === ''){
        collectionTag =
        <div className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
            <img src={props.imgSrc} alt="" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none bg-gray-100"></div>
            <div className="flex flex-col relative">
                <span className="text-gray-200">{props.category}</span>
                <span className="text-white text-lg lg:text-xl font-semibold">{props.title}</span>
            </div>
        </div>
    }
    else {
        collectionTag =
        <a href={props.href} className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
            <img src={props.imgSrc} alt="" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
            <div className="flex flex-col relative">
                <span className="text-gray-200">{props.category}</span>
                <span className="text-white text-lg lg:text-xl font-semibold">{props.title}</span>
            </div>
        </a>
    }
    return (
        <>{collectionTag}</>
    )
}

export {CollectionCard};