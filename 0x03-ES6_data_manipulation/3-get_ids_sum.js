function getStudentIdsSum(Students) {
	return Students.reduce((acc, curr) => acc + curr.id, 0);

}
export default getStudentIdsSum;
