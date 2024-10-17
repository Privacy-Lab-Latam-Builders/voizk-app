export class VoiceRecorder {
    private mediaRecorder: MediaRecorder | null = null;
    private audioChunks: Blob[] = [];
    private recordings: Blob[] = [];
  
    async startRecording(): Promise<void> {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);
        
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };
  
        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
          this.recordings.push(audioBlob);
          this.audioChunks = [];
        };
  
        this.mediaRecorder.start();
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    }
  
    stopRecording(): void {
      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.stop();
      }
    }
  
    getRecordings(): Blob[] {
      return this.recordings;
    }
  
    clearRecordings(): void {
      this.recordings = [];
    }
  
    async sendToTrainingModule(): Promise<void> {
      // TODO: Implement sending recordings to the training module. Map this.recordings and send them to the training module.
    }
}  