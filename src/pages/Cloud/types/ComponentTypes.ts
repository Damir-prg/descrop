export type TFolder = {
  children?: React.ReactNode | Array<React.ReactNode>;
  folderLabel?: string;
};

export type TFile = {
  type: "pdf" | "word" | "img" | "other";
  label: string;
};
