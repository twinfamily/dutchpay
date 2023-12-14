// import { CenteredOverlayForm } from "./CenteredOverlayForm"
import { Button, Container, Form, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { groupNameState } from '../state/groupName';
import { useState } from "react";

export const CreateGroup = () => {
  const [groupName, setGroupName] = useRecoilState(groupNameState);
  const [valiGroupName, setValiGroupName] = useState(false);
  const [validated, setValidated] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValiGroupName(true);
    } else {
      event.stopPropagation();
      setValiGroupName(false);
    }

    setValidated(true);

  }

  return (
    <div>
      <h1>더치페이</h1>
      <Container>
        <Form noValidate validated={validated} onSubmit={handelSubmit}>
          <Row>
            <h2>더치 페이 할 그룹 이름 정하기</h2>
          </Row>
          <Row>
            <Form.Group controlId="validationGroupName">
              <Form.Control 
                type="text"
                required
                placeholder="더치페이 할 항목"
                onChange={(e) => setGroupName(e.target.value)}
              />
              <Form.Control.Feedback 
                type="invalid"
                data-valid={valiGroupName}
                >
                그룹 이름을 입력해주세요.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit">저장</Button>
          </Row>
        </Form>
      </Container>
      {/* <CenteredOverlayForm /> */}
    </div>
  )
}