import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import parametriceText from '../parametrice/en';
import styles from './styles/home';
import { UserContext } from '../Components/hooks/user';

const Home = ({navigation}:any) => {
  const userContext = useContext(UserContext);
  const { userLoged } = userContext;

  const identtityBanner = () => {
    return (
      <View style={styles.indentityArea}>
        <View style={styles.titleArea}>
          <Text style={styles.titleidentity}>verify your indentity</Text>
          <Icon name="user" size={30} color="white" />
        </View>
        <Text style={styles.containedtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dignissimos totam perferendis assumenda. Necessitatibus quisquam, itaque maxime enim rerum facere quam exercitationem aut dolor, sequi sed voluptatem possimus omnis dolorem.</Text>
        <Button icon="arrow-right" mode="text" textColor='white' onPress={() => navigation.navigate("Login")} contentStyle={styles.buttonContent}>{parametriceText.start}</Button>
      </View>
    )
  }


  const acntionsList = () => {
    return (
      <View style={styles.actionListArea}>
        <Button icon="plus" mode="elevated" contentStyle={styles.buttonActionContent} style={styles.buttonAction} onPress={() => false}>{parametriceText.buy}</Button>
        <Button icon="minus" mode="elevated" contentStyle={styles.buttonActionContent} style={styles.buttonAction} onPress={() => false}>{parametriceText.send}</Button>
        <Button icon="arrow-down-right" mode="elevated" contentStyle={styles.buttonActionContent} style={styles.buttonAction} onPress={() => false}>{parametriceText.deposit}</Button>
        <Button icon="arrow-up-left" mode="elevated" contentStyle={styles.buttonActionContent} style={styles.buttonAction} onPress={() => false}>{parametriceText.withdrawals}</Button>
        <Button icon="arrow-down" mode="elevated" contentStyle={styles.buttonActionContent} style={styles.buttonAction} onPress={() => false}>{parametriceText.convert}</Button>
      </View>
    )
  }



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.continedArea}>
          <Text style={styles.header}>Balance</Text>
          <Text style={styles.balanceText}>= 15.600.00 cop</Text>
          {!userLoged && identtityBanner()}
          {acntionsList()}
        </View>
      </View>
    </SafeAreaView>

  );
}


export default Home;