import { ArrowLeft } from 'phosphor-react';
import { feedbackOptions, FeedbackOptions } from '.'
import CloseButton from '../CloseButton';

interface FeedbackContentProps {
    feedBackOption: FeedbackOptions;
    onFeedbackRestartRequested: () => void; 
}

const WidgetForm = ({feedBackOption, onFeedbackRestartRequested}: FeedbackContentProps) => {
    const {title, image} = feedbackOptions[feedBackOption];
      
    return (
      <>
          <header>
            <button onClick={onFeedbackRestartRequested} className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100'>
              <ArrowLeft className='w-4 h-4'/>
            </button>
          <span className='text-xl leading-6 flex items-center gap-2'>
            <img src={image.src} alt={image.alt} className='w-6 h-6'/>
            {title}
          </span>
          <CloseButton />
      </header>
          <div>WidgetForm</div>
          <footer className='text-xs text-neutral-400'>
          <span>
              Feito com ♥ pela {""}
              <a href='https://www.rocketseat.com.br/' className='underline underline-offset-2'>Rocketseat</a> {""}
              & {""}
              <a href='https://github.com/souzzs' className='underline underline-offset-2'>Caio Souza</a>
          </span>
        </footer>
      </>
    )
}

export default WidgetForm