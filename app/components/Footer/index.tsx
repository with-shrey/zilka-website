import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Products",
        link: ['Coming Soon'],
    },
]

const footer = () => {
    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>
                            <Image src='/zilka-logo.png' alt={'Zilka Logo'} width={150} height={40} />
                        </h3>
                        <div className='flex gap-4'>
                            {/*<div className='footer-icons'>*/}
                            {/*    <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>*/}
                            {/*</div>*/}
                            {/*<div className='footer-icons'>*/}
                            {/*    <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>*/}
                            {/*</div>*/}
                            <div className='footer-icons'>
                                <Link href="https://instagram.com/zilka.official"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@2025 - All Rights Reserved by RR SOLUTION</h3>
                        </div>
                        {/*<div className="flex justify-center md:justify-end">*/}
                        {/*    <Link href="/privacy-policy">*/}
                        {/*        <h3 className="text-offwhite pr-6">Privacy policy</h3>*/}
                        {/*    </Link>*/}
                        {/*    <Link href="/terms-conditions">*/}
                        {/*        <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default footer;
