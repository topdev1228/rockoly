/** @format */

import {StyleSheet, Dimensions, Platform} from 'react-native'
import {Theme} from '@theme'

const {width, height} = Dimensions.get('window')
export const SCREEN_WIDTH = Dimensions.get('window').width - 100
export const SCREEN_HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  ...Theme.CommonStyle,
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatlist: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  more: {
    width,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },

  headerLabel: {
    color: '#333',
    fontSize: 28,
    marginBottom: 0,
    paddingTop: 30,
    marginLeft: 22,
  },
  parentItem: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0',
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    display: 'flex',
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  infoView: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
  },
  nameViewWrap: {
    width: SCREEN_WIDTH,
  },
  nameView: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    flexWrap: 'wrap',
  },
  userImage: {
    width: '100%',
    height: 80,
    overflow: 'hidden',
    paddingLeft: 10,
    borderRadius: 5,
  },
  nameSpacing: {
    flex: 2.3,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 5,
    flexDirection: 'column',
  },
  nameStyling: {
    color: 'black',
    // marginLeft: 10,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
  },
  messageDescription: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 5,
    marginRight: 5,
  },

  dateView: {
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  dateText: {
    fontSize: 14,
    // color: Colors.default,
    marginTop: 10,
  },

  searchLineStyle: {
    borderWidth: 0.5,
    // borderColor: Colors.lineColor,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  tabView: {
    // minHeight: height / 2,
    marginTop: 10,
    flex: 1,
  },
  tabItem: {
    flex: 0.32,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  tabButton: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  description: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    alignItems: 'flex-start',
  },
  primaryBtn: {
    backgroundColor: Theme.Colors.primary,
    marginTop: 5,
    // borderRadius: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // elevation: 1,
    minHeight: 20,
    padding: 3,
    flexDirection: 'row',
  },
  rejectBtn: {
    backgroundColor: '#FC7079',
    marginTop: 5,
    // borderRadius: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // elevation: 1,

    minHeight: 20,
    padding: 3,
    flexDirection: 'row',
  },
  rejectedView: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'red',
  },
  noDataView: {flex: 1, justifyContent: 'center', alignSelf: 'center'},
  noDataText: {textAlign: 'center'},
  textStyle: {
    color: Theme.Colors.primary,
  },
  fialedtextStyle: {
    color: 'red',
  },
  closeIcon: {
    width: 20,
    height: 18,
    backgroundColor: Theme.Colors.error,
    borderRadius: 50,
    borderWidth: 1,
  },
  tickIcon: {
    width: 20,
    height: 18,
    backgroundColor: Theme.Colors.primary,
    borderRadius: 50,
    borderWidth: 1,
  },
  successBtn: {
    width: 55,
    height: 35,
    backgroundColor: Theme.Colors.primary,
    borderColor: Theme.Colors.primary,
    marginVertical: 5,
  },
  cancelBtn: {
    width: 55,
    height: 35,
    backgroundColor: Theme.Colors.error,
    borderColor: Theme.Colors.error,
    marginVertical: 5,
  },
  scrollViewStyle: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  dateStyling: {
    paddingLeft: 5,
    // marginTop: 5,
    lineHeight: 22,
    fontSize: 14,
  },
  destext: {
    color: 'black',
    fontSize: 16,
    marginTop: 15,
  },
  bookingHeading: {
    fontSize: 16,
    color: 'white',
    padding: 5,
  },
  heading: {
    backgroundColor: Theme.Colors.primary,
  },
  acceptButton: {
    alignSelf: 'center',
    width: '40%',
    marginVertical: 5,
  },
  noView: {
    padding: 10,
  },
  modelView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    // paddingTop: '28%', // 83
    // paddingRight: 15,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: Theme.Colors.lightgrey,
    // backgroundColor: 'rgba(163,175,183, 0.5)',
    // backgroundColor: 'rgba(0,0,0, 0.2)',
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
  completeModelContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
  },
  contentTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  okBtn: {
    backgroundColor: Theme.Colors.primary,
    marginTop: 5,
    // borderRadius: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // elevation: 1,
    minHeight: 20,
    padding: 3,
    borderRadius: 0,
    flexDirection: 'row',
  },
  dateViewStyle: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  locationText: {
    // backgroundColor: Theme.Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    // marginTop: 40,
    color: Theme.Colors.white,
  },
  locationBtn: {
    backgroundColor: Theme.Colors.primary,
    width: '30%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    // marginBottom: 40,
    // marginTop: 40,
    marginVertical: 5,
  },
  itemHourText: {
    // color: 'black',
    fontSize: 14,
    lineHeight: 22,
  },
  timeTextSelect: {
    color: Theme.Colors.primary,
    fontSize: 14,
    textAlign: 'center',
  },
  timeinputStyle: {
    height: 40,
    width: 'auto',
    paddingHorizontal: 7,
    alignSelf: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
  },
})
export default styles
