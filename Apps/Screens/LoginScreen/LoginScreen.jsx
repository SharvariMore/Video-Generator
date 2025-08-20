import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"; // ← add Text
import { useVideoPlayer, VideoView } from "expo-video";
import Colors from "../../Utils/Colors";


export default function LoginScreen() {
  const player = useVideoPlayer(
    { uri: "https://cdn.pixabay.com/video/2025/07/22/292827_large.mp4" },
    (p) => {
      p.loop = true;
      p.play();
    }
  );

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
      />
      <View style={styles.overlay}>
        <Text style={{ color: Colors.WHITE, fontSize: 35 }}>Reel Spark</Text>
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 17,
            textAlign: "center",
            
          }}
        >
          Ultimate Place to Create Your Videos Faster!
        </Text>

        <TouchableOpacity onPress={() => console.log('btn')} style={styles.login}>
            <Image source={require('./../../../assets/google.png')}
            style={{width: 30, height: 30}}/>
            <Text>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 1000,
    height: "100%",
    
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    backgroundColor: Colors.BACKGROUND_TRANSP,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  login: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    padding: 10,
    paddingHorizontal: 55,
    borderRadius: 99,
    position: 'absolute',
    bottom: 150
  }
});
