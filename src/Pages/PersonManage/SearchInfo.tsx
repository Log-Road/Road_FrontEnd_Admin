import styled from "styled-components"
import DropBox from "@/Components/Common/DropBox"
import Search from "@/Components/Common/Search"
import { SearchItems } from "@/Constants"
import { color, font } from "@/Styles"
import { Reset } from "@/Assets"

const SearchInfo = () => {
  return (
    <Container>
      {SearchItems.map(({ label, text, options }) => (
        <div>
          <Label>{label}</Label>
          <DropBox text={text} options={options} />
        </div>
      ))}
      <SearchItem>
        <Label>정보 검색</Label>
        <Search placeholder="학생 정보 검색하기 EX) 홍길동" />
      </SearchItem>
      <Reset size={18} color={color.gray[500]} />
    </Container>
  )
}

export default SearchInfo

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
padding: 24px 30px;
gap: 8px;
border-radius: 4px;
border: 1px solid ${color.gray[200]};
`

const SearchItem = styled.div`
  flex-grow: 1;
`

const Label = styled.p`
${font.medium12}
color: ${color.gray[500]};
`