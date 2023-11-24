import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ParentContainer from "../../helpers/ParentContainer";
import { DataTable } from 'react-native-paper';

const ParentChildPerformance = (): JSX.Element => {
	return (
		<ParentContainer containerStyle={styles.container}>
			<Text>ParentChildPerformance</Text>
			<View style={styles.introMain}>
				<View style={styles.intro}>
					<FontAwesomeIcon icon={faArrowLeft} size={19} />
					<Text style={styles.introText}>Academic Performance</Text>
				</View>
				<View style={styles.introMainContainer}>
					<View style={styles.introContainer}>
						<Text style={styles.introTextOne}>Child's Name - </Text>
						<Text style={styles.introTextTwo}>Jude Vale</Text>
					</View>
					<View style={styles.introContainer}>
						<Text style={styles.introTextOne}>Class - </Text>
						<Text style={styles.introTextTwo}>Jss 3</Text>
					</View>
					<View style={styles.introContainer}>
						<Text style={styles.introTextOne}>Session - </Text>
						<Text style={styles.introTextTwo}>2023/2024</Text>
					</View>
				</View>
			</View>
			<Text style={styles.semester}>Semester</Text>
			<View style={styles.semesterContainer}>
				<Text style={styles.semesterText}>2023/2024,Current semester</Text>
				<FontAwesomeIcon icon={faArrowLeft} size={19} />
			</View>
			<View style={styles.dataContainer}>
				<DataTable>
					<DataTable.Header style={styles.dataHeader}>
						<DataTable.Title style={styles.dataHeaderTitle}>
							<Text style={styles.dataHeaderText}>Subjects/Course</Text>
						</DataTable.Title>
						<DataTable.Title style={styles.dataHeaderTitle}>
							<Text style={styles.dataHeaderText}>Scores / 100</Text>
						</DataTable.Title>
						<DataTable.Title style={styles.dataHeaderTitle} numeric>
							<Text style={styles.dataHeaderText}>Grades</Text>
						</DataTable.Title>
					</DataTable.Header>

					<DataTable.Row style={styles.dataRow}>
						<DataTable.Cell style={styles.dataCell}>Mathematics</DataTable.Cell>
						<DataTable.Cell style={styles.dataCell}>65/100</DataTable.Cell>
						<DataTable.Cell numeric style={[styles.dataCell]}>
							<View style={{ padding: 0, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<Text style={{ width: 50, borderRightWidth: 1, height: 45, textAlign: 'center', textAlignVertical: 'center' }}>B</Text>
								<View style={{ width: 50, alignItems: 'center' }}>
									<View style={{ backgroundColor: '#FDFE06', borderRadius: 50, height: '60%', width: '60%' }}></View>
								</View>
							</View>
						</DataTable.Cell>
					</DataTable.Row>

					<DataTable.Row style={styles.dataRow}>
						<DataTable.Cell style={styles.dataCell}>English</DataTable.Cell>
						<DataTable.Cell style={styles.dataCell}>75/100</DataTable.Cell>
						<DataTable.Cell numeric style={[styles.dataCell]}>
							<View style={{ padding: 0, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<Text style={{ width: 50, borderRightWidth: 1, height: 45, textAlign: 'center', textAlignVertical: 'center' }}>A</Text>
								<View style={{ width: 50, alignItems: 'center' }}>
									<View style={{ backgroundColor: 'green', borderRadius: 50, height: '60%', width: '60%' }}></View>
								</View>
							</View>
						</DataTable.Cell>
					</DataTable.Row>

					<DataTable.Row style={styles.dataRow}>
						<DataTable.Cell style={styles.dataCell}>Social studies</DataTable.Cell>
						<DataTable.Cell style={styles.dataCell}>60/100</DataTable.Cell>
						<DataTable.Cell numeric style={[styles.dataCell]}>
							<View style={{ padding: 0, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<Text style={{ width: 50, borderRightWidth: 1, height: 45, textAlign: 'center', textAlignVertical: 'center' }}>C</Text>
								<View style={{ width: 50, alignItems: 'center' }}>
									<View style={{ backgroundColor: 'blue', borderRadius: 50, height: '60%', width: '60%' }}></View>
								</View>
							</View>
						</DataTable.Cell>
					</DataTable.Row>

					<DataTable.Row style={styles.dataRow}>
						<DataTable.Cell style={styles.dataCell}>Fine Arts</DataTable.Cell>
						<DataTable.Cell style={styles.dataCell}>55/100</DataTable.Cell>
						<DataTable.Cell numeric style={[styles.dataCell]}>
							<View style={{ padding: 0, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<Text style={{ width: 50, borderRightWidth: 1, height: 45, textAlign: 'center', textAlignVertical: 'center' }}>D</Text>
								<View style={{ width: 50, alignItems: 'center' }}>
									<View style={{ backgroundColor: 'black', borderRadius: 50, height: '60%', width: '60%' }}></View>
								</View>
							</View>
						</DataTable.Cell>
					</DataTable.Row>

					<DataTable.Row style={styles.dataRow}>
						<DataTable.Cell style={styles.dataCell}>Sciences</DataTable.Cell>
						<DataTable.Cell style={styles.dataCell}>54/100</DataTable.Cell>
						<DataTable.Cell numeric style={[styles.dataCell]}>
							<View style={{ padding: 0, height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
								<Text style={{ width: 50, borderRightWidth: 1, height: 45, textAlign: 'center', textAlignVertical: 'center' }}>D</Text>
								<View style={{ width: 50, alignItems: 'center' }}>
									<View style={{ backgroundColor: 'black', borderRadius: 50, height: '60%', width: '60%' }}></View>
								</View>
							</View>
						</DataTable.Cell>
					</DataTable.Row>

				</DataTable>
			</View>
			<View style={styles.footer}>

			</View>
		</ParentContainer>

	);
};

const styles = StyleSheet.create({
	container: {},
	intro: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 25,
		marginLeft: 25,
		marginRight: 95,
	},
	introMain: {
		backgroundColor: '#E2DEDE',
		paddingBottom: 29,
	},
	introText: {
		color: 'black',
		fontSize: 18,
	},
	introMainContainer: {
		marginTop: 20,
		marginLeft: 25,
	},
	introContainer: {
		flexDirection: 'row',
		marginTop: 8,
	},
	introTextOne: {
		color: 'black',
		fontSize: 15,
	},
	introTextTwo: {
		fontSize: 15,
		paddingLeft: 30,
	},
	semester: {
		color: 'black',
		fontSize: 18,
		paddingTop: 15,
		paddingLeft: 15,
	},
	semesterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 20,
		borderColor: '#E2DEDE',
		borderWidth: 1,
		paddingLeft: 12,
		paddingRight: 17,
		marginLeft: 10,
		marginRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
	},
	semesterText: {
		color: 'black',
		fontSize: 15,
	},

	dataContainer: {
		marginTop: 20,
	},

	dataHeader: {},

	dataHeaderTitle: {
		borderWidth: 0.5,
		justifyContent: 'center',
		fontWeight: '500',
		fontSize: 30,
		borderColor: '#000',
	},

	dataHeaderText: {
		fontSize: 16,
		color: 'black',
	},

	dataRow: {},

	dataCell: {
		borderWidth: 0.5,
		justifyContent: 'center',
		borderColor: '#000'
	},

	dividedDataCell: {
		borderRightWidth: 1,
		width: 50,
		justifyContent: 'center',
	},

	footer: {
		backgroundColor: '#E2DEDE',
		height: 50,
		marginTop: 20,
	}
});

export default ParentChildPerformance;
