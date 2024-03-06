import { Ctn } from './PriceStyled'

const Price = ({ price }) => {
  const productPriceThousandsSeparates = price
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <Ctn>
      {productPriceThousandsSeparates} грн
    </Ctn>
  )
}

export default Price;