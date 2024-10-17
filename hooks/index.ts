
import { VoiceRecorder } from '@/utils';
import { useState, useRef, useCallback } from 'react';


export const useVoiceRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const recorderRef = useRef<VoiceRecorder | null>(null);
  
    const startRecording = useCallback(() => {
      if (!recorderRef.current) {
        recorderRef.current = new VoiceRecorder();
      }
      recorderRef.current.startRecording();
      setIsRecording(true);
    }, []);
  
    const stopRecording = useCallback(() => {
      if (recorderRef.current) {
        recorderRef.current.stopRecording();
        setIsRecording(false);
      }
    }, []);
  
    const getRecordings = useCallback(() => {
      return recorderRef.current ? recorderRef.current.getRecordings() : [];
    }, []);
  
    const clearRecordings = useCallback(() => {
      if (recorderRef.current) {
        recorderRef.current.clearRecordings();
      }
    }, []);
  
    const sendToTrainingModule = useCallback(async (url: string) => {
      if (recorderRef.current) {
        await recorderRef.current.sendToTrainingModule();
      }
    }, []);
  
    return {
      isRecording,
      startRecording,
      stopRecording,
      getRecordings,
      clearRecordings,
      sendToTrainingModule,
    };
  };
  