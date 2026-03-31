import { StyleSheet } from "react-native";

// Estilos de Login

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  inputHalf: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "48%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    fontSize: 14,
  },
  input: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    fontSize: 14,
  },
  button: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
