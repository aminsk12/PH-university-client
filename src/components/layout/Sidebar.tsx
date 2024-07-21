import { sideberItemsGenerator } from "../../utils/sideberItemsGeneratore";
import { adminPaths } from "../../routes/admin.routes";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { facultyPaths } from "../../routes/facuity.route";
import { studentPaths } from "../../routes/student.route";
const userRole ={
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: " student"
}

const Sidebar = () => {
    const role ="admin"
    let sideberItems;

    switch(role){
       case userRole.ADMIN:
        sideberItems =  sideberItemsGenerator(adminPaths, userRole.ADMIN)
       break;
    
        case userRole.FACULTY:
            sideberItems =  sideberItemsGenerator(facultyPaths, userRole.FACULTY)
       break;
    
        case userRole.STUDENT:
            sideberItems =  sideberItemsGenerator(studentPaths, userRole.STUDENT)
       break;
    }



  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideberItems}
      />
    </Sider>
  );
};

export default Sidebar;
