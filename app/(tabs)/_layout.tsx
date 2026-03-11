import { Stack } from "expo-router";
import PrivateRoute from "../../components/PrivateRoute";

export default function TabsLayout() {
  return (
    <PrivateRoute>
      <Stack />
    </PrivateRoute>
  );
}
