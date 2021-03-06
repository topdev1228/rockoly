/** @format */

import React, {PureComponent} from 'react'
import {View, ScrollView, Platform} from 'react-native'
import {
  Container,
  Item,
  Textarea,
  Text,
  Input,
  Content,
  Form,
  CheckBox,
  ListItem,
  Body,
  Icon,
  Left,
  Button,
  Label,
  Toast,
} from 'native-base'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import {CommonButton, Spinner} from '@components'
import {AuthContext, CustomerPreferenceService, CUSTOMER_PREFERNCE_EVENT} from '@services'
import {Languages} from '@translations'
import {Theme} from '@theme'
import styles from './styles'

export default class Dietary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dietary: [],
      newDietry: '',
      dietryTypeId: [],
      isLoading: false,
    }
  }

  async componentDidMount() {
    CustomerPreferenceService.on(CUSTOMER_PREFERNCE_EVENT.DIETRY, this.dietaryList)
    this.onLoadData()
    const {getProfile} = this.context
    const profile = await getProfile()
    console.log('Dietary prefernces', profile)
    if (profile && profile.customerPreferenceProfilesByCustomerId) {
      if (
        profile.customerPreferenceProfilesByCustomerId &&
        profile.customerPreferenceProfilesByCustomerId.nodes.length > 0
      ) {
        const preferences = profile.customerPreferenceProfilesByCustomerId.nodes[0]
        this.setState(
          {
            newDietry: preferences.customerOtherDietaryRestrictionsTypes
              ? JSON.parse(preferences.customerOtherDietaryRestrictionsTypes)
              : '',
            newAllergies: preferences.customerOtherAllergyTypes
              ? JSON.parse(preferences.customerOtherAllergyTypes)
              : '',
            dietryTypeId: preferences.customerDietaryRestrictionsTypeId,
            allergyTypeId: preferences.customerAllergyTypeId,
          },
          () => {}
        )
      }
    }
  }

  componentWillUnmount() {
    CustomerPreferenceService.off(CUSTOMER_PREFERNCE_EVENT.DIETRY, this.dietaryList)
  }

  getDietary = () => {
    const {dietryTypeId, newDietry} = this.state
    return {dietryTypeId, newDietry}
  }

  onLoadData = async () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        CustomerPreferenceService.getDietryData()
      }
    )
  }

  dietaryList = ({dietryData}) => {
    this.setState({isLoading: false})
    const temp = []
    dietryData.map((item, value) => {
      const val = {
        label: item.dietaryRestrictionsTypeDesc,
        id: item.dietaryRestrictionsTypeId,
        checked: false,
      }
      temp.push(val)
    })
    this.setState(
      {
        dietary: temp,
      },
      () => {
        this.loadDietaryData()
      }
    )
  }

  loadDietaryData = async () => {
    const {dietary} = this.state
    const {getProfile} = this.context
    const profile = await getProfile()
    console.log('dietary prefernces', profile)
    if (profile && profile.customerPreferenceProfilesByCustomerId) {
      if (
        profile.customerPreferenceProfilesByCustomerId &&
        profile.customerPreferenceProfilesByCustomerId.nodes.length > 0
      ) {
        const preferences = profile.customerPreferenceProfilesByCustomerId.nodes[0]
        const dietaryType = dietary

        const temp = []
        dietaryType.map((res, index) => {
          console.log('res', res)
          const obj = {
            label: res.label,
            id: res.id,
            checked:
              preferences && preferences.customerDietaryRestrictionsTypeId
                ? !preferences.customerDietaryRestrictionsTypeId.every(item => item !== res.id)
                : false,
          }
          temp.push(obj)
        })

        console.log('dietaryType', temp)
        this.setState({
          dietary: temp,
        })
      }
    }
  }

  onDietryItemPress = (index, checked) => {
    const {dietary} = this.state
    const temp = dietary

    if (temp[index]) {
      temp[index].checked = !checked
    }

    this.setState(
      {
        dietary: temp,
      },
      async () => {
        const val = []
        await dietary.map((itemVal, key) => {
          if (itemVal.checked === true) {
            val.push(itemVal.id)
          }
        })
        this.setState({
          dietryTypeId: val,
        })
      }
    )
  }

  onAddNewDietry = value => {
    this.setState({
      newDietry: value,
    })
  }

  onSave = () => {
    const {dietryTypeId, newDietry, allergyTypeId, newAllergies} = this.state
    const {onSaveCallBack, getValue, hideSave} = this.props
    const {currentUser} = this.context
    console.log('currentUser', currentUser)
    if (currentUser !== null && currentUser !== undefined) {
      const obj = {
        customerPreferenceId: currentUser.customerPreferenceId,
        customerAllergyTypeId: allergyTypeId,
        customerOtherAllergyTypes: newAllergies ? JSON.stringify(newAllergies) : null,
        customerDietaryRestrictionsTypeId:
          dietryTypeId && dietryTypeId.length > 0 ? dietryTypeId : null,
        customerOtherDietaryRestrictionsTypes: newDietry ? JSON.stringify(newDietry) : null,
      }
      console.log('onSave obj', obj)
      CustomerPreferenceService.updatePreferencesData(obj)
        .then(data => {
          console.log('preferences data', data)
          if (onSaveCallBack) {
            onSaveCallBack()
          }

          if (getValue) {
            getValue(obj)
          }

          if (!hideSave) {
            Toast.show({
              duration: 5000,
              text: Languages.customerPreference.toast_messages.dietaryMessage,
            })
          }
        })
        .catch(error => {
          console.log('preferences error', error)
        })
    }
  }

  render() {
    const {dietryTypeId, newDietry, dietary, isLoading} = this.state
    const {hideSave} = this.props
    if (isLoading) {
      return (
        <View style={styles.alignScreenCenter}>
          <Spinner mode="full" animating />
        </View>
      )
    }
    return (
      <ScrollView style={{marginHorizontal: 10, paddingVertical: 5, flex: 1}}>
        <Label style={styles.allergiesLabel}>Select your dietary restrictions.</Label>
        <View>
          {dietary &&
            dietary.length > 0 &&
            dietary.map((item, index) => {
              return (
                <ListItem style={{borderBottomWidth: 0}}>
                  <CheckBox
                    checked={item.checked}
                    color={Theme.Colors.primary}
                    onPress={() => this.onDietryItemPress(index, item.checked)}
                  />
                  <Body style={{marginLeft: 5}}>
                    <Text>{item.label}</Text>
                  </Body>
                </ListItem>
              )
            })}
        </View>

        <View style={styles.textAreaContent}>
          <Textarea
            style={styles.textAreaStyle}
            rowSpan={5}
            bordered
            value={newDietry}
            onChangeText={value => this.onAddNewDietry(value)}
            placeholder="If applicable, please list additional dietary restrictions."
          />
        </View>

        <CommonButton
          btnText={
            hideSave
              ? Languages.customerPreference.labels.next
              : Languages.customerPreference.labels.save
          }
          containerStyle={styles.saveBtn}
          onPress={this.onSave}
        />
        {Platform.OS === 'ios' && <KeyboardSpacer />}
      </ScrollView>
    )
  }
}

Dietary.contextType = AuthContext
