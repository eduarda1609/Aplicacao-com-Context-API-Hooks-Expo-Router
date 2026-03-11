import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({
 children,
}: {
 children: React.ReactNode;
}) {
 const { user, isLoading } = useAuth();

 if (isLoading) {
 return (
 <View style={{ flex: 1, justifyContent: "center" }}>
 <ActivityIndicator size="large" />
 </View>
 );
 }

 return user ? children : <Redirect href="/login" />;
}