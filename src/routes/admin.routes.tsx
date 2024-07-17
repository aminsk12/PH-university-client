
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

 export const adminPaths2 = [
  {
    name: "Dashbord",
    path: "/admin/dashbord",
    element: <AdminDashbord></AdminDashbord>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin/>,
      },
      {
        name: "Ceeate Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty/>,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent/>,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offer Course",
        path: "/admin/offer-course",
        element: <CreateAdmin/>,
      },
      
    ],
  },
];

export const adminPaths = [
  {
    path: "dashbord",
    element: <AdminDashbord></AdminDashbord>,
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>,
  },
  {
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>,
  },
];
