import { CONFIG } from '@libs/config'
import Tilt from 'react-parallax-tilt'

export const Stack = () => {
    return (
        <>
            <section className="bg-white text-black">
                <h1 className="text-4xl mb-10 text-center font-semibold font-heading">
                    Stack <span className="text-green-500">&amp;</span> Technologies I Use
                </h1>
                <div className='container mx-auto mb-24 px-24'>
                    <div className='flex flex-col justify-center'>
                        <div className='grid lg:grid-cols-7 md:grids-col-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                            {
                                CONFIG.STACK.map((stack, idx) => (
                                    <Tilt
                                        key={idx}
                                        scale={1.05}
                                        tiltMaxAngleX={20}
                                        tiltMaxAngleY={20}
                                    >
                                        <div className='p-4 rounded-lg flex justify-around items-center bg-slate-50 hover:bg-slate-100'>
                                            <img src={stack.icon} alt={stack.name} className='h-24 w-24' />
                                        </div>
                                    </Tilt>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}