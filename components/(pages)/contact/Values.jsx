import React from 'react'
import Image from 'next/image'

const Values = () => {
    return (
        <div
            className="text-[#1f1f1f] m-8"
            style={{ fontFamily: "Inter, sans-serif" }}
        >
            <h3 className="text-[40px] px-2 py-2 lg:text-[42px] font-semibold leading-[46px]">
                Our core values
            </h3>
            <div className="flex md:flex-row flex-col m-3">
                <section className="border-[1px] md:border-r-[0px] border-[#121] mb-3 h-[412px] md:h-[460px] lg:h-[420px]">
                    <div className="flex items-center justify-start m-4">
                        <Image alt="FlexibilityPng" src="/corevalues1.png" width="64" height="64" />
                    </div>
                    <div className="m-8">
                        <h4 className="text-[30px] lg:text-[23.4px] leading-[46px] md:leading-[40px] lg:leading-[32px] mb-4">
                            Flexibility
                        </h4>
                        <ol className="list-disc text-[16px] leading-[28px] md:leading-[20px] lg:leading-[21px] tracking-normal px-6">
                            <li className="py-2">
                                We place a priority on communication and trust rather than
                                formalities.
                            </li>
                            <li className="py-2">
                                Being ready for changes is much more important than following
                                the ground plan.
                            </li>
                        </ol>
                    </div>
                </section>
                <section className="border-[1px] md:border-r-[0px] border-[#121] mb-3 h-[412px] md:h-[460px] lg:h-[420px]">
                    <div className="flex items-center justify-start m-4">
                        <Image alt="CooperationPng" src="/corevalues2.png" width="64" height="64" />
                    </div>
                    <div className="m-8">
                        <h4 className="text-[30px] lg:text-[23.4px] leading-[46px] md:leading-[40px] lg:leading-[32px] mb-4">
                            Cooperation
                        </h4>
                        <ol className="list-disc text-[16px] leading-[28px] md:leading-[20px] lg:leading-[21px] tracking-normal px-6">
                            <li className="py-2">
                                We always act proactively, taking into account the interests
                                of the Client and the Company.
                            </li>
                            <li className="py-2">
                                People and teamwork are much more important than processes and
                                tools.
                            </li>
                        </ol>
                    </div>
                </section>
                <section className="border-[1px] border-[#121] mb-3 h-[412px] md:h-[460px] lg:h-[420px]">
                    <div className="flex items-center justify-start m-4">
                        <Image alt="ResultPng" src="/corevalues3.png" width="64" height="64" />
                    </div>
                    <div className="m-8">
                        <h4 className="text-[30px] lg:text-[23.4px] leading-[46px] md:leading-[40px] lg:leading-[32px] mb-4">
                            Result
                        </h4>
                        <ol className="list-disc text-[16px] leading-[28px] md:leading-[20px] lg:leading-[21px] tracking-normal px-6">
                            <li className="py-2">
                                “Working” products are outcome measures whereas optimal
                                solutions are the priority!
                            </li>
                            <li className="py-2">
                                Everyone has the responsibility for the team’s results.
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Values