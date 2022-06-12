import { feedbackOptions, FeedbackOptions } from '.';
import CloseButton from '../CloseButton';


interface FeedbackOptionProps {
    onFeedbackOptionChanged: (type: FeedbackOptions) => void
}

const WidgetOptions = ({onFeedbackOptionChanged}: FeedbackOptionProps) => {
    return (
        <>
            <header>
                <span className='text-xl leading-6'>Deixe seu feddback</span>
                <CloseButton />
            </header>
            <div className='flex py-8 gap-2 w-full'>
                {Object.entries(feedbackOptions).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => onFeedbackOptionChanged(key as FeedbackOptions)}
                            className='bg-zinc-800 rounded-lg py-5 
                                w-24 flex-1 flex-col items-center gap-2 border-2 
                                border-transparent hover:border-brand-500 
                                focus:border-brand-500 focus:outline-none'
                        >
                            <img src={value.image.src} alt={value.image.alt}/>
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
            <footer className='text-xs text-neutral-400'>
                <span>
                    Feito com ♥ pela {""}
                    <a href='https://www.rocketseat.com.br/' className='underline underline-offset-2'>
                        Rocketseat
                    </a> {""}
                    & {""}
                    <a href='https://github.com/souzzs' className='underline underline-offset-2'>
                        Caio Souza
                        </a>
                </span>
            </footer>
        </>
      )
}

export default WidgetOptions