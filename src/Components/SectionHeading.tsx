interface HeadingProps {
    title: string,
    subtitle: string
}
const SectionHeading = ({title, subtitle}: HeadingProps) => {
    return (
        <div className="w-full flex items-center text-center flex-col justify-center gap-4">
            {title && <h1 className="text-[42px] md:text-[56px] text-[#52483e] font-semibold capitalize leading-16 md:leading-24">{title}</h1>}
            {subtitle && <p className="text-xl  md:text-2xl text-[#8b8782] font-normal">{subtitle}</p>}
        </div>
    );
};

export default SectionHeading;