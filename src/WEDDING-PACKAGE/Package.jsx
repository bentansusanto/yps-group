export const Gift1 = () => {
    const title = 'Wooden Couple Cup Set';
    const contentGift1 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In tempore accusantium quisquam quae temporibus obcaecati fuga nam, saepe est pariatur maxime minus, dolor consequatur quaerat cupiditate.';
    const image = 'gift1.png';
    return (
        <div className="mt-20">
            <div className="gift1-section md:flex block">
                <img src={require('../assets/' + image)} alt="" className="lg:w-[30%] md:w-[50%] w-[80%]"/>
                <div className="content mt-10 lg:ml-12 md:ml-5 ml-0">
                    <h2 className="md:text-[2.5rem] text-[3rem]">{title}</h2>
                    <p className="text-[.9rem] lg:w-[48%] w-full pt-3 text-[#a4a4a4]">{contentGift1}</p>
                </div>
            </div>
        </div>
    )
}

export const Gift2 = () => {
    const title = 'Housewarming Food Set';
    const contentGift2 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In tempore accusantium quisquam quae temporibus obcaecati fuga nam, saepe est pariatur maxime minus, dolor consequatur quaerat cupiditate.';
    const image = 'gift2.png';
    return (
        <div className="mt-20">
            <div className="gift1-section md:flex md:flex-row-reverse block">
                <img src={require('../assets/' + image)} alt="" className="lg:w-[30%] md:w-[50%] w-[80%] lg:mr-16 mr-0"/>
                <div className="content mt-10 lg:ml-72 ml-0">
                    <h2 className="md:text-[2.5rem] text-[3rem]">{title}</h2>
                    <p className="text-[.9rem] lg:w-[85%] w-full pt-3 text-[#a4a4a4]">{contentGift2}</p>
                </div>
            </div>
        </div>
    )
}

export const Gift3 = () => {
    const title = 'Thee Rebecah Gift Set';
    const contentGift3 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In tempore accusantium quisquam quae temporibus obcaecati fuga nam, saepe est pariatur maxime minus, dolor consequatur quaerat cupiditate.';
    const image = 'gift3.png';
    return (
        <div className="mt-20">
            <div className="gift1-section md:flex block">
                <img src={require('../assets/' + image)} alt="" className="lg:w-[30%] md:w-[50%] w-[80%]"/>
                <div className="content mt-10 lg:ml-12 md:ml-5 ml-0">
                    <h2 className="md:text-[2.5rem] text-[3rem]">{title}</h2>
                    <p className="text-[.9rem] lg:w-[48%] w-full pt-3 text-[#a4a4a4]">{contentGift3}</p>
                </div>
            </div>
        </div>
    )
}