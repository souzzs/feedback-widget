import { ArrowLeft } from 'phosphor-react';
import React from 'react';
import { FeedbackType, feedbackTypes } from ".."
import { api } from '../../../services/api';
import CloseButton from '../../CloseButton';
import ScreenshotButton from '../../WidgetForm/ScreenshotButton';

interface DataFeedback {
  feedbackText: string;
  urlImageFeedback: string;
  typeFeedback: string;
  imgFeedbackType: string;
}

// Mesmo um função se estado o seu retorno será void
interface FeedbackContentProps {
  feedBackOption: FeedbackType;
  onFeedbackRestartRequested: () => void; 
  onFeedbackSent: (state: boolean) => void;
  updateListFeedbacks: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedbackContentStep = ({feedBackOption, onFeedbackRestartRequested, onFeedbackSent, updateListFeedbacks}: FeedbackContentProps) => {
    const {title, image} = feedbackTypes[feedBackOption];
    const [screenshot, setScreenshot] = React.useState<string| null>(null);
    const [feedbackText, setFeedbackText] = React.useState('');

    const handleSubmitfeedback = async (e: React.FormEvent) => {
      e.preventDefault();

      // Preparado para enviar os dados ao back-end
      // O ! é aplicado pois o botão de submit já verifica se tem uma imagem ou não
      const dataFeedback: DataFeedback = {
        feedbackText: feedbackText,
        urlImageFeedback: screenshot!,
        typeFeedback: title,
        imgFeedbackType: image.src
      }
      
      const response = await api.post('/feedbacks', dataFeedback);
      
      if(response.status === 201){
        updateListFeedbacks((feedbacksPrevious) => !feedbacksPrevious);
        onFeedbackSent(true);
      } else {
        onFeedbackSent(false);
      }
      
    }

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
          <form className='my-4 w-full' onSubmit={handleSubmitfeedback}>
            <textarea 
              className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 dark:text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
              placeholder='Conte com detalhes o que está acontecendo...'
              onChange={(e) => setFeedbackText(e.target.value)}
            />
            <footer className='flex gap-2 mt-2'>
              <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot}/>
              <button
              type='submit'
              disabled={screenshot ? false : true}
              className="p-2 bg-brand-500 text-white font-medium rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"  
              >
              Enviar feddback  
              </button>
            </footer>
          </form>
      </>
    )
}

export default FeedbackContentStep