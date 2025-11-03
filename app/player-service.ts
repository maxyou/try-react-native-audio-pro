import {
	AudioPro,
	AudioProContentType
} from 'react-native-audio-pro';



// Track the current playlist position
let currentIndex = 0;

export function setupAudioPro(): void {

	// Configure audio settings
	AudioPro.configure({
		contentType: AudioProContentType.MUSIC,
		debug: true,
		debugIncludesProgress: false,
		progressIntervalMs: 1000,
		showNextPrevControls: true,
		showSkipControls: false,
		skipIntervalMs: 30000,
	});
	
}


