const TopFeed = () => {
    return (
        <div className="relative h-[56.25vw] px-2">
            <div className="grid grid-cols-20 grid-flow-col gap-4 py-4">
                <div style={{ borderRight: "1px solid gray"}}className="col-span-13 max-w-5xl pr-4">
                    <div className="grid grid-rows-1 grid-cols-3 grid-flow-col gap-4 max-w-4xl">
                        <div className="grid grid-rows-10 gap-4 max-h-full ">
                            <div className="row-span-6 max-h-full max-w-2 line-clamp-3 break-words">
                                <div className="line-clamp-3 text-black text-2xl font-bold ">
                                    Trump Prepares to Surrender as New York Braces for Protests
                                </div>

                                <ul className=' text-[13px] mt-3 drop-shadow-xl list-disc'>
                                    <li className=''>
                                        Donald Trump is likely to be arraigned on Tuesday, and his charges will be unsealed then. His lawyer said he would not take a plea deal and would go to trial. The case is an unprecedented moment in U.S. politics that heralds a tumultuous stretch for a deeply divided nation.
                                    {/* </li>
                                    <li className='mt-7 drop-shadow-xl'> */}
                                        {/* The case is an unprecedented moment in U.S. politics that heralds a tumultuous stretch for a deeply divided nation. */}
                                    </li>
                                </ul>
                            </div>
                            <div className="row-span-5 max-h-sm max-w-sm line-clamp-3 break-words">
                                <div className="line-clamp-3 text-black text-1xl font-bold ">
                                    Biden’s Response? 4 Ways to Say No Comment.
                                </div>

                                <ul className='text-[13px] mt-3 drop-shadow-xl list-disc'>
                                    <li className=''>
                                    President Biden believes that presidents should not comment on pending legal matters. He also does not want to be baited into a reaction.
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-span-5 max-w-2xl w-full
                        h-[30vw] max-h-[30vw]">
                            <img src="/images/homepage.webp" alt="" />
                        </div>
                    </div>

                    
                    <hr style={{
                            color: '#000000',
                            height: .5,
                            borderColor : '#000000'
                        }} className="mt-0 pb-3"/>

                    <div className="grid grid-rows-1 grid-cols-3 grid-flow-col gap-4 max-w-4xl">
                        <div className="grid grid-rows-10 gap-4 max-h-full ">
                            <div className="row-span-6 max-h-full max-w-2 line-clamp-3 break-words">
                                <div className="line-clamp-3 text-black text-xl font-bold ">
                                    This Nonprofit Health System Cuts Off Patients With Medical Debt
                                </div>

                                <ul className=' text-[13px] mt-3 drop-shadow-xl list-disc'>
                                    
                                    <li className='mt-7 drop-shadow-xl'>
                                    Doctors at the Allina Health System, a wealthy nonprofit in the Midwest, aren’t allowed to see poor patients or children with too many unpaid medical bills.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-5 max-w-2xl w-full
                        h-[30vw] max-h-[30vw]">
                            <img src="\images\00Allina-lede-hwft-threeByTwoSmallAt2X-v2.jpg" alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-span-7">
                    
                    <div  style={{ height: "24rem" }} className=" max-h-xs max-w-xs line-clamp-3 break-words">
                        <div className="col-span-5 max-w-2xl w-full
                                            h-[30vw] max-h-[30vw]">
                            <img src="\images\01Hunt-Bronx-04-vlmp-threeByTwoSmallAt2X.webp" alt="" />
                            <div className='line-clamp-3 text-black text-xl  list-disc break-words'>
                                Heading Uptown With $250,000 and Some Hope. Could They Afford a Co-op?
                            </div>
                            <div className='text-[13px] drop-shadow-xl list-disc break-words'>
                                A couple searched in East Harlem and the Bronx for a new apartment that would allow them to commute easily to Midtown. Here’s what they found.
                            </div>
                        </div>    
                    </div>
                    <hr style={{
                            color: '#000000',
                            height: .5,
                            borderColor : '#000000'
                        }} className="mt-0 pb-3"/>

                    <div style={{ height: "12rem" }} className="max-h-sm max-w-xs grid grid-rows-1 grid-cols-2 grid-flow-col gap-4 ">
                        <div className="col-span-1 max-w-2xl w-full
                                            h-[30vw] max-h-[30vw]">
                            <img src="\images\oakImage-1685385241306-threeByTwoSmallAt2X.webp" alt="" />
                            <div  className='line-clamp-3 text-black text-xl  list-disc break-words'>
                                Even the gentlest gardeners often disrupt natural habitats. Here’s how to avoid that.
                            </div>
                            
                        </div>
                        <div className="col-span-1 max-w-2xl w-full
                                            h-[30vw] max-h-[30vw]">
                            <img src="\images\scratch-disaster-promo-threeByTwoSmallAt2X.webp" alt="" />
                            <div className='line-clamp-3 text-black text-xl  list-disc break-words'>
                                We talked to eight people who are familiar with natural disasters on what to pack in a survival kit.
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFeed;