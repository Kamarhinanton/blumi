export type QueryResultFooterData = {
  footer: {
    logo: {
      url: string
    }
    columns: FooterDataColumn[]
    label: string
    cta: {
      buttonText: string
      placeholderText: string
    }
    copyright: {
      copyrightText: string
      year: string
    }
  }
}

type FooterDataColumn = {
  description: FooterDataColumnInner[]
  title: string
  id: string
}

type FooterDataColumnInner = {
  description: string
  link: string
  id: string
}
