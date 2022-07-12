import React from 'react'

export default function FormatAmount({amount}) {
    let dollarUSLocale = Intl.NumberFormat('en-US');
    const result = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(parseFloat(amount).toFixed(6));
  return (
    result.replace("€","")
  )
}
