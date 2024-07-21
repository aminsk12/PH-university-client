import FacultyDashbord from "../pages/faculty/FacultyDashbord";
import OfferedCourse from "../pages/faculty/OfferedCourse";



export const facultyPaths = [
    {
      name: "Dashbord",
      path: "dashbord",
      element: <FacultyDashbord></FacultyDashbord>,
    },
    {
      name: "Offer",
      children: [
        {
          name: "Create Offer",
          path: "create-offer",
          element: <OfferedCourse />,
        },
        
      ],
    },
  ];