import {ConstsTypes} from "../types";


export const governance: ConstsTypes.TGovernance[] = [
    {title:"gover1", key: 1},
    {title: "gover2", key: 2},
    {title: "gover3", key:3},
    {title: "gover4", key: 4},
    {title: "gover5", key: 5},
    {title: "gover6", key: 6},
    {title: "gover7", key: 7}
]

export const departments: ConstsTypes.TDepartments[] = [
    {governanceKey: 1, departments: [
            "dep11"
        ]},
    {governanceKey: 2, departments: [
            "dep21"
        ]},
    {governanceKey: 3, departments: [
            "dep31",
            "dep32",
            "dep33"

        ]},
    {governanceKey: 4, departments: []},
    {governanceKey: 5, departments: [
            "dep51",
            "dep52"
        ]},
    {governanceKey: 6, departments: [
            "dep61",
            "dep62",
            "dep63",
            "dep64",
            "dep65",
            "dep66",
            "dep67",
        ]},
    {governanceKey: 7, departments: [
            "dep61",
            "dep62",
            "dep63",
            "dep64",
            "dep65",
            "dep66",
            "dep67",
        ]}
]