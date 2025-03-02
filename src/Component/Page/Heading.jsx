const Heading = ({title,subTitle}) => {
    return (
        <div className="text-center font-thin text-4xl my-3">
            <h1>{title}</h1>
            <p className="text-xl">{subTitle}</p>
        </div>
    );
};

export default Heading;