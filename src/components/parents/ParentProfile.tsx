import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../../helpers/ParentContainer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { PlusCircleIcon, PlusIcon, XCircleIcon } from "react-native-heroicons/outline";
import { CameraIcon, PencilIcon } from "react-native-heroicons/solid";

const ParentProfile = (): JSX.Element => {
	return (
		<ParentContainer containerStyle={styles.container}>
			<View style={styles.firstSession}>
				<View style={styles.intro}>
					<FontAwesomeIcon icon={faArrowLeft} size={19} />
					<Text style={styles.introText}>Parent Profile</Text>
				</View>
				<View style={styles.imageConatiner}>
					<Image source={require('../../../resources/ParentProfile.png')} style={styles.profilePicture} />
					<View style={styles.cameraWrapper}>
						<CameraIcon size={20} color={'white'} style={styles.camera} />
					</View>

				</View>
				<View style={styles.parentChildDetailsContainer}>
					<View style={styles.parentChildDetails}>
						<Text style={styles.ParentChildDetailText}>Name - </Text>
						<Text style={styles.ParentChildDetailTextTwo}>Mr Henry Vale</Text>
						<PencilIcon size={17} color={'#DD992E'} />
					</View>
					<View style={styles.parentChildDetails}>
						<Text style={styles.ParentChildDetailText}>Child's Name - </Text>
						<Text style={styles.ParentChildDetailTextTwo}>Jude Vale</Text>
					</View>
					<View style={styles.parentChildDetails}>
						<Text style={styles.ParentChildDetailText}>Class - </Text>
						<Text style={styles.ParentChildDetailTextTwo}>Jss3</Text>
					</View>
					<View style={styles.parentChildDetails}>
						<Text style={styles.ParentChildDetailText}>Session - </Text>
						<Text style={styles.ParentChildDetailTextTwo}> 2023/2024</Text>
					</View>
				</View>
			</View>
			<Text style={styles.children}>Children</Text>
			<View style={styles.childrenDetails}>
				<Text style={styles.childPlaceholder}>Name</Text>
				<Text style={styles.childName}>Mary Vale</Text>
				<XCircleIcon size={25} color={'#D39B3F'} />
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, }}>
				<View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }} />
			</View>
			<View style={styles.childrenDetails}>
				<Text style={styles.childPlaceholder}>Name</Text>
				<Text style={styles.childName}>Kelvin Vale</Text>
				<XCircleIcon size={25} color={'#D39B3F'} />
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, }}>
				<View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }} />
			</View>
			<View style={styles.add}>
				<View style={styles.iconWrapper}>
					<PlusIcon size={20} color={'black'} />
				</View>
				<Text style={styles.addText}>Add</Text>
			</View>
			<Text style={styles.bio}>Bio</Text>

			<View style={styles.parentDetails}>
				<Text style={styles.parentPlaceholder}>Name</Text>
				<Text style={styles.childName}>Mr Anthony Vale</Text>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, }}>
				<View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }} />
			</View>
			<View style={styles.parentDetails}>
				<Text style={styles.parentPlaceholder}>Guardian</Text>
				<Text style={styles.childName}>Father</Text>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, }}>
				<View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }} />
			</View>
			<View style={styles.parentDetails}>
				<Text style={styles.parentPlaceholder}>Email</Text>
				<Text style={styles.childName}>anthony@gmail.com</Text>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, }}>
				<View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }} />
			</View>
			<View style={styles.parentDetails}>
				<Text style={styles.parentPlaceholder}>Occupation</Text>
				<Text style={styles.childName}>Doctor</Text>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, }}>
				<View style={{ flex: 1, height: 1, backgroundColor: '#D9D9D9' }} />
			</View>
			<View style={styles.parentDetails}>
				<Text style={styles.parentPlaceholder}>Address</Text>
				<Text style={styles.childName}>509 Nerves New York, 10011, Nigeria</Text>
			</View>
		</ParentContainer>
	);
};

const styles = StyleSheet.create({
	container: {},
	firstSession: {
		backgroundColor: '#E2DEDE',
		paddingBottom: 15,
	},
	intro: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 25,
		marginLeft: 25,
		marginRight: 120,
	},
	introText: {
		color: 'black',
		fontSize: 20,
	},
	imageConatiner: {
		flexDirection: 'column',
		alignSelf: 'center',
		width: '10%',
		position: 'relative',
	},
	cameraWrapper: {
		borderRadius: 40,
		backgroundColor: '#DD992E',
		position: 'absolute',
		bottom: 0,
		padding: 5,
		marginLeft: 35,
	},
	camera: {
		// marginLeft: 30,
	},
	profilePicture: {
		alignSelf: 'center',
		marginTop: 20,
		width: 115,
		height: 115,
	},
	parentChildDetailsContainer: {
		marginLeft: 15,
		marginTop: 8,
	},
	parentChildDetails: {
		flexDirection: 'row',
		marginTop: 7,
	},
	ParentChildDetailText: {
		color: 'black',
		fontSize: 12,
		width: 85,
	},
	ParentChildDetailTextTwo: {
		fontSize: 13,
		marginLeft: 13,
		width: '50%',
	},
	children: {
		color: 'black',
		marginLeft: 15,
		marginTop: 10,
		fontSize: 15,
		fontWeight: '300',
	},
	childrenDetails: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
	},
	parentDetails: {
		flexDirection: 'row',
		gap: 50,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
	},
	parentPlaceholder: {
		fontSize: 13,
		width: 70,
	},
	childPlaceholder: {
		fontSize: 13,
	},
	childName: {
		fontSize: 13,
		color: 'black',
	},
	iconWrapper: {
		borderRadius: 30,
		backgroundColor: '#F3DFBD',
	},
	add: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 60,
		marginLeft: 15,
		marginTop: 5,
	},
	addText: {
		color: 'black',
	},
	bio: {
		fontSize: 15,
		marginLeft: 15,
		marginTop: 13,
	}
});

export default ParentProfile;
