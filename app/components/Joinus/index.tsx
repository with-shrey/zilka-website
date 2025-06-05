'use client'
const Join = () => {
    const openBot = () => {
        // @ts-ignore
        window.myLandbot && window.myLandbot.open();
    }
    return (
        <div className="bg-joinus my-32 pb-28">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-blue text-lg font-normal tracking-widest">Contact Us</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">Want to buy in bulk?</h2>
                    <p className="text-lightblack text-base font-normal">Click the button below to start a chat or give us a call on <a className="text-btnblue" href='tel:+91998159999'>+91998159999</a></p>
                </div>

                <div className=" pt-5">
                    <button onClick={openBot} className="mx-auto joinButton text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                        Start Chat
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Join;
