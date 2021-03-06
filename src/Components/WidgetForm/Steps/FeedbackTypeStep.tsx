import CloseButton from "../../CloseButton";
import { FeedbackType, feedbackTypes } from ".."

interface FeedbackTypeStepProps  {
    onFeedbackOptionChanged: (type: FeedbackType) => void
}

const FeedbackTypeStep = ({onFeedbackOptionChanged}: FeedbackTypeStepProps) => {
    return (
        <>
            <header>
                <span className='text-xl leading-6'>Deixe seu feddback</span>
                <CloseButton />
            </header>
            <div className='flex py-8 gap-2 w-full'>
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => onFeedbackOptionChanged(key as FeedbackType)}
                            className='bg-[#F4F4F5] dark:bg-zinc-800 rounded-lg py-5 
                                w-24 flex-1 flex-col items-center gap-2 border-2 
                                border-transparent hover:border-brand-500 
                                focus:border-brand-500 focus:outline-none'
                        >
                            <img src={value.image.src} alt={value.image.alt} className='mx-auto mb-2'/>
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
      )
}

export default FeedbackTypeStep