import successSvg from '../../../assets/successFeedback.svg';
import failureSvg from '../../../assets/failureFeedback.svg';
import CloseButton from '../../CloseButton';

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
    feedbackSent: boolean | null
}

const FeedbackSuccessStep = ({onFeedbackRestartRequested, feedbackSent}: FeedbackSuccessStepProps) => {
  return (
    <div>
        <header>
            <CloseButton /> 
        </header>
        <div className="flex flex-col items-center py-10 w-[304px]">
            {feedbackSent ? <img src={successSvg} alt='Imagem de sucesso'/> : <img src={failureSvg} alt='Imagem de erro'/>}
            <span className="text-xl mt-2">{feedbackSent ? 'Agradecemos o feedback!' : 'Erro ao enviar o feedback :('}</span>
            <button
                type="button"
                onClick={onFeedbackRestartRequested}
                className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            >
                {feedbackSent ? 'Quero enviar outro' : 'Tente enviar outro feedback'}  
            </button>
        </div>
    </div>
  )
}

export default FeedbackSuccessStep