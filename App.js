import { StatusBar, SafeAreaView, View } from "react-native"
import React from "react"
import Cesta from "./src/telas/cesta"
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  })

  if (!fontCarregada) {
    return <View /> // se a fonte nao for carregda vai carregar uma view em branco!
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  )
}
