import styled from "styled-components"
import DropBox from "@/Components/Common/DropBox"
import { SearchItems } from "@/Constants"
import { color, font } from "@/Styles"
import { Reset } from "@/Assets"
import { useState } from "react"
import { Search as SearchIcon } from "@/Assets/Search"
import { useDropdown } from "@/Hooks/useDropDown"

const Search = () => {
  const initialForm = SearchItems.map(item => item.text ?? '');
  const { form, onChange, setForm } = useDropdown(initialForm);

  const [searchKeyword, setSearchKeyword] = useState<string>('')

  return (
    <Container>
      {SearchItems.map(({ label, options }, index) => (
        <div key={index}>
          <Label>{label}</Label>
          <DropBox
            text={form[index]}
            options={options}
            onChange={(value) => onChange(index, value)}
          />
        </div>
      ))}
      <SearchItem>
        <Label>정보 검색</Label>
        <SearchContainer>
          <Input
            value={searchKeyword}
            placeholder="학생 정보 검색하기 EX) 홍길동"
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <IconWrap>
            <SearchIcon size={18} color={color.gray[500]} />
          </IconWrap>
        </SearchContainer>
      </SearchItem>
      <Reset
        size={18}
        color={color.gray[500]}
        onClick={() => setForm(initialForm)}
      />
    </Container>
  )
}

export default Search

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 24px 30px;
  border-radius: 4px;
  border: 1px solid ${color.gray[200]};
  gap: 8px;
`

const SearchItem = styled.div`
  flex-grow: 1;
`

const Label = styled.p`
  ${font.medium12}
  color: ${color.gray[500]};
`

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${color.gray[100]};
`

const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
`
