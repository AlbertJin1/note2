import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';

const NotePage = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const saveNote = () => {
    console.log('Note saved:', note);
    setNotes([...notes, note]);
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>

      {/* DISPLAY OUTPUT SA PAG ENTER SA NOTE */}
      <ScrollView style={styles.notesList} showsVerticalScrollIndicator={false}>
        {notes.map((item, index) => (
          <View key={index} style={styles.noteWrapper}>
            <Text style={styles.savedNote}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* SA KATONG ENTER YOUR NOTE NA CODE s */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Create a Note"
          value={note}
          onChangeText={setNote}
          multiline={true}
          editable={true}
        />

        {/* SENT BUTTON */}
        <TouchableOpacity onPress={note ? saveNote : () => { }} disabled={!note}>
          <Image source={require('../assets/sent.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

//DESIGN 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2B2B',
    flex: 1,
    padding: 20,
  },
  //TITLE WHICH IS ANG NOTES
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  // FOR BORDER
  input: {
    borderWidth: 1,
    borderColor: '#8B8888',
    backgroundColor: '#8B8888',
    padding: 10,
    flex: 1,
    color: 'white',
  },

  // DIRA ANG OUTPUT PAG E CLICK NA ANG INPUT TEXT
  savedNote: {
    fontSize: 18,
    backgroundColor: '#8B8888',
    borderRadius: 8,
    padding: 5,
    marginTop: 10,
  },
  noteWrapper: {
    borderColor: '#8B8888', // Border color
    padding: 10,
    marginTop: 10,
  },
  notesList: {
    width: '100%',
    marginTop: 20,
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default NotePage;
