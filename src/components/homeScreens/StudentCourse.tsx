/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight, faAssistiveListeningSystems, faBell, faBookOpenReader, faBuildingColumns, faCalculator, faChalkboardUser, faEyeSlash, faFileCircleCheck, faFileCircleQuestion, faFlask, faForward, faGamepad, faGaugeMed, faHome, faImage, faTriangleExclamation, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get("window");

const StudentCourse = ({navigation}: any): JSX.Element => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
        >
            <FontAwesomeIcon icon={faArrowLeft} size={19} style={styles.backArrow}/>
        </TouchableOpacity>
      <Text style={styles.pageTitle}>Courses</Text>
      </View>
      <Text style={styles.subTitle}>These are list of Courses you would be offering</Text>
      <View style={styles.cardContainer}>
       <View style={styles.subject}>
        <View style={styles.English}>
          <View style={styles.subjectText}>
              <FontAwesomeIcon icon={faChalkboardUser} size={32}/>
             <Text>English</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
        <View style={styles.chemistry}>
          <View style={styles.subjectText}>
            <FontAwesomeIcon icon={faFlask} size={30}/>
            <Text>Chemistry</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
        <View style={styles.mathematics}>
          <View style={styles.subjectText}>
            <FontAwesomeIcon icon={faCalculator} size={30}/>
            <Text>Mathematics</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
      </View>
      </View>
        <View style={styles.cardContainer}>
       <View style={styles.subject}>
        <View style={styles.English}>
          <View style={styles.subjectText}>
              <FontAwesomeIcon icon={faChalkboardUser} size={32}/>
             <Text>English</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
        <View style={styles.chemistry}>
          <View style={styles.subjectText}>
            <FontAwesomeIcon icon={faFlask} size={30}/>
            <Text>Chemistry</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
        <View style={styles.mathematics}>
          <View style={styles.subjectText}>
            <FontAwesomeIcon icon={faCalculator} size={30}/>
            <Text>Mathematics</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
      </View>
      </View>
      <View style={styles.cardContainer}>
       <View style={styles.subject}>
        <View style={styles.English}>
          <View style={styles.subjectText}>
              <FontAwesomeIcon icon={faChalkboardUser} size={32}/>
             <Text>English</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
        <View style={styles.chemistry}>
          <View style={styles.subjectText}>
            <FontAwesomeIcon icon={faFlask} size={30}/>
            <Text>Chemistry</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
        <View style={styles.mathematics}>
          <View style={styles.subjectText}>
            <FontAwesomeIcon icon={faCalculator} size={30}/>
            <Text>Mathematics</Text>
          </View>
          <View style={styles.viewDetails}>
            <Text>View details</Text>
            <FontAwesomeIcon icon={faArrowRight} size={15}/>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 53,
  },
  backArrow: {
   marginLeft: 13,
  },
  pageTitle: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 13,
  },
  cardContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // marginTop: 18,
  },
   course: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  subject: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  English: {
    borderRadius: 15,
    backgroundColor: 'white',
    width: 110,
    height: 100,
    justifyContent: 'center',
  },
 subjectText: {
    marginLeft: 'auto',
   marginRight: 'auto',
    alignItems: 'center',
  },
  viewDetails: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  chemistry: {
    borderRadius: 15,
    backgroundColor: '#F1E0C3',
    width: 110,
    height: 100,
    justifyContent: 'center',
  },
  mathematics: {
    borderRadius: 15,
    backgroundColor: '#B6B6B6',
    width: 110,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StudentCourse;
