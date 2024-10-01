export type QueryResultFooterData = {
  footer: {
    logo: {
      url: string
    }
    columns: FooterDataColumn[]
    cta: {
      buttonText: string
      placeholderText: string
      title: string
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
