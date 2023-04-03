export type TGovernance = {
    title: string;
    key: number;
}

export type TDepartments = {
    governanceKey: number;
    departments: string[];
}

export type THeaderLink = {
    path: string;
    title: string;
}

export type TChartData = {
    letter: string;
    frequency: number;
}