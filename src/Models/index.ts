export interface FooterInformationType {
  title?: string,
  info?: string
}

export interface SearchItemsType {
  label?: string,
  text?: string,
  options?: Array<string>
}

type CategoryType = "PERSONAL" | "TEAM" | "CLUB"

export interface CategoryItems {
  category?: CategoryType,
  text?: string
}