
import { TRout, TUserPaths } from "../types/sideber.type";

// type TRout = {
//   path: string;
//   element: ReactNode;
// };

// type TUserPaths = {
//     name: string
//   path?: string;
//   element?: ReactNode;
//   children? : TUserPaths[]
// };

export const routesGenerator = (items: TUserPaths[]) => {
  const routes = items.reduce((acc: TRout[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
