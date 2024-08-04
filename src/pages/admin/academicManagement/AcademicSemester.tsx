import { useGetallSemestersQuery } from "../../../redux/features/academicSemister/academicSemisterApi";

const AcademicSemester = () => {
  const { data } = useGetallSemestersQuery(undefined);
  console.log(data);

  return <div>This is Academic Semister Page</div>;
};

export default AcademicSemester;
