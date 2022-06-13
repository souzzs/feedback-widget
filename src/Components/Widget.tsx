import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import WidgetForm from './WidgetForm'

interface WidgetProps {
  updateListFeedbacks: React.Dispatch<React.SetStateAction<boolean>>
}

const Widget = ({updateListFeedbacks}: WidgetProps) => { 
  return (
    <Popover className='fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
        <Popover.Panel>
          <WidgetForm updateListFeedbacks={updateListFeedbacks}/>
        </Popover.Panel>
        <Popover.Button className='h-12 bg-brand-500 rounded-full px-3 text-white flex items-center group'>
            <ChatTeardropDots className='w-8 h-6'/>
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
              Feedback
            </span>
        </Popover.Button>
    </Popover>
  )
}

export default Widget