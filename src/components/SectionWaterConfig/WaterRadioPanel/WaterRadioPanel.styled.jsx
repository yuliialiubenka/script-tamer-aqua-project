import theme from 'BasicStyle/themeJSX';
const { default: styled } = require('styled-components');

export const StyledRadioPanel = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: flex;
    column-gap: 12px;
  }

  .radio-panel-body {
    margin-bottom: 16px;

    @media only screen and (min-width: 768px) {
      min-width: 356px;
      margin: 0;
    }
    @media only screen and (min-width: 1440px) {
      min-width: 391px;
    }

    .radio-panel-title {
      margin-bottom: 11px;

      color: ${theme.colors.primaryAccent};

      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 133%;

      @media only screen and (min-width: 768px) {
        margin-bottom: 19px;
      }
    }

    .radio-panel-line {
      display: flex;
      justify-content: space-between;

      position: relative;

      width: 256px;
      height: 8px;
      margin: 0 auto 16px;

      transition: all 0.7ms;

      background-color: ${theme.colors.secondaryLightBlue};
      border-radius: 10px;

      @media only screen and (min-width: 768px) {
        width: 325px;
      }
      @media only screen and (min-width: 1440px) {
        width: 360px;
      }

      &::before {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        position: absolute;
        top: -50%;
		  transition: all 0.7ms;
        left: calc(${({ $parsent }) => $parsent}% - (7px));

        z-index: 2;

        border-radius: 50%;
        border: 1px solid ${theme.colors.primaryAccent};
        background-color: ${theme.colors.primaryLight};
      }

      &::after {
        content: '';
        display: block;

        width: calc(${({ $parsent }) => $parsent}%);

        height: 8px;
        position: absolute;
        top: 0;
        left: 0;
		  transition: all 0.7ms;
        border-radius: 10px;
        background-color: ${theme.colors.secondaryBlue};
        background-color: ${({ $bgColor }) => $bgColor};
      }

      .line-start,
      .line-center,
      .line-end {
        width: 1px;
        height: 8px;

        position: absolute;
        top: 15px;

        background-color: ${theme.colors.secondaryLightBlue};
      }

      .line-start {
        left: 0px;
      }
      .line-center {
        right: 0px;
      }
      .line-end {
        left: 50%;
        transform: translate(-50%);
      }
    }

    .radio-panel-wrapper-parsent {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;

      .radio-panel-parsent {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${theme.colors.primaryAccent};
        font-size: 16px;
        font-weight: 500;
        line-height: 125%;
      }

      .radio-panel-parsent:last-child,
      .radio-panel-parsent:first-child {
        color: ${theme.colors.primaryAccent};
        font-size: 12px;
        font-weight: 400;
        line-height: 133.3%;
      }

      .start {
        min-width: 22px;
      }
      .center {
        min-width: 50px;
      }
      .end {
        min-width: 30px;
      }
    }
  }

  .radio-panel-btn {
    display: flex;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100%;

    border-radius: 10px;
    background-color: ${theme.colors.primaryAccent};
    color: ${theme.colors.primaryLight};
    box-shadow: 0px 4px 8px 0px #407bff56;

    font-size: 16px;
    font-weight: 500;
    line-height: 125%;

    .icon-btn {
      stroke-width: 1px;
      width: 24px;
      height: 24px;
    }

    @media only screen and (min-width: 768px) {
      padding: 10px 12px;
      align-self: center;
    }
    @media only screen and (min-width: 1440px) {
      min-width: 178px;
    }
  }
`;
