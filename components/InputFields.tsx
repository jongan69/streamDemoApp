import React from 'react';
import { TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import { View, Text } from './Themed';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText
}) {
  const color = useColorScheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: color === 'dark' ? '#FFF' : 'black',
        backgroundColor: color === 'dark' ? '#FFF' : '#FFF',
        borderRadius: 20,
        padding: 10,
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholderTextColor={color === 'dark' ? 'black' : 'gray'}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholderTextColor={color === 'dark' ? 'black' : 'gray'}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          value={value}
          onChangeText={onChangeText}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: 'skyblue', fontWeight: '700' }}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}