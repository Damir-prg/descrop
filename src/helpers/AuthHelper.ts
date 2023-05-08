import {BaseTypes} from "../types";

export const getDepartment = (
  governance: Array<BaseTypes.TGovernance>,
  departments: Array<BaseTypes.TDepartments>,
  index: number
): Array<string> => {
  const department = departments.find(
    (el) => el.governanceKey === governance[index].key
  );

  if (department) return department.departments.map(el => el.name)
  return []
};