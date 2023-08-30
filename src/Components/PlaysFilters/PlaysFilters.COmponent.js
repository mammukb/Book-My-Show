import { Disclosure } from '@headlessui/react'
import { BiChevronUp , BiChevronDown} from "react-icons/bi"

const  PlaysFilter =(props) => {
  return (
    <div className='bg-gray-100 px-5 py-2 my-2 rounded-md'>

<Disclosure >
        {({ open }) =>(
            <>
    <Disclosure.Button className="py-2 flex flex-row gap-3 items-center">
        {open ? <BiChevronUp/> : <BiChevronDown/>}

       <span  className={open ? "text-red-600" : "text-gray-700"} >
         {props.title}
         </span>
      
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 p-3 ">
         <div className='flex flex-wrap items-center gap-3' >
            {
            props.tags.map((tag) => (
                <>
                    <div className='border-2 border-gray-200 px-2 py-1'>
                        <span className='text-red-600'>
                            {tag}
                        </span>
                        </div>                
                </>
            ))
            }
       
         </div>
      </Disclosure.Panel>         
            </>
        )}
      
    </Disclosure>
    </div>
  )
}

export default PlaysFilter;