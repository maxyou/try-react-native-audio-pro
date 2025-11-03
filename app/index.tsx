import React from 'react';
import { Text, View } from 'react-native';
import { useAudioPro } from 'react-native-audio-pro';

const AudioStatus = () => {

    const { state, position, duration, playingTrack, playbackSpeed, volume, error } = useAudioPro();

    return (
        <View>
            <View>
                <Text>try react-native-audio-pro</Text>
            </View>
            {/* <View>
                <Text>Playback State: {state}</Text>
                <Text>Current Position: {position}ms</Text>
                <Text>Total Duration: {duration}ms</Text>
                <Text>Playback Speed: {playbackSpeed}x</Text>
                <Text>Volume: {Math.round(volume * 100)}%</Text>
                {error && (
                    <View style={{ backgroundColor: '#ffeeee', padding: 10, borderRadius: 5 }}>
                        <Text style={{ color: 'red' }}>Error: {error.error}</Text>
                        <Text style={{ color: 'red' }}>Code: {error.errorCode}</Text>
                    </View>
                )}
                {playingTrack && (
                    <View>
                        <Text>Track ID: {playingTrack.id}</Text>
                        <Text>Now Playing: {playingTrack.title}</Text>
                        <Text>Artist: {playingTrack.artist}</Text>
                    </View>
                )}
            </View> */}
        </View>
    );
};

export default AudioStatus;