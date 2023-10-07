/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faAssistiveListeningSystems, faBell, faBookOpenReader, faBuildingColumns, faCalculator, faChalkboardUser, faEyeSlash, faFileCircleCheck, faFileCircleQuestion, faFlask, faForward, faGamepad, faGaugeMed, faHome, faImage, faTriangleExclamation, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get("window");

const HomeScreen = ({navigation}: any): JSX.Element => {
  return (
    <View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcom, </Text>
        <Text style={styles.subWelcomeText}>Jude Vale</Text>
        <FontAwesomeIcon icon={faBell} size={20}/>
      </View>
      <View style={styles.header}>
        <View style={styles.headerText}>
           <Text style={styles.text}>Learning just got</Text>
           <Text style={styles.text}>more interesting</Text>
        </View>
        <View style={styles.headerImage}>
          <Image
        source={require('../../../resource/new/girlReading.png')}
        style={styles.mainImage}
      />
        </View>
      </View>
      <View style={styles.course}>
        <Text style={{ color: 'black' }}>Courses</Text>
        <TouchableOpacity>
          onPress={() => navigation.navigate('SecondScreen')}>
           <Text style={{color: '#D6AB66'}}>View all</Text>
        </TouchableOpacity>
      </View>
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
      <View>
        <Text style={styles.activities}>Activities</Text>
      </View>
      <View style={styles.assignment}>
        <View style={styles.activitiesFont}>
          <FontAwesomeIcon icon={faBookOpenReader} size={20}/>
        </View>
        <View>
          <Text style={styles.activitiesText}>Assignments</Text>
        </View>
        <View style={styles.activitiesArrow}>
          <FontAwesomeIcon icon={faArrowRight} size={20}/>
        </View>
      </View>
       <View style={styles.assignment}>
        <View style={styles.activitiesFont}>
          <FontAwesomeIcon icon={faBuildingColumns} size={20}/>
        </View>
        <View>
          <Text style={styles.activitiesText}>Library</Text>
        </View>
        <View style={styles.activitiesArrow}>
          <FontAwesomeIcon icon={faArrowRight} size={20}/>
        </View>
      </View>
      <View style={styles.assignment}>
        <View style={styles.activitiesFont}>
          <FontAwesomeIcon icon={faFileCircleQuestion} size={20}/>
        </View>
        <View>
          <Text style={styles.activitiesText}>Examination</Text>
        </View>
        <View style={styles.activitiesArrow}>
          <FontAwesomeIcon icon={faArrowRight} size={20}/>
        </View>
      </View>
      <View style={styles.assignment}>
        <View style={styles.activitiesFont}>
          <FontAwesomeIcon icon={faGamepad} size={20}/>
        </View>
        <View>
          <Text style={styles.activitiesText}>   Games   </Text>
        </View>
        <View style={styles.activitiesArrow}>
          <FontAwesomeIcon icon={faArrowRight} size={20}/>
        </View>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.navigations}>
        <View style={styles.navigationHome}>
          <FontAwesomeIcon icon={faHome} size={25} />
          <Text>Home</Text>
        </View>
        <View style={styles.navigationGroup}>
          <FontAwesomeIcon icon={faUsers} size={25} />
          <Text>Group</Text>
        </View>
        <View style={styles.navigationUser}>
          <FontAwesomeIcon icon={faUser} size={25} />
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    flexDirection: 'row',
    paddingTop: 29,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 17,
  },
  subWelcomeText: {
   marginLeft: -190,
    fontSize: 17,
    fontWeight:'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 20,
    borderRadius: 20,
    backgroundColor: '#FAE7C2',
    borderColor: '#FAE7C2',
    width: 390,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  headerText: {
    flexDirection: 'column',
    width: (40 / 100) * width,
  },
  headerImage: {
    // borderRadius: 50,
    alignItems: 'center',
    width: (60 / 100) * width,
  },
  text: {
    fontSize: 20,
    color: '#ED9412',
  },
  mainImage: {
    width: 150,
    height: 100,
    // borderRadius: 50,
    // padding: 50,
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
    justifyContent: 'space-around'
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
  activities: {
    margin: 15,
    fontSize: 13,
  },
  assignment: {
    marginTop: -11,
    marginBottom: 17,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 55,
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 390,
  },
  activitiesFont: {
    backgroundColor: '#E2DEDE',
    borderRadius: 4,
    height: 38,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activitiesText: {
    fontWeight: 'bold',
    color: 'black',
  },
  activitiesArrow: {
    backgroundColor: '#D39B3F',
    borderRadius: 20,
    height: 38,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigations: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  navigationHome: {
    alignItems: 'center',
  },

  navigationGroup: {
    alignItems: 'center',
  },

  navigationUser: {
    alignItems: 'center',
  },
});

export default HomeScreen;
