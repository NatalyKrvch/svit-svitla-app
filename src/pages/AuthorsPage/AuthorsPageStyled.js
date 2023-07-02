import styled from "styled-components";

export const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 86px 194px 48px;
    padding: 16px 16px 32px;
`
export const Item = styled.div`
    font-size: 14px;
    height: 48px;
    line-height: 21px;
`

export const BoldItem = styled(Item)`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`