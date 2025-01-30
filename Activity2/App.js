import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  
  const [name, onChangeTextName] = React.useState('Name: ');
  const [age, onChangeTextAge] = React.useState('Age: ');
  const [address, onChangeTextAddress] = React.useState('Address: ');
  const [school, onChangeTextSchool] = React.useState('School: ');
   const [course, onChangeTextCourse] = React.useState('Course: ');
   const [email, onChangeTextEmail] = React.useState('Email: ');
    const [contact, onChangeTextContact] = React.useState('Contact: ');
  const [aboutMe, onChangeTextAboutMe] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAge}
          value={age}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextSchool}
          value={school}
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeTextCourse}
          value={course}
        />
         <TextInput
          style={styles.input}
          onChangeText={onChangeTextEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextContact}
          value={contact}
        />
        <TextInput
        
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeTextAboutMe(text)}
          value={aboutMe}
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderBottomColor: '#0000',
    borderBottomWidth: 2,
  },
  textInput: {
    padding: 10,
  },
});

export default TextInputExample;