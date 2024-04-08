export interface Section {
    en: string,
    es: string,
    index: number
};

export interface Languages {
    en: string,
    es: string
};

export const emptyLanguages : Languages = {
    en: "",
    es: ""
};


export interface PersonalInfo {
    name: string, 
    lastName: string,
    email: string,
    phone: number,
    other: string,
}

export const emptyPersonalInfo = {
    name: "",
    lastName: "",
    email: "",
    phone: 0, 
    other: ""
}

export interface FormContent {
    guests: number,
    date: string,
    host: PersonalInfo, 
    type?: ["Propuesta integral", "Alquiler espacio", "Alquiler espacio y ambientación"]
    coments: string
}

export const emptyFormContent = {
    guests: 0,
    date: "",
    host: emptyPersonalInfo,
    type: "Alquiler espacio",
    comments: ""
}

export interface Picture {
    description: string,
    index: number,
    loading: "lazy" | "eager" | undefined,
    original: string,
    originalTitle: string,
    thumbnail: string
}

export const emptyPicture: Picture = {
    description: "",
    index: 0,
    loading: "eager",
    original: "",
    originalTitle: "",
    thumbnail: ""
}

