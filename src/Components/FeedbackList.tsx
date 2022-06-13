import React from 'react'
import moon from '../assets/moonDark.svg';
import sun from '../assets/sunLight.svg';
import { api } from '../services/api';
import { Loading } from './Loading';

interface DataFeedback {
    id: number;
    feedbackText: string;
    urlImageFeedback: string;
    typeFeedback: string;
    imgFeedbackType: string;
}

interface FeedbackListProps {
    updateFeedbacks: boolean
}

const FeedbackList = ({updateFeedbacks}: FeedbackListProps) => {
    const [modeDark, setModeDark] = React.useState(false);
    const [feedbacks, setFeedbacks] = React.useState<DataFeedback[] | null>(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        api.get('feedbacks')
        .then(response => {
          setFeedbacks(response.data.feedbacks);
          setLoading(false);
        });
    }, [updateFeedbacks]);

    return (
        <div className='py-8 px-8'>
           <header className='border-b-2 pb-2 border-[#52525B]'>
                <button 
                    className='text-xl px-4 flex items-center gap-4'
                    onClick={() => setModeDark(!modeDark)}
                >
                    {modeDark ? 'Dark mode' : 'Light mode '}
                    {modeDark ? <img src={moon} alt='Imagem de uma lua em svg' /> : <img src={sun} alt='Imagem de um sol em svg' />}
                </button>
           </header>
           <div className='flex flex-wrap gap-10 pt-12 break-all justify-center'>
                {loading ? <Loading /> : undefined}
                {feedbacks && !loading && (
                    feedbacks.map(fb => {
                        return (
                            <div key={fb.id} className='min-w-[300px] flex-1 w-full p-2 rounded-md bg-[#27272A]'>
                                <span className='flex gap-2 items-center mb-3'>
                                    <img src={fb.imgFeedbackType} alt={fb.typeFeedback} className='h-7 w-7'/>
                                    {fb.typeFeedback}
                                </span>
                                <img src={fb.urlImageFeedback} alt=' ' className='w-full h-64 object-cover rounded-md mb-4'/>
                                <p className='text-lg'>{fb.feedbackText}</p>
                            </div>
                        )
                    })
                )}
           </div>
        </div>
    )
}

export default FeedbackList