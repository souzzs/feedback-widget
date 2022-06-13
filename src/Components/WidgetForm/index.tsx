import React from 'react';
import bugImageSrc from '../../assets/bug.svg';
import ideaImageSrc from '../../assets/idea.svg';
import otherImageSrc from '../../assets/other.svg';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep';
import FeedbackTypeStep from './Steps/FeedbackTypeStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            src: bugImageSrc,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            src: ideaImageSrc,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            src: otherImageSrc,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

/*
Object.entries(feedbackTypes ) => 
[
    [
        key: 'Chave do objeto - Bug, Idea, Other',
        value: {
            title: '',
            image: {src: '', alt: ''}
        }
    ]
]
*/

// Captura as chaves das opções de feedback e utiliza para gerar um type único
export type FeedbackType  = keyof typeof feedbackTypes ; /*"BUG" | "IDEA" | "OTHER"*/

const WidgetForm = () => {
    const [feedbackOption, setFeedbackOption] = React.useState<FeedbackType  | null>(null);
    const [feedbackSent, setFeedbackSent] = React.useState(false);

    const handleRestartFeedBack = () => {
        setFeedbackOption(null);
        setFeedbackSent(false);
    };

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedBack}/>
            ) : (
                <>
                {feedbackOption ? 
                <FeedbackContentStep 
                    feedBackOption={feedbackOption} 
                    onFeedbackRestartRequested={handleRestartFeedBack}
                    onFeedbackSent={() => setFeedbackSent(true)}
                /> : 
                <FeedbackTypeStep onFeedbackOptionChanged={setFeedbackOption}/>}</>
            )}
            <footer className='text-xs text-neutral-400'>
              <span>
                  Feito com ♥ pela {""}
                  <a href='https://www.rocketseat.com.br/' className='underline underline-offset-2'>Rocketseat</a> {""}
                  & {""}
                  <a href='https://github.com/souzzs' className='underline underline-offset-2'>Caio Souza</a>
              </span>
          </footer>
        </div>
    )
}

export default WidgetForm