import React from 'react';
import bugImageSrc from '../../assets/bug.svg';
import ideaImageSrc from '../../assets/idea.svg';
import otherImageSrc from '../../assets/other.svg';
import WidgetForm from './WidgetForm';
import WidgetOptions from './WidgetOptions';

export const feedbackOptions = {
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
Object.entries(feedbackOptions) => 
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
export type FeedbackOptions = keyof typeof feedbackOptions; /*"BUG" | "IDEA" | "OTHER"*/

const Widget = () => {
    const [feedbackOption, setFeedbackOption] = React.useState<FeedbackOptions | null>(null);
    const handleRestartFeedBack = () => setFeedbackOption(null);
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackOption ? 
                <WidgetForm 
                    feedBackOption={feedbackOption} 
                    onFeedbackRestartRequested={handleRestartFeedBack}
                /> : 
                <WidgetOptions onFeedbackOptionChanged={setFeedbackOption}/>}
        </div>
    )
}

export default Widget