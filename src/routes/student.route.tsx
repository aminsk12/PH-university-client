import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashbord from "../pages/student/StudentDashbord";

export const studentPaths = [
    {
      name: "Dashbord",
      path: "dashbord",
      element: <StudentDashbord></StudentDashbord>,
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
  