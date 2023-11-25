import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentContainer from "../../helpers/ParentContainer";
import Header from "../../helpers/Header";
import { SvgProps } from "react-native-svg";
import EnglishIcon from "../../../resources/images/english-icon.svg";
import LiteratureIcon from "../../../resources/images/literature-icon.svg";

type SubjectDetail = {
	subjectName: string;
	subjectFullyQualifiedName: string;
	subjectIcon: React.FC<SvgProps>;
};

type SubjectClassDetail = {
	class: string;
} & SubjectDetail;

const english: SubjectDetail = {
	subjectName: "English",
	subjectFullyQualifiedName: "English Language",
	subjectIcon: EnglishIcon,
};

const literature: SubjectDetail = {
	subjectName: "Literature",
	subjectFullyQualifiedName: "Literature",
	subjectIcon: LiteratureIcon,
};

const jss3English: SubjectClassDetail = {
	class: "JSS3",
	...english,
};

const sss1English: SubjectClassDetail = {
	class: "SSS1",
	...english,
};

const sss2Literature: SubjectClassDetail = {
	class: "SSS2",
	...literature,
};

const sss1Literature: SubjectClassDetail = {
	class: "SSS1",
	...literature,
};

const sss3Literature: SubjectClassDetail = {
	class: "SSS3",
	...literature,
};

export const SubjectClassDetails: SubjectClassDetail[] = [
	jss3English,
	sss1English,
	sss1Literature,
	sss2Literature,
	sss3Literature,
];

const SubjectClass = (): JSX.Element => {
	return <View></View>;
};

const SubjectClasses = (): JSX.Element => {
	return <View></View>;
};

const TeacherSubjectClass = (): JSX.Element => {
	return (
		<ParentContainer addSidePadding addTopPadding>
			<Header title="Subject Class (Jss3)" addNotification />
			<SubjectClasses />
		</ParentContainer>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default TeacherSubjectClass;
