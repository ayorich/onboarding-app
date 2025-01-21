import { Button, Text } from "@rneui/themed";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Item = ({ address, name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.address}>{address?.city}</Text>
  </View>
);

export function UsersScreenComponent({ users, loadUsers }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={users}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
        />

        <Button size="lg" onPress={loadUsers}>
          Refetch Users
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
  },
  text: {
    lineHeight: 32,
    textAlign: "center",
    color: "black",
    fontSize: 28,
  },
  name: {
    color: "blue",
    fontWeight: "bold",
    paddingLeft: 8,
    display: "inline-block",
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "green",
    flex: 1,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
  },
  address: {
    fontSize: 18,
  },
});
