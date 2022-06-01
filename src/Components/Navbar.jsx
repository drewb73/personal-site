import React from 'react'
import {FaLaptopCode} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Disclosure} from '@headlessui/react'
import { XIcon, MenuIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href:'/', current: true },
  { name: 'Resume', href:'/resume', current: true},
  { name: 'About', href: '/about', current: true},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure as='nav' classNames="bg-gray-800">
      {({ open }) => (
        <>
        <div className='max-w-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <div className='-ml-2 mr-2 flex items-center md:hidden'>
                {/* Mobile Button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' >
                  <span className='sr-only'>Open Main Menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-shrink-0 flex items-center'>
                  <FaLaptopCode className='h-10 w-10 text-black' /> 
                  <span className='pl-3 text-xl font-semibold'>Drew Barton</span>
              </div>
              <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
              {navigation.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? " text-black hover:bg-gray-300"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
        

        {/* Dropwdown panel */}
        <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-natural text-black hover:bg-gray-300"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar


