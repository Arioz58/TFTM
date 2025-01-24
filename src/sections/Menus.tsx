import Menu1 from '@/assets/menu-1.png';
import Menu2 from '@/assets/menu-2.png';
import Menu3 from '@/assets/menu-3.png';
import Image from 'next/image';

export default function Menus() {
    return (
    <section id='menus'>
        <div className="">
            <div className="relative">
                <h1 className="font-black text-3xl text-center relative z-10 text-primary py-10
                before:content-[''] 
                before:absolute 
                before:left-1/2 
                before:-translate-x-1/2
                before:h-[100%]
                before:w-full
                before:bg-secondary 
                before:rounded-b-[80%]
                before:-z-10
                before:shadow-xl
                before:-top-0">
                    NOS MENUS
                </h1>
                <div className="flex flex-col gap-10 py-8 max-w-[480px] mx-auto px-8">
                    <Image src={Menu1} alt="Menu 1" className="rounded-3xl" />
                    <Image src={Menu2} alt="Menu 2" className="rounded-3xl" />
                    <Image src={Menu3} alt="Menu 3" className="rounded-3xl" />
                </div>
            </div>
        </div>
    </section>
    );
}
