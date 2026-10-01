import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-semibold text-black dark:text-white">opencode test</Text>
      <Text className="mt-2 text-base text-neutral-500">Counter: {count}</Text>
      <TouchableOpacity
        className="mt-4 px-6 py-3 bg-blue-600 rounded-lg active:bg-blue-700"
        onPress={() => setCount(c => c + 1)}
      >
        <Text className="text-white font-semibold text-lg">Tap me</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
