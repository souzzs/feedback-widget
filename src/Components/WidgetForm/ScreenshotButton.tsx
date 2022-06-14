import { Camera, Trash } from 'phosphor-react'
import React from 'react'
import html2canvas from 'html2canvas';
import { Loading } from '../Loading';

//
interface ScreenshotButtonProps {
  onScreenshotTook: (s: string | null) => void;
  screenshot: string | null;
}

const ScreenshotButton = ({onScreenshotTook, screenshot}: ScreenshotButtonProps) => {
    const[isTakingScreenshot, setIsTakingScreenshot] = React.useState(false);

    const handleTakeScreenshot = async () => {
        setIsTakingScreenshot(true);

        // O ponto de exclamação define que o objeto nunca será nulo
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');
        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);
    }
 
    if(screenshot){
      return <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500" 
        onClick={() => onScreenshotTook(null)}
        style={{ 
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <Trash weight="fill" />
      </button>
    }  return (
      <button
          type='button'
          onClick={handleTakeScreenshot}
          className='p-2 bg-[#F4F4F5] dark:bg-zinc-800 rounded-md border-transparent dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500'
      >
          {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6 text-zinc-900' />}
      </button>
    )
}

export default ScreenshotButton