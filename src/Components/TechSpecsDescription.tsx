interface DescriptionItem {
    content: string
}

interface TechSpecsItem {
    title: string,
    description: DescriptionItem[],
    color?: string
}

interface Props {
    item: TechSpecsItem,
    isLast: number,
    index: number,
}

const TechSpecsDescription: React.FC<Props> = ({item, index, isLast}) => {
    console.log('isLast: ', index)
    return (
        <div className={`py-20 px-4 md:px-0 w-full   ${index === isLast ? 'border-0' : 'border-b border-b-[#8b8782]'}`} style={{
        ...(item?.color && {background: item?.color})
        }}>
            <div className="max-w-310 w-full mx-auto">
                <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between">
                    <h3 className="max-w-[320px] w-full text-3xl text-[#52483e] font-semibold capitalize">{item?.title}</h3>
                    <div>
                        <ul className="flex flex-col gap-3">
                            {
                                item?.description?.map((info, index) => (
                                    <li key={index} className="text-lg text-[#8b8782] font-normal">{info?.content}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechSpecsDescription;