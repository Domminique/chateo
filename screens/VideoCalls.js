// import { SafeAreaView, View, Button, Text } from "react-native";
// import { Video } from "@signalwire-community/react-native";
// import { useMembers, useStatus } from "@signalwire-community/react";
// import { useState, useCallback } from "react";

// const TOKEN = "eyJ0eXAiOiJWUlQiLCJjaCI6InJlbGF5LnNpZ25hbHdpcmUuY29tIiwiYWxnIjoiSFM1MTIifQ.eyJpYXQiOjE2NjAyODA0ODUsImp0aSI6ImE4NTc5MzU2LTc0NGItNGM5OS05NWQ2LTZhMTY4YmEyNTFhZCIsInN1YiI6IjUwNmNlYTMzLWViNDctNGI1Ni04MmIwLWQzYzVhZmFmMzlkNCIsInUiOiJxdWlja3Rva2VudXNlciIsImphIjoibWVtYmVyIiwiciI6InJvb20iLCJzIjpbInJvb20ubGlzdF9hdmFpbGFibGVfbGF5b3V0cyIsInJvb20uc2VsZi5hdWRpb19tdXRlIiwicm9vbS5zZWxmLmF1ZGlvX3VubXV0ZSIsInJvb20uc2VsZi52aWRlb19tdXRlIiwicm9vbS5zZWxmLnZpZGVvX3VubXV0ZSIsInJvb20uc2VsZi5kZWFmIiwicm9vbS5zZWxmLnVuZGVhZiIsInJvb20uc2VsZi5zZXRfaW5wdXRfdm9sdW1lIiwicm9vbS5zZWxmLnNldF9vdXRwdXRfdm9sdW1lIiwicm9vbS5zZWxmLnNldF9pbnB1dF9zZW5zaXRpdml0eSIsInJvb20uaGlkZV92aWRlb19tdXRlZCIsInJvb20uc2hvd192aWRlb19tdXRlZCJdLCJhY3IiOnRydWUsIm1hIjoiYWxsIiwiZXJwIjp0cnVlLCJtdGEiOnt9LCJybXRhIjp7fX0.ke-qPuTmp6tUOgdHMHv_i82PjuWQgr8lsX_VRS_Krq4nwYt3REGhSn1p68N3gXTXxp7DGd6dIJIzJwjVZvdDmA";


// export default function DemoVideo() {
//   const [roomSession, setRoomSession] = useState(null);
//   const onRoomReady = useCallback((rs) => setRoomSession(rs), []);

//   const { self, members } = useMembers(roomSession);
//   const { active } = useStatus(roomSession);

//   return (
//     <SafeAreaView>
//       <Video token={TOKEN} onRoomReady={onRoomReady} />
     
//       {/* Populating controls for self */}
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//         }}
//       >
//         {["audio", "video", "speaker"].map((io) => (
//           <Button
//             onPress={self?.[io].toggle}
//             disabled={!active}
//             title={`${self?.[io].muted ? "Unmute " : "Mute "} ${io}`}
//           />
//         ))}
//       </View>

//       {/* Displaying member list */}
//       <Text style={{ fontWeight: "bold" }}>Members:</Text>

//       {members.map((member) => (
//         <View>
//           <Text>{member.name}</Text>
//           <Text>{member.talking && "🗣"}</Text>
//         </View>
//       ))}
//     </SafeAreaView>
//   );
// }


import { View, Text } from 'react-native'
import React from 'react'

const VideoCalls = () => {
  return (
    <View>
      <Text>VideoCalls</Text>
    </View>
  )
}

export default VideoCalls