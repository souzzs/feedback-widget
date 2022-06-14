import React from 'react'
import moon from '../assets/moonDark.svg';
import sun from '../assets/sunLight.svg';
import useDarkMode from '../hooks/useDarkMode';
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
    const [feedbacks, setFeedbacks] = React.useState<DataFeedback[] | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [colorTheme, theme, setTheme] = useDarkMode();

    React.useEffect(() => {
        setLoading(true);
        api.get('feedbacks')
        .then(response => {
          setFeedbacks(response.data.feedbacks);
          setLoading(false);
        });
    }, [updateFeedbacks]);


    const editTheme = () => {
        setTheme(colorTheme);
    }

    return (
        <div className='py-8 px-8'>
           <header className='border-b-2 pb-2 border-brand-500'>
                <button 
                    className='text-xl px-4 flex items-center gap-4'
                    onClick={editTheme}
                >
                    {theme === 'dark' ? 'Light mode' : 'Dark mode '}
                    {theme === 'dark' ? <img src={sun} alt='Imagem de um sol em svg' /> : <img src={moon} alt='Imagem de uma lua em svg' />}
                </button>
           </header>
           <div className='flex flex-wrap gap-10 pt-12 break-all justify-center'>
                {loading ? <Loading /> : undefined}
                {feedbacks && !loading && (
                    feedbacks.map(fb => {
                        return (
                            <div key={fb.id} className='bg-[#f3f0fc] min-w-[300px] flex-1 w-full p-2 rounded-md dark:bg-[#27272A] dark:shadow-none'>
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