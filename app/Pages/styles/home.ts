import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  continedArea: {
    backgroundColor: '#E8E8E8',
    width: '98%',
    height: '98%',
    borderRadius: 10,
    padding: 10,
  },
  balanceText: {
    fontSize: 30,
    color: 'black',
    backgroundColor: '#D6D6D6',
    borderRadius: 20,
    fontWeight: 'bold',
    padding: 20,
  },

  buttonContent: {
    flexDirection: 'row-reverse',
    fontSize: 27,
  },
  indentityArea: {
    backgroundColor: '#2A2A2A',
    marginTop: 20,
    borderRadius: 15,
  },
  titleArea: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
  },
  titleidentity: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: 10,
  },
  containedtext: {
    color: 'white',
    padding: 20,
  },
  actionListArea: {
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonAction: {
    marginBottom: 20,
  },
  buttonActionContent: {
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 10,
    height: 70,
  },
});

export default styles;
