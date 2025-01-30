import React from 'react';
import {StyleSheet, TextInput, View , Image} from 'react-native';
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
      <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
    <Image
    source={{
      uri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    }}
    style={{width: 50, height: 50,
      alignItems: 'left', padding: 20, flexGrow: 3, marginTop: 20}}
    />
  
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={name}
        />
          </View>
      <View style={styles.inputContainer}>
    <Image
    source={{
      uri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    }}
    style={{width: 50, height: 50,
      alignItems: 'left', padding: 20, flexGrow: 3, marginTop: 20}}
    />    
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAge}
          value={age}
        />
</View>
<View style={styles.inputContainer}>
 <Image
    source={{
      uri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    }}
    style={{width: 50, height: 50,
      alignItems: 'left', padding: 20, flexGrow: 3, marginTop: 20}}
    />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextAddress}
          value={address}
        />
        </View>
        <View style={styles.inputContainer}>
         <Image
    source={{
      uri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    }}
    style={{width: 50, height: 50,
      alignItems: 'right', padding: 20, flexGrow: 3, marginTop: 20, }}
    />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextSchool}
          value={school}
        /></View>
<View style={styles.inputContainer}>
 <Image
    source={{
      uri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    }}
    style={{width: 50, height: 50,
      alignItems: 'left', padding: 20, flexGrow: 3, marginTop: 20}}
    />
         <TextInput
          style={styles.input}
          onChangeText={onChangeTextCourse}
          value={course}
        />
        </View>

        <View style={styles.inputContainer}>
 <Image
    source={{
      uri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    }}
    style={{width: 50, height: 50,
      alignItems: 'left', padding: 20, flexGrow: 3, marginTop: 20}}
    />
         <TextInput
          style={styles.input}
          onChangeText={onChangeTextEmail}
          value={email}
        />
        </View>

         <View style={styles.inputContainer}>
 <Image
    source={{
      uri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    }}
    style={{width: 50, height: 50,
      alignItems: 'left', padding: 20, flexGrow: 3, marginTop: 20}}
    />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextContact}
          value={contact}
        />
        </View>

        
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
    margin: 20,
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
  inputContainer:{
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 50, height: 40,
  }
});

export default TextInputExample;