import { Link } from "react-router";

interface CompareItemInfo {
    icon: string,
    title: string,
}

interface CompareItem{
    title: string,
    image: string,
    price: number,
    info: CompareItemInfo[],
}

interface Props {
    item: CompareItem,
}


const CompareInfo: React.FC<Props> = ({item}) => {
    return (
        <div className="bg-white pt-6 md:pl-6 md:pr-6 max-h-350 h-full pb-16 md:rounded-3xl flex flex-col gap-10">

            <div className="bg-[#f5f5f5] py-6 md:pl-6 md:pr-6 md:rounded-3xl flex flex-col items-center justify-between">
                <h3 className="text-2xl md:text-4xl text-[#52483e] font-semibold capitalize">{item?.title}</h3>
                <img src={item?.image} className="min-w-37.5 md:max-w-75 w-full min-h-37.5 md:min-h-75 h-full object-contain" alt={item?.title} />
                <span className="text-lg text-[#8b8782] font-normal mb-4">Start at ${item?.price}</span>
                <Link to={'#'} className="text-white text-base font-semibold capitalize btn-secondary">buy now</Link>
            </div>


            <div className="flex flex-col items-center">
                <ul className="flex flex-col items-center gap-8">
                    {
                        item?.info?.map((itemInfo, index) => (
                            <li key={index} className="flex flex-col items-center gap-3 text-center">
                                <img src={itemInfo?.icon} alt={itemInfo?.title} />
                                <span className="text-base md:text-lg text-[#666666] font-medium capitalize">{itemInfo?.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default CompareInfo;