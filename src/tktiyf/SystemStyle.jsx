import styled from "styled-components";

export const SystemStyle = styled.div`
  & .container {
    box-sizing: border-box !important;
    padding: 0 calc(50% - 700px) !important;
    width: 100% !important;
    background: #f7fafc;
    & .card {
      padding: 0px 20px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      min-height: 90vh;
      & .system {
        max-width: 420px;
        background: #ffffff;
        border: 1px solid #f0e8e8;
        border-radius: 10px;
        & .system_on {
          padding: 20px;
          padding-bottom: 0px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-content: space-around;
          align-items: center;
          & img {
            width: 165px;
          }
        }
        & .system_to {
          padding: 20px;

          & h4 {
            margin: 0px;
          }
          & p {
            font-size: 15px;
            & span {
              font-weight: 600;
            }
          }
          & .login {
            margin-bottom: 15px;
          }
          & .parol {
            margin-bottom: 15px;
          }
          & label {
            font-weight: 600;
          }
          & input {
            width: 97%;
            font-size: var(--chakra-fontSizes-md);
            border: 2px solid #f0e8e8;
            border-radius: 7px;
            line-height: 2;
            margin: 10px 0px 2px 5px;
          }
          & .input {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            & .icon {
              position: fixed;
              margin-right: 14px;
              margin-top: 12px;
            }
          }
        }
        & button {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          background: #22c35e;
          padding: 8px 12px;
          border-radius: 5px;
          border: none;
        }
      }
    }
  }
  /* ============================== */
  & .container_to {
    margin: 50px;
    margin-top: 0px;
    & .hedr {
      display: flex;
      justify-content: space-between;

      & .image {
        & img {
          width: 50px;
          height: 49px;
          border-radius: 25px;
        }
      }
    }
  }
`;
