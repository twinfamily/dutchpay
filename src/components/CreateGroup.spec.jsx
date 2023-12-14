import { render, screen } from '@testing-library/react';
import { CreateGroup } from './CreateGroup';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

const renderCompenent = () => {
  render(
    <RecoilRoot>
      <CreateGroup/>
    </RecoilRoot>
  )

  const input = screen.getByPlaceholderText('더치페이 할 항목')
  const saveButton = screen.getByText('저장')
  const errorMsg = screen.queryAllByText('그룹 이름을 입력해주세요.')

  return {
    input,
    saveButton,
    errorMsg
  }

}

describe('그룹페이지 생성', () => {
  test('그룹 이름 입력 컴포넌트 렌더링', ()=> {
    const {input, saveButton} = renderCompenent()

    expect(input).not.toBeNull()
    expect(saveButton).not.toBeNull()
  })

  test('그룹 이름을 입력하지 않고 저장 버튼을 클릭시, 에러 메세지를 노출함.', async () => {
    const {saveButton, errorMsg} = renderCompenent()
    await userEvent.click(saveButton)

    expect(errorMsg).toHaveAttribute('data-valid','false')
  })

  test('그룹 이름을 입력 후 , 저장 버튼을 클릭시 저장 성공', async () => {
    const {input, saveButton, errorMsg} = renderCompenent()

    await userEvent.type(input, '예시 그룹명')
    await userEvent.click(saveButton)
    expect(errorMsg).toHaveAttribute('data-valid','true')
  })
})