import { Text, View, ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 5 }}>Загрузка...</Text>
    </View>
  );
}
