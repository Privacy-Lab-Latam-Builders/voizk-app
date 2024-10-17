
'use client'
import { VoiceRecorder } from '@/utils';
import React, { useState } from 'react';

const MicButton: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const recorder = new VoiceRecorder();

  const handleMicClick = async () => {
    if (isRecording) {
      recorder.stopRecording();
      setIsRecording(false);
    } else {
      await recorder.startRecording();
      setIsRecording(true);
    }
  };

  return (
    <button onClick={handleMicClick} className='rounded-full bg-blue-500 px-6 py-3'>
      {isRecording ? 'Stop Recording' : 'Start Recording'}
    </button>
  )
};

export default MicButton;
