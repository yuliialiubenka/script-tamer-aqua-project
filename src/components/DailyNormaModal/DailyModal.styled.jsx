import styled from 'styled-components';

export const DailyNormWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 26px;
  text-align: left;
  margin-bottom: 24px;
`;

export const GenderWrap = styled.div`
  gap: 16px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const Gender = styled.p`
  font-size: 16px;
  line-height: 1.25;

  color: #2f2f2f;
`;

export const BlueText = styled.span`
  font-size: 18px;
  line-height: 1.33;

  color: #407bff;
`;

export const BoxTextNote = styled.div`
  max-width: 256px;
  padding: 10px;

  border-radius: 10px;
  border: 1px solid #d7e3ff;

  margin-bottom: 24px;

  color: #8f8f8f;

  @media screen and (min-width: 768px) {
    min-width: 656px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 544px;
  }
`;

export const NoteText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px; //1.33
  height: auto;
`;

export const CalcBox = styled.div`
  position: relative;
`;

export const FormName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  margin-bottom: 16px;
`;

export const ChooseGender = styled.div`
  display: flex;
  gap: 24px;

  margin-bottom: 16px;
`;

export const LabelGender = styled.label`
  display: flex;
  align-items: center;
`;

export const FormRadioInput = styled.input`
  opacity: 0;
  position: absolute;

  + span {
    display: inline-block;
    padding-left: 24px;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;

      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;

      border-radius: 50%;
      border: 1px solid #407bff;
      background-color: white;
    }

    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;

      border-radius: 50%;
      background: #407bff;

      top: 50%;
      left: 3px;
      transform: translate(0, -50%);
      opacity: 0;
    }
  }

  &:checked + span:after {
    opacity: 1;
  }
`;

export const BoxForm = styled.div`
  margin: 0 auto;
`;

export const QuestionLabel = styled.label`
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const QuestionText = styled.p`
  font-size: 16px;
  line-height: 1.25;
`;

export const Input = styled.input`
  min-width: 256px;
  padding: 12px 10px;
  margin-bottom: 16px;

  border-radius: 6px;
  border: 1px solid #d7e3ff;

  color: #407bff;
  font-size: 16px;

  line-height: 1.25;
`;

export const FormResult = styled.div`
  max-width: 256px;
  display: flex;
  align-items: center;

  gap: 6px;
  margin-bottom: 26px;

  @media screen and (min-width: 768px) {
    max-width: 656px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 544px;
  }
`;

export const ResultText = styled.p`
  max-width: 190px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

export const ResultValue = styled.p`
  color: #407bff;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
`;

export const HowMuchYouWant = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px 30px;

  min-width: 256px;
  height: 36px;

  border: none;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    min-width: 160px;
    height: 44px;
    padding: 10px 30px;
    margin-right: 0;
  }
`;
