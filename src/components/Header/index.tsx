import { Disclosure, Transition } from '@headlessui/react'
import { useMediaQuery } from '@manskuy/grid';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const leftmenu = [
    {
      label: "Jadwal",
      href: "/"
    },
    {
      label: "Gallery",
      href: "/about"
    },
  ];

  const rightmenu = [
    {
      label: "Ucapan",
      href: "#Ucapan"
    },
    {
      label: "Lokasi",
      href: "#Lokasi"
    },
    // {
    //   label: "Pro Version",
    //   href: "https://stablo-pro.web3templates.com/",
    //   external: true,
    // //   badge: "new"
    // },
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

const Header = () => {
  const isMobile = !useMediaQuery('TabletAndUp')
  return (
    <div className='p-3 sm:p-4  bg-orange-50'>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {leftmenu.map((item, index) => (
                    <Link href={item.href} key={index} className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-200">
                      {/* <a className=> */}
                        {item.label}
                    
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/" className={classNames("w-28 flex items-center", {
                    ['justify-center']: !isMobile
                  })}>
                      <Image
                        alt="Logo"
                        sizes="(max-width: 640px) 100vw, 200px"
                        priority={true}
                        src="/images/NRLogo.png"
                        width={isMobile ? 60 :  80}
                        height={isMobile ? 60 :  80}
                      />
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-orange-200 focus:outline-none dark:text-gray-300 ">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
                  {rightmenu.map((item, index) => (
                    <Link 
                        scroll={false}
                        className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-200"
                        href={item.href} key={index}>
                      {/* <a
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noopener" : ""}> */}
                        <span> {item.label}</span>
                      {/* </a> */}
                    </Link>
                  ))}
                </div>
              </div>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel>
                        <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                        {mobilemenu.map((item, index) => (
                            <Link href={item.href} key={index} className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-200">
                            {/* <a
                                className=
                                // target={item.external ? "_blank" : ""}
                                // rel={item.external ? "noopener" : ""}
                                > */}
                                {item.label}
                            {/* </a> */}
                            </Link>
                        ))}
                        </div>
                    </Disclosure.Panel>
                </Transition>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  )
}

export default Header