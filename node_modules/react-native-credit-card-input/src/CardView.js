import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

import defaultIcons from "./Icons";
import FlipCard from "react-native-flip-card";

const BASE_SIZE = { width: 300, height: 190 };

const s = StyleSheet.create({
  cardContainer: {},
  cardFace: {},
  icon: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
  baseText: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
  },
  placeholder: {
    //color: "rgba(255, 255, 255, 0.5)",
  },
  focused: {
    fontWeight: "bold",
  },
  number: {
    fontSize: 21,
    position: "absolute",
    top: 95,
    left: 28,
  },
  name: {
    fontSize: 16,
    position: "absolute",
    bottom: 20,
    left: 25,
    right: 100,
  },
  expiryLabel: {
    fontSize: 9,
    position: "absolute",
    bottom: 40,
    left: 218,
  },
  expiry: {
    fontSize: 16,
    position: "absolute",
    bottom: 20,
    left: 220,
  },
  amexCVC: {
    fontSize: 16,
    position: "absolute",
    top: 73,
    right: 30,
  },
  cvc: {
    fontSize: 16,
    position: "absolute",
    top: 80,
    right: 30,
  },
  cardFrontStyle:{
    borderRadius: 10
  },
  cardBacktStyleBlack:{
    height: 40,
    width: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    top: 30
  },
  cardBacktStyleWhite:{
    height: 30,
    width: 40,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 75,
    right: 65
  },
  cardBacktStyle:{
    borderRadius: 10
  },
  titleCard:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: 20,
    left: 30
  }
});

export default class CardView extends Component {
  static propTypes = {
    focused: PropTypes.string,

    brand: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    expiry: PropTypes.string,
    cvc: PropTypes.string,
    placeholder: PropTypes.object,
    scale: PropTypes.number,
    fontFamily: PropTypes.string,
    customIcons: PropTypes.object,
  };

  static defaultProps = {
    name: "",
    placeholder: {
      number: "•••• •••• •••• ••••",
      name: "FULL NAME",
      expiry: "••/••••",
      cvc: "•••",
    },
    scale: 1,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
  };

  render() {
    const { focused,
      brand, name, number, expiry, cvc, customIcons,
      placeholder, scale, fontFamily, frontCardColor, backCardColor, textCardColor, focusCardColor} = this.props;

    const Icons = { ...defaultIcons, ...customIcons };
    const isAmex = brand === "american-express";
    const shouldFlip = !isAmex && focused === "cvc";

    const containerSize = { ...BASE_SIZE, height: BASE_SIZE.height * scale };
    const transform = { transform: [
      { scale },
      { translateY: ((BASE_SIZE.height * (scale - 1) / 2)) },
    ] };

    return (
      <View style={[s.cardContainer, containerSize]}>
        <FlipCard style={{ borderWidth: 0 }}
          flipHorizontal
          flipVertical={false}
          friction={10}
          perspective={2000}
          clickable={false}
          flip={shouldFlip}>
          <View style={[BASE_SIZE, s.cardFace, transform, s.cardFrontStyle, {
            backgroundColor: frontCardColor
          }]}>
              <Text style={[s.titleCard, { color: textCardColor}]}>CARTÃO DE CRÉDITO</Text>
              <Image style={[s.icon]}
                source={Icons[brand]} />
              <Text style={[s.baseText, { fontFamily, color: textCardColor}, s.number, !number && s.placeholder, focused === "number" && { color: focusCardColor, fontWeight: 'bold'}]}>
                { !number ? placeholder.number : number }
              </Text>
              <Text style={[s.baseText, { fontFamily, color: textCardColor}, s.name, !name && s.placeholder, focused === "name" && { color: focusCardColor, fontWeight: 'bold'}]}
                numberOfLines={1}>
                { !name ? 'NOME COMPLETO' : name.toUpperCase() }
              </Text>
              <Text style={[s.baseText, { fontFamily, color: textCardColor}, s.expiryLabel, s.placeholder, focused === "expiry" && { color: focusCardColor, fontWeight: 'bold'}]}>
                MÊS/ANO
              </Text>
              <Text style={[s.baseText, { fontFamily, color: textCardColor}, s.expiry, !expiry && s.placeholder, focused === "expiry" && { color: focusCardColor, fontWeight: 'bold'}]}>
                { !expiry ? placeholder.expiry : expiry }
              </Text>
              { isAmex &&
                  <Text style={[s.baseText, { fontFamily, color: textCardColor}, s.amexCVC, !cvc && s.placeholder, focused === "cvc" && { color: focusCardColor, fontWeight: 'bold'}]}>
                    { !cvc ? placeholder.cvc : cvc }
                  </Text> }
          </View>
          <View style={[BASE_SIZE, s.cardFace, transform, s.cardBacktStyle, {
            backgroundColor: backCardColor
          }]}>
              <View style={s.cardBacktStyleBlack}/>
              <View style={s.cardBacktStyleWhite}/>
              <Text style={[s.baseText, s.cvc, !cvc && s.placeholder, focused === "cvc" && { color: focusCardColor, fontWeight: 'bold'}]}>
                { !cvc ? placeholder.cvc : cvc }
              </Text>
          </View>
        </FlipCard>
      </View>
    );
  }
}
